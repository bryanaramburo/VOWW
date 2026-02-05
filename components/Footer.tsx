import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Facebook, Youtube, MessageSquare } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { LOCATIONS, SOCIAL_LINKS } from '../constants';

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a73.57 73.57 0 1 0 59.42 71.18V0l89 0a208.87 208.87 0 0 0 19.35 105.13A190.15 190.15 0 0 0 448 209.91z" />
  </svg>
);

const SocialIcon = ({ iconName, size = 20 }: { iconName: string, size?: number }) => {
  switch (iconName) {
    case 'Instagram': return <Instagram size={size} />;
    case 'Facebook': return <Facebook size={size} />;
    case 'TikTok': return <TikTokIcon size={size} />;
    case 'Youtube': return <Youtube size={size} />;
    default: return <MessageSquare size={size} />;
  }
};

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10 px-4 md:px-8 border-t border-accent-copper/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-block mb-8" aria-label="Viejo Oeste Logo">
            <OptimizedImage src="images/logo.png" alt="Viejo Oeste Logo" containerClassName="h-20 w-auto bg-transparent" className="object-contain" fallbackSrc="" />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
            {t({ 
              en: 'The best western wear with authentic Mexican heritage. Premium boots, hats, and custom services in Delaware and Pennsylvania.',
              es: 'Lo mejor en ropa vaquera con auténtica herencia mexicana. Botas premium, sombreros y servicios personalizados en Delaware y Pennsylvania.'
            })}
          </p>
          <div className="flex items-center flex-wrap gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.id} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-copper transition shadow-lg"
                aria-label={`Follow us on ${social.name}`}
              >
                <SocialIcon iconName={social.icon} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-accent-copper font-black uppercase tracking-[0.2em] text-xs mb-8">{t({ en: 'Locations', es: 'Ubicaciones' })}</h4>
          <div className="flex flex-col gap-6 text-sm">
            {LOCATIONS.map(loc => (
              <div key={loc.id}>
                <p className="font-black text-white uppercase tracking-tighter text-base mb-1">{loc.id === 'new-castle' ? 'New Castle, DE' : 'Philadelphia, PA'}</p>
                <p className="text-gray-400">{loc.address.split(',')[0]}</p>
                <p className="text-gray-400">{loc.phone}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-accent-copper font-black uppercase tracking-[0.2em] text-xs mb-8">{t({ en: 'Store Hours', es: 'Horarios' })}</h4>
          <div className="flex flex-col gap-6 text-sm text-gray-400">
            {LOCATIONS.map(loc => (
              <div key={loc.id}>
                <p className="font-bold text-white mb-2">{loc.id === 'new-castle' ? 'New Castle, DE' : 'Philadelphia, PA'}</p>
                <ul className="space-y-1">
                  {t(loc.hours).filter(h => !h.toLowerCase().includes('closed')).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-accent-copper font-black uppercase tracking-[0.2em] text-xs mb-8">{t({ en: 'Explore', es: 'Explorar' })}</h4>
          <ul className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest">
            <li><Link to="/about" className="hover:text-accent-copper transition">{t({ en: 'About Us', es: 'Nosotros' })}</Link></li>
            <li><Link to="/products" className="hover:text-accent-copper transition">{t({ en: 'Products', es: 'Productos' })}</Link></li>
            <li><Link to="/locations" className="hover:text-accent-copper transition">{t({ en: 'Locations', es: 'Tiendas' })}</Link></li>
            <li><Link to="/contact" className="hover:text-accent-copper transition">{t({ en: 'Contact', es: 'Contacto' })}</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] text-center">
        <p>© 2024 VIEJO OESTE WESTERN WEAR. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <Link to="/" className="hover:text-white transition">Privacy Policy</Link>
          <Link to="/" className="hover:text-white transition">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;