/**
 * Motion View Main Application Controller
 * Features SPA Path-by-Path Routing with Unique Product IDs & Dedicated Product Views
 */

document.addEventListener('DOMContentLoaded', () => {
  // Main View Containers
  const storeHomeView = document.getElementById('store-home-view');
  const productDetailView = document.getElementById('product-detail-view');
  const orderTrackPageView = document.getElementById('order-track-page-view');
  const userAuthProfileView = document.getElementById('user-auth-profile-view');

  // Element Selectors
  const productGrid = document.getElementById('product-grid');
  const productCountDisplay = document.getElementById('product-count-display');
  const sectionHeaderTitle = document.getElementById('section-header-title');

  // Search Inputs
  const searchInput = document.getElementById('search-input');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const mobileSearchInput = document.getElementById('mobile-search-input');
  const mobileSearchClearBtn = document.getElementById('mobile-search-clear-btn');
  const sortSelect = document.getElementById('sort-select');

  // Drawers & Modals
  const cartDrawerBackdrop = document.getElementById('cart-drawer-backdrop');
  const profileDrawerBackdrop = document.getElementById('profile-drawer-backdrop');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartEmptyState = document.getElementById('cart-empty-state');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartDiscountEl = document.getElementById('cart-discount');
  const cartShippingEl = document.getElementById('cart-shipping');
  const cartGrandTotalEl = document.getElementById('cart-grand-total');
  const cartBadgeCountEls = document.querySelectorAll('.cart-badge-count');
  const wishlistBadgeCountEls = document.querySelectorAll('.wishlist-badge-count');

  // Coupon
  const couponInput = document.getElementById('coupon-input');
  const btnApplyCoupon = document.getElementById('btn-apply-coupon');
  const couponMessageEl = document.getElementById('coupon-message');

  // Wishlist Drawer
  const wishlistDrawerBackdrop = document.getElementById('wishlist-drawer-backdrop');
  const wishlistItemsContainer = document.getElementById('wishlist-items-container');
  const wishlistEmptyState = document.getElementById('wishlist-empty-state');

  // Checkout Modal
  const checkoutModal = document.getElementById('checkout-modal');
  const checkoutForm = document.getElementById('checkout-form');
  const checkoutSummaryList = document.getElementById('checkout-summary-list');
  const checkoutTotalEl = document.getElementById('checkout-total-val');

  // SVG Icons Helper (Zero Emojis Policy)
  const ICONS = {
    star: `<svg class="w-3.5 h-3.5 fill-amber-400 text-amber-400 inline" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    heart: `<svg class="w-4 h-4 text-slate-400 hover:text-rose-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    heartFilled: `<svg class="w-4 h-4 text-rose-500 fill-rose-500" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    shoppingBag: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    check: `<svg class="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
    trash: `<svg class="w-4 h-4 text-rose-400 hover:text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
    arrowLeft: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
    share: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>`,
    shieldCheck: `<svg class="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    truck: `<svg class="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    refresh: `<svg class="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
    badgeCheck: `<svg class="w-5 h-5 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
  };

  function formatPrice(amount) {
    return '৳ ' + Number(amount).toLocaleString('en-US');
  }

  // =========================================================================
  // SPA PATH-BY-PATH ROUTER
  // =========================================================================
  function navigateTo(urlPath, addToHistory = true) {
    if (addToHistory && window.location.pathname !== urlPath) {
      window.history.pushState(null, '', urlPath);
    }
    handleRoute();
  }

  function handleRoute() {
    const fullPath = window.location.pathname.toLowerCase().trim();
    const cleanPath = fullPath.replace(/^\/+|\/+$/g, ''); // strip leading/trailing slashes

    // Check if route is Order Tracking page
    if (cleanPath === 'track-order.bd' || cleanPath === 'track-order' || cleanPath === 'track') {
      showOrderTrackPageView();
      updateMobileNavActive('home');
      return;
    }

    // Check if route is /message or /messages or /massase or /chat
    if (cleanPath === 'message' || cleanPath === 'massase' || cleanPath === 'messages' || cleanPath === 'chat') {
      showStoreView();
      updateMobileNavActive('message');
      openMessageDesk();
      return;
    }

    // Check if route is /cart
    if (cleanPath === 'cart') {
      showStoreView();
      updateMobileNavActive('cart');
      openCartDrawer();
      return;
    }

    // Check if route is /profile or /account
    if (cleanPath === 'profile' || cleanPath === 'account') {
      showProfilePageView();
      updateMobileNavActive('profile');
      return;
    }

    // Check if route is for a specific product
    let targetProductId = null;

    if (cleanPath.startsWith('product/')) {
      targetProductId = cleanPath.replace('product/', '');
    } else if (cleanPath.startsWith('p/')) {
      targetProductId = cleanPath.replace('p/', '');
    } else if (cleanPath.startsWith('category/')) {
      const cat = cleanPath.replace('category/', '');
      showStoreView(cat);
      updateMobileNavActive('home');
      return;
    } else if (cleanPath && cleanPath !== 'index.html' && cleanPath !== 'store') {
      // Check if direct slug matches a product (e.g. /canbaproduct156NBDHJ4)
      const directMatch = window.findProduct(cleanPath);
      if (directMatch) {
        targetProductId = directMatch.id;
      }
    }

    if (targetProductId) {
      const product = window.findProduct(targetProductId);
      if (product) {
        showProductDetailView(product);
        return;
      }
    }

    // Default: Show Storefront Home View
    showStoreView();
    updateMobileNavActive('home');
  }

  function updateMobileNavActive(activeTab) {
    document.querySelectorAll('.mobile-nav-item').forEach(el => {
      const isTarget = el.dataset.nav === activeTab;
      el.classList.toggle('text-purple-600', isTarget);
      el.classList.toggle('text-slate-500', !isTarget);
      const label = el.querySelector('span');
      if (label) {
        label.classList.toggle('font-black', isTarget);
        label.classList.toggle('text-purple-600', isTarget);
        label.classList.toggle('text-slate-600', !isTarget);
      }
    });
  }

  function openMessageDesk() {
    const chatBox = document.getElementById('live-chat-box');
    const chatInput = document.getElementById('live-chat-input');
    if (chatBox) {
      chatBox.classList.remove('hidden');
      chatBox.classList.add('flex');
      setTimeout(() => chatInput?.focus(), 150);
    }
  }

  function openCartDrawer() {
    if (cartDrawerBackdrop) {
      cartDrawerBackdrop.classList.add('open');
    }
  }

  function openProfileDrawer() {
    if (profileDrawerBackdrop) {
      updateProfileUI();
      profileDrawerBackdrop.classList.add('open');
    }
  }

  function closeProfileDrawer() {
    if (profileDrawerBackdrop) {
      profileDrawerBackdrop.classList.remove('open');
    }
  }

  function showProfilePageView() {
    closeProfileDrawer();
    if (storeHomeView) storeHomeView.classList.add('hidden');
    if (productDetailView) productDetailView.classList.add('hidden');
    if (orderTrackPageView) {
      orderTrackPageView.classList.add('hidden');
      orderTrackPageView.classList.remove('flex');
    }
    if (userAuthProfileView) {
      userAuthProfileView.classList.remove('hidden');
    }

    const mobileBottomBar = document.querySelector('.mobile-bottom-bar');
    if (mobileBottomBar) mobileBottomBar.classList.remove('hidden');

    updateProfileUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showStoreView(category = null) {
    if (storeHomeView) storeHomeView.classList.remove('hidden');
    if (productDetailView) productDetailView.classList.add('hidden');
    if (orderTrackPageView) {
      orderTrackPageView.classList.add('hidden');
      orderTrackPageView.classList.remove('flex');
    }
    if (userAuthProfileView) {
      userAuthProfileView.classList.add('hidden');
    }

    const mobileBottomBar = document.querySelector('.mobile-bottom-bar');
    if (mobileBottomBar) mobileBottomBar.classList.remove('hidden');

    if (category) {
      window.store.setActiveTab(category);
      document.querySelectorAll('.tab-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.tab === category);
      });
    }

    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showProductDetailView(product) {
    if (storeHomeView) storeHomeView.classList.add('hidden');
    if (orderTrackPageView) {
      orderTrackPageView.classList.add('hidden');
      orderTrackPageView.classList.remove('flex');
    }
    if (userAuthProfileView) {
      userAuthProfileView.classList.add('hidden');
    }

    const mobileBottomBar = document.querySelector('.mobile-bottom-bar');
    if (mobileBottomBar) mobileBottomBar.classList.add('hidden');

    if (productDetailView) {
      productDetailView.classList.remove('hidden');
      renderProductDetailPage(product);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showOrderTrackPageView() {
    if (storeHomeView) storeHomeView.classList.add('hidden');
    if (productDetailView) productDetailView.classList.add('hidden');
    if (userAuthProfileView) {
      userAuthProfileView.classList.add('hidden');
    }

    if (orderTrackPageView) {
      orderTrackPageView.classList.remove('hidden');
      orderTrackPageView.classList.add('flex');
    }

    const mobileBottomBar = document.querySelector('.mobile-bottom-bar');
    if (mobileBottomBar) mobileBottomBar.classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // =========================================================================
  // DEDICATED PRODUCT DETAILS PAGE (PDP) RENDERER
  // =========================================================================
  function renderProductDetailPage(product) {
    if (!productDetailView) return;

    const isAiProduct = product.category === 'ai-shop';
    let selectedQty = 1;
    let selectedShipping = isAiProduct ? 0 : 60; // 0 for AI digital subscriptions, 60 for physical inside Dhaka
    const inWishlist = window.store.isInWishlist(product.id);
    const savings = product.originalPrice ? (product.originalPrice - product.price) : 0;
    const productUrlPath = `/product/${product.id}`;

    // Get related products from same category (excluding current)
    const relatedProducts = window.PRODUCT_CATALOG
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4);

    // Product Image candidates (Main image + 2 extra thumbnails)
    const mainImgSrc = (product.imagePath.startsWith('/') || product.imagePath.startsWith('http')) ? product.imagePath : '/' + product.imagePath;
    
    // Choose 2 relevant secondary images from catalog/banner assets
    let secondaryImages = [];
    if (product.category === 'gadgets') {
      secondaryImages = ['/gadgate/d5d79b9e92c40d6e8eb49c750278e787.webp', '/gadgate/178711751745.webp'];
      if (product.imagePath.includes('powerbank') || product.imagePath.includes('2c3f')) {
        secondaryImages = ['/gadgate/2c3f657842d1d8057ffd8e1670eda240.webp', '/gadgate/ccaa579ea20086caf2cdec1973acca59.webp'];
      } else if (product.imagePath.includes('177926078848')) {
        secondaryImages = ['/gadgate/177315710478.webp', '/gadgate/17194681585.webp'];
      }
    } else if (product.category === 'ai-shop') {
      secondaryImages = ['/aishop/17197e294f0e7dc8b65a6bc42ab85930.jpg', '/aishop/2481b1b460c317d66432e4b7f57448b4.jpg'];
    } else {
      secondaryImages = ['/market/bybit-official-tee.png', '/market/binance-tactical-hoodie.png'];
    }
    const allGalleryImages = [mainImgSrc, ...secondaryImages.filter(img => img !== mainImgSrc)].slice(0, 3);

    // Initial reviews from localStorage
    let storedReviews = [];
    try {
      const allReviewsObj = JSON.parse(localStorage.getItem('motionview_product_reviews') || '{}');
      storedReviews = allReviewsObj[product.id] || [];
    } catch(e) {}

    // Default seed review if empty
    if (storedReviews.length === 0) {
      storedReviews = [
        {
          name: "Tanvir Hasan",
          rating: 5,
          date: "Yesterday",
          comment: "পণ্যটি হাতে পেয়েছি, প্যাকেজিং ও বিল্ড কোয়ালিটি অত্যন্ত প্রিমিয়াম। ১০০% জেনুইন।"
        },
        {
          name: "Sabbir Ahmed",
          rating: 5,
          date: "3 days ago",
          comment: "খুব দ্রুত ডেলিভারি পেয়েছি। প্রোডাক্টের পারফরম্যান্স খুবই সন্তোষজনক!"
        }
      ];
    }

    productDetailView.innerHTML = `
      <!-- Top Clean Header Navigation (No glow, no emojis) -->
      <div class="flex items-center justify-between gap-2 pb-3 sm:pb-4 border-b border-slate-200 mb-4 sm:mb-6">
        <button id="btn-back-to-store" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer">
          ${ICONS.arrowLeft}
          <span>Back to Store</span>
        </button>

        <button id="btn-copy-product-link" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer" title="Copy Product Link">
          ${ICONS.share}
          <span>Share Link</span>
        </button>
      </div>

      <!-- Main Product Showcase Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-10">
        
        <!-- Left Column: Snug Image Frame + Interactive Thumbnails + Side Zoom Portal -->
        <div class="lg:col-span-5 flex flex-col items-center">
          <div class="pdp-gallery-container w-full max-w-[380px]">
            
            <!-- Snug Main Image Frame (Exact dimension of picture, light border, zero glow) -->
            <div id="pdp-main-frame" class="pdp-main-image-frame">
              ${product.discountPercent ? `
                <span class="absolute top-2.5 left-2.5 bg-blue-600 text-white font-bold text-[10px] px-2 py-0.5 rounded-md uppercase tracking-wider z-10">-${product.discountPercent}% OFF</span>
              ` : ''}

              <!-- The Main Interactive Image -->
              <img id="pdp-active-image" src="${allGalleryImages[0]}" alt="${product.name}" />

              <!-- Zoom Lens Indicator -->
              <div id="pdp-zoom-lens" class="pdp-zoom-lens"></div>
            </div>

            <!-- Floating Zoom Window on Right Side (Outside overflow:hidden frame) -->
            <div id="pdp-zoom-window" class="pdp-zoom-window">
              <img id="pdp-zoom-target-img" src="${allGalleryImages[0]}" alt="${product.name}" />
            </div>

            <!-- 2-3 Thumbnails Strip under Main Image -->
            <div class="pdp-thumbnails-strip">
              ${allGalleryImages.map((imgSrc, idx) => `
                <div class="pdp-thumb-btn ${idx === 0 ? 'active' : ''}" data-src="${imgSrc}">
                  <img src="${imgSrc}" alt="Thumbnail ${idx + 1}" />
                </div>
              `).join('')}
            </div>

            <div class="text-[11px] text-slate-500 font-medium mt-1 flex items-center gap-1">
              <svg class="w-3.5 h-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              <span>মাউস নিলে ডান পাশে বড় করে জুম হবে</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Product Info, Price & Actions -->
        <div class="lg:col-span-7 flex flex-col justify-between">
          <div>
            <!-- Category & Stock Status Badges -->
            <div class="flex items-center flex-wrap gap-2 mb-2.5">
              <span class="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold border border-slate-300">
                ${product.categoryLabel} &bull; ${product.subCategory}
              </span>
              <span class="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-300 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>
                <span>In Stock (${product.stockCount} Ready)</span>
              </span>
            </div>

            <!-- Title -->
            <h1 class="font-heading font-black text-xl sm:text-2xl lg:text-3xl text-slate-900 leading-tight mb-2">
              ${product.name}
            </h1>

            <!-- Ratings Bar -->
            <div class="flex items-center gap-2 mb-4">
              <div class="flex items-center text-amber-500 text-xs">
                ${ICONS.star}${ICONS.star}${ICONS.star}${ICONS.star}${ICONS.star}
              </div>
              <span class="text-xs font-bold text-slate-800">${product.rating || '5.0'}</span>
              <span class="text-slate-300">|</span>
              <span class="text-xs text-slate-600 font-medium">(${product.reviewCount || '500+'} customer reviews)</span>
            </div>

            <!-- Price Card (Clean White, No glow, Subtle border) -->
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 mb-5">
              <div class="flex items-baseline flex-wrap gap-2.5 mb-1.5">
                <span class="text-2xl sm:text-3xl font-black text-blue-700 tracking-tight" id="pdp-main-price">${formatPrice(product.price)}</span>
                ${product.originalPrice ? `
                  <span class="text-sm text-slate-400 line-through">${formatPrice(product.originalPrice)}</span>
                  <span class="px-2 py-0.5 text-xs font-bold rounded-md bg-rose-100 text-rose-800 border border-rose-200">-${product.discountPercent}% OFF</span>
                ` : ''}
              </div>
              ${savings > 0 ? `
                <div class="text-xs font-bold text-emerald-700 flex items-center gap-1 mb-1.5">
                  ${ICONS.check}
                  <span>You save ${formatPrice(savings)} instantly on this order.</span>
                </div>
              ` : ''}
              <div class="text-[11px] text-slate-600 flex items-center gap-1.5 pt-2 border-t border-slate-200">
                <svg class="w-3.5 h-3.5 text-blue-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                <span>${isAiProduct ? 'Instant Email Access within 5-10 minutes with Official Guarantee' : 'Fast Home Delivery available all over Bangladesh with Cash on Delivery'}</span>
              </div>
            </div>

            <!-- Short Description -->
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
              ${product.shortDescription || product.fullDescription}
            </p>

            <!-- Quantity & Actions Box -->
            <div class="space-y-4 mb-6">
              <!-- Top Row: Quantity + Wishlist -->
              <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-bold text-slate-700">Quantity:</span>
                  <div class="flex items-center rounded-lg border border-slate-300 bg-white">
                    <button id="pdp-qty-minus" class="px-3.5 py-1.5 hover:bg-slate-100 text-slate-700 font-bold text-sm transition-colors rounded-l-lg cursor-pointer">-</button>
                    <span id="pdp-qty-val" class="px-4 text-xs font-black text-slate-900">1</span>
                    <button id="pdp-qty-plus" class="px-3.5 py-1.5 hover:bg-slate-100 text-slate-700 font-bold text-sm transition-colors rounded-r-lg cursor-pointer">+</button>
                  </div>
                </div>

                <button id="pdp-btn-wishlist" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors cursor-pointer" title="Save to Wishlist">
                  ${inWishlist ? ICONS.heartFilled : ICONS.heart}
                  <span class="hidden sm:inline">${inWishlist ? 'Saved' : 'Wishlist'}</span>
                </button>
              </div>

              <!-- Main Dual CTA Buttons (Clean Solid Colors, Zero Glow) -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button id="pdp-btn-add-bag" class="w-full py-3 px-4 rounded-xl bg-white border-2 border-blue-600 text-blue-700 hover:bg-blue-50 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer">
                  ${ICONS.shoppingBag}
                  <span>Add to Cart (ব্যাগে রাখুন)</span>
                </button>

                <button id="pdp-btn-order-trigger" class="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  <span>${isAiProduct ? 'সাবস্ক্রিপশন নিন (Order Now)' : 'অর্ডার করুন (Cash on Delivery)'}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Trust & Guarantee Badges (Clean Border, No Glow) -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-slate-200 text-[11px]">
            <div class="pdp-trust-tile">
              ${ICONS.shieldCheck}
              <div>
                <strong class="text-slate-800 block leading-tight text-[11px]">100% Authentic</strong>
                <span class="text-slate-500 text-[10px]">Verified Genuine</span>
              </div>
            </div>

            <div class="pdp-trust-tile">
              ${ICONS.badgeCheck}
              <div>
                <strong class="text-slate-800 block leading-tight text-[11px]">${product.warranty || 'Official'}</strong>
                <span class="text-slate-500 text-[10px]">Full Warranty</span>
              </div>
            </div>

            <div class="pdp-trust-tile">
              ${ICONS.truck}
              <div>
                <strong class="text-slate-800 block leading-tight text-[11px]">${isAiProduct ? 'Instant Access' : 'Fast Delivery'}</strong>
                <span class="text-slate-500 text-[10px]">${isAiProduct ? '5-10 Minutes' : '24-48 Hours'}</span>
              </div>
            </div>

            <div class="pdp-trust-tile">
              ${ICONS.refresh}
              <div>
                <strong class="text-slate-800 block leading-tight text-[11px]">7 Days Return</strong>
                <span class="text-slate-500 text-[10px]">Hassle Free</span>
              </div>
            </div>
          </div>

        </div>
      </div>


      <!-- =====================================================================
           CUSTOMER RATINGS & REVIEWS / COMMENTS SECTION (New Interactive Component)
           ===================================================================== -->
      <div class="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 mb-8">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-slate-200 gap-4 mb-6">
          <div>
            <h3 class="font-heading font-black text-xl text-slate-900 mb-1">Customer Reviews & Ratings</h3>
            <p class="text-xs text-slate-500">গ্রাহকদের বাস্তব রিভিউ ও মতামত দেখুন</p>
          </div>
          
          <div class="flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl">
            <span class="font-black text-2xl text-slate-900 leading-none">4.9</span>
            <div class="text-left">
              <div class="flex items-center text-amber-500 text-xs">
                ${ICONS.star}${ICONS.star}${ICONS.star}${ICONS.star}${ICONS.star}
              </div>
              <span class="text-[10px] text-slate-500 font-semibold">${storedReviews.length} Verified Reviews</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <!-- Left: Reviews List -->
          <div class="lg:col-span-7 space-y-4" id="pdp-reviews-list-container">
            ${storedReviews.map(rev => `
              <div class="p-4 rounded-xl bg-slate-50/70 border border-slate-200 space-y-2">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                      ${rev.name.charAt(0).toUpperCase()}
                    </div>
                    <span class="font-bold text-xs text-slate-800">${rev.name}</span>
                    <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">Verified Buyer</span>
                  </div>
                  <span class="text-[11px] text-slate-400 font-medium">${rev.date}</span>
                </div>
                <div class="flex items-center text-amber-500 text-xs">
                  ${Array(rev.rating).fill(ICONS.star).join('')}
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">${rev.comment}</p>
              </div>
            `).join('')}
          </div>

          <!-- Right: Write a Review / Comment Form -->
          <div class="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-5">
            <h4 class="font-bold text-sm text-slate-900 mb-2">Write a Review (আপনার মতামত দিন)</h4>
            <p class="text-[11px] text-slate-500 mb-4">পণ্যটি সম্পর্কে আপনার অভিজ্ঞতা ও রেটিং শেয়ার করুন</p>

            <form id="pdp-review-form" class="space-y-3.5">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Your Rating (রেটিং নির্বাচন করুন)</label>
                <div class="star-rating-select" id="pdp-star-input-group">
                  <svg data-score="1" class="filled" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg data-score="2" class="filled" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg data-score="3" class="filled" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg data-score="4" class="filled" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg data-score="5" class="filled" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Your Name (আপনার নাম)</label>
                <input type="text" id="review-user-name" required placeholder="আপনার নাম লিখুন" class="w-full py-2 px-3 rounded-lg bg-white border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-blue-600" />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Your Comment / Review (আপনার মন্তব্য)</label>
                <textarea id="review-user-comment" rows="3" required placeholder="প্রোডাক্টটি কেমন লেগেছে বিস্তারিত লিখুন..." class="w-full py-2 px-3 rounded-lg bg-white border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-blue-600 resize-none"></textarea>
              </div>

              <button type="submit" class="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors cursor-pointer">
                Submit Review (রিভিউ দিন)
              </button>
            </form>
          </div>

        </div>
      </div>


      <!-- =====================================================================
           PRODUCT INFORMATION TABS & SPECIFICATIONS
           ===================================================================== -->
      <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-8">
        <!-- Tab Navigation Bar (No emojis) -->
        <div class="flex items-center border-b border-slate-200 bg-slate-50/70 overflow-x-auto no-scrollbar">
          <button class="pdp-tab-nav-btn active cursor-pointer" data-tab="specs">
            <span>Technical Specs</span>
          </button>
          <button class="pdp-tab-nav-btn cursor-pointer" data-tab="desc">
            <span>About this Item</span>
          </button>
          <button class="pdp-tab-nav-btn cursor-pointer" data-tab="warranty">
            <span>Warranty & Delivery</span>
          </button>
        </div>

        <!-- Tab Content Containers -->
        <div class="p-4 sm:p-6">
          <!-- 1. Specs Tab -->
          <div id="pdp-tab-content-specs" class="space-y-4">
            <table class="pdp-specs-table">
              <tbody>
                <tr>
                  <td>Brand</td>
                  <td>${product.brand || 'JP Gadget Bazar'}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>${product.categoryLabel} &bull; ${product.subCategory}</td>
                </tr>
                <tr>
                  <td>Warranty</td>
                  <td>${product.warranty || '12 Months Official Brand Warranty'}</td>
                </tr>
                <tr>
                  <td>Availability</td>
                  <td>${product.stockCount} Units Ready for Instant Dispatch</td>
                </tr>
                ${product.specs ? product.specs.map(s => `
                  <tr>
                    <td>${s.key}</td>
                    <td>${s.value}</td>
                  </tr>
                `).join('') : ''}
              </tbody>
            </table>
          </div>

          <!-- 2. Description Tab -->
          <div id="pdp-tab-content-desc" class="hidden">
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
              ${product.fullDescription}
            </p>
          </div>

          <!-- 3. Warranty Tab -->
          <div id="pdp-tab-content-warranty" class="hidden space-y-3 text-xs text-slate-600">
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <strong class="text-slate-900 block font-bold mb-1">অফিসিয়াল পলিসি:</strong>
              <p>${isAiProduct ? 'এই সাবস্ক্রিপশনটিতে ফুল মেয়াদ ভ্যালিডিটি ও সাপোর্ট সুবিধা রয়েছে। কোনো সমস্যায় আমাদের হেল্পলাইনে মেসেজ দিলে দ্রুত সমাধান দেওয়া হয়।' : 'এই পণ্যটিতে অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি সুবিধা রয়েছে। যেকোনো কারিগরি ত্রুটিতে অফিসিয়াল সার্ভিস পয়েন্ট থেকে সার্ভিসিং পাবেন।'}</p>
            </div>
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <strong class="text-slate-800 block font-bold mb-1">৭ দিনের সহজ রিপ্লেসমেন্ট:</strong>
              <p>অর্ডারের পর কোনো সমস্যা বা ত্রুটি পরিলক্ষিত হলে ৭ দিনের মধ্যে তাৎক্ষণিক সমাধান বা রিপ্লেসমেন্ট সুবিধা পাবেন।</p>
            </div>
          </div>
        </div>
      </div>


      <!-- =====================================================================
           STICKY MOBILE ORDER FOOTER BAR
           ===================================================================== -->
      <div class="pdp-mobile-sticky-bar">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 p-0.5 flex-shrink-0 flex items-center justify-center">
            ${window.renderProductVisual(product, "w-full h-full object-contain")}
          </div>
          <div class="min-w-0">
            <div class="text-[11px] font-bold text-slate-800 truncate">${product.name}</div>
            <div class="text-xs font-black text-purple-700" id="pdp-sticky-price-display">${formatPrice(product.price)}</div>
          </div>
        </div>
        <button id="pdp-sticky-buy-btn" class="px-5 py-2.5 rounded-xl bg-purple-600 text-white text-xs font-bold whitespace-nowrap shadow-md flex items-center gap-1.5 flex-shrink-0 cursor-pointer">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          <span>${isAiProduct ? '⚡ সাবস্ক্রিপশন নিন' : '⚡ অর্ডার করুন'}</span>
        </button>
      </div>


      <!-- =====================================================================
           ON-DEMAND DEDICATED ORDER MODAL (POPUP ON CLICK)
           ===================================================================== -->
      <div id="pdp-order-modal" class="modal-wrapper fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
        <div class="modal-content-box w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden p-5 sm:p-7 max-h-[90vh] overflow-y-auto">
          
          <div class="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                ${isAiProduct ?
        `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>` :
        `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`
      }
              </div>
              <div>
                <h3 class="font-heading font-black text-base sm:text-lg text-slate-900 leading-tight">
                  ${isAiProduct ? 'ইনস্ট্যান্ট AI সাবস্ক্রিপশন অর্ডার' : 'ক্যাশ অন ডেলিভারিতে অর্ডার করুন'}
                </h3>
                <p class="text-[11px] text-slate-500">
                  ${isAiProduct ? 'অর্ডার পরবর্তী ৫-১০ মিনিটে আপনার ইমেইলে এক্সেস সক্রিয় হবে' : 'পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন'}
                </p>
              </div>
            </div>
            <button type="button" id="btn-close-pdp-modal" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 text-2xl font-bold leading-none cursor-pointer">&times;</button>
          </div>

          <!-- Product Mini Row in Modal -->
          <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 mb-4">
            <div class="w-12 h-12 rounded-lg bg-white border border-slate-200 p-1 flex items-center justify-center flex-shrink-0">
              ${window.renderProductVisual(product, "w-full h-full object-contain")}
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="text-xs font-bold text-slate-800 truncate">${product.name}</h4>
              <div class="flex items-center justify-between text-xs mt-0.5">
                <span class="text-purple-700 font-black">${formatPrice(product.price)}</span>
                <span class="text-slate-500 font-semibold" id="modal-item-qty-badge">Qty: ${selectedQty}</span>
              </div>
            </div>
          </div>

          <!-- FORM -->
          <form id="pdp-modal-order-form" action="javascript:void(0);" onsubmit="return false;" class="space-y-3.5">
            
            ${isAiProduct ? `
              <!-- AI PRODUCT FIELDS ONLY (Name, WhatsApp/Phone, Subscription Target Email) -->
              <div class="space-y-3">
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">আপনার নাম (Full Name) <span class="text-rose-500">*</span></label>
                  <input type="text" id="pdp-order-name" required placeholder="আপনার পূর্ণ নাম লিখুন" class="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-purple-600 transition-colors">
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">হোয়াটসঅ্যাপ / যোগাযোগ নাম্বার (WhatsApp or Phone) <span class="text-rose-500">*</span></label>
                  <input type="tel" id="pdp-order-phone" required placeholder="017XXXXXXXX" class="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-purple-600 transition-colors">
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">যে ইমেইলে সাবস্ক্রিপশন নিবেন (Subscription Email) <span class="text-rose-500">*</span></label>
                  <input type="email" id="pdp-order-sub-email" required placeholder="youraccount@gmail.com" class="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-purple-300 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-purple-600 transition-colors">
                  <span class="text-[10.5px] text-purple-700 font-medium block mt-1">✓ এই ইমেইলে আপনার অফিশিয়াল সাবস্ক্রিপশন এক্টিভেশন লিংক/ইনভাইট পাঠানো হবে।</span>
                </div>
              </div>
            ` : `
              <!-- PHYSICAL GADGET PRODUCT FIELDS (Name, Phone, Full Address, Area Selector) -->
              <div class="space-y-3">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">আপনার নাম (Full Name) <span class="text-rose-500">*</span></label>
                    <input type="text" id="pdp-order-name" required placeholder="আপনার পূর্ণ নাম" class="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-purple-600 transition-colors">
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">মোবাইল নাম্বার (Phone Number) <span class="text-rose-500">*</span></label>
                    <input type="tel" id="pdp-order-phone" required placeholder="017XXXXXXXX" class="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-purple-600 transition-colors">
                  </div>

                  <div class="sm:col-span-2">
                    <label class="block text-xs font-bold text-slate-700 mb-1">সম্পূর্ণ ঠিকানা (Full Delivery Address) <span class="text-rose-500">*</span></label>
                    <input type="text" id="pdp-order-address" required placeholder="বাসা নং, রোড নং, এলাকা, থানা ও জেলা" class="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-purple-600 transition-colors">
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1.5">ডেলিভারি এলাকা নির্বাচন করুন:</label>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div class="delivery-option-btn selected" id="opt-dhaka-in" data-shipping="60">
                      <div class="flex items-center gap-2">
                        <input type="radio" name="pdp_shipping" id="radio-dhaka-in" value="60" checked class="accent-purple-600">
                        <span>ঢাকার ভিতরে</span>
                      </div>
                      <span class="font-bold">৳ ৬০</span>
                    </div>

                    <div class="delivery-option-btn" id="opt-dhaka-out" data-shipping="120">
                      <div class="flex items-center gap-2">
                        <input type="radio" name="pdp_shipping" id="radio-dhaka-out" value="120" class="accent-purple-600">
                        <span>ঢাকার বাইরে</span>
                      </div>
                      <span class="font-bold">৳ ১২০</span>
                    </div>
                  </div>
                </div>
              </div>
            `}

            <!-- Billing Calculation Summary Box -->
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-1.5 text-xs">
              <div class="flex justify-between text-slate-600">
                <span class="truncate max-w-[200px]">পণ্য: <b class="text-slate-800">${product.name}</b> (<span id="modal-summary-qty">${selectedQty}</span>x)</span>
                <span id="modal-summary-prod-total" class="font-bold text-slate-800">${formatPrice(product.price * selectedQty)}</span>
              </div>
              
              <div class="flex justify-between text-slate-600">
                <span>ডেলিভারি চার্জ:</span>
                <span id="modal-summary-shipping" class="font-bold ${isAiProduct ? 'text-emerald-600' : 'text-slate-800'}">
                  ${isAiProduct ? 'ফ্রি ইমেইল ডেলিভারি (৳ ০)' : '৳ ৬০'}
                </span>
              </div>

              <div class="flex justify-between text-sm font-black text-slate-900 pt-2 border-t border-slate-200">
                <span>সর্বমোট প্রদেয় বিল:</span>
                <span id="modal-summary-grand-total" class="text-purple-700 text-base sm:text-lg">
                  ${formatPrice(isAiProduct ? (product.price * selectedQty) : (product.price * selectedQty + 60))}
                </span>
              </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" id="pdp-btn-modal-submit" class="w-full py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-purple-600/25 transition-all cursor-pointer">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${isAiProduct ? '⚡ সাবস্ক্রিপশন কনফার্ম করুন (Confirm)' : 'অর্ডার কনফার্ম করুন (Confirm Order)'}</span>
            </button>

            <p class="text-[11px] text-center text-slate-500 flex items-center justify-center gap-2">
              <span>🔒 ১০০% সিকিউর ও নিরাপদ সার্ভিস</span>
              <span>&bull;</span>
              <span>${isAiProduct ? '৫-১০ মিনিটে অ্যাক্টিভেশন' : 'ক্যাশ অন ডেলিভারি'}</span>
            </p>
          </form>

          <!-- Order Success View in Modal -->
          <div id="pdp-modal-success-view" class="hidden text-center py-5">
            <div class="w-14 h-14 mx-auto mb-3 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 class="font-heading font-black text-xl text-slate-900 mb-1">🎉 আপনার অর্ডারটি সফল হয়েছে!</h3>
            <p class="text-xs text-slate-600 max-w-sm mx-auto mb-4">
              ${isAiProduct ?
        'আমাদের প্রতিনিধি শীঘ্রই আপনার দেওয়া ইমেইলে সাবস্ক্রিপশন সক্রিয় করবেন ও হোয়াটসঅ্যাপে কনফার্ম করবেন।' :
        'আমাদের কাস্টমার কেয়ার প্রতিনিধি আপনার দেওয়া মোবাইল নাম্বারে কল করে অর্ডার কনফার্ম করবেন।'
      }
            </p>
            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-xs space-y-1.5 text-left mb-5">
              <div class="flex justify-between">
                <span class="text-slate-500">অর্ডার আইডি:</span>
                <span id="pdp-modal-order-id" class="font-mono font-bold text-purple-600">MV-894102</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500">সর্বমোট প্রদেয় টাকা:</span>
                <span id="pdp-modal-total-val" class="font-bold text-slate-900">৳ 0</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500">${isAiProduct ? 'ডেলিভারি মেথড:' : 'পেমেন্ট মেথড:'}</span>
                <span class="font-semibold text-emerald-600">${isAiProduct ? 'Instant Email Access (Free)' : 'Cash on Delivery'}</span>
              </div>
            </div>
            <button id="pdp-btn-close-success" class="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-xs cursor-pointer">
              Continue Shopping
            </button>
          </div>

        </div>
      </div>
    `;

    // -------------------------------------------------------------------------
    // PDP MODAL CONTROL & CALCULATIONS
    // -------------------------------------------------------------------------
    const pdpOrderModal = document.getElementById('pdp-order-modal');
    const modalForm = document.getElementById('pdp-modal-order-form');
    const modalSuccessView = document.getElementById('pdp-modal-success-view');
    const btnCloseModal = document.getElementById('btn-close-pdp-modal');
    const btnCloseSuccess = document.getElementById('pdp-btn-close-success');

    const qtyValEl = document.getElementById('pdp-qty-val');
    const modalItemQtyBadge = document.getElementById('modal-item-qty-badge');
    const modalSummaryQty = document.getElementById('modal-summary-qty');
    const modalSummaryProdTotal = document.getElementById('modal-summary-prod-total');
    const modalSummaryShipping = document.getElementById('modal-summary-shipping');
    const modalSummaryGrandTotal = document.getElementById('modal-summary-grand-total');

    function updateModalCalculations() {
      const prodTotal = product.price * selectedQty;
      const currentShipping = isAiProduct ? 0 : selectedShipping;
      const grandTotal = prodTotal + currentShipping;

      if (qtyValEl) qtyValEl.textContent = selectedQty;
      if (modalItemQtyBadge) modalItemQtyBadge.textContent = `Qty: ${selectedQty}`;
      if (modalSummaryQty) modalSummaryQty.textContent = selectedQty;
      if (modalSummaryProdTotal) modalSummaryProdTotal.textContent = formatPrice(prodTotal);

      if (modalSummaryShipping) {
        modalSummaryShipping.textContent = isAiProduct ? 'ফ্রি ইমেইল ডেলিভারি (৳ ০)' : `৳ ${currentShipping}`;
      }
      if (modalSummaryGrandTotal) {
        modalSummaryGrandTotal.textContent = formatPrice(grandTotal);
      }
    }

    function openPdpOrderModal() {
      if (!pdpOrderModal) return;
      updateModalCalculations();
      if (modalForm) modalForm.classList.remove('hidden');
      if (modalSuccessView) modalSuccessView.classList.add('hidden');
      pdpOrderModal.classList.add('open');
      const nameInput = document.getElementById('pdp-order-name');
      if (nameInput) setTimeout(() => nameInput.focus(), 300);
    }

    function closePdpOrderModal() {
      if (pdpOrderModal) {
        pdpOrderModal.classList.remove('open');
      }
    }

    // Modal Trigger Buttons
    const btnOrderTrigger = document.getElementById('pdp-btn-order-trigger');
    if (btnOrderTrigger) {
      btnOrderTrigger.addEventListener('click', openPdpOrderModal);
    }

    const stickyBuyBtn = document.getElementById('pdp-sticky-buy-btn');
    if (stickyBuyBtn) {
      stickyBuyBtn.addEventListener('click', openPdpOrderModal);
    }

    if (btnCloseModal) {
      btnCloseModal.addEventListener('click', closePdpOrderModal);
    }

    if (btnCloseSuccess) {
      btnCloseSuccess.addEventListener('click', () => {
        closePdpOrderModal();
        navigateTo('/');
      });
    }

    if (pdpOrderModal) {
      pdpOrderModal.addEventListener('click', (e) => {
        if (e.target === pdpOrderModal) {
          closePdpOrderModal();
        }
      });
    }

    // Quantity buttons on main page
    const btnQtyMinus = document.getElementById('pdp-qty-minus');
    if (btnQtyMinus) {
      btnQtyMinus.addEventListener('click', () => {
        if (selectedQty > 1) {
          selectedQty--;
          updateModalCalculations();
        }
      });
    }

    const btnQtyPlus = document.getElementById('pdp-qty-plus');
    if (btnQtyPlus) {
      btnQtyPlus.addEventListener('click', () => {
        if (selectedQty < product.stockCount) {
          selectedQty++;
          updateModalCalculations();
        }
      });
    }

    // Shipping selection buttons (for Physical Products)
    if (!isAiProduct) {
      const optDhakaIn = document.getElementById('opt-dhaka-in');
      const optDhakaOut = document.getElementById('opt-dhaka-out');
      const radioDhakaIn = document.getElementById('radio-dhaka-in');
      const radioDhakaOut = document.getElementById('radio-dhaka-out');

      if (optDhakaIn && optDhakaOut) {
        optDhakaIn.addEventListener('click', () => {
          selectedShipping = 60;
          optDhakaIn.classList.add('selected');
          optDhakaOut.classList.remove('selected');
          if (radioDhakaIn) radioDhakaIn.checked = true;
          updateModalCalculations();
        });

        optDhakaOut.addEventListener('click', () => {
          selectedShipping = 120;
          optDhakaOut.classList.add('selected');
          optDhakaIn.classList.remove('selected');
          if (radioDhakaOut) radioDhakaOut.checked = true;
          updateModalCalculations();
        });
      }
    }

    // Modal Form Submission
    if (modalForm) {
      modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('pdp-order-name');
        const phoneInput = document.getElementById('pdp-order-phone');
        const name = nameInput ? nameInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim() : '';

        if (!name || !phone) {
          showToast('অনুগ্রহ করে আপনার নাম এবং মোবাইল নাম্বার দিন', 'warning');
          return;
        }

        if (isAiProduct) {
          const emailInput = document.getElementById('pdp-order-sub-email');
          const email = emailInput ? emailInput.value.trim() : '';
          if (!email || !email.includes('@') || !email.includes('.')) {
            showToast('অনুগ্রহ করে সঠিক ইমেইল এড্রেস লিখুন', 'warning');
            return;
          }
        } else {
          const addrInput = document.getElementById('pdp-order-address');
          const address = addrInput ? addrInput.value.trim() : '';
          if (!address) {
            showToast('অনুগ্রহ করে ডেলিভারি ঠিকানা লিখুন', 'warning');
            return;
          }
        }

        const submitBtn = document.getElementById('pdp-btn-modal-submit');
        const origBtnHtml = submitBtn.innerHTML;
        submitBtn.innerHTML = 'অর্ডার প্রসেস হচ্ছে...';
        submitBtn.disabled = true;

        setTimeout(() => {
          const orderId = 'MV-' + Math.floor(100000 + Math.random() * 900000);
          const currentShipping = isAiProduct ? 0 : selectedShipping;
          const grandTotal = (product.price * selectedQty) + currentShipping;

          // Save to Live Order Requests
          try {
            const reqs = JSON.parse(localStorage.getItem('motionview_live_order_requests') || '[]');
            reqs.unshift({
              orderId: orderId,
              customerName: name,
              phone: phone,
              email: isAiProduct ? (document.getElementById('pdp-order-sub-email')?.value.trim() || 'N/A') : 'N/A',
              address: isAiProduct ? 'Instant Email Delivery' : (document.getElementById('pdp-order-address')?.value.trim() || 'Dhaka'),
              productName: product.name,
              qty: selectedQty,
              total: grandTotal,
              date: new Date().toISOString(),
              timeAgo: 'Just now',
              status: isAiProduct ? 'Pending Activation' : 'Pending Verification (COD)',
              type: isAiProduct ? 'AI Subscription' : 'Physical Gadget'
            });
            localStorage.setItem('motionview_live_order_requests', JSON.stringify(reqs));
          } catch (err) {
            console.warn('Failed saving order request', err);
          }

          const successOrderIdEl = document.getElementById('pdp-modal-order-id');
          const successTotalValEl = document.getElementById('pdp-modal-total-val');

          if (successOrderIdEl) successOrderIdEl.textContent = orderId;
          if (successTotalValEl) successTotalValEl.textContent = formatPrice(grandTotal);

          modalForm.classList.add('hidden');
          if (modalSuccessView) modalSuccessView.classList.remove('hidden');

          submitBtn.innerHTML = origBtnHtml;
          submitBtn.disabled = false;

          showToast(`🎉 অর্ডার #${orderId} সফলভাবে সম্পন্ন হয়েছে!`, 'success');
        }, 500);
      });
    }

    // Add to Cart
    const btnAddBag = document.getElementById('pdp-btn-add-bag');
    if (btnAddBag) {
      btnAddBag.addEventListener('click', () => {
        window.store.addToCart(product, selectedQty);
        showToast(`Added ${selectedQty}x ${product.name} to cart!`, 'cart');
      });
    }

    // Wishlist Toggle
    const btnWish = document.getElementById('pdp-btn-wishlist');
    if (btnWish) {
      btnWish.addEventListener('click', () => {
        const added = window.store.toggleWishlist(product);
        btnWish.innerHTML = `
          ${added ? ICONS.heartFilled : ICONS.heart}
          <span class="hidden sm:inline">${added ? 'Saved' : 'Wishlist'}</span>
        `;
        showToast(added ? `Saved to Wishlist` : `Removed from Wishlist`, 'wishlist');
      });
    }

    // Back to Store
    const btnBackStore = document.getElementById('btn-back-to-store');
    if (btnBackStore) {
      btnBackStore.addEventListener('click', () => {
        navigateTo('/');
      });
    }

    // Share & Copy URL
    function copyLinkAction() {
      const fullUrl = window.location.origin + productUrlPath;
      navigator.clipboard.writeText(fullUrl).then(() => {
        showToast(`Copied URL: ${productUrlPath}`, 'info');
      }).catch(() => {
        showToast(`Path: ${productUrlPath}`, 'info');
      });
    }

    const copyBtn1 = document.getElementById('btn-copy-product-link');
    if (copyBtn1) copyBtn1.addEventListener('click', copyLinkAction);

    const copyBtn2 = document.getElementById('btn-copy-product-link-alt');
    if (copyBtn2) copyBtn2.addEventListener('click', copyLinkAction);

    // -------------------------------------------------------------------------
    // PDP INTERACTIVE THUMBNAILS & SIDE HOVER ZOOM PORTAL LOGIC
    // -------------------------------------------------------------------------
    const pdpMainFrame = document.getElementById('pdp-main-frame');
    const pdpActiveImg = document.getElementById('pdp-active-image');
    const pdpZoomLens = document.getElementById('pdp-zoom-lens');
    const pdpZoomWindow = document.getElementById('pdp-zoom-window');
    const pdpZoomTargetImg = document.getElementById('pdp-zoom-target-img');

    // 1. Thumbnail Selector click
    productDetailView.querySelectorAll('.pdp-thumb-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        productDetailView.querySelectorAll('.pdp-thumb-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const newSrc = btn.dataset.src;
        if (pdpActiveImg) pdpActiveImg.src = newSrc;
        if (pdpZoomTargetImg) pdpZoomTargetImg.src = newSrc;
      });
    });

    // 2. Mouse Move / Hover Zoom Engine
    if (pdpMainFrame && pdpActiveImg && pdpZoomLens && pdpZoomWindow && pdpZoomTargetImg) {
      let isZoomActive = false;

      function updateZoom(e) {
        if (window.innerWidth < 1024) return;
        const frameRect = pdpMainFrame.getBoundingClientRect();
        if (frameRect.width === 0 || frameRect.height === 0) return;

        // Ensure target image is scaled properly
        const zoomFactor = 2.5;
        pdpZoomTargetImg.style.width = (frameRect.width * zoomFactor) + 'px';
        pdpZoomTargetImg.style.height = (frameRect.height * zoomFactor) + 'px';

        let x = e.clientX - frameRect.left;
        let y = e.clientY - frameRect.top;

        // Lens positioning
        const lensW = pdpZoomLens.offsetWidth || 130;
        const lensH = pdpZoomLens.offsetHeight || 130;

        let lensX = x - (lensW / 2);
        let lensY = y - (lensH / 2);

        // Clamping inside the image frame
        if (lensX < 0) lensX = 0;
        if (lensY < 0) lensY = 0;
        if (lensX > frameRect.width - lensW) lensX = frameRect.width - lensW;
        if (lensY > frameRect.height - lensH) lensY = frameRect.height - lensH;

        pdpZoomLens.style.left = lensX + 'px';
        pdpZoomLens.style.top = lensY + 'px';

        // Ratio of movement for the magnified right view
        const cx = (frameRect.width * zoomFactor) / frameRect.width;
        const cy = (frameRect.height * zoomFactor) / frameRect.height;

        pdpZoomTargetImg.style.left = '-' + (lensX * cx) + 'px';
        pdpZoomTargetImg.style.top = '-' + (lensY * cy) + 'px';
      }

      function onMouseEnter(e) {
        if (window.innerWidth < 1024) return; // Only show on desktop screens
        isZoomActive = true;
        pdpZoomLens.style.display = 'block';
        pdpZoomWindow.style.display = 'block';
        updateZoom(e);
      }

      function onMouseLeave() {
        isZoomActive = false;
        pdpZoomLens.style.display = 'none';
        pdpZoomWindow.style.display = 'none';
      }

      function onMouseMove(e) {
        if (!isZoomActive) {
          onMouseEnter(e);
          return;
        }
        updateZoom(e);
      }

      pdpMainFrame.addEventListener('mouseenter', onMouseEnter);
      pdpMainFrame.addEventListener('mouseleave', onMouseLeave);
      pdpMainFrame.addEventListener('mousemove', onMouseMove);
    }

    // -------------------------------------------------------------------------
    // PDP STAR RATING & REVIEW FORM SUBMIT
    // -------------------------------------------------------------------------
    let selectedUserRating = 5;
    const starInputGroup = document.getElementById('pdp-star-input-group');
    if (starInputGroup) {
      const stars = starInputGroup.querySelectorAll('svg');
      stars.forEach(star => {
        star.addEventListener('click', () => {
          selectedUserRating = parseInt(star.dataset.score, 10);
          stars.forEach(s => {
            const score = parseInt(s.dataset.score, 10);
            s.classList.toggle('filled', score <= selectedUserRating);
          });
        });
      });
    }

    const reviewForm = document.getElementById('pdp-review-form');
    if (reviewForm) {
      reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const revName = document.getElementById('review-user-name')?.value.trim();
        const revComment = document.getElementById('review-user-comment')?.value.trim();

        if (!revName || !revComment) {
          showToast('অনুগ্রহ করে নাম এবং রিভিউ লিখুন', 'warning');
          return;
        }

        const newReviewObj = {
          name: revName,
          rating: selectedUserRating,
          date: 'Just now',
          comment: revComment
        };

        // Save to localStorage
        try {
          const allReviews = JSON.parse(localStorage.getItem('motionview_product_reviews') || '{}');
          if (!allReviews[product.id]) allReviews[product.id] = [];
          allReviews[product.id].unshift(newReviewObj);
          localStorage.setItem('motionview_product_reviews', JSON.stringify(allReviews));
        } catch(err) {}

        // Prepend to UI
        const reviewsContainer = document.getElementById('pdp-reviews-list-container');
        if (reviewsContainer) {
          const newRevCard = document.createElement('div');
          newRevCard.className = 'p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2';
          newRevCard.innerHTML = `
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                  ${revName.charAt(0).toUpperCase()}
                </div>
                <span class="font-bold text-xs text-slate-800">${revName}</span>
                <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">Verified Buyer</span>
              </div>
              <span class="text-[11px] text-slate-400 font-medium">Just now</span>
            </div>
            <div class="flex items-center text-amber-500 text-xs">
              ${Array(selectedUserRating).fill(ICONS.star).join('')}
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">${revComment}</p>
          `;
          reviewsContainer.prepend(newRevCard);
        }

        reviewForm.reset();
        // Reset stars
        if (starInputGroup) {
          starInputGroup.querySelectorAll('svg').forEach(s => s.classList.add('filled'));
        }
        showToast('আপনার রিভিউটি সফলভাবে প্রকাশিত হয়েছে!', 'success');
      });
    }

    // Bind related product card clicks
    productDetailView.querySelectorAll('.product-card-clean').forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.closest('button')) {
          navigateTo(`/product/${card.dataset.id}`);
        }
      });
    });

    productDetailView.querySelectorAll('.btn-bag-add').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const prod = window.findProduct(id);
        if (prod) {
          window.store.addToCart(prod, 1);
          showToast(`Added ${prod.name} to cart!`, 'cart');
        }
      });
    });
  }

  // =========================================================================
  // STOREFRONT CATALOG RENDERER
  // =========================================================================
  function renderProducts() {
    const filtered = window.store.getFilteredProducts(window.PRODUCT_CATALOG);

    if (productCountDisplay) {
      productCountDisplay.textContent = `Showing ${filtered.length} of ${window.PRODUCT_CATALOG.length} products`;
    }

    const currentTab = window.store.filters.activeTab;
    if (sectionHeaderTitle) {
      if (currentTab === 'ai-shop') sectionHeaderTitle.textContent = "AI Shop & Neural Tech";
      else if (currentTab === 'gadgets') sectionHeaderTitle.textContent = "Smart Gadgets & Eco Collection";
      else if (currentTab === 'market') sectionHeaderTitle.textContent = "Market & Urban Lifestyle";
      else sectionHeaderTitle.textContent = "New Arrival";
    }

    if (!productGrid) return;

    if (filtered.length === 0) {
      productGrid.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white rounded-xl border border-slate-200">
          <h3 class="text-lg font-bold text-slate-800 mb-1">No products found</h3>
          <p class="text-slate-500 text-xs mb-4">Try searching for another keyword or clearing filters.</p>
          <button id="btn-reset-filters" class="px-4 py-2 rounded-lg bg-purple-600 text-white text-xs font-bold">
            Clear Filters
          </button>
        </div>
      `;
      const btnReset = document.getElementById('btn-reset-filters');
      if (btnReset) btnReset.addEventListener('click', resetFilters);
      return;
    }

    productGrid.innerHTML = filtered.map(product => {
      const inWishlist = window.store.isInWishlist(product.id);
      const badgeText = product.discountPercent ? `SALE` : (product.stockCount < 5 ? `HOT` : `NEW`);
      const badgeClass = product.discountPercent ? `bg-rose-500` : (product.stockCount < 5 ? `bg-amber-500` : `bg-blue-600`);

      return `
        <div class="product-card-clean group cursor-pointer" data-id="${product.id}">
          <!-- Card Image Wrapper -->
          <div class="product-img-wrapper">
            <!-- Top Left Status Badge (Screenshot Style) -->
            <span class="absolute top-2.5 left-2.5 text-[9.5px] font-extrabold uppercase tracking-wider text-white px-2 py-0.5 rounded-md ${badgeClass} shadow-xs z-10">
              ${badgeText}
            </span>

            <!-- Top Right Wishlist Quick Button -->
            <button class="btn-toggle-wishlist absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-slate-400 hover:text-rose-500 flex items-center justify-center transition-all z-10 shadow-xs" data-id="${product.id}" title="Wishlist">
              ${inWishlist ? ICONS.heartFilled : ICONS.heart}
            </button>

            <!-- Real Product Image / SVG Graphic -->
            ${window.renderProductVisual(product)}
          </div>

          <!-- Product Details -->
          <div class="flex-1 flex flex-col justify-between pt-1">
            <div>
              <h4 class="product-card-title group-hover:text-blue-600 transition-colors" title="${product.name}">
                ${product.name}
              </h4>

              <!-- Price Row (Screenshot Style) -->
              <div class="flex items-baseline flex-wrap gap-1.5 mb-3">
                <span class="text-sm sm:text-base font-black text-slate-900 tracking-tight">${formatPrice(product.price)}</span>
                ${product.originalPrice ? `
                  <span class="text-xs text-slate-400 line-through font-normal">${formatPrice(product.originalPrice)}</span>
                ` : ''}
              </div>
            </div>

            <!-- Full Width Add to Cart Button (Exact Match with Image) -->
            <button class="btn-card-add-cart" data-id="${product.id}">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    bindProductGridEvents();
  }

  // Bind Card Events
  function bindProductGridEvents() {
    // Add to cart buttons (Both Card button & Bag button)
    document.querySelectorAll('.btn-card-add-cart, .btn-bag-add').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const product = window.findProduct(id);
        if (product) {
          window.store.addToCart(product, 1);
          showToast(`Added ${product.name} to cart!`, 'cart');
        }
      });
    });

    // Wishlist buttons
    document.querySelectorAll('.btn-toggle-wishlist').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const product = window.findProduct(id);
        if (product) {
          const isAdded = window.store.toggleWishlist(product);
          btn.innerHTML = isAdded ? ICONS.heartFilled : ICONS.heart;
          showToast(isAdded ? `Saved to Wishlist` : `Removed from Wishlist`, 'wishlist');
        }
      });
    });

    // Product Card click navigates to dedicated Product Path!
    document.querySelectorAll('.product-card-clean').forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.closest('button')) {
          const id = card.dataset.id;
          navigateTo(`/product/${id}`);
        }
      });
    });
  }

  // Cart Drawer UI
  function updateCartUI() {
    const cart = window.store.cart;
    const totals = window.store.getCartTotals();
    const totalCount = window.store.getCartCount();

    cartBadgeCountEls.forEach(el => {
      el.textContent = totalCount;
    });

    if (!cartItemsContainer || !cartEmptyState) return;

    if (cart.length === 0) {
      cartItemsContainer.classList.add('hidden');
      cartEmptyState.classList.remove('hidden');
    } else {
      cartEmptyState.classList.add('hidden');
      cartItemsContainer.classList.remove('hidden');

      cartItemsContainer.innerHTML = cart.map(item => `
        <div class="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
          <div class="w-14 h-14 rounded-md bg-white border border-slate-200 flex items-center justify-center p-1 flex-shrink-0 cursor-pointer" onclick="window.appNavigateTo('/product/${item.id}')">
            ${window.renderProductVisual(item)}
          </div>

          <div class="flex-1 min-w-0">
            <h5 class="text-xs font-bold text-slate-800 line-clamp-1 cursor-pointer hover:text-purple-600" onclick="window.appNavigateTo('/product/${item.id}')">${item.name}</h5>
            <span class="text-xs font-black text-purple-700">${formatPrice(item.price)}</span>

            <div class="flex items-center gap-2 mt-1.5">
              <div class="flex items-center rounded border border-slate-300 bg-white">
                <button class="btn-cart-minus px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100" data-id="${item.id}" data-color="${item.color}">-</button>
                <span class="px-2 text-xs font-bold text-slate-900">${item.quantity}</span>
                <button class="btn-cart-plus px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100" data-id="${item.id}" data-color="${item.color}">+</button>
              </div>
              <span class="text-xs font-black text-slate-900 ml-auto">${formatPrice(item.price * item.quantity)}</span>
            </div>
          </div>

          <button class="btn-cart-remove p-1.5 text-slate-400 hover:text-rose-600" data-id="${item.id}" data-color="${item.color}">
            ${ICONS.trash}
          </button>
        </div>
      `).join('');

      cartItemsContainer.querySelectorAll('.btn-cart-minus').forEach(b => {
        b.addEventListener('click', () => {
          const item = cart.find(i => i.id === b.dataset.id && i.color === b.dataset.color);
          if (item) window.store.updateCartQuantity(item.id, item.color, item.quantity - 1);
        });
      });

      cartItemsContainer.querySelectorAll('.btn-cart-plus').forEach(b => {
        b.addEventListener('click', () => {
          const item = cart.find(i => i.id === b.dataset.id && i.color === b.dataset.color);
          if (item) window.store.updateCartQuantity(item.id, item.color, item.quantity + 1);
        });
      });

      cartItemsContainer.querySelectorAll('.btn-cart-remove').forEach(b => {
        b.addEventListener('click', () => {
          window.store.removeFromCart(b.dataset.id, b.dataset.color);
        });
      });
    }

    if (cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(totals.subtotal);
    if (cartDiscountEl) cartDiscountEl.textContent = totals.discount > 0 ? `-${formatPrice(totals.discount)}` : '৳ 0';
    if (cartShippingEl) cartShippingEl.textContent = totals.shipping === 0 ? 'FREE' : formatPrice(totals.shipping);
    if (cartGrandTotalEl) cartGrandTotalEl.textContent = formatPrice(totals.grandTotal);
  }

  // Wishlist UI
  function updateWishlistUI() {
    const list = window.store.wishlist;
    wishlistBadgeCountEls.forEach(el => {
      el.textContent = list.length;
      el.classList.toggle('hidden', list.length === 0);
    });

    if (!wishlistItemsContainer || !wishlistEmptyState) return;

    if (list.length === 0) {
      wishlistItemsContainer.classList.add('hidden');
      wishlistEmptyState.classList.remove('hidden');
    } else {
      wishlistEmptyState.classList.add('hidden');
      wishlistItemsContainer.classList.remove('hidden');

      wishlistItemsContainer.innerHTML = list.map(item => `
        <div class="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
          <div class="w-12 h-12 rounded bg-white border border-slate-200 flex items-center justify-center p-1 cursor-pointer" onclick="window.appNavigateTo('/product/${item.id}')">
            ${window.renderProductVisual(item)}
          </div>
          <div class="flex-1 min-w-0">
            <h5 class="text-xs font-bold text-slate-800 line-clamp-1 cursor-pointer hover:text-purple-600" onclick="window.appNavigateTo('/product/${item.id}')">${item.name}</h5>
            <span class="text-xs font-black text-purple-700">${formatPrice(item.price)}</span>
          </div>
          <button class="btn-wishlist-to-bag px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-bold flex items-center gap-1" data-id="${item.id}">
            Add
          </button>
          <button class="btn-wishlist-remove p-1 text-slate-400 hover:text-rose-600" data-id="${item.id}">
            ${ICONS.trash}
          </button>
        </div>
      `).join('');

      wishlistItemsContainer.querySelectorAll('.btn-wishlist-to-bag').forEach(b => {
        b.addEventListener('click', () => {
          const prod = window.findProduct(b.dataset.id);
          if (prod) {
            window.store.addToCart(prod, 1);
            showToast(`Moved to cart!`, 'cart');
          }
        });
      });

      wishlistItemsContainer.querySelectorAll('.btn-wishlist-remove').forEach(b => {
        b.addEventListener('click', () => {
          const prod = window.findProduct(b.dataset.id);
          if (prod) {
            window.store.toggleWishlist(prod);
            renderProducts();
          }
        });
      });
    }
  }

  // Checkout Flow
  function openCheckoutModal() {
    if (window.store.cart.length === 0) {
      showToast('Your cart is empty', 'warning');
      return;
    }

    if (cartDrawerBackdrop) cartDrawerBackdrop.classList.remove('open');

    const totals = window.store.getCartTotals();
    if (checkoutTotalEl) checkoutTotalEl.textContent = formatPrice(totals.grandTotal);

    if (checkoutSummaryList) {
      checkoutSummaryList.innerHTML = window.store.cart.map(item => `
        <div class="flex items-center justify-between text-xs py-1 border-b border-slate-100 last:border-0">
          <span class="text-slate-700 font-medium truncate max-w-[200px]">${item.quantity}x ${item.name}</span>
          <span class="text-slate-900 font-bold">${formatPrice(item.price * item.quantity)}</span>
        </div>
      `).join('');
    }

    if (checkoutModal) checkoutModal.classList.add('open');
  }

  function handleCheckoutSubmit(e) {
    e.preventDefault();
    const btn = checkoutForm.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Processing Order...';
    btn.disabled = true;

    setTimeout(() => {
      const orderSuccessView = document.getElementById('order-success-view');
      const checkoutFormView = document.getElementById('checkout-form-view');
      const orderIdDisplay = document.getElementById('order-id-display');

      if (orderIdDisplay) orderIdDisplay.textContent = 'MV-' + Math.floor(100000 + Math.random() * 900000);
      if (checkoutFormView) checkoutFormView.classList.add('hidden');
      if (orderSuccessView) orderSuccessView.classList.remove('hidden');

      window.store.clearCart();
      btn.innerHTML = originalText;
      btn.disabled = false;
      showToast('Order placed successfully!', 'success');
    }, 800);
  }

  function resetFilters() {
    window.store.setActiveTab('all');
    window.store.setSearchQuery('');
    if (searchInput) searchInput.value = '';
    if (mobileSearchInput) mobileSearchInput.value = '';
    if (searchClearBtn) searchClearBtn.classList.add('hidden');
    if (mobileSearchClearBtn) mobileSearchClearBtn.classList.add('hidden');

    document.querySelectorAll('.tab-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === 'all');
    });

    renderProducts();
  }

  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-card';

    toast.innerHTML = `
      <div class="text-emerald-400">${ICONS.check}</div>
      <div class="flex-1 text-xs font-semibold text-white">${message}</div>
      <button class="text-slate-400 hover:text-white text-xs font-bold">&times;</button>
    `;

    toast.querySelector('button').addEventListener('click', () => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 250);
    });

    container.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 250);
      }
    }, 3000);
  }

  // Global helper for inline navigations
  window.appNavigateTo = function (path) {
    if (cartDrawerBackdrop) cartDrawerBackdrop.classList.remove('open');
    if (wishlistDrawerBackdrop) wishlistDrawerBackdrop.classList.remove('open');
    navigateTo(path);
  };

  // Event Bindings
  function initEventListeners() {
    // 3 Tab Pills
    document.querySelectorAll('.tab-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const tab = pill.dataset.tab;
        document.querySelectorAll('.tab-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        window.store.setActiveTab(tab);
        if (storeHomeView && storeHomeView.classList.contains('hidden')) {
          navigateTo(tab === 'all' ? '/' : `/category/${tab}`);
        } else {
          renderProducts();
        }
      });
    });

    // Nav Filter Links (Header)
    document.querySelectorAll('.nav-filter-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = link.dataset.tab;
        if (tab) {
          if (storeHomeView && storeHomeView.classList.contains('hidden')) {
            navigateTo(tab === 'all' ? '/' : `/category/${tab}`);
          } else {
            window.store.setActiveTab(tab);
            document.querySelectorAll('.tab-pill').forEach(p => {
              p.classList.toggle('active', p.dataset.tab === tab);
            });
            renderProducts();
            document.getElementById('store-showcase-section').scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // Category Thumbnail Items
    document.querySelectorAll('.category-clean-card, .category-circle-item').forEach(item => {
      item.addEventListener('click', () => {
        const tab = item.dataset.tab;
        if (tab) {
          if (storeHomeView && storeHomeView.classList.contains('hidden')) {
            navigateTo(`/category/${tab}`);
          } else {
            window.store.setActiveTab(tab);
            document.querySelectorAll('.tab-pill').forEach(p => {
              p.classList.toggle('active', p.dataset.tab === tab);
            });
            renderProducts();
            document.getElementById('store-showcase-section').scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // Live Search (Desktop & Mobile)
    const desktopSearchDropdown = document.getElementById('desktop-search-dropdown');
    const mobileSearchDropdown = document.getElementById('mobile-search-dropdown');

    function renderSearchDropdown(val, container) {
      if (!container) return;
      const q = val.trim().toLowerCase();
      if (q.length < 1) {
        container.classList.add('hidden');
        container.innerHTML = '';
        return;
      }

      const allProds = window.PRODUCT_CATALOG || [];
      const matches = allProds.filter(p => 
        p.name.toLowerCase().includes(q) ||
        (p.categoryLabel && p.categoryLabel.toLowerCase().includes(q)) ||
        (p.subCategory && p.subCategory.toLowerCase().includes(q)) ||
        (p.brand && p.brand.toLowerCase().includes(q))
      ).slice(0, 6);

      if (matches.length === 0) {
        container.innerHTML = `
          <div class="p-4 text-center text-xs text-slate-500">
            <span>কোনো পণ্য খুঁজে পাওয়া যায়নি "<strong>${val}</strong>"</span>
          </div>
        `;
        container.classList.remove('hidden');
        return;
      }

      container.innerHTML = `
        <div class="p-2 border-b border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3">
          <span>Search Suggestions (${matches.length})</span>
          <span class="text-purple-600 font-semibold cursor-pointer" onclick="window.store.setSearchQuery('${val}'); window.renderProducts();">View All</span>
        </div>
        <div class="divide-y divide-slate-100">
          ${matches.map(p => `
            <div class="search-suggest-item flex items-center gap-3 p-2.5 sm:p-3 hover:bg-slate-50 transition-colors cursor-pointer group" data-id="${p.id}">
              <div class="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center p-1 flex-shrink-0 group-hover:border-purple-300">
                ${window.renderProductVisual(p)}
              </div>
              <div class="flex-1 min-w-0">
                <h5 class="text-xs font-bold text-slate-800 truncate group-hover:text-purple-600 transition-colors">${p.name}</h5>
                <div class="flex items-center gap-2 mt-0.5">
                  <span class="text-xs font-black text-purple-700 font-heading">${formatPrice(p.price)}</span>
                  ${p.originalPrice ? `<span class="text-[10px] text-slate-400 line-through">${formatPrice(p.originalPrice)}</span>` : ''}
                  <span class="text-[10px] text-slate-400">&bull; ${p.categoryLabel || 'Gadgets'}</span>
                </div>
              </div>
              <svg class="w-4 h-4 text-slate-300 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          `).join('')}
        </div>
      `;

      container.classList.remove('hidden');

      // Bind click to navigate directly to product detail page!
      container.querySelectorAll('.search-suggest-item').forEach(item => {
        item.addEventListener('click', () => {
          const id = item.dataset.id;
          container.classList.add('hidden');
          navigateTo(`/product/${id}`);
        });
      });
    }

    function handleSearch(val) {
      if (searchInput) searchInput.value = val;
      if (mobileSearchInput) mobileSearchInput.value = val;
      if (searchClearBtn) searchClearBtn.classList.toggle('hidden', val.length === 0);
      if (mobileSearchClearBtn) mobileSearchClearBtn.classList.toggle('hidden', val.length === 0);

      renderSearchDropdown(val, desktopSearchDropdown);
      renderSearchDropdown(val, mobileSearchDropdown);

      window.store.setSearchQuery(val);
      renderProducts();
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
      searchInput.addEventListener('focus', (e) => {
        if (e.target.value.trim().length > 0) renderSearchDropdown(e.target.value, desktopSearchDropdown);
      });
    }
    if (mobileSearchInput) {
      mobileSearchInput.addEventListener('input', (e) => handleSearch(e.target.value));
      mobileSearchInput.addEventListener('focus', (e) => {
        if (e.target.value.trim().length > 0) renderSearchDropdown(e.target.value, mobileSearchDropdown);
      });
    }

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#desktop-search-wrapper') && desktopSearchDropdown) {
        desktopSearchDropdown.classList.add('hidden');
      }
      if (!e.target.closest('#mobile-search-wrapper') && mobileSearchDropdown) {
        mobileSearchDropdown.classList.add('hidden');
      }
    });

    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        handleSearch('');
        desktopSearchDropdown?.classList.add('hidden');
      });
    }
    if (mobileSearchClearBtn) {
      mobileSearchClearBtn.addEventListener('click', () => {
        handleSearch('');
        mobileSearchDropdown?.classList.add('hidden');
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        window.store.setSortMode(e.target.value);
        renderProducts();
      });
    }

    // Cart Drawer
    document.querySelectorAll('.btn-open-cart').forEach(b => {
      b.addEventListener('click', (e) => {
        if (b.tagName === 'A' || b.closest('.mobile-nav-item')) {
          e.preventDefault();
          navigateTo('/cart');
        } else {
          if (cartDrawerBackdrop) cartDrawerBackdrop.classList.add('open');
        }
      });
    });

    // Mobile Bottom Nav General SPA interceptor
    document.querySelectorAll('.mobile-nav-item').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('/')) {
          e.preventDefault();
          navigateTo(href);
        }
      });
    });

    document.querySelectorAll('.btn-close-cart').forEach(b => {
      b.addEventListener('click', () => {
        if (cartDrawerBackdrop) cartDrawerBackdrop.classList.remove('open');
      });
    });

    // Wishlist Drawer
    document.querySelectorAll('.btn-open-wishlist').forEach(b => {
      b.addEventListener('click', () => {
        if (wishlistDrawerBackdrop) wishlistDrawerBackdrop.classList.add('open');
      });
    });

    document.querySelectorAll('.btn-close-wishlist').forEach(b => {
      b.addEventListener('click', () => {
        if (wishlistDrawerBackdrop) wishlistDrawerBackdrop.classList.remove('open');
      });
    });

    // Checkout
    document.querySelectorAll('.btn-proceed-checkout').forEach(b => {
      b.addEventListener('click', openCheckoutModal);
    });

    document.querySelectorAll('.btn-close-checkout').forEach(b => {
      b.addEventListener('click', () => {
        if (checkoutModal) checkoutModal.classList.remove('open');
      });
    });

    if (checkoutForm) {
      checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    }

    if (btnApplyCoupon && couponInput) {
      btnApplyCoupon.addEventListener('click', () => {
        const res = window.store.applyCoupon(couponInput.value);
        if (couponMessageEl) {
          couponMessageEl.textContent = res.message;
          couponMessageEl.className = res.success ? 'text-xs text-emerald-600 font-semibold' : 'text-xs text-rose-600 font-semibold';
        }
        showToast(res.message, res.success ? 'success' : 'warning');
      });
    }

    // Order Tracking Page Routing & Live Search
    // Bind all buttons (Desktop header button + Mobile header button + Mobile bottom bar)
    document.querySelectorAll('#btn-order-track-box, .btn-trigger-track').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('/track-order.bd');
      });
    });

    // Dedicated Page Tracking Form Handler (/track-order.bd)
    const pageTrackForm = document.getElementById('page-order-track-form');
    const pageTrackOrderId = document.getElementById('page-track-order-id');
    const pageTrackPhone = document.getElementById('page-track-phone');
    const pageTrackOutput = document.getElementById('page-track-output');

    if (pageTrackForm && pageTrackOutput) {
      pageTrackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const orderIdVal = (pageTrackOrderId?.value || '').trim().toLowerCase();
        const phoneVal = (pageTrackPhone?.value || '').trim().toLowerCase();

        if (!orderIdVal && !phoneVal) {
          pageTrackOutput.classList.remove('hidden');
          pageTrackOutput.innerHTML = `
            <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center">
              <p class="text-xs text-amber-800 font-bold">অনুগ্রহ করে আপনার অর্ডার নাম্বার অথবা ফোন নাম্বার প্রদান করুন।</p>
            </div>
          `;
          return;
        }

        // Search in localStorage orders
        let liveOrders = [];
        try {
          liveOrders = JSON.parse(localStorage.getItem('motionview_live_order_requests') || '[]');
        } catch (err) {}

        const matched = liveOrders.filter(o => {
          const idMatch = orderIdVal && o.id && o.id.toLowerCase().includes(orderIdVal);
          const phoneMatch = phoneVal && o.phone && o.phone.toLowerCase().includes(phoneVal);
          if (orderIdVal && phoneVal) return idMatch || phoneMatch;
          if (orderIdVal) return idMatch;
          return phoneMatch;
        });

        pageTrackOutput.classList.remove('hidden');

        if (matched.length > 0) {
          const item = matched[0];
          const isConfirmed = item.status === 'Confirmed';
          const isShipped = item.status === 'Shipped';
          const statusText = item.status || 'Processing';
          const badgeClass = isConfirmed || isShipped
            ? 'bg-emerald-100 text-emerald-800 border-emerald-200' 
            : 'bg-blue-100 text-blue-800 border-blue-200';

          pageTrackOutput.innerHTML = `
            <div class="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-4">
              <div class="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <span class="text-[11px] uppercase font-bold text-slate-400 block tracking-wider">Invoice / Order ID</span>
                  <span class="font-mono font-black text-sm text-blue-600">${item.id}</span>
                </div>
                <span class="px-3 py-1 rounded-full text-xs font-bold border ${badgeClass}">
                  ${statusText}
                </span>
              </div>

              <!-- Stepper Progress Tracker -->
              <div class="py-2">
                <div class="flex items-center justify-between text-[11px] font-bold text-slate-600 mb-2">
                  <span class="text-blue-600 font-extrabold">1. Order Placed</span>
                  <span class="${isConfirmed || isShipped ? 'text-blue-600 font-extrabold' : 'text-slate-400'}">2. Confirmed</span>
                  <span class="${isShipped ? 'text-blue-600 font-extrabold' : 'text-slate-400'}">3. In Transit</span>
                  <span class="text-slate-400">4. Delivered</span>
                </div>
                <div class="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div class="bg-blue-600 h-full rounded-full transition-all duration-500" style="width: ${isShipped ? '75%' : isConfirmed ? '50%' : '25%'}"></div>
                </div>
              </div>

              <div class="space-y-2 pt-2 border-t border-slate-200 text-xs">
                <div class="flex justify-between text-slate-700">
                  <span class="font-medium text-slate-500">Customer Name:</span>
                  <span class="font-bold text-slate-900">${item.customerName || 'N/A'}</span>
                </div>
                <div class="flex justify-between text-slate-700">
                  <span class="font-medium text-slate-500">Contact Phone:</span>
                  <span class="font-mono font-bold text-slate-900">${item.phone || 'N/A'}</span>
                </div>
                <div class="flex justify-between text-slate-700">
                  <span class="font-medium text-slate-500">Product / Package:</span>
                  <span class="font-bold text-slate-800 text-right truncate max-w-[220px]">${item.productName || 'Order Items'}</span>
                </div>
                <div class="flex justify-between text-slate-700">
                  <span class="font-medium text-slate-500">Delivery Address:</span>
                  <span class="font-semibold text-slate-800 text-right truncate max-w-[220px]">${item.deliveryAddress || item.address || 'Dhaka, Bangladesh'}</span>
                </div>
                <div class="flex justify-between text-slate-700 pt-2 border-t border-slate-200">
                  <span class="font-bold text-slate-600">Total Payable Amount:</span>
                  <span class="font-black text-sm text-blue-700">৳ ${item.totalAmount ? Number(item.totalAmount).toLocaleString('en-IN') : '0'}</span>
                </div>
              </div>

              <div class="p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-blue-900 text-xs flex items-start gap-2.5">
                <svg class="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>আপনার অর্ডারটি আমাদের ডাটাবেজে কনফার্ম রয়েছে। ডেলিভারি পার্টনার খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে।</span>
              </div>
            </div>
          `;
        } else {
          pageTrackOutput.innerHTML = `
            <div class="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-center space-y-2">
              <div class="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto font-bold text-sm">
                !
              </div>
              <h4 class="font-bold text-amber-900 text-sm">কোনো অর্ডার পাওয়া যায়নি</h4>
              <p class="text-xs text-amber-800 max-w-sm mx-auto">
                প্রদত্ত অর্ডার নাম্বার বা ফোন নাম্বারে কোনো অর্ডার খুঁজে পাওয়া যায়নি। অনুগ্রহ করে তথ্য যাচাই করে পুনরায় চেষ্টা করুন অথবা সরাসরি আমাদের কাস্টমার সার্ভিসে যোগাযোগ করুন।
              </p>
            </div>
          `;
        }
      });
    }

    // Popstate (Browser Back & Forward Buttons)
    window.addEventListener('popstate', () => {
      handleRoute();
    });

    // Store Subscriptions
    window.store.subscribe((event) => {
      if (event === 'CART_UPDATED' || event === 'COUPON_APPLIED') updateCartUI();
      if (event === 'WISHLIST_UPDATED') updateWishlistUI();
      if (event === 'FILTER_CHANGED') renderProducts();
    });
  }

  function syncAdminCustomizations() {
    try {
      const bannerUrl = localStorage.getItem('motionview_hero_banner');
      const heroImg = document.getElementById('store-hero-banner-img');
      if (bannerUrl && heroImg) {
        heroImg.src = bannerUrl;
      }

      const sales28d = localStorage.getItem('motionview_stats_sales28d');
      const ordersCount = localStorage.getItem('motionview_stats_orders');
      const salesEl = document.getElementById('home-sales-28d');
      const ordersEl = document.getElementById('home-orders-count');
      if (sales28d && salesEl) {
        salesEl.textContent = sales28d;
      }
      if (ordersCount && ordersEl) {
        ordersEl.textContent = ordersCount;
      }
    } catch (e) {
      console.warn("Sync customizations error:", e);
    }
  }

  function initLiveChatWidget() {
    const chatBtn = document.getElementById('live-chat-floating-btn');
    const chatBox = document.getElementById('live-chat-box');
    const closeBtn = document.getElementById('btn-close-live-chat');
    const chatForm = document.getElementById('live-chat-form');
    const chatInput = document.getElementById('live-chat-input');
    const messagesContainer = document.getElementById('live-chat-messages');

    if (chatBtn && chatBox) {
      chatBtn.addEventListener('click', () => {
        chatBox.classList.toggle('hidden');
        chatBox.classList.toggle('flex');
        if (!chatBox.classList.contains('hidden')) {
          setTimeout(() => chatInput?.focus(), 150);
        }
      });
    }

    if (closeBtn && chatBox) {
      closeBtn.addEventListener('click', () => {
        chatBox.classList.add('hidden');
        chatBox.classList.remove('flex');
      });
    }

    if (chatForm && chatInput && messagesContainer) {
      chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;

        // Append user message
        const userMsgEl = document.createElement('div');
        userMsgEl.className = 'flex items-start justify-end gap-2';
        userMsgEl.innerHTML = `
          <div class="bg-purple-600 text-white p-3 rounded-2xl rounded-tr-xs shadow-xs max-w-[80%] text-xs">
            <p>${text}</p>
            <span class="text-[9px] text-purple-200 block text-right mt-1">Just now</span>
          </div>
        `;
        messagesContainer.appendChild(userMsgEl);
        chatInput.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Save into Live Support Chat Queue for Admin
        try {
          const chats = JSON.parse(localStorage.getItem('motionview_live_chat_threads') || '[]');
          chats.unshift({
            id: 'CH-' + Math.floor(1000 + Math.random() * 9000),
            userName: 'Customer #' + Math.floor(100 + Math.random() * 900),
            userPhone: '017' + Math.floor(1000000 + Math.random() * 9000000),
            lastMessage: text,
            timeAgo: 'Just now',
            status: 'Unread',
            createdAt: new Date().toISOString()
          });
          localStorage.setItem('motionview_live_chat_threads', JSON.stringify(chats));
        } catch (err) {
          console.warn('Failed saving chat message', err);
        }

        // Automated friendly reply
        setTimeout(() => {
          const repEl = document.createElement('div');
          repEl.className = 'flex items-start gap-2';
          repEl.innerHTML = `
            <div class="w-7 h-7 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">
              JP
            </div>
            <div class="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-xs shadow-2xs max-w-[80%] text-slate-800">
              <p class="font-medium">ধন্যবাদ আপনার বার্তার জন্য! আমাদের সাপোর্ট টিম এই মুহূর্তে একটিভ রয়েছে। একজন এজেন্ট এখনই উত্তর দিচ্ছেন।</p>
              <span class="text-[9px] text-slate-400 block mt-1">Just now</span>
            </div>
          `;
          messagesContainer.appendChild(repEl);
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 800);
      });
    }

    // Connect mobile bottom bar "Message" button to open Live Chat Box & navigate cleanly
    const mobileChatBtn = document.getElementById('mobile-nav-chat');
    if (mobileChatBtn) {
      mobileChatBtn.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('/message');
      });
    }
  }

  // =========================================================================
  // USER AUTH & PROFILE CONTROLLER
  // =========================================================================
  function getLoggedInUser() {
    try {
      const stored = localStorage.getItem('jpgadget_auth_user');
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return null;
  }

  function setLoggedInUser(user) {
    if (user) {
      localStorage.setItem('jpgadget_auth_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('jpgadget_auth_user');
    }
    updateProfileUI();
  }

  function updateProfileUI() {
    const user = getLoggedInUser();
    const guestSec = document.getElementById('auth-guest-section');
    const loggedSec = document.getElementById('auth-logged-in-section');
    const headerProfileBtn = document.getElementById('desktop-header-profile-btn');

    // Drawer Elements
    const drawerAvatar = document.getElementById('drawer-user-avatar');
    const drawerName = document.getElementById('drawer-user-name');
    const drawerPhone = document.getElementById('drawer-user-phone-display');
    const drawerStatus = document.getElementById('drawer-user-status');

    // Page Elements
    const pageAvatar = document.getElementById('profile-page-avatar');
    const pageName = document.getElementById('profile-page-name');
    const pagePhone = document.getElementById('profile-page-phone');
    const recentOrdersContainer = document.getElementById('profile-recent-orders-list');

    if (user) {
      const initials = (user.name || 'JP').trim().split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'JP';
      
      // Update header button
      if (headerProfileBtn) {
        const textSpan = headerProfileBtn.querySelector('span');
        if (textSpan) textSpan.textContent = user.name ? user.name.split(' ')[0] : 'Profile';
      }

      // Update drawer
      if (drawerAvatar) drawerAvatar.textContent = initials;
      if (drawerName) drawerName.textContent = user.name || 'Member';
      if (drawerPhone) drawerPhone.textContent = user.phone || '017XXXXXXXX';
      if (drawerStatus) drawerStatus.textContent = 'Active Member';

      // Update page view
      if (guestSec) guestSec.classList.add('hidden');
      if (loggedSec) loggedSec.classList.remove('hidden');
      if (pageAvatar) pageAvatar.textContent = initials;
      if (pageName) pageName.textContent = user.name || 'Member';
      if (pagePhone) pagePhone.textContent = user.phone || '017XXXXXXXX';

      // Update mobile Daraz view
      const mobileDarazAvatar = document.getElementById('mobile-daraz-avatar');
      const mobileDarazUsername = document.getElementById('mobile-daraz-username');
      if (mobileDarazAvatar) mobileDarazAvatar.textContent = initials;
      if (mobileDarazUsername) mobileDarazUsername.textContent = user.name ? user.name.toLowerCase().replace(/\s+/g, '') : 'chillshop51';

      // Populate recent orders
      if (recentOrdersContainer) {
        let orders = [];
        try {
          orders = JSON.parse(localStorage.getItem('motionview_live_order_requests') || '[]');
        } catch (e) {}
        
        if (orders.length > 0) {
          recentOrdersContainer.innerHTML = `
            <div class="divide-y divide-slate-100">
              ${orders.slice(0, 5).map(o => `
                <div class="py-3 flex items-center justify-between gap-3 text-xs">
                  <div>
                    <span class="font-mono font-bold text-purple-600 block">${o.id}</span>
                    <span class="text-slate-800 font-semibold">${o.productName || 'Order Items'}</span>
                  </div>
                  <div class="text-right">
                    <span class="font-bold text-slate-900 block">৳${o.totalAmount || '0'}</span>
                    <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${o.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}">${o.status || 'Processing'}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          `;
        } else {
          recentOrdersContainer.innerHTML = `
            <div class="text-center py-6 text-slate-400 text-xs">
              <p>আপনার কোনো সাম্প্রতিক অর্ডার নেই।</p>
            </div>
          `;
        }
      }
    } else {
      // Logged out
      if (headerProfileBtn) {
        const textSpan = headerProfileBtn.querySelector('span');
        if (textSpan) textSpan.textContent = 'Profile';
      }

      if (drawerAvatar) drawerAvatar.textContent = 'JP';
      if (drawerName) drawerName.textContent = 'Guest Visitor';
      if (drawerPhone) drawerPhone.textContent = 'Please log in';
      if (drawerStatus) drawerStatus.textContent = 'Not Logged In';

      if (guestSec) guestSec.classList.remove('hidden');
      if (loggedSec) loggedSec.classList.add('hidden');
    }
  }

  function initProfileAndAuth() {
    const mobileProfileBtn = document.getElementById('mobile-nav-profile');
    const desktopProfileBtn = document.getElementById('desktop-header-profile-btn');
    const closeDrawerBtn = document.getElementById('btn-close-profile-drawer');
    const drawerCartBtn = document.getElementById('profile-drawer-action-cart');
    const drawerSupportBtn = document.getElementById('profile-drawer-action-support');
    const drawerTrackBtn = document.getElementById('profile-drawer-action-track');
    const drawerWishlistBtn = document.getElementById('profile-drawer-action-wishlist');
    const drawerLogoutBtn = document.getElementById('profile-drawer-logout-btn');
    const pageLogoutBtn = document.getElementById('btn-page-logout');

    // Clicking Profile button in mobile or desktop:
    // If user is already logged in, slide open the profile drawer (same as cart drawer)!
    // If user is NOT logged in, navigate directly to /profile page to show login / register options!
    function handleProfileTrigger(e) {
      if (e) e.preventDefault();
      const user = getLoggedInUser();
      if (user) {
        openProfileDrawer();
      } else {
        navigateTo('/profile');
      }
    }

    if (mobileProfileBtn) {
      mobileProfileBtn.addEventListener('click', handleProfileTrigger);
    }
    if (desktopProfileBtn) {
      desktopProfileBtn.addEventListener('click', handleProfileTrigger);
    }

    // Close profile drawer
    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', closeProfileDrawer);
    }
    if (profileDrawerBackdrop) {
      profileDrawerBackdrop.addEventListener('click', (e) => {
        if (e.target === profileDrawerBackdrop) closeProfileDrawer();
      });
    }

    // Drawer action items
    if (drawerCartBtn) {
      drawerCartBtn.addEventListener('click', () => {
        closeProfileDrawer();
        openCartDrawer();
      });
    }
    if (drawerSupportBtn) {
      drawerSupportBtn.addEventListener('click', () => {
        closeProfileDrawer();
        navigateTo('/message');
      });
    }
    if (drawerTrackBtn) {
      drawerTrackBtn.addEventListener('click', () => {
        closeProfileDrawer();
        navigateTo('/track-order.bd');
      });
    }
    if (drawerWishlistBtn) {
      drawerWishlistBtn.addEventListener('click', () => {
        closeProfileDrawer();
        if (wishlistDrawerBackdrop) wishlistDrawerBackdrop.classList.add('open');
      });
    }

    // Logout handlers
    function handleLogout() {
      setLoggedInUser(null);
      closeProfileDrawer();
      showToast('লগআউট সফল হয়েছে', 'info');
      navigateTo('/profile');
    }

    if (drawerLogoutBtn) drawerLogoutBtn.addEventListener('click', handleLogout);
    if (pageLogoutBtn) pageLogoutBtn.addEventListener('click', handleLogout);

    const mobileDarazLogoutBtn = document.getElementById('btn-mobile-daraz-logout');
    if (mobileDarazLogoutBtn) mobileDarazLogoutBtn.addEventListener('click', handleLogout);

    const mobileDarazSettingsBtn = document.getElementById('mobile-daraz-settings-btn');
    if (mobileDarazSettingsBtn) {
      mobileDarazSettingsBtn.addEventListener('click', () => {
        if (confirm('আপনি কি অ্যাকাউন্ট সেটিংস দেখতে চান নাকি লগআউট করতে চান?\n\nলগআউট করতে OK চাপুন, অন্যথায় Cancel চাপুন।')) {
          handleLogout();
        }
      });
    }

    // Auth Tabs (Login vs Register)
    const tabLogin = document.getElementById('auth-tab-login');
    const tabRegister = document.getElementById('auth-tab-register');
    const formLogin = document.getElementById('form-user-login');
    const formRegister = document.getElementById('form-user-register');

    if (tabLogin && tabRegister && formLogin && formRegister) {
      tabLogin.addEventListener('click', () => {
        tabLogin.className = 'flex-1 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs bg-white text-purple-700 cursor-pointer';
        tabRegister.className = 'flex-1 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-all cursor-pointer';
        formLogin.classList.remove('hidden');
        formRegister.classList.add('hidden');
      });

      tabRegister.addEventListener('click', () => {
        tabRegister.className = 'flex-1 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs bg-white text-purple-700 cursor-pointer';
        tabLogin.className = 'flex-1 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-all cursor-pointer';
        formRegister.classList.remove('hidden');
        formLogin.classList.add('hidden');
      });
    }

    // Form Login Submit
    if (formLogin) {
      formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        const phone = document.getElementById('login-phone')?.value.trim();
        const pwd = document.getElementById('login-password')?.value.trim();
        if (!phone || !pwd) return;

        // Auto find existing name or default
        let registeredUsers = [];
        try {
          registeredUsers = JSON.parse(localStorage.getItem('jpgadget_registered_users') || '[]');
        } catch (e) {}

        const matched = registeredUsers.find(u => u.phone === phone);
        const userName = matched ? matched.name : (phone === '01711223344' ? 'Tanvir Ahmed' : 'Customer #' + phone.slice(-4));

        setLoggedInUser({
          phone,
          name: userName,
          loggedInAt: new Date().toISOString()
        });

        showToast(`স্বাগতম, ${userName}! লগইন সফল হয়েছে`, 'success');
        openProfileDrawer();
      });
    }

    // Form Register Submit
    if (formRegister) {
      formRegister.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reg-name')?.value.trim();
        const phone = document.getElementById('reg-phone')?.value.trim();
        const pwd = document.getElementById('reg-password')?.value.trim();
        if (!name || !phone || !pwd) return;

        let registeredUsers = [];
        try {
          registeredUsers = JSON.parse(localStorage.getItem('jpgadget_registered_users') || '[]');
        } catch (e) {}

        registeredUsers.push({ name, phone, pwd, createdAt: new Date().toISOString() });
        localStorage.setItem('jpgadget_registered_users', JSON.stringify(registeredUsers));

        setLoggedInUser({
          phone,
          name,
          loggedInAt: new Date().toISOString()
        });

        showToast(`অভিনন্দন ${name}! একাউন্ট তৈরি সফল হয়েছে`, 'success');
        openProfileDrawer();
      });
    }

    // Quick One-Click Demo Login
    const btnDemoLogin = document.getElementById('btn-quick-demo-login');
    if (btnDemoLogin) {
      btnDemoLogin.addEventListener('click', () => {
        setLoggedInUser({
          phone: '01711223344',
          name: 'Tanvir Ahmed',
          loggedInAt: new Date().toISOString()
        });
        showToast('ডেমো একাউন্টে লগইন সফল হয়েছে!', 'success');
        openProfileDrawer();
      });
    }

    updateProfileUI();
  }

  function init() {
    syncAdminCustomizations();
    initLiveChatWidget();
    initProfileAndAuth();
    updateCartUI();
    updateWishlistUI();
    initEventListeners();
    handleRoute();
  }

  init();
});
