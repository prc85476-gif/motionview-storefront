/**
 * NexusMart / Motion View State Store & Persistence
 * Manages Cart, Wishlist, Filter states, Coupon logic, and LocalStorage
 */

const STORAGE_KEYS = {
  CART: 'motionview_cart_v1',
  WISHLIST: 'motionview_wishlist_v1',
  COUPON: 'motionview_coupon_v1'
};

class Store {
  constructor() {
    this.cart = this.load(STORAGE_KEYS.CART, []);
    this.wishlist = this.load(STORAGE_KEYS.WISHLIST, []);
    this.appliedCoupon = this.load(STORAGE_KEYS.COUPON, null);
    
    this.filters = {
      activeTab: 'all',
      searchQuery: '',
      maxPrice: 120000,
      sortMode: 'featured',
      inStockOnly: false
    };

    this.listeners = [];
  }

  load(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn("Storage load error:", e);
      return fallback;
    }
  }

  save(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn("Storage save error:", e);
    }
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  notify(event, payload) {
    this.listeners.forEach(cb => cb(event, payload));
  }

  // --- Cart Operations ---
  addToCart(product, quantity = 1, selectedColor = null) {
    const color = selectedColor || (product.colors && product.colors[0]) || '#0284c7';
    const existingIndex = this.cart.findIndex(item => item.id === product.id && item.color === color);

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        brand: product.brand || 'Nexus',
        price: product.price,
        originalPrice: product.originalPrice,
        category: product.category,
        categoryLabel: product.categoryLabel,
        imageType: product.imageType,
        imagePath: product.imagePath,
        color: color,
        quantity: quantity,
        stockCount: product.stockCount
      });
    }

    this.save(STORAGE_KEYS.CART, this.cart);
    this.notify('CART_UPDATED', this.cart);
  }

  updateCartQuantity(id, color, quantity) {
    const index = this.cart.findIndex(item => item.id === id && item.color === color);
    if (index > -1) {
      if (quantity <= 0) {
        this.cart.splice(index, 1);
      } else {
        this.cart[index].quantity = quantity;
      }
      this.save(STORAGE_KEYS.CART, this.cart);
      this.notify('CART_UPDATED', this.cart);
    }
  }

  removeFromCart(id, color) {
    this.cart = this.cart.filter(item => !(item.id === id && item.color === color));
    this.save(STORAGE_KEYS.CART, this.cart);
    this.notify('CART_UPDATED', this.cart);
  }

  clearCart() {
    this.cart = [];
    this.save(STORAGE_KEYS.CART, this.cart);
    this.notify('CART_UPDATED', this.cart);
  }

  getCartCount() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  getCartTotals() {
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discount = 0;
    if (this.appliedCoupon === 'NEXUS20') {
      discount = subtotal * 0.20;
    } else if (this.appliedCoupon === 'MOTION10') {
      discount = subtotal * 0.10;
    }

    const shipping = subtotal === 0 ? 0 : (subtotal >= 10000 ? 0 : 120);
    const tax = Math.max(0, (subtotal - discount)) * 0.05;
    const grandTotal = Math.max(0, subtotal - discount + shipping + tax);

    return {
      subtotal: Math.round(subtotal),
      discount: Math.round(discount),
      shipping: Math.round(shipping),
      tax: Math.round(tax),
      grandTotal: Math.round(grandTotal),
      isFreeShipping: subtotal >= 10000
    };
  }

  applyCoupon(code) {
    const clean = (code || '').toUpperCase().trim();
    if (clean === 'NEXUS20') {
      this.appliedCoupon = 'NEXUS20';
      this.save(STORAGE_KEYS.COUPON, this.appliedCoupon);
      this.notify('COUPON_APPLIED', { code: clean, percent: 20 });
      return { success: true, message: 'Coupon applied: 20% Off entire order' };
    } else if (clean === 'MOTION10') {
      this.appliedCoupon = 'MOTION10';
      this.save(STORAGE_KEYS.COUPON, this.appliedCoupon);
      this.notify('COUPON_APPLIED', { code: clean, percent: 10 });
      return { success: true, message: 'Coupon applied: 10% Off order' };
    } else {
      return { success: false, message: 'Invalid promo code. Try NEXUS20' };
    }
  }

  removeCoupon() {
    this.appliedCoupon = null;
    this.save(STORAGE_KEYS.COUPON, null);
    this.notify('CART_UPDATED', this.cart);
  }

  // --- Wishlist Operations ---
  toggleWishlist(product) {
    const exists = this.wishlist.some(item => item.id === product.id);
    if (exists) {
      this.wishlist = this.wishlist.filter(item => item.id !== product.id);
    } else {
      this.wishlist.push({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        category: product.category,
        categoryLabel: product.categoryLabel,
        imageType: product.imageType,
        imagePath: product.imagePath,
        rating: product.rating,
        badge: product.badge,
        badgeColor: product.badgeColor
      });
    }
    this.save(STORAGE_KEYS.WISHLIST, this.wishlist);
    this.notify('WISHLIST_UPDATED', this.wishlist);
    return !exists;
  }

  isInWishlist(productId) {
    return this.wishlist.some(item => item.id === productId);
  }

  // --- Filter State ---
  setActiveTab(tab) {
    this.filters.activeTab = tab;
    this.notify('FILTER_CHANGED', this.filters);
  }

  setSearchQuery(query) {
    this.filters.searchQuery = query;
    this.notify('FILTER_CHANGED', this.filters);
  }

  setMaxPrice(price) {
    this.filters.maxPrice = parseFloat(price);
    this.notify('FILTER_CHANGED', this.filters);
  }

  setSortMode(mode) {
    this.filters.sortMode = mode;
    this.notify('FILTER_CHANGED', this.filters);
  }

  setInStockOnly(bool) {
    this.filters.inStockOnly = bool;
    this.notify('FILTER_CHANGED', this.filters);
  }

  getFilteredProducts(allProducts) {
    let list = [...allProducts];

    // Filter by Active Tab
    if (this.filters.activeTab && this.filters.activeTab !== 'all') {
      list = list.filter(p => p.category === this.filters.activeTab);
    }

    // Filter by Search Query
    if (this.filters.searchQuery) {
      const q = this.filters.searchQuery.toLowerCase().trim();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) ||
        (p.brand && p.brand.toLowerCase().includes(q)) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.subCategory.toLowerCase().includes(q) ||
        p.badge.toLowerCase().includes(q)
      );
    }

    // Filter by Price
    if (this.filters.maxPrice) {
      list = list.filter(p => p.price <= this.filters.maxPrice);
    }

    // Filter by In-Stock
    if (this.filters.inStockOnly) {
      list = list.filter(p => p.inStock);
    }

    // Sort Products
    if (this.filters.sortMode === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (this.filters.sortMode === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (this.filters.sortMode === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (this.filters.sortMode === 'discount') {
      list.sort((a, b) => b.discountPercent - a.discountPercent);
    } else if (this.filters.sortMode === 'popular') {
      list.sort((a, b) => b.salesCount - a.salesCount);
    }

    return list;
  }
}

// Instantiate global store
window.store = new Store();
