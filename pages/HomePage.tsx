
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { CATEGORIES, REVIEWS, SERVICES, LOCATIONS, SOCIAL_LINKS } from '../constants';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import { 
  ArrowRight, 
  Star, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Truck, 
  Languages, 
  Users, 
  Award, 
  ChevronRight,
  ShieldCheck,
  Scissors,
  Instagram,
  Facebook,
  Clock,
  Smartphone,
  Youtube
} from 'lucide-react';

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a73.57 73.57 0 1 0 59.42 71.18V0l89 0a208.87 208.87 0 0 0 19.35 105.13A190.15 190.15 0 0 0 448 209.91z" />
  </svg>
);

const SocialIcon = ({ iconName, size = 24 }: { iconName: string, size?: number }) => {
  switch (iconName) {
    case 'Instagram': return <Instagram size={size} />;
    case 'Facebook': return <Facebook size={size} />;
    case 'TikTok': return <TikTokIcon size={size} />;
    case 'Youtube': return <Youtube size={size} />;
    default: return <MessageSquare size={size} />;
  }
};

const BRANDS = [
  { id: 'stetson', name: 'Stetson', path: 'images/brands/stetson.png', alt: 'Stetson' },
  { id: 'justin', name: 'Justin Boots', path: 'images/brands/justin-boots.png', alt: 'Justin Boots' },
  { id: 'tony-lama', name: 'Tony Lama', path: 'images/brands/tony-lama.png', alt: 'Tony Lama' },
  { id: 'ariat', name: 'Ariat', path: 'images/brands/ariat.png', alt: 'Ariat' },
  { id: 'larry-mahan', name: 'Larry Mahan', path: 'images/brands/larry-mahan.png', alt: 'Larry Mahan' },
  { id: 'resistol', name: 'Resistol', path: 'images/brands/resistol.png', alt: 'Resistol' },
  { id: 'cuadra', name: 'Cuadra', path: 'images/brands/cuadra.png', alt: 'Cuadra' },
  { id: 'los-altos', name: 'Los Altos', path: 'images/brands/los-altos.png', alt: 'Los Altos' },
  { id: 'wrangler', name: 'Wrangler', path: 'images/brands/wrangler.png', alt: 'Wrangler' },
  { id: 'kimes-ranch', name: 'Kimes Ranch', path: 'images/brands/kimes-ranch.png', alt: 'Kimes Ranch' },
  { id: 'reyme', name: 'Reyme Botas', path: 'images/brands/reyme.png', alt: 'Reyme Botas' },
  { id: 'tombstone', name: 'Tombstone', path: 'images/brands/tombstone.png', alt: 'Tombstone' },
];

const ScrollingGalleryColumn = ({ startIndex, speed = "80s", reverse = false }: { startIndex: number, speed?: string, reverse?: boolean }) => {
  const images = [...Array(10)].map((_, i) => `images/gallery-${startIndex + i}.png`);
  return (
    <div className="flex flex-col gap-6 overflow-hidden h-full relative">
      <div className="flex flex-col gap-6 animate-vertical-scroll" style={{ animationDuration: speed, animationDirection: reverse ? 'reverse' : 'normal' }}>
        {[...images, ...images].map((src, idx) => (
          <OptimizedImage 
            key={idx} 
            src={src} 
            alt="Gallery" 
            containerClassName="aspect-square w-full shrink-0 group rounded-2xl shadow-md" 
            className="grayscale group-hover:grayscale-0 transition-all duration-700" 
            fallbackSrc={`https://picsum.photos/seed/viejooeste-gallery-${idx}/800/800`}
          />
        ))}
      </div>
    </div>
  );
};

const BrandMarquee: React.FC = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragX = useRef(0);
  const scrollX = useRef(0);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (scrollRef.current && !isDragging) {
        scrollRef.current.scrollLeft += 1.2;
        const third = scrollRef.current.scrollWidth / 3;
        if (scrollRef.current.scrollLeft >= third * 2) scrollRef.current.scrollLeft -= third;
        else if (scrollRef.current.scrollLeft <= 0) scrollRef.current.scrollLeft += third;
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, [isDragging]);

  const onStart = (clientX: number) => { setIsDragging(true); dragX.current = clientX; scrollX.current = scrollRef.current?.scrollLeft || 0; };
  const onMove = (clientX: number) => { if (isDragging && scrollRef.current) scrollRef.current.scrollLeft = scrollX.current - (clientX - dragX.current); };

  return (
    <section className="py-20 bg-bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-serif font-black text-primary-dark mb-6 uppercase tracking-tighter">{t({ en: 'Premium Brands We Carry', es: 'Marcas Premium que Manejamos' })}</h2>
      </div>
      <div className="relative w-full group">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-bg-cream via-bg-cream/60 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-bg-cream via-bg-cream/60 to-transparent z-20 pointer-events-none" />
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden no-scrollbar py-12 cursor-grab active:cursor-grabbing select-none touch-none"
          onMouseDown={(e) => onStart(e.pageX)} onMouseMove={(e) => onMove(e.pageX)} onMouseUp={() => setIsDragging(false)} onMouseLeave={() => setIsDragging(false)}
          onTouchStart={(e) => onStart(e.touches[0].clientX)} onTouchMove={(e) => onMove(e.touches[0].clientX)} onTouchEnd={() => setIsDragging(false)}
        >
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
            <div key={`${brand.id}-${i}`} className="shrink-0 w-48 md:w-80 h-32 md:h-48 px-4 pointer-events-none">
              <div className="w-full h-full bg-white flex flex-col items-center justify-center p-8 shadow-md border border-gray-100 rounded-[2.5rem] group-hover:border-accent-copper transition-colors">
                <OptimizedImage src={brand.path} alt={brand.alt} className="max-w-full max-h-full object-contain" fallbackSrc="https://via.placeholder.com/200x100?text=Brand" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Shared translucent button style
  const translucentButtonStyle = "flex items-center justify-center gap-3 bg-white/10 px-8 py-5 rounded-full font-black uppercase hover:bg-white/20 transition border border-white/20 min-h-[54px] w-full lg:w-auto backdrop-blur-sm";

  return (
    <div className="overflow-x-hidden">
      <SEO title="Home" description="Authentic Mexican western wear in Delaware and Pennsylvania. Best selection of boots, hats, and belts." />
      
      {/* SECTION 1: HERO with Parallax Effect */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 scale-110" 
          style={{ 
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
           <OptimizedImage 
             src="images/hero-background.jpg" 
             alt="Viejo Oeste Interior" 
             className="w-full h-full object-cover" 
             loading="eager" 
           />
        </div>
        <div className="absolute inset-0 z-10 bg-black/60" />
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-8xl font-serif font-black text-white mb-6 uppercase tracking-tighter leading-tight drop-shadow-2xl">
            {t({ en: 'Authentic Western Wear', es: 'Ropa Vaquera Auténtica' })}
          </h1>
          <p className="text-lg md:text-2xl text-accent-gold font-bold uppercase tracking-[0.3em] mb-12 drop-shadow-lg">
            {t({ en: 'Premium Quality Western Mexican Style', es: 'Estilo Vaquero Mexicano de Primera Calidad' })}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto">
            <Link to="/products" className="bg-accent-copper hover:bg-accent-gold text-white px-10 py-5 font-black uppercase tracking-widest transition shadow-xl rounded-full min-h-[54px] flex items-center justify-center">{t({ en: 'Products', es: 'Productos' })}</Link>
            <Link to="/locations" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 font-black uppercase tracking-widest transition rounded-full min-h-[54px] flex items-center justify-center">{t({ en: 'Locations', es: 'Ubicaciones' })}</Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: WELCOME */}
      <section className="py-24 bg-white px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-primary-dark mb-8 leading-tight">{t({ en: 'Welcome to Viejo Oeste Western Wear', es: 'Bienvenido a Viejo Oeste Western Wear' })}</h2>
          <p className="text-lg md:text-xl text-body-text leading-relaxed mb-12">
            {t({ 
              en: 'Your destination for authentic Mexican western wear in Delaware and Pennsylvania. We offer the best selection of boots, hats, belts and western apparel that celebrate our rich heritage and culture.',
              es: 'Tu destino para la auténtica ropa vaquera mexicana en Delaware y Pennsylvania. Ofrecemos la mejor selección de botas, sombreros, cintos y ropa vaquera que celebran nuestra rica herencia y cultura.'
            })}
          </p>
          <Link to="/products" className="inline-flex items-center gap-2 text-accent-copper font-black uppercase tracking-widest border-b-2 border-accent-copper pb-2 hover:text-accent-gold hover:border-accent-gold transition">
            {t({ en: 'Shop Our Collections', es: 'Ver Nuestras Colecciones' })} <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* SECTION 3: CATEGORIES */}
      <section className="py-24 bg-bg-cream px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-black text-primary-dark text-center mb-16 uppercase tracking-tighter">{t({ en: 'Explore Our Categories', es: 'Explora Nuestras Categorías' })}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CATEGORIES.map((cat) => (
              <Link key={cat.id} to={`/products/${cat.id}`} className="group relative overflow-hidden h-[450px] shadow-lg rounded-[2rem] w-full">
                <OptimizedImage src={cat.image} alt={t(cat.name)} containerClassName="absolute inset-0" className="w-full h-full transition-transform duration-700 group-hover:scale-110" fallbackSrc="https://via.placeholder.com/800x1000?text=Category" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-serif font-black text-white uppercase tracking-wider mb-2">{t(cat.name)}</h3>
                  <div className="flex items-center gap-2 text-accent-gold font-bold uppercase text-xs tracking-[0.2em] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">{t({ en: 'View All', es: 'Ver Todo' })} <ChevronRight size={14} /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: GALLERY */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-serif font-black text-primary-dark uppercase tracking-tighter mb-4">{t({ en: 'Gallery', es: 'Galería' })}</h2></div>
          <div className="relative h-[650px] grid grid-cols-2 md:grid-cols-4 gap-6">
            <ScrollingGalleryColumn startIndex={0} speed="60s" />
            <ScrollingGalleryColumn startIndex={10} speed="85s" reverse={true} />
            <div className="hidden md:block"><ScrollingGalleryColumn startIndex={20} speed="75s" /></div>
            <div className="hidden md:block"><ScrollingGalleryColumn startIndex={30} speed="95s" reverse={true} /></div>
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </section>

      <BrandMarquee />

      {/* SECTION 6: TESTIMONIALS */}
      <section className="py-24 bg-primary-dark text-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-serif font-black mb-4 uppercase tracking-tighter">{t({ en: 'What Our Customers Say', es: 'Lo que Dicen Nuestros Clientes' })}</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 flex flex-col hover:bg-white/10 transition rounded-2xl">
                <div className="flex text-accent-gold mb-6">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div>
                <p className="text-gray-300 italic mb-8 flex-grow leading-relaxed">"{t(review.text)}"</p>
                <div><h4 className="font-bold text-white uppercase tracking-wider">— {review.author}</h4><p className="text-xs text-accent-copper font-bold uppercase mt-1">{review.time}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: LOCATIONS */}
      <section className="py-24 bg-bg-cream px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-serif font-black text-primary-dark mb-4 uppercase tracking-tighter">{t({ en: 'Our Locations', es: 'Nuestras Ubicaciones' })}</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className="bg-white p-8 md:p-12 shadow-xl flex flex-col h-full border-t-8 border-accent-copper rounded-3xl group">
                <span className="inline-block px-4 py-1.5 bg-accent-gold text-white text-[10px] font-black uppercase tracking-widest mb-4 rounded-full">{t(loc.badge)}</span>
                <h3 className="text-3xl font-serif font-black text-primary-dark mb-4 uppercase">{loc.id === 'new-castle' ? 'New Castle, Delaware' : 'Philadelphia, Pennsylvania'}</h3>
                
                <div className="space-y-4 mb-8">
                  <p className="flex items-start gap-2 text-body-text font-bold">
                    <MapPin size={20} className="text-accent-copper shrink-0 mt-1" />
                    {loc.address}
                  </p>
                  
                  <a href={`tel:${loc.phone.replace(/\D/g,'')}`} className="flex items-center gap-2 text-primary-dark font-black text-xl hover:text-accent-copper transition">
                    <Phone size={20} className="text-accent-copper" />
                    {loc.phone}
                  </a>

                  <div className="flex items-start gap-2">
                    <Clock size={20} className="text-accent-copper shrink-0 mt-1" />
                    <ul className="text-sm font-bold text-body-text space-y-1">
                      {t(loc.hours).map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-accent-copper font-bold italic mb-8">"{t(loc.note)}"</p>
                <Link to="/locations" className="mt-auto w-full py-4 border-2 border-primary-dark text-primary-dark font-black uppercase tracking-widest text-center hover:bg-primary-dark hover:text-white transition rounded-full">{t({ en: 'View Location', es: 'Ver Ubicación' })}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FOLLOW US */}
      <section className="py-24 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-black text-primary-dark mb-4 uppercase tracking-tighter">
              {t({ en: 'Follow Us', es: 'Síguenos' })}
            </h2>
            <p className="text-accent-copper font-bold uppercase tracking-[0.3em] text-xs">
              {t({ en: 'Stay updated with our latest collections', es: 'Mantente al día con nuestras últimas colecciones' })}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center justify-center p-8 bg-bg-cream rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2`}
              >
                {/* Platform Specific Hover Background Colors */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  social.id.includes('instagram') ? 'bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]' :
                  social.id === 'facebook' ? 'bg-[#1877F2]' :
                  social.id === 'tiktok' ? 'bg-[#000000]' :
                  social.id === 'youtube' ? 'bg-[#FF0000]' : 'bg-primary-dark'
                }`} />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-dark mb-4 shadow-sm group-hover:scale-110 group-hover:bg-transparent group-hover:text-white transition-all duration-500">
                    <SocialIcon iconName={social.icon} size={32} />
                  </div>
                  <h3 className="font-serif font-black text-primary-dark uppercase text-sm tracking-widest group-hover:text-white transition-colors duration-500">
                    {social.name}
                  </h3>
                  <p className="text-[10px] font-bold text-accent-copper uppercase tracking-[0.2em] mt-1 group-hover:text-white/80 transition-colors duration-500">
                    {social.handle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: CONTACT ACTION */}
      <section className="py-24 bg-primary-dark text-white px-4 md:px-8 text-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-black mb-12 uppercase tracking-tighter">
            {t({ en: 'Contact Us', es: 'Contáctanos' })}
          </h2>
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4 md:gap-6">
            <a href="https://wa.me/17708618830" target="_blank" rel="noopener noreferrer" className={translucentButtonStyle}>
              <MessageSquare size={24} /> WhatsApp
            </a>
            <a href="sms:+17708618830" className={translucentButtonStyle}>
              <Smartphone size={24} /> {t({ en: 'Text Us', es: 'Mensaje de Texto' })}
            </a>
            <a href="tel:7708618830" className={translucentButtonStyle}>
              <Phone size={24} /> (770) 861-8830
            </a>
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes vertical-scroll { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        .animate-vertical-scroll { animation-name: vertical-scroll; animation-timing-function: linear; animation-iteration-count: infinite; }
      `}</style>
    </div>
  );
};

export default HomePage;
