const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));
app.use('/gadgate', express.static(path.join(__dirname, 'public', 'gadgate')));
app.use('/aishop', express.static(path.join(__dirname, 'public', 'aishop')));
app.use('/market', express.static(path.join(__dirname, 'public', 'market')));
app.use('/product', express.static(path.join(__dirname, 'public')));
app.use('/category', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// Full Product Database with Unique IDs & Slugs (Zero Emojis Policy)
const products = [
  // =========================================================================
  // GADGETS SECTION (12 Real Motion View Products from /gadgate/)
  // =========================================================================
  {
    id: "ankernano45w-ANK45X78",
    slug: "anker-nano-45w-smart-display-ANK45X78",
    legacyId: "gd-01",
    name: "Anker Nano 45W Smart Display Charger 180° Foldable",
    brand: "Anker",
    category: "gadgets",
    categoryLabel: "Gadgets",
    subCategory: "Charger & Cables",
    price: 3999,
    originalPrice: 4499,
    discountPercent: 11,
    rating: 5.0,
    reviewCount: 780,
    warranty: "18M Warranty",
    badge: "180° Foldable",
    inStock: true,
    stockCount: 85,
    isFlashDeal: true,
    salesCount: 650,
    imagePath: "gadgate/177926078848.webp"
  },
  {
    id: "imikixplorer-IMK88X17",
    slug: "imiki-xplorer-pro-smart-watch-IMK88X17",
    legacyId: "gd-02",
    name: "IMIKI Xplorer Pro Smart Watch with GPS Tracking",
    brand: "IMIKI",
    category: "gadgets",
    categoryLabel: "Gadgets",
    subCategory: "Smartwatches",
    price: 4999,
    originalPrice: 5999,
    discountPercent: 17,
    rating: 4.9,
    reviewCount: 520,
    warranty: "12M Warranty",
    badge: "GPS AMOLED",
    inStock: true,
    stockCount: 42,
    isFlashDeal: true,
    salesCount: 390,
    imagePath: "gadgate/178711751745.webp"
  },
  {
    id: "oraimowatch5-ORA5L73",
    slug: "oraimo-watch-5-lite-bt-calling-ORA5L73",
    legacyId: "gd-03",
    name: "Oraimo Watch 5 Lite BT Calling Smart Watch",
    brand: "Oraimo",
    category: "gadgets",
    categoryLabel: "Gadgets",
    subCategory: "Smartwatches",
    price: 2899,
    originalPrice: 3499,
    discountPercent: 17,
    rating: 4.8,
    reviewCount: 430,
    warranty: "12M Warranty",
    badge: "BT Calling",
    inStock: true,
    stockCount: 60,
    isFlashDeal: false,
    salesCount: 310,
    imagePath: "gadgate/177356237752.webp"
  },
  {
    id: "soundcoreboom3i-SCB30X72",
    slug: "soundcore-boom-3i-speaker-SCB30X72",
    legacyId: "gd-04",
    name: "Soundcore Boom 3i Portable Rugged Outdoor Speaker",
    brand: "Anker",
    category: "gadgets",
    categoryLabel: "Gadgets",
    subCategory: "Wireless Speakers",
    price: 7999,
    originalPrice: 8999,
    discountPercent: 11,
    rating: 4.9,
    reviewCount: 340,
    warranty: "18M Warranty",
    badge: "BassUp 30W",
    inStock: true,
    stockCount: 25,
    isFlashDeal: true,
    salesCount: 280,
    imagePath: "gadgate/17722936726.webp"
  },
  {
    id: "xiaomihub5in1-XMH51X54",
    slug: "xiaomi-5-in-1-type-c-hub-XMH51X54",
    legacyId: "gd-05",
    name: "Xiaomi 5-in-1 Type-C Hub Multi-Port Adapter",
    brand: "Xiaomi",
    category: "gadgets",
    categoryLabel: "Gadgets",
    subCategory: "Charger & Cables",
    price: 2499,
    originalPrice: 2999,
    discountPercent: 17,
    rating: 4.9,
    reviewCount: 610,
    warranty: "12M Warranty",
    badge: "5-in-1 Hub",
    inStock: true,
    stockCount: 75,
    isFlashDeal: false,
    salesCount: 520,
    imagePath: "gadgate/175419717184.webp"
  },
  {
    id: "amazfitbalance-AMZ89X17",
    slug: "amazfit-balance-smart-watch-AMZ89X17",
    legacyId: "gd-06",
    name: "Amazfit Balance Smart Watch with AI Body Composition",
    brand: "Amazfit",
    category: "gadgets",
    categoryLabel: "Gadgets",
    subCategory: "Smartwatches",
    price: 18999,
    originalPrice: 21999,
    discountPercent: 14,
    rating: 4.9,
    reviewCount: 290,
    warranty: "12M Warranty",
    badge: "AI Body Scan",
    inStock: true,
    stockCount: 30,
    isFlashDeal: true,
    salesCount: 240,
    imagePath: "gadgate/178711651886.webp"
  },
  {
    id: "ankerpowerbank-ANK20X17",
    slug: "anker-20000mah-power-bank-ANK20X17",
    legacyId: "gd-07",
    name: "Anker 20000mAh 22.5W Fast Charging Power Bank with Built-in Cable",
    brand: "Anker",
    category: "gadgets",
    categoryLabel: "Gadgets",
    subCategory: "Powerbanks",
    price: 4199,
    originalPrice: 4799,
    discountPercent: 13,
    rating: 5.0,
    reviewCount: 910,
    warranty: "18M Warranty",
    badge: "Built-in Cable",
    inStock: true,
    stockCount: 95,
    isFlashDeal: true,
    salesCount: 780,
    imagePath: "gadgate/177926071728.webp"
  },
  {
    id: "soundcorep20i-SCP20X17",
    slug: "soundcore-p20i-true-wireless-earbuds-SCP20X17",
    legacyId: "gd-08",
    name: "Soundcore by Anker P20i True Wireless Earbuds 10mm Drivers",
    brand: "Anker",
    category: "gadgets",
    categoryLabel: "Gadgets",
    subCategory: "True Wireless Earbuds",
    price: 1999,
    originalPrice: 2499,
    discountPercent: 20,
    rating: 4.8,
    reviewCount: 1450,
    warranty: "18M Warranty",
    badge: "30H Playtime",
    inStock: true,
    stockCount: 140,
    isFlashDeal: false,
    salesCount: 1200,
    imagePath: "gadgate/177926079965.webp"
  },
  {
    id: "remaxfoldingfan-RMXF45X17",
    slug: "remax-pro-folding-desktop-fan-RMXF45X17",
    legacyId: "gd-09",
    name: "Remax Pro Telescopic Folding Desktop Fan with LED Lamp",
    brand: "Remax",
    category: "gadgets",
    categoryLabel: "Gadgets",
    subCategory: "Fans & Climate",
    price: 2199,
    originalPrice: 2699,
    discountPercent: 19,
    rating: 4.7,
    reviewCount: 380,
    warranty: "6M Warranty",
    badge: "Rechargeable",
    inStock: true,
    stockCount: 50,
    isFlashDeal: false,
    salesCount: 310,
    imagePath: "gadgate/178523091986.webp"
  },
  {
    id: "kieslectwatchks-KST88X17",
    slug: "kieslect-calling-watch-ks-KST88X17",
    legacyId: "gd-10",
    name: "Kieslect Calling Watch Ks Pro with 2.01\" AMOLED Display",
    brand: "Kieslect",
    category: "gadgets",
    categoryLabel: "Gadgets",
    subCategory: "Smartwatches",
    price: 6499,
    originalPrice: 7499,
    discountPercent: 13,
    rating: 4.8,
    reviewCount: 470,
    warranty: "12M Warranty",
    badge: "2.01\" AMOLED",
    inStock: true,
    stockCount: 35,
    isFlashDeal: true,
    salesCount: 360,
    imagePath: "gadgate/178711581458.webp"
  },
  {
    id: "lenovothinkplus-LNV3X17",
    slug: "lenovo-thinkplus-k3-mini-speaker-LNV3X17",
    legacyId: "gd-11",
    name: "Lenovo Thinkplus K3 Mini Metal Portable Wireless Speaker",
    brand: "Lenovo",
    category: "gadgets",
    categoryLabel: "Gadgets",
    subCategory: "Wireless Speakers",
    price: 890,
    originalPrice: 1200,
    discountPercent: 26,
    rating: 4.6,
    reviewCount: 190,
    warranty: "12M Warranty",
    badge: "Keyring Mini",
    inStock: true,
    stockCount: 40,
    isFlashDeal: false,
    salesCount: 160,
    imagePath: "gadgate/17886040005.webp"
  },
  {
    id: "oraimodac35-ORA31X17",
    slug: "oraimo-type-c-to-35mm-dac-ORA31X17",
    legacyId: "gd-12",
    name: "Oraimo Type C to 3.5mm Audio Converter (OAA-310)",
    brand: "Oraimo",
    category: "gadgets",
    categoryLabel: "Gadgets",
    subCategory: "Charger & Cables",
    price: 450,
    originalPrice: 550,
    discountPercent: 18,
    rating: 4.9,
    reviewCount: 680,
    warranty: "6M Warranty",
    badge: "DAC Lossless",
    inStock: true,
    stockCount: 120,
    isFlashDeal: false,
    salesCount: 590,
    imagePath: "gadgate/17194681585.webp"
  },

  // =========================================================================
  // AI SHOP SECTION (7 Real AI Subscriptions & Tools from /aishop/)
  // =========================================================================
  {
    id: "chatgptplus1m-GPT4O102",
    slug: "chatgpt-plus-1-month-subscription-GPT4O102",
    legacyId: "ai-01",
    name: "ChatGPT Plus 1 Month Subscription (Private Mail Access)",
    brand: "OpenAI",
    category: "ai-shop",
    categoryLabel: "AI Shop",
    subCategory: "AI Subscriptions",
    price: 1890,
    originalPrice: 2500,
    discountPercent: 24,
    rating: 5.0,
    reviewCount: 940,
    warranty: "1M Warranty",
    badge: "Instant Access",
    inStock: true,
    stockCount: 150,
    isFlashDeal: true,
    salesCount: 820,
    imagePath: "aishop/1022ae29842a223040b19796bb5af7b3.jpg"
  },
  {
    id: "chatgptprodev-GPT5P171",
    slug: "chatgpt-plus-developer-pass-GPT5P171",
    legacyId: "ai-02",
    name: "ChatGPT Plus & GPT-5 Pro Developer Pass (Full Priority)",
    brand: "OpenAI",
    category: "ai-shop",
    categoryLabel: "AI Shop",
    subCategory: "AI Subscriptions",
    price: 3450,
    originalPrice: 4800,
    discountPercent: 28,
    rating: 4.9,
    reviewCount: 610,
    warranty: "3M Warranty",
    badge: "Best Seller",
    inStock: true,
    stockCount: 65,
    isFlashDeal: true,
    salesCount: 540,
    imagePath: "aishop/17197e294f0e7dc8b65a6bc42ab85930.jpg"
  },
  {
    id: "capcutpro-CAP4K248",
    slug: "capcut-pro-full-subscription-CAP4K248",
    legacyId: "ai-03",
    name: "CapCut Pro Full Subscription (PC / Android / iOS)",
    brand: "CapCut",
    category: "ai-shop",
    categoryLabel: "AI Shop",
    subCategory: "AI Video Editing",
    price: 790,
    originalPrice: 1200,
    discountPercent: 34,
    rating: 4.9,
    reviewCount: 1240,
    warranty: "6M Warranty",
    badge: "Trending",
    inStock: true,
    stockCount: 200,
    isFlashDeal: true,
    salesCount: 1100,
    imagePath: "aishop/2481b1b460c317d66432e4b7f57448b4.jpg"
  },
  {
    id: "geminiadvanced-GEM2T531",
    slug: "google-gemini-advanced-2tb-GEM2T531",
    legacyId: "ai-04",
    name: "Google Gemini Advanced 2.5 + 2TB Google One Cloud",
    brand: "Google",
    category: "ai-shop",
    categoryLabel: "AI Shop",
    subCategory: "AI Subscriptions",
    price: 1650,
    originalPrice: 2400,
    discountPercent: 31,
    rating: 4.9,
    reviewCount: 780,
    warranty: "1M Warranty",
    badge: "New Launch",
    inStock: true,
    stockCount: 90,
    isFlashDeal: true,
    salesCount: 670,
    imagePath: "aishop/5310c9a8f6c12eadfaac6e8dfd78ce9c.jpg"
  },
  {
    id: "youtubepremium-YTP6M5D0",
    slug: "youtube-premium-personal-email-YTP6M5D0",
    legacyId: "ai-05",
    name: "YouTube Premium Subscription (Personal Email Activation)",
    brand: "YouTube",
    category: "ai-shop",
    categoryLabel: "AI Shop",
    subCategory: "Media Subscriptions",
    price: 490,
    originalPrice: 850,
    discountPercent: 42,
    rating: 5.0,
    reviewCount: 2150,
    warranty: "6M Warranty",
    badge: "Special Offer",
    inStock: true,
    stockCount: 300,
    isFlashDeal: true,
    salesCount: 1980,
    imagePath: "aishop/5d0dba4cd52f09fff9292935ae43c527.jpg"
  },
  {
    id: "canbaproduct156NBDHJ4",
    slug: "canbaproduct156NBDHJ4",
    legacyId: "ai-06",
    name: "Canva Pro Lifetime / 1-Year Educational & Team Access",
    brand: "Canva",
    category: "ai-shop",
    categoryLabel: "AI Shop",
    subCategory: "Design & Creative AI",
    price: 590,
    originalPrice: 1100,
    discountPercent: 46,
    rating: 4.9,
    reviewCount: 1890,
    warranty: "1Y Warranty",
    badge: "Popular",
    inStock: true,
    stockCount: 250,
    isFlashDeal: false,
    salesCount: 1650,
    imagePath: "aishop/ae99002cf7e77ca9ca66c7ad449aa279.jpg"
  },
  {
    id: "chatgpt3dpro-GPT3D522",
    slug: "chatgpt-plus-3d-pro-edition-GPT3D522",
    legacyId: "ai-07",
    name: "ChatGPT Plus 3D Pro Edition Account (Fast Activation)",
    brand: "OpenAI",
    category: "ai-shop",
    categoryLabel: "AI Shop",
    subCategory: "AI Subscriptions",
    price: 1450,
    originalPrice: 2100,
    discountPercent: 31,
    rating: 4.8,
    reviewCount: 520,
    warranty: "1M Warranty",
    badge: "Fast Delivery",
    inStock: true,
    stockCount: 80,
    isFlashDeal: false,
    salesCount: 430,
    imagePath: "aishop/d522d0b3e697e83ee1103f714226cf9f.jpg"
  },

  // =========================================================================
  // MARKET SECTION (Real Crypto & Trader Apparel from /market/)
  // =========================================================================
  {
    id: "binancevintagetee-BNC99T01",
    slug: "binance-retro-vintage-graphic-tshirt-BNC99T01",
    legacyId: "mk-01",
    name: "Binance Retro Sunset Vintage Graphic T-Shirt (100% Combed Cotton)",
    brand: "Binance Official",
    category: "market",
    categoryLabel: "Market",
    subCategory: "Trader Merch & Apparel",
    price: 790,
    originalPrice: 1250,
    discountPercent: 37,
    rating: 4.9,
    reviewCount: 340,
    warranty: "Color & Print Guarantee",
    badge: "Hot Trader Merch",
    inStock: true,
    stockCount: 120,
    isFlashDeal: true,
    salesCount: 680,
    imagePath: "market/binance-vintage-tee.jpg"
  },
  {
    id: "bybitofficialtee-BYB01T02",
    slug: "bybit-official-trader-lifestyle-tshirt-BYB01T02",
    legacyId: "mk-02",
    name: "Bybit Official Signature Trader Lifestyle T-Shirt",
    brand: "Bybit Official",
    category: "market",
    categoryLabel: "Market",
    subCategory: "Trader Merch & Apparel",
    price: 850,
    originalPrice: 1350,
    discountPercent: 37,
    rating: 5.0,
    reviewCount: 420,
    warranty: "100% Cotton Guarantee",
    badge: "Official Merch",
    inStock: true,
    stockCount: 95,
    isFlashDeal: true,
    salesCount: 520,
    imagePath: "market/bybit-official-tee.png"
  },
  {
    id: "binanceclassicgoldtee-BNC02T03",
    slug: "binance-classic-gold-logo-minimalist-tshirt-BNC02T03",
    legacyId: "mk-03",
    name: "Binance Classic Gold Logo Minimalist Black T-Shirt",
    brand: "Binance Official",
    category: "market",
    categoryLabel: "Market",
    subCategory: "Trader Merch & Apparel",
    price: 750,
    originalPrice: 1199,
    discountPercent: 37,
    rating: 4.8,
    reviewCount: 290,
    warranty: "Anti-Shrink Guarantee",
    badge: "Minimalist",
    inStock: true,
    stockCount: 140,
    isFlashDeal: false,
    salesCount: 410,
    imagePath: "market/binance-classic-tee.png"
  },
  {
    id: "binancetacticalhoodie-BNC03H04",
    slug: "binance-tactical-premium-zipper-hoodie-jacket-BNC03H04",
    legacyId: "mk-04",
    name: "Binance Tactical Premium Zipper Fleece Hoodie Jacket",
    brand: "Binance Official",
    category: "market",
    categoryLabel: "Market",
    subCategory: "Winter & Techwear",
    price: 1850,
    originalPrice: 2600,
    discountPercent: 29,
    rating: 5.0,
    reviewCount: 510,
    warranty: "Thermal Fleece Warranty",
    badge: "Top Seller",
    inStock: true,
    stockCount: 60,
    isFlashDeal: true,
    salesCount: 780,
    imagePath: "market/binance-tactical-hoodie.png"
  },
  {
    id: "nomadxbackpack-NMD28X02",
    slug: "nomad-x-modular-urban-tech-backpack-NMD28X02",
    legacyId: "mk-05",
    name: "Nomad X Modular Urban Tech Backpack 28L",
    brand: "Nomad X",
    category: "market",
    categoryLabel: "Market",
    subCategory: "Lifestyle & Gear",
    price: 4999,
    originalPrice: 6500,
    discountPercent: 23,
    rating: 4.9,
    reviewCount: 450,
    warranty: "5 Year Warranty",
    badge: "Cordura 1000D",
    inStock: true,
    stockCount: 50,
    isFlashDeal: false,
    salesCount: 380,
    imageType: "backpack"
  },
  {
    id: "matrixtitaniumwallet-MTW01X03",
    slug: "matrix-titanium-rfid-blocking-wallet-MTW01X03",
    legacyId: "mk-06",
    name: "Matrix Titanium RFID-Blocking Modular Wallet",
    brand: "Matrix Tech",
    category: "market",
    categoryLabel: "Market",
    subCategory: "Everyday Carry",
    price: 1899,
    originalPrice: 2500,
    discountPercent: 24,
    rating: 4.7,
    reviewCount: 310,
    warranty: "Lifetime Warranty",
    badge: "Grade 5 Titanium",
    inStock: true,
    stockCount: 65,
    isFlashDeal: false,
    salesCount: 290,
    imageType: "wallet"
  }
];

// Helper to look up a product by id, slug, or legacy id
function findProduct(idOrSlug) {
  if (!idOrSlug) return null;
  const target = String(idOrSlug).toLowerCase().trim();
  return products.find(p => 
    p.id.toLowerCase() === target ||
    (p.slug && p.slug.toLowerCase() === target) ||
    (p.legacyId && p.legacyId.toLowerCase() === target)
  );
}

// API Endpoints
app.get('/api/products', (req, res) => {
  const { category, search, sort, maxPrice, inStockOnly } = req.query;
  let result = [...products];

  if (category && category !== 'all') {
    result = result.filter(p => p.category === category);
  }

  if (search) {
    const q = search.toLowerCase().trim();
    result = result.filter(p => 
      p.name.toLowerCase().includes(q) ||
      (p.brand && p.brand.toLowerCase().includes(q)) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.subCategory.toLowerCase().includes(q) ||
      (p.badge && p.badge.toLowerCase().includes(q)) ||
      p.id.toLowerCase().includes(q)
    );
  }

  if (maxPrice) {
    result = result.filter(p => p.price <= parseFloat(maxPrice));
  }

  if (inStockOnly === 'true') {
    result = result.filter(p => p.inStock);
  }

  if (sort) {
    if (sort === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'discount') {
      result.sort((a, b) => b.discountPercent - a.discountPercent);
    }
  }

  res.json({
    success: true,
    total: result.length,
    products: result
  });
});

app.get('/api/products/:id', (req, res) => {
  const product = findProduct(req.params.id);
  if (!product) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }
  res.json({ success: true, product });
});

app.post('/api/checkout', (req, res) => {
  const { items, customer, couponCode } = req.body;
  if (!items || !items.length) {
    return res.status(400).json({ success: false, message: "Cart is empty" });
  }

  const orderId = 'MV-' + Math.floor(100000 + Math.random() * 900000);
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = couponCode === 'NEXUS20' ? subtotal * 0.20 : 0;
  const shipping = subtotal >= 10000 ? 0 : 120;
  const total = Math.round(subtotal - discount + shipping);

  res.json({
    success: true,
    message: "Order placed successfully!",
    order: {
      orderId,
      orderDate: new Date().toLocaleDateString(),
      items,
      total,
      customer: customer || { name: "Tanvir Ahmed", phone: "01711223344" }
    }
  });
});

// Admin Route
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// SPA Catch-All Client-Side Route Handler:
// Serves index.html for all front-end paths such as /product/:id, /category/:cat, or direct /canbaproduct156NBDHJ4
app.get(['/track-order.bd', '/track-order', '/product/:id', '/category/:cat', '/store', '/p/:id'], (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/:productId', (req, res, next) => {
  const pid = req.params.productId;
  // If static file request (has extension) or starts with api, pass to static/api handlers
  if (pid.includes('.') || pid.startsWith('api')) {
    return next();
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Universal fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Motion View Storefront Running on http://localhost:${PORT}`);
});
