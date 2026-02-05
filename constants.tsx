import { NavLink, LocationInfo, Review, Service, Category } from './types';

export const NAV_LINKS: NavLink[] = [
  { key: 'home', path: '/', en: 'Home', es: 'Inicio' },
  { key: 'about', path: '/about', en: 'About Us', es: 'Nosotros' },
  { 
    key: 'products', 
    path: '/products', 
    en: 'Products', 
    es: 'Productos',
    subLinks: [
      { key: 'men-boots', path: '/products/men-boots', en: "Men's Boots", es: 'Botas para Hombre' },
      { key: 'women-boots', path: '/products/women-boots', en: "Women's Boots", es: 'Botas para Mujer' },
      { key: 'hats', path: '/products/hats', en: 'Hats', es: 'Sombreros' },
      { key: 'tejanas', path: '/products/tejanas', en: 'Tejanas', es: 'Tejanas' },
      { key: 'belts', path: '/products/belts', en: 'Belts', es: 'Cintos' },
      { key: 'buckles', path: '/products/buckles', en: 'Buckles', es: 'Hebillas' },
      { key: 'caps', path: '/products/caps', en: 'Caps', es: 'Gorras' },
      { key: 'outfits', path: '/products/outfits', en: 'Outfits', es: 'Conjuntos' },
    ]
  },
  { key: 'locations', path: '/locations', en: 'Locations', es: 'Ubicaciones' },
  { key: 'contact', path: '/contact', en: 'Contact', es: 'Contacto' },
];

export const CATEGORIES: Category[] = [
  { id: 'men-boots', name: { en: "Men's Boots", es: 'Botas de Hombre' }, image: 'images/category-men-boots.png' },
  { id: 'women-boots', name: { en: "Women's Boots", es: 'Botas de Mujer' }, image: 'images/category-women-boots.png' },
  { id: 'hats', name: { en: 'Hats', es: 'Sombreros' }, image: 'images/category-hats.png' },
  { id: 'tejanas', name: { en: 'Tejanas', es: 'Tejanas' }, image: 'images/category-tejanas.png' },
  { id: 'belts', name: { en: 'Belts', es: 'Cintos' }, image: 'images/category-belts.png' },
  { id: 'buckles', name: { en: 'Buckles', es: 'Hebillas' }, image: 'images/category-buckles.png' },
  { id: 'caps', name: { en: 'Caps', es: 'Gorras' }, image: 'images/category-caps.png' },
  { id: 'outfits', name: { en: 'Outfits', es: 'Conjuntos' }, image: 'images/category-outfits.png' },
];

export const LOCATIONS: LocationInfo[] = [
  {
    id: 'new-castle',
    badge: { en: 'Original Location', es: 'Ubicación Original' },
    address: '110 N Dupont Highway, New Castle, DE 19720',
    phone: '(770) 861-8830',
    hours: {
      en: ['Monday-Thursday: Closed', 'Friday-Saturday: 9am-8pm', 'Sunday: 9am-5pm'],
      es: ['Lunes a Jueves: Cerrado', 'Viernes a Sábado: 9am-8pm', 'Domingo: 9am-5pm'],
    },
    note: { en: 'Located in New Castle Farmers Market', es: 'Ubicado en New Castle Farmers Market' },
    mapUrl: 'https://maps.google.com/?q=110+N+Dupont+Highway+New+Castle+DE+19720',
  },
  {
    id: 'philadelphia',
    badge: { en: 'Italian Market', es: 'Mercado Italiano' },
    address: '902 Washington Avenue, Philadelphia, PA 19147',
    phone: '(267) 951-2589',
    hours: {
      en: ['Monday: 10am-5pm', 'Tuesday: Closed', 'Wednesday-Thursday: 10am-6pm', 'Friday-Saturday: 10am-7pm', 'Sunday: 11am-5pm'],
      es: ['Lunes: 10am-5pm', 'Martes: Cerrado', 'Miércoles a Jueves: 10am-6pm', 'Viernes a Sábado: 10am-7pm', 'Domingo: 11am-5pm'],
    },
    note: { en: 'Look for our famous giant cowboy boot!', es: '¡Busca nuestra famosa bota gigante de vaquero!' },
    mapUrl: 'https://maps.google.com/?q=902+Washington+Avenue+Philadelphia+PA+19147',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: 'Ravage 214',
    time: '1 year ago',
    rating: 5,
    text: {
      en: 'Owner worked with me to order python boots for me that fit perfect. Top quality genuine leathers and skins. Have a nice leather hat from here. Good selection of western shirts and jeans. Great staff very friendly.',
      es: 'El dueño trabajó conmigo para pedir botas de pitón que me quedaran perfectas. Cueros y pieles genuinas de primera calidad. Tengo un bonito sombrero de cuero de aquí. Buena selección de camisas y jeans vaqueros. Personal excelente y muy amable.',
    }
  },
  {
    id: 2,
    author: 'Brian Frost',
    time: '3 years ago',
    rating: 5,
    text: {
      en: "This place is a diamond in the rough. Amazing selection of boots, hats, belts, and western wears. Friendly owners/associates, and you can grab some steaks from the Amish market, some elote, donuts, and anything else you can think of under one roof. Bought my Stetson here and I'll be back soon!",
      es: "Este lugar es una joya escondida. Increíble selección de botas, sombreros, cinturones y ropa vaquera. Dueños y asociados amables, y puedes comprar filetes del mercado Amish, elotes, donas y cualquier otra cosa bajo un mismo techo. ¡Compré mi Stetson aquí y volveré pronto!",
    }
  },
  {
    id: 3,
    author: 'Deatria Burney',
    time: '4 months ago',
    rating: 5,
    text: {
      en: 'Great selection, came across this establishment just cruising around the neighborhood with family. Very friendly and helpful staff and yes walked out with my very first cowboy hat!',
      es: 'Excelente selección, encontré este establecimiento paseando por el vecindario con mi familia. ¡Personal muy amable y servicial y sí, salí con mi primer sombrero de vaquero!',
    }
  },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    icon: 'Hat',
    title: { en: 'Tejana Hat Service', es: 'Servicio de Tejanas' },
    description: { en: 'Custom fitting, cutting, reshaping, and hat cleaning.', es: 'Ajuste personalizado, corte, hormada y limpieza de sombreros.' }
  },
  {
    id: 2,
    icon: 'Footprints',
    title: { en: 'Exotic Boot Leathers', es: 'Pieles Exóticas de Botas' },
    description: { en: 'Includes special orders for exotic leathers.', es: 'Incluye pedidos especiales de pieles exóticas.' }
  },
  {
    id: 3,
    icon: 'Truck',
    title: { en: 'Shipping Available', es: 'Envíos Disponibles' },
    description: { en: 'Shipping anywhere in the United States.', es: 'Envíos a cualquier parte de Estados Unidos.' }
  },
  {
    id: 4,
    icon: 'Languages',
    title: { en: 'Bilingual Staff', es: 'Personal Bilingüe' },
    description: { en: 'Team that speaks Spanish and English.', es: 'Empleados que habla español e inglés.' }
  },
  {
    id: 5,
    icon: 'Users',
    title: { en: 'Community Events', es: 'Eventos Comunitarios' },
    description: { en: 'Partners of local Rodeos and cultural events.', es: 'Socios de Jaripeos locales y eventos culturales.' }
  },
  {
    id: 6,
    icon: 'Star',
    title: { en: 'Premium Brands', es: 'Marcas Premium' },
    description: { en: 'Only authentic products of the highest quality.', es: 'Solo productos auténticos de la más alta calidad.' }
  },
];

export const SOCIAL_LINKS = [
  { id: 'instagram-1', name: 'Instagram', handle: '@viejooestewesternwear', url: 'https://www.instagram.com/viejooestewesternwear/?hl=en', icon: 'Instagram' },
  { id: 'facebook', name: 'Facebook', handle: '@viejooeste.westernwear', url: 'https://www.facebook.com/viejooeste.westernwear/photos/', icon: 'Facebook' },
  { id: 'instagram-2', name: 'Instagram', handle: '@viejooestewesternwear2', url: 'https://www.instagram.com/viejooestewesternwear2/?hl=en', icon: 'Instagram' },
  { id: 'tiktok', name: 'TikTok', handle: '@viejooestewesternwear', url: 'https://www.tiktok.com/@viejooestewesternwear', icon: 'TikTok' },
];