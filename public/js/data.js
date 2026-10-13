/**
 * Motion View Official Catalog with Real Gadget Images & Unique Product IDs
 * Zero Emojis Policy - Real WebP Images & Fallback Vector Renderers
 */

function getProductSVG(type, name) {
  const baseGrad = `
    <defs>
      <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284c7" />
        <stop offset="100%" stop-color="#38bdf8" />
      </linearGradient>
      <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#7c3aed" />
        <stop offset="100%" stop-color="#a855f7" />
      </linearGradient>
      <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ea580c" />
        <stop offset="100%" stop-color="#f97316" />
      </linearGradient>
      <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#0f172a" flood-opacity="0.08"/>
      </filter>
    </defs>
  `;

  let inner = "";

  switch (type) {
    case "jacket":
      inner = `
        <rect width="360" height="260" rx="12" fill="#ffffff"/>
        <path d="M 130 55 L 80 95 L 105 130 L 125 115 L 125 210 L 235 210 L 235 115 L 255 130 L 280 95 L 230 55 Z" fill="#1e293b" filter="url(#soft-shadow)"/>
        <line x1="180" y1="80" x2="180" y2="210" stroke="#f97316" stroke-width="3"/>
        <rect x="140" y="110" width="30" height="35" rx="4" fill="#334155"/>
        <rect x="190" y="110" width="30" height="35" rx="4" fill="#334155"/>
      `;
      break;

    case "backpack":
      inner = `
        <rect width="360" height="260" rx="12" fill="#ffffff"/>
        <rect x="110" y="55" width="140" height="155" rx="24" fill="#1e293b" filter="url(#soft-shadow)"/>
        <rect x="140" y="38" width="80" height="18" rx="8" fill="#334155"/>
        <path d="M 125 90 L 235 90" stroke="#0284c7" stroke-width="2.5"/>
      `;
      break;

    case "wallet":
      inner = `
        <rect width="360" height="260" rx="12" fill="#ffffff"/>
        <rect x="90" y="65" width="180" height="130" rx="14" fill="#1e293b" filter="url(#soft-shadow)"/>
        <rect x="110" y="85" width="140" height="90" rx="8" fill="#334155"/>
        <path d="M 165 115 Q 180 105 195 115" stroke="#64748b" stroke-width="3" fill="none"/>
      `;
      break;

    case "hoodie":
      inner = `
        <rect width="360" height="260" rx="12" fill="#ffffff"/>
        <path d="M 120 70 L 65 105 L 90 145 L 115 125 L 115 210 L 245 210 L 245 125 L 270 145 L 295 105 L 240 70 Z" fill="#1e293b" filter="url(#soft-shadow)"/>
        <polygon points="180,95 200,125 160,125" fill="#7c3aed"/>
      `;
      break;

    default:
      inner = `
        <rect width="360" height="260" rx="12" fill="#ffffff"/>
        <circle cx="180" cy="130" r="45" fill="#f1f5f9"/>
      `;
  }

  return `<svg viewBox="0 0 360 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="product-svg-art" aria-label="${name}">${baseGrad}${inner}</svg>`;
}

const PRODUCT_CATALOG = [
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
    shortDescription: "Ultra-compact foldable 45W GaN charger with real-time OLED power display.",
    fullDescription: "Supercharge your devices with Anker GaN II technology. Delivers 45W single-port PD 3.0 output with a 180-degree folding pin mechanism and crisp live wattage display.",
    price: 3999,
    originalPrice: 4499,
    discountPercent: 11,
    rating: 5.0,
    reviewCount: 780,
    warranty: "18M Warranty",
    badge: "180° Foldable",
    badgeColor: "cyan",
    inStock: true,
    stockCount: 85,
    isFlashDeal: true,
    salesCount: 650,
    imagePath: "gadgate/177926078848.webp",
    specs: [
      { key: "Output Power", value: "45W Max USB-C PD 3.0" },
      { key: "Folding Mechanism", value: "180-Degree Multi-Angle Foldable Pin" },
      { key: "Display", value: "Real-Time OLED Dynamic Wattage Monitor" }
    ]
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
    shortDescription: "Rugged GPS outdoor smartwatch with AMOLED HD touch display and 100+ sport modes.",
    fullDescription: "Engineered for adventure and endurance. Features built-in multi-satellite GPS, high-resolution AMOLED display, heart rate and SpO2 tracking, and 15-day battery life.",
    price: 4999,
    originalPrice: 5999,
    discountPercent: 17,
    rating: 4.9,
    reviewCount: 520,
    warranty: "12M Warranty",
    badge: "GPS AMOLED",
    badgeColor: "orange",
    inStock: true,
    stockCount: 42,
    isFlashDeal: true,
    salesCount: 390,
    imagePath: "gadgate/178711751745.webp",
    specs: [
      { key: "Display", value: "1.43-inch Ultra AMOLED (466x466)" },
      { key: "GPS", value: "Standalone Multi-Satellite Dual-Band GPS" },
      { key: "Water Resistance", value: "IP68 & 3 ATM Dive Certified" }
    ]
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
    shortDescription: "Large 1.95-inch HD Bluetooth calling smartwatch with comprehensive health sensors.",
    fullDescription: "Stay connected in style with HD Bluetooth voice calling, an expansive 1.95-inch vibrant screen, 24-hour heart rate and sleep analytics, and 12-day battery backup.",
    price: 2899,
    originalPrice: 3499,
    discountPercent: 17,
    rating: 4.8,
    reviewCount: 430,
    warranty: "12M Warranty",
    badge: "BT Calling",
    badgeColor: "purple",
    inStock: true,
    stockCount: 60,
    isFlashDeal: false,
    salesCount: 310,
    imagePath: "gadgate/177356237752.webp",
    specs: [
      { key: "Screen", value: "1.95-inch HD 2.5D Curved Glass" },
      { key: "Calling", value: "Single-Chip Bluetooth 5.3 HD Calls" }
    ]
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
    shortDescription: "Heavy bass waterproof outdoor speaker with RGB pulse lighting and carry strap.",
    fullDescription: "Take concert sound anywhere. The Soundcore Boom 3i delivers 30W thumping bass, BassUp technology, dynamic RGB music sync lighting, IPX7 full waterproof protection, and 16-hour playtime.",
    price: 7999,
    originalPrice: 8999,
    discountPercent: 11,
    rating: 4.9,
    reviewCount: 340,
    warranty: "18M Warranty",
    badge: "BassUp 30W",
    badgeColor: "orange",
    inStock: true,
    stockCount: 25,
    isFlashDeal: true,
    salesCount: 280,
    imagePath: "gadgate/17722936726.webp",
    specs: [
      { key: "Audio Output", value: "30W Pure Stereo + Dual Passive Radiators" },
      { key: "Waterproof", value: "IPX7 Float & Submerge Safe" }
    ]
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
    shortDescription: "Aluminum alloy 5-in-1 USB-C docking hub with 4K HDMI, USB 3.0, and 100W PD passthrough.",
    fullDescription: "Expand your laptop or tablet with ultra-fast 5Gbps USB-A ports, 4K@60Hz HDMI video output, and 100W Power Delivery high-speed charging in a precision unibody aluminum enclosure.",
    price: 2499,
    originalPrice: 2999,
    discountPercent: 17,
    rating: 4.9,
    reviewCount: 610,
    warranty: "12M Warranty",
    badge: "5-in-1 Hub",
    badgeColor: "cyan",
    inStock: true,
    stockCount: 75,
    isFlashDeal: false,
    salesCount: 520,
    imagePath: "gadgate/175419717184.webp",
    specs: [
      { key: "Ports", value: "3x USB 3.0, 1x HDMI 4K 60Hz, 1x USB-C PD 100W" },
      { key: "Material", value: "Anodized Aerospace Aluminum Alloy" }
    ]
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
    shortDescription: "Flagship smartwatch with AI Readiness Score, body composition analysis, and offline maps.",
    fullDescription: "Balance body and mind with Amazfit Balance. Measures fat percentage, muscle mass, BMI, water level, sleep quality readiness, and Dual-band circular polarized GPS navigation.",
    price: 18999,
    originalPrice: 21999,
    discountPercent: 14,
    rating: 4.9,
    reviewCount: 290,
    warranty: "12M Warranty",
    badge: "AI Body Scan",
    badgeColor: "purple",
    inStock: true,
    stockCount: 30,
    isFlashDeal: true,
    salesCount: 240,
    imagePath: "gadgate/d5d79b9e92c40d6e8eb49c750278e787.webp",
    specs: [
      { key: "Body Composition", value: "BIA Bio-Impedance Sensor" },
      { key: "Display", value: "1.5-inch HD AMOLED 1500 nits Peak" }
    ]
  },
  {
    id: "ankerpowerbank-ANK20X17",
    slug: "anker-20000mah-power-bank-ANK20X17",
    legacyId: "gd-07",
    name: "Anker 20000mAh 22.5W Fast Charging Power Bank with Digital Display",
    brand: "Anker",
    category: "gadgets",
    categoryLabel: "Gadgets",
    subCategory: "Powerbanks",
    shortDescription: "Massive 20,000mAh portable charger with digital LED battery percentage readout.",
    fullDescription: "Never run out of battery on the road. Provides 22.5W high-speed charging, digital percentage display, multi-device charging, and an integrated durable USB-C lanyard cable.",
    price: 4199,
    originalPrice: 4799,
    discountPercent: 13,
    rating: 5.0,
    reviewCount: 910,
    warranty: "18M Warranty",
    badge: "Digital Display",
    badgeColor: "orange",
    inStock: true,
    stockCount: 95,
    isFlashDeal: true,
    salesCount: 780,
    imagePath: "gadgate/2c3f657842d1d8057ffd8e1670eda240.webp",
    specs: [
      { key: "Capacity", value: "20,000mAh High-Density Polymer" },
      { key: "Output", value: "22.5W Max Quick Charge 3.0 & PD" }
    ]
  },
  {
    id: "soundcorep20i-SCP20X17",
    slug: "wgp-mini-ups-router-backup-WGP10X12",
    legacyId: "gd-08",
    name: "WGP 5V/9V/12V Mini UPS for Wi-Fi Router & ONU (10400mAh)",
    brand: "WGP",
    category: "gadgets",
    categoryLabel: "Gadgets",
    subCategory: "Power & Backup",
    shortDescription: "Reliable 10400mAh multi-voltage backup for WiFi router, ONU, and CCTV cameras.",
    fullDescription: "Say goodbye to internet interruptions during power outages. Delivers 5V, 9V, and 12V output simultaneously with 7-8 hours continuous backup for Wi-Fi routers and ONU devices.",
    price: 1999,
    originalPrice: 2499,
    discountPercent: 20,
    rating: 4.9,
    reviewCount: 1450,
    warranty: "12M Warranty",
    badge: "8H Backup",
    badgeColor: "cyan",
    inStock: true,
    stockCount: 140,
    isFlashDeal: true,
    salesCount: 1200,
    imagePath: "gadgate/ccaa579ea20086caf2cdec1973acca59.webp",
    specs: [
      { key: "Output Voltage", value: "5V, 9V, 12V DC Multi-Output" },
      { key: "Battery Capacity", value: "10,400mAh Heavy Duty Cells" }
    ]
  },
  {
    id: "remaxfoldingfan-RMXF45X17",
    slug: "nova-electric-room-heater-fan-NVA1204",
    legacyId: "gd-09",
    name: "NOVA Electric Room Heater & Cooling Fan 2000W (REP-1204A)",
    brand: "NOVA",
    category: "gadgets",
    categoryLabel: "Gadgets",
    subCategory: "Fans & Climate",
    shortDescription: "Dual heat and cool fan mode with 2000W rapid heating and overheat safety protection.",
    fullDescription: "Stay warm in winter and cool in summer. Features instant thermal ceramic heating, adjustable dual power knob, overheat cutoff protection, and whisper-quiet convection circulation.",
    price: 2199,
    originalPrice: 2699,
    discountPercent: 19,
    rating: 4.8,
    reviewCount: 380,
    warranty: "6M Warranty",
    badge: "Warmth & Cool",
    badgeColor: "orange",
    inStock: true,
    stockCount: 50,
    isFlashDeal: false,
    salesCount: 310,
    imagePath: "gadgate/6eedeb1a725ed321c010ab709f5c0de5.webp",
    specs: [
      { key: "Power Modes", value: "1000W / 2000W Dual Temperature" },
      { key: "Safety", value: "Automatic Overheat Shut-Off Sensor" }
    ]
  },
  {
    id: "kieslectwatchks-KST88X17",
    slug: "casio-enticer-analog-mens-watch-CAS05X1",
    legacyId: "gd-10",
    name: "Casio Enticer Royal Blue Dial Stainless Steel Men's Watch",
    brand: "Casio",
    category: "gadgets",
    categoryLabel: "Gadgets",
    subCategory: "Smartwatches",
    shortDescription: "Classic royal sunray blue dial with stainless steel link bracelet and day-date display.",
    fullDescription: "Timeless elegance crafted with precision quartz Japanese movement, scratch-resistant mineral glass, 50-meter water resistance, and luminous hands.",
    price: 4999,
    originalPrice: 5800,
    discountPercent: 14,
    rating: 4.9,
    reviewCount: 470,
    warranty: "2Y Warranty",
    badge: "Original Casio",
    badgeColor: "purple",
    inStock: true,
    stockCount: 35,
    isFlashDeal: true,
    salesCount: 360,
    imagePath: "gadgate/052fd0b0736ddfbd2171540750e25ad3.webp",
    specs: [
      { key: "Movement", value: "Japanese Precision Quartz" },
      { key: "Water Resistance", value: "50M (5 Bar) Waterproof" }
    ]
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
    shortDescription: "Pocket-sized aluminum alloy Bluetooth 5.0 mini speaker with 360° surround audio.",
    fullDescription: "Ultra-compact metal cylinder design fitting right in your palm. Delivers crisp clear vocals, deep bass diaphragm, hands-free calling mic, and 6-hour continuous battery.",
    price: 890,
    originalPrice: 1200,
    discountPercent: 26,
    rating: 4.6,
    reviewCount: 190,
    warranty: "12M Warranty",
    badge: "Keyring Mini",
    badgeColor: "purple",
    inStock: true,
    stockCount: 40,
    isFlashDeal: false,
    salesCount: 160,
    imagePath: "gadgate/17886040005.webp",
    specs: [
      { key: "Weight", value: "110 Grams Ultra-Lightweight" },
      { key: "Design", value: "Circular Metal Grill + Keyring Carabiner" }
    ]
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
    shortDescription: "Lossless DAC digital audio converter adapter for Type-C smartphones and tablets.",
    fullDescription: "Enjoy studio-grade high-fidelity audio on devices without a headphone jack. Integrated digital DAC chip supports 24-bit/96kHz lossless audio and wire mic controls.",
    price: 450,
    originalPrice: 550,
    discountPercent: 18,
    rating: 4.9,
    reviewCount: 680,
    warranty: "6M Warranty",
    badge: "DAC Lossless",
    badgeColor: "cyan",
    inStock: true,
    stockCount: 120,
    isFlashDeal: false,
    salesCount: 590,
    imagePath: "gadgate/17194681585.webp",
    specs: [
      { key: "DAC Resolution", value: "24-Bit / 96kHz High-Res Audio" },
      { key: "Compatibility", value: "Universal Type-C Devices & Earphones" }
    ]
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
    shortDescription: "Official OpenAI ChatGPT Plus access with GPT-4o, DALL-E 3, Canvas, and Advanced Voice.",
    fullDescription: "Experience the full power of OpenAI ChatGPT Plus on your private mail. Enjoy uninterrupted priority access to GPT-4o, DALL-E 3 high-res image generation, custom GPT creation, Code Interpreter, and ultra-fast Advanced Voice Mode.",
    price: 1890,
    originalPrice: 2500,
    discountPercent: 24,
    rating: 5.0,
    reviewCount: 940,
    warranty: "1M Warranty",
    badge: "Instant Access",
    badgeColor: "cyan",
    inStock: true,
    stockCount: 150,
    isFlashDeal: true,
    salesCount: 820,
    imagePath: "aishop/1022ae29842a223040b19796bb5af7b3.jpg",
    specs: [
      { key: "Account Type", value: "Private Email Dedicated Login" },
      { key: "Model Access", value: "GPT-4o, DALL-E 3 & Canvas" },
      { key: "Activation", value: "Instant 5-Minute Delivery" }
    ]
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
    shortDescription: "High-token developer access package with high-speed browsing and custom GPTs.",
    fullDescription: "Designed for power users, coders, and developers. Provides high-throughput tokens, zero rate-limit throttling during peak hours, full Python code sandbox execution, and early access beta model previews.",
    price: 3450,
    originalPrice: 4800,
    discountPercent: 28,
    rating: 4.9,
    reviewCount: 610,
    warranty: "3M Warranty",
    badge: "Best Seller",
    badgeColor: "purple",
    inStock: true,
    stockCount: 65,
    isFlashDeal: true,
    salesCount: 540,
    imagePath: "aishop/17197e294f0e7dc8b65a6bc42ab85930.jpg",
    specs: [
      { key: "Access Tier", value: "Pro Developer High-Speed Pass" },
      { key: "Token Limit", value: "High-Capacity Context Windows" },
      { key: "Tools", value: "Code Interpreter & Web Browsing" }
    ]
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
    shortDescription: "CapCut Pro Video Editor full unlock with 4K 60FPS export and AI Auto-Captions.",
    fullDescription: "Unleash your video editing potential with CapCut Pro. Unlocks 4K 60FPS export, smart AI Auto-Captions with custom styling, pro transitions, dynamic body effects, multi-track audio cleanup, and cloud storage.",
    price: 790,
    originalPrice: 1200,
    discountPercent: 34,
    rating: 4.9,
    reviewCount: 1240,
    warranty: "6M Warranty",
    badge: "Trending",
    badgeColor: "orange",
    inStock: true,
    stockCount: 200,
    isFlashDeal: true,
    salesCount: 1100,
    imagePath: "aishop/2481b1b460c317d66432e4b7f57448b4.jpg",
    specs: [
      { key: "Devices", value: "PC, Windows, Mac, Android & iOS" },
      { key: "Export Quality", value: "4K 60FPS High Bitrate (No Watermark)" },
      { key: "AI Tools", value: "AI Auto-Captions & Background Removal" }
    ]
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
    shortDescription: "Google Gemini Advanced 2.5 Pro with Veo 3 Video Gen, Imagen 3, and 2TB Cloud Storage.",
    fullDescription: "Access Google's flagship AI model Gemini Advanced 2.5 featuring 1 Million token context window, Imagen 3 photorealistic generation, Veo 3 AI video tools, plus 2TB Google One cloud storage for Gmail, Drive, and Photos.",
    price: 1650,
    originalPrice: 2400,
    discountPercent: 31,
    rating: 4.9,
    reviewCount: 780,
    warranty: "1M Warranty",
    badge: "New Launch",
    badgeColor: "cyan",
    inStock: true,
    stockCount: 90,
    isFlashDeal: true,
    salesCount: 670,
    imagePath: "aishop/5310c9a8f6c12eadfaac6e8dfd78ce9c.jpg",
    specs: [
      { key: "Cloud Storage", value: "2TB Official Google One Space" },
      { key: "Context Window", value: "1 Million Tokens Multimodal" },
      { key: "AI Suite", value: "Gemini 2.5 Pro, Imagen 3 & Veo 3" }
    ]
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
    shortDescription: "100% Personal Email YouTube Premium with Ad-free playback, background play & YouTube Music.",
    fullDescription: "Upgrade your own existing Google/YouTube account to YouTube Premium. 100% ad-free video streaming across all smart TVs and smartphones, seamless background audio playback, offline video downloads, and YouTube Music Premium included.",
    price: 490,
    originalPrice: 850,
    discountPercent: 42,
    rating: 5.0,
    reviewCount: 2150,
    warranty: "6M Warranty",
    badge: "Special Offer",
    badgeColor: "orange",
    inStock: true,
    stockCount: 300,
    isFlashDeal: true,
    salesCount: 1980,
    imagePath: "aishop/5d0dba4cd52f09fff9292935ae43c527.jpg",
    specs: [
      { key: "Activation", value: "Activated on Your Own Personal Email" },
      { key: "Features", value: "Ad-Free + Background Audio + Offline Downloads" },
      { key: "Music", value: "YouTube Music Premium Included" }
    ]
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
    shortDescription: "Canva Pro official unlock with Magic Studio AI tools, 100M+ premium stock photos & Brand Kits.",
    fullDescription: "Design without limits with Canva Pro. Gain access to Magic Studio AI (Magic Expand, Magic Eraser, Magic Morph), 100M+ premium royalty-free photos, templates, videos, font library, brand kits, and 1-click transparent background remover.",
    price: 590,
    originalPrice: 1100,
    discountPercent: 46,
    rating: 4.9,
    reviewCount: 1890,
    warranty: "1Y Warranty",
    badge: "Popular",
    badgeColor: "purple",
    inStock: true,
    stockCount: 250,
    isFlashDeal: false,
    salesCount: 1650,
    imagePath: "aishop/ae99002cf7e77ca9ca66c7ad449aa279.jpg",
    specs: [
      { key: "AI Suite", value: "Canva Magic Studio AI Tools Full Access" },
      { key: "Library", value: "100 Million+ Premium Photos & Vectors" },
      { key: "Features", value: "1-Click Background Remover & Brand Kit" }
    ]
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
    shortDescription: "Pre-configured ChatGPT Plus account with full plugin ecosystem and reasoning capabilities.",
    fullDescription: "Fast-delivery ChatGPT Plus verified account. Ready-to-use with instant credentials, access to custom GPTs, reasoning models, multimodal voice/image chat, and automatic backup recovery support.",
    price: 1450,
    originalPrice: 2100,
    discountPercent: 31,
    rating: 4.8,
    reviewCount: 520,
    warranty: "1M Warranty",
    badge: "Fast Delivery",
    badgeColor: "cyan",
    inStock: true,
    stockCount: 80,
    isFlashDeal: false,
    salesCount: 430,
    imagePath: "aishop/d522d0b3e697e83ee1103f714226cf9f.jpg",
    specs: [
      { key: "Delivery", value: "Instant Credentials Auto Delivery" },
      { key: "Features", value: "Full GPT-4o Reasoning & Image Tools" },
      { key: "Support", value: "24/7 Replacement Guarantee" }
    ]
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
    shortDescription: "Premium 220 GSM breathable combed cotton t-shirt with retro sunset Binance gold emblem.",
    fullDescription: "Premium quality crypto streetwear designed for traders and enthusiasts. Crafted with 100% heavy combed organic cotton, high-density screen print that does not fade, pre-shrunk fabric, and comfortable rib collar.",
    price: 790,
    originalPrice: 1250,
    discountPercent: 37,
    rating: 4.9,
    reviewCount: 340,
    warranty: "Color & Print Guarantee",
    badge: "Hot Trader Merch",
    badgeColor: "orange",
    inStock: true,
    stockCount: 120,
    isFlashDeal: true,
    salesCount: 680,
    imagePath: "market/binance-vintage-tee.jpg",
    specs: [
      { key: "Material", value: "220 GSM Heavy Combed Cotton" },
      { key: "Print", value: "High-Density Fade-Proof Screen Print" },
      { key: "Fit", value: "Regular Comfort Streetwear Fit" },
      { key: "Care", value: "Machine Wash Cold, Inside Out" }
    ]
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
    shortDescription: "Sleek minimalistic Bybit crypto trader tee made with premium organic soft-touch cotton.",
    fullDescription: "Represent the premier crypto exchange in style. Made with ultra-soft breathable cotton-poly blend, modern tailored streetwear cut, moisture-wicking properties, and iconic Bybit signature orange accent brand styling.",
    price: 850,
    originalPrice: 1350,
    discountPercent: 37,
    rating: 5.0,
    reviewCount: 420,
    warranty: "100% Cotton Guarantee",
    badge: "Official Merch",
    badgeColor: "orange",
    inStock: true,
    stockCount: 95,
    isFlashDeal: true,
    salesCount: 520,
    imagePath: "market/bybit-official-tee.png",
    specs: [
      { key: "Material", value: "210 GSM Compact Soft Organic Cotton" },
      { key: "Style", value: "Official Crypto Trader Streetwear" },
      { key: "Fit", value: "Tailored Modern Regular Fit" },
      { key: "Comfort", value: "Breathable & Sweat Absorbent" }
    ]
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
    shortDescription: "Minimalist chest-printed Binance gold icon tee with premium anti-pilling fabric.",
    fullDescription: "Clean, elegant, and timeless design featuring the iconic Binance diamond logo in signature metallic gold print. Double-needle stitching throughout for enhanced durability and premium feel.",
    price: 750,
    originalPrice: 1199,
    discountPercent: 37,
    rating: 4.8,
    reviewCount: 290,
    warranty: "Anti-Shrink Guarantee",
    badge: "Minimalist",
    badgeColor: "purple",
    inStock: true,
    stockCount: 140,
    isFlashDeal: false,
    salesCount: 410,
    imagePath: "market/binance-classic-tee.png",
    specs: [
      { key: "Material", value: "100% Combed Compact Cotton 200 GSM" },
      { key: "Detailing", value: "Metallic Gold Binance Diamond Chest Logo" },
      { key: "Neckline", value: "Reinforced Crew Neck Ribbing" },
      { key: "Stitching", value: "Double-needle Hem & Sleeves" }
    ]
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
    shortDescription: "Heavyweight fleece tactical zipper hoodie with chest pocket, thumbholes & embroidered Binance logo.",
    fullDescription: "Engineered for winter comfort and crypto trader lifestyle. Crafted from 380 GSM thermal brushed heavyweight fleece with waterproof YKK zipper chest pocket, contrast orange pull-tabs, full back Binance print, and double-layered warm hood.",
    price: 1850,
    originalPrice: 2600,
    discountPercent: 29,
    rating: 5.0,
    reviewCount: 510,
    warranty: "Thermal Fleece Warranty",
    badge: "Top Seller",
    badgeColor: "cyan",
    inStock: true,
    stockCount: 60,
    isFlashDeal: true,
    salesCount: 780,
    imagePath: "market/binance-tactical-hoodie.png",
    specs: [
      { key: "Fabric", value: "380 GSM Heavyweight Brushed Fleece" },
      { key: "Features", value: "Tactical Zipper Chest Pocket & Orange Pulls" },
      { key: "Design", value: "Dual Chest Embroidery & Big Back Print" },
      { key: "Hood", value: "Adjustable Drawcord Double-Layer Hood" }
    ]
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
    shortDescription: "Cordura 1000D pack with magnetic Fidlock buckles and 17-inch laptop armor.",
    fullDescription: "Built with ballistic Cordura 1000D fabric, German Fidlock magnetic fasteners, and suspended EVA workstation sleeve.",
    price: 4999,
    originalPrice: 6500,
    discountPercent: 23,
    rating: 4.9,
    reviewCount: 450,
    warranty: "5 Year Warranty",
    badge: "Cordura 1000D",
    badgeColor: "cyan",
    inStock: true,
    stockCount: 50,
    isFlashDeal: false,
    salesCount: 380,
    imagePath: "market/nomad-backpack.jpg",
    specs: [
      { key: "Capacity", value: "28 Liters (Expandable)" },
      { key: "Laptop Sleeve", value: "Suspended EVA up to 17.3-inch" }
    ]
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
    shortDescription: "Aerospace-grade Grade 5 titanium cardholder with RFID protection and money clip.",
    fullDescription: "Precision CNC milled from aerospace Grade 5 titanium. Holds up to 12 cards securely with dual RFID blocking plates, integrated manganese money clip, and bottle opener.",
    price: 1899,
    originalPrice: 2500,
    discountPercent: 24,
    rating: 4.7,
    reviewCount: 310,
    warranty: "Lifetime Warranty",
    badge: "Grade 5 Titanium",
    badgeColor: "purple",
    inStock: true,
    stockCount: 65,
    isFlashDeal: false,
    salesCount: 290,
    imagePath: "market/matrix-wallet.jpg",
    specs: [
      { key: "Material", value: "Aerospace Grade 5 Titanium" },
      { key: "Protection", value: "13.56 MHz Dual RFID Shielding" }
    ]
  }
];

// Load any custom products or overrides saved via /admin
try {
  const customProducts = JSON.parse(localStorage.getItem('motionview_custom_products') || '[]');
  if (Array.isArray(customProducts) && customProducts.length > 0) {
    customProducts.forEach(cp => {
      const existingIdx = PRODUCT_CATALOG.findIndex(p => p.id === cp.id);
      if (existingIdx > -1) {
        PRODUCT_CATALOG[existingIdx] = { ...PRODUCT_CATALOG[existingIdx], ...cp };
      } else {
        PRODUCT_CATALOG.unshift(cp);
      }
    });
  }
} catch (e) {
  console.warn("Custom products load error:", e);
}

// Helper to look up any product by ID, Slug, or Legacy ID
function findProduct(idOrSlug) {
  if (!idOrSlug) return null;
  const target = String(idOrSlug).toLowerCase().trim();
  return PRODUCT_CATALOG.find(p => 
    p.id.toLowerCase() === target ||
    (p.slug && p.slug.toLowerCase() === target) ||
    (p.legacyId && p.legacyId.toLowerCase() === target)
  );
}

// Visual Renderer (Checks real WebP/JPG first, then vector SVG)
window.renderProductVisual = function(product, customClass = "") {
  if (product && product.imagePath) {
    const src = (product.imagePath.startsWith('/') || product.imagePath.startsWith('http') || product.imagePath.startsWith('data:')) ? product.imagePath : '/' + product.imagePath;
    return `<img src="${src}" alt="${product.name}" class="w-full h-full object-contain ${customClass}" loading="lazy" onerror="this.outerHTML=getProductSVG('${product.imageType || 'default'}', '${product.name}')"/>`;
  }
  return getProductSVG((product && product.imageType) || 'default', (product && product.name) || 'Product');
};

window.PRODUCT_CATALOG = PRODUCT_CATALOG;
window.findProduct = findProduct;

