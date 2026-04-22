// ============================================================
// FIREBASE CONFIGURATION — Reemplaza con tus credenciales
// https://console.firebase.google.com
// ============================================================
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// ============================================================
// DEMO DATA — Productos de muestra (reemplaza con Firestore)
// ============================================================
const DEMO_PRODUCTS = [
  {
    id: 'p001', name: 'Studio Fix Fluid Foundation', brand: 'MAC', brandId: 'mac',
    category: 'Base', categoryId: 'bases',
    price: 38, stock: 25, featured: true, bestseller: true,
    description: 'Base líquida de cobertura total con acabado mate. SPF 15. Formulada para durar todo el día sin retoque.',
    images: ['https://images.unsplash.com/photo-1586495777744-4e6232bf2176?w=400&q=80'],
    shades: ['#F5E6D3','#E8C9A0','#D4A574','#C08050','#9A6040','#7A4030','#5A2820'],
    shadeNames: ['NW10','NW20','NW30','NW35','N40','N45','N50'],
    tags: ['cobertura total','mate','SPF15'], rating: 4.8, reviews: 234
  },
  {
    id: 'p002', name: 'Retro Matte Lipstick', brand: 'MAC', brandId: 'mac',
    category: 'Labios', categoryId: 'labios',
    price: 22, stock: 40, featured: true, bestseller: true,
    description: 'Labial mate de larga duración. Fórmula cremosa con cobertura intensa en un solo toque.',
    images: ['https://images.unsplash.com/photo-1617897903246-719242758050?w=400&q=80'],
    shades: ['#C41E3A','#8B0000','#FF69B4','#DC143C','#B22222','#E75480','#FF6347'],
    shadeNames: ['Ruby Woo','Russian Red','Pink Nouveau','Lady Danger','Chili','D for Danger','Morange'],
    tags: ['mate','larga duración'], rating: 4.9, reviews: 567
  },
  {
    id: 'p003', name: 'Butter Gloss', brand: 'NYX', brandId: 'nyx',
    category: 'Labios', categoryId: 'labios',
    price: 10, stock: 60, featured: true, bestseller: false,
    description: 'Brillo labial ultra-hidratante con acabado brillante. Textura mantequilla que nutre y da volumen.',
    images: ['https://images.unsplash.com/photo-1631214499644-c6d8af5fa259?w=400&q=80'],
    shades: ['#FFB6C1','#FF69B4','#FFC0CB','#FFD700','#FF7F50','#DB7093'],
    shadeNames: ['Angel Food','Strawberry Cheesecake','Creme Brulee','Tiramisu','Peach Cobbler','Cherry Pie'],
    tags: ['brillo','hidratante','volumen'], rating: 4.6, reviews: 189
  },
  {
    id: 'p004', name: 'Fit Me Matte+Poreless Foundation', brand: 'Maybelline', brandId: 'maybelline',
    category: 'Base', categoryId: 'bases',
    price: 14, stock: 55, featured: false, bestseller: true,
    description: 'Base de cobertura media con control de brillo. Minimiza poros visibles. Fórmula libre de aceite.',
    images: ['https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80'],
    shades: ['#FDEBD0','#F5CBA7','#E59866','#CA6F1E','#A04000','#784212'],
    shadeNames: ['110 Porcelain','120 Classic Ivory','220 Natural Beige','330 Toffee','360 Mocha','380 Deep Espresso'],
    tags: ['mate','poros','sin aceite'], rating: 4.5, reviews: 445
  },
  {
    id: 'p005', name: 'Pro Filt\'r Soft Matte Foundation', brand: 'Fenty Beauty', brandId: 'fenty',
    category: 'Base', categoryId: 'bases',
    price: 40, stock: 20, featured: true, bestseller: true,
    description: 'La base revolucionaria de Rihanna. 50 tonos inclusivos. Cobertura media a completa con acabado mate suave.',
    images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80'],
    shades: ['#FDEBD0','#F5CBA7','#E59866','#CA6F1E','#A04000','#784212','#5D3A1A'],
    shadeNames: ['100W','130W','220W','320W','390W','440W','498N'],
    tags: ['50 tonos','mate suave','cobertura media'], rating: 4.9, reviews: 892
  },
  {
    id: 'p006', name: 'Better Than Sex Mascara', brand: 'Too Faced', brandId: 'toofaced',
    category: 'Ojos', categoryId: 'ojos',
    price: 28, stock: 35, featured: true, bestseller: true,
    description: 'Máscara volumizadora de culto. Fórmula con colágeno que alarga, curva y da volumen extremo.',
    images: ['https://images.unsplash.com/photo-1631214500004-3c25571be53c?w=400&q=80'],
    shades: ['#1C1C1C','#3D2B1F'],
    shadeNames: ['Blackest Black','Chocolate'],
    tags: ['volumen','colágeno','curva'], rating: 4.7, reviews: 1203
  },
  {
    id: 'p007', name: 'Soft Matte Complete Concealer', brand: 'NYX', brandId: 'nyx',
    category: 'Corrector', categoryId: 'correctores',
    price: 12, stock: 45, featured: false, bestseller: false,
    description: 'Corrector de alta cobertura y acabado mate. Cubre ojeras, manchas e imperfecciones.',
    images: ['https://images.unsplash.com/photo-1583241800698-e8ab01830a24?w=400&q=80'],
    shades: ['#FDEBD0','#F5CBA7','#E59866','#CA6F1E','#A04000'],
    shadeNames: ['Fair','Light','Medium','Tan','Deep'],
    tags: ['alta cobertura','mate','ojeras'], rating: 4.4, reviews: 267
  },
  {
    id: 'p008', name: 'Contour Kit', brand: 'NYX', brandId: 'nyx',
    category: 'Contorno', categoryId: 'contorno',
    price: 18, stock: 30, featured: true, bestseller: false,
    description: 'Kit de contorno y resaltador en polvo. 3 tonos de contorno + 2 iluminadores. Acabado natural.',
    images: ['https://images.unsplash.com/photo-1556228852-6d35a585d566?w=400&q=80'],
    shades: ['#D4A76A','#8B5E3C'],
    shadeNames: ['Light','Medium/Dark'],
    tags: ['contorno','resaltador','natural'], rating: 4.3, reviews: 156
  },
  {
    id: 'p009', name: 'Color Riche Lipstick', brand: 'L\'Oreal', brandId: 'loreal',
    category: 'Labios', categoryId: 'labios',
    price: 11, stock: 70, featured: false, bestseller: true,
    description: 'Labial clásico con fórmula enriquecida con aceite de argán. Colores saturados y textura cremosa.',
    images: ['https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80'],
    shades: ['#DC143C','#C41E3A','#8B0000','#FF69B4','#E75480','#B22222','#FF7F50'],
    shadeNames: ['Pure Red','Reds','True Red','Tickled Pink','Glossy Fuchsia','Brick Red','Coral'],
    tags: ['argán','cremoso','clásico'], rating: 4.5, reviews: 334
  },
  {
    id: 'p010', name: 'Flawless Filter', brand: 'Charlotte Tilbury', brandId: 'charlotte',
    category: 'Base', categoryId: 'bases',
    price: 46, stock: 15, featured: true, bestseller: false,
    description: 'El filtro de belleza en bote. Ilumina, hidrata y perfecciona el tono de piel. Acabado "no makeup makeup".',
    images: ['https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&q=80'],
    shades: ['#FDEBD0','#F5CBA7','#E59866','#CA6F1E'],
    shadeNames: ['1 Fair','2 Light','3 Medium','4 Tan'],
    tags: ['iluminador','hidratante','natural'], rating: 4.8, reviews: 445
  },
  {
    id: 'p011', name: 'Nano Brow Pencil', brand: 'NYX', brandId: 'nyx',
    category: 'Cejas', categoryId: 'cejas',
    price: 13, stock: 50, featured: false, bestseller: false,
    description: 'Lápiz de cejas ultrafino efecto pelo por pelo. Punta de 0.9mm para trazos ultra precisos y naturales.',
    images: ['https://images.unsplash.com/photo-1614095949892-4e9c3e1e1ebd?w=400&q=80'],
    shades: ['#3D2B1F','#8B5E3C','#B8860B','#2C1810'],
    shadeNames: ['Brunette','Soft Brown','Blonde','Espresso'],
    tags: ['cejas','pelo por pelo','preciso'], rating: 4.6, reviews: 198
  },
  {
    id: 'p012', name: 'Skin Tint SPF 30', brand: 'Charlotte Tilbury', brandId: 'charlotte',
    category: 'Base', categoryId: 'bases',
    price: 48, stock: 12, featured: true, bestseller: false,
    description: 'Tinte de piel ultraligero con SPF 30. Hidrata, unifica y da ese glow saludable que parece piel perfecta.',
    images: ['https://images.unsplash.com/photo-1525904097878-94fb15835963?w=400&q=80'],
    shades: ['#FDEBD0','#F5CBA7','#E59866','#CA6F1E','#A04000'],
    shadeNames: ['1','2','3','4','5'],
    tags: ['SPF30','glow','ultraligero'], rating: 4.7, reviews: 312
  },
  {
    id: 'p013', name: 'Eyeshadow Palette Nude', brand: 'Maybelline', brandId: 'maybelline',
    category: 'Ojos', categoryId: 'ojos',
    price: 16, stock: 40, featured: true, bestseller: false,
    description: '12 tonos nude en acabados mate, satinado y shimmer. Pigmentación intensa y larga duración.',
    images: ['https://images.unsplash.com/photo-1571646750134-b95cc2c2729c?w=400&q=80'],
    shades: ['#D4A76A','#C8956C','#B87333','#8B6914'],
    shadeNames: ['Nude Smoke','Nudes on Nudes','Blushed Nudes','The Rock Nudes'],
    tags: ['paleta','12 tonos','nude'], rating: 4.4, reviews: 287
  },
  {
    id: 'p014', name: 'Setting Spray All Day', brand: 'NYX', brandId: 'nyx',
    category: 'Fijadores', categoryId: 'fijadores',
    price: 15, stock: 55, featured: false, bestseller: true,
    description: 'Spray fijador de maquillaje hasta 16 horas. Fórmula libre de alcohol. Efecto mate o luminoso.',
    images: ['https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80'],
    shades: [],
    shadeNames: [],
    tags: ['fijador','16 horas','sin alcohol'], rating: 4.5, reviews: 421
  },
  {
    id: 'p015', name: 'Blush Orgasm', brand: 'NARS', brandId: 'nars',
    category: 'Rubor', categoryId: 'rubor',
    price: 34, stock: 28, featured: true, bestseller: true,
    description: 'El rubor más vendido del mundo. Tono durazno-rosado con destellos dorados. Universal y favorecedor.',
    images: ['https://images.unsplash.com/photo-1596704017828-45cde2f35c48?w=400&q=80'],
    shades: ['#F4A69A'],
    shadeNames: ['Orgasm'],
    tags: ['rubor','shimmer','universal'], rating: 4.9, reviews: 2341
  },

  // COMBOS
  {
    id: 'c001', name: 'Kit Makeup Completo Principiantes', brand: 'BAILY', brandId: 'baily',
    category: 'Combos', categoryId: 'combos',
    price: 55, stock: 10, featured: true, bestseller: false,
    isCombo: true,
    comboItems: ['Base Fit Me','Corrector NYX','Máscara Maybelline','Labial Color Riche'],
    description: 'Kit completo para empezar. Incluye base, corrector, máscara y labial. Todo lo que necesitas en un solo paquete.',
    images: ['https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&q=80'],
    shades: [],
    shadeNames: [],
    tags: ['combo','principiantes','kit completo'], rating: 4.7, reviews: 89
  },
  {
    id: 'c002', name: 'Kit Ojos Ahumados', brand: 'BAILY', brandId: 'baily',
    category: 'Combos', categoryId: 'combos',
    price: 48, stock: 15, featured: true, bestseller: false,
    isCombo: true,
    comboItems: ['Paleta Nude Maybelline','Máscara Too Faced','Delineador NYX','Cejas NYX'],
    description: 'Todo para el look de ojos ahumado perfecto. Paleta, máscara, delineador y lápiz de cejas.',
    images: ['https://images.unsplash.com/photo-1581182815576-9a6c6da5cc85?w=400&q=80'],
    shades: [],
    shadeNames: [],
    tags: ['combo','ojos','ahumado'], rating: 4.6, reviews: 67
  }
];

const DEMO_BRANDS = [
  { id: 'mac',       name: 'MAC',               logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/MAC_logo.svg/200px-MAC_logo.svg.png',       country: 'USA' },
  { id: 'nyx',       name: 'NYX Professional',  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/NYX_Professional_Makeup_Logo.svg/200px-NYX_Professional_Makeup_Logo.svg.png', country: 'USA' },
  { id: 'maybelline',name: 'Maybelline',         logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Maybelline_logo.svg/200px-Maybelline_logo.svg.png', country: 'USA' },
  { id: 'loreal',    name: "L'Oreal",            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/LOreal_logo.svg/200px-LOreal_logo.svg.png',   country: 'France' },
  { id: 'fenty',     name: 'Fenty Beauty',       logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Fenty_Beauty_logo.svg/200px-Fenty_Beauty_logo.svg.png', country: 'USA' },
  { id: 'charlotte', name: 'Charlotte Tilbury',  logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Charlotte_Tilbury_logo.svg', country: 'UK' },
  { id: 'toofaced',  name: 'Too Faced',          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Too_Faced_Logo.svg/200px-Too_Faced_Logo.svg.png', country: 'USA' },
  { id: 'nars',      name: 'NARS',               logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/NARS_logo.svg/200px-NARS_logo.svg.png',       country: 'USA' },
  { id: 'baily',     name: 'BAILY',              logo: '',                                                                                                      country: 'VEN' }
];

const DEMO_CATEGORIES = [
  { id: 'bases',      name: 'Bases',        icon: '🫧', color: '#F5E6D3' },
  { id: 'labios',     name: 'Labios',       icon: '💋', color: '#FFB6C1' },
  { id: 'ojos',       name: 'Ojos',         icon: '👁️', color: '#E8D5F0' },
  { id: 'correctores',name: 'Correctores',  icon: '✨', color: '#FFF3E0' },
  { id: 'contorno',   name: 'Contorno',     icon: '🌟', color: '#F3E5D8' },
  { id: 'rubor',      name: 'Rubor',        icon: '🌸', color: '#FCE4EC' },
  { id: 'cejas',      name: 'Cejas',        icon: '〰️', color: '#EFE9F4' },
  { id: 'fijadores',  name: 'Fijadores',    icon: '💨', color: '#E3F2FD' },
  { id: 'combos',     name: 'Combos',       icon: '🎀', color: '#F8E8F0' }
];

const DEMO_BLOG = [
  {
    id: 'b001', title: '5 Tendencias de Maquillaje para 2025',
    excerpt: 'Descubre los looks que marcarán tendencia este año: del Mob Wife Beauty al Glass Skin venezolano.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100d479?w=600&q=80',
    date: '2025-01-15', author: 'BAILY Team', category: 'Tendencias',
    content: 'El 2025 trae consigo una revolución en el mundo del maquillaje...'
  },
  {
    id: 'b002', title: 'Cómo elegir tu base perfecta',
    excerpt: 'Guía completa para encontrar la base que se adapte a tu tipo de piel y tono en Venezuela.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
    date: '2025-01-10', author: 'BAILY Team', category: 'Tips',
    content: 'Elegir la base correcta puede ser todo un desafío...'
  },
  {
    id: 'b003', title: 'Tutorial: Look Nocturno en 10 Minutos',
    excerpt: 'Un maquillaje sofisticado para salir de noche sin pasar horas frente al espejo.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
    date: '2025-01-05', author: 'BAILY Team', category: 'Tutoriales',
    content: 'Lograr un look nocturno impactante no tiene que ser complicado...'
  }
];

const DEFAULT_SETTINGS = {
  usdToBs: 36.5,
  deliveryCost: 3.00,
  freeDeliveryThreshold: 30.00,
  whatsappNumber: '+582422655274',
  storeName: 'BAILY',
  storeEmail: 'hola@baily.ve',
  deliveryZone: {
    center: { lat: 10.4806, lng: -66.9036 },
    radiusKm: 15
  }
};

// Export for use in main app
if (typeof module !== 'undefined') {
  module.exports = { DEMO_PRODUCTS, DEMO_BRANDS, DEMO_CATEGORIES, DEMO_BLOG, DEFAULT_SETTINGS, FIREBASE_CONFIG };
}
