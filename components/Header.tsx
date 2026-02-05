
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { NAV_LINKS } from '../constants';
import { Menu, X, Globe, Phone, ChevronDown, MessageSquare, ChevronLeft } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-primary-dark text-white py-1.5 px-4 md:px-8 flex justify-between items-center text-xs md:text-sm font-medium">
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:7708618830" className="flex items-center gap-1.5 hover:text-accent-copper transition">
            <Phone size={14} /> (770) 861-8830
          </a>
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 hover:text-accent-gold transition uppercase tracking-wider"
          >
            <Globe size={14} /> {language === 'en' ? 'Español' : 'English'}
          </button>
          <a 
            href="https://wa.me/17708618830" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-green-400 hover:text-green-300 transition"
          >
            <MessageSquare size={14} /> WhatsApp
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="px-4 md:px-8 py-4 flex justify-between items-center bg-white border-b border-gray-100">
        <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <img 
            src="images/logo.png" 
            alt="Viejo Oeste Western Wear" 
            className={`h-12 md:h-16 w-auto object-contain ${logoLoaded ? 'block' : 'hidden'}`}
            onLoad={() => setLogoLoaded(true)}
            onError={() => setLogoLoaded(false)}
          />
          {!logoLoaded && (
            <div className="flex flex-col items-start">
              <span className="text-xl md:text-2xl font-serif font-black tracking-tighter leading-none text-primary-dark">
                VIEJO OESTE
              </span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-accent-copper -mt-0.5">
                WESTERN WEAR
              </span>
            </div>
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.key} className="relative group">
              <Link 
                to={link.path}
                className={`flex items-center gap-1 py-2 text-sm font-semibold tracking-wide hover:text-accent-copper transition uppercase ${
                  location.pathname === link.path ? 'text-accent-copper border-b-2 border-accent-copper' : 'text-primary-dark'
                }`}
              >
                {t(link)}
                {link.subLinks && <ChevronDown size={14} />}
              </Link>

              {link.subLinks && (
                <div className="absolute left-0 mt-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white shadow-xl border border-gray-100 rounded-2xl py-2 overflow-hidden">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.key}
                        to={sub.path}
                        className="block px-4 py-2.5 text-xs font-bold text-primary-dark hover:bg-bg-cream hover:text-accent-copper transition uppercase tracking-wider"
                      >
                        {t(sub)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu toggle & Phone Action */}
        <div className="flex items-center gap-2 lg:hidden">
          <a 
            href="tel:7708618830"
            className="p-2.5 bg-bg-cream text-accent-copper rounded-full hover:bg-accent-copper hover:text-white transition-all shadow-sm active:scale-95"
            aria-label="Call Viejo Oeste"
          >
            <Phone size={20} />
          </a>
          <button 
            className="p-2 text-primary-dark"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div className={`lg:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
            <button 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1 text-accent-copper font-black uppercase tracking-widest text-sm"
            >
              <ChevronLeft size={20} />
              {t({ en: 'Back', es: 'Atrás' })}
            </button>
            <div className="flex flex-col items-end opacity-50">
              <span className="text-sm font-serif font-black tracking-tighter leading-none text-primary-dark">VIEJO OESTE</span>
              <span className="text-[8px] font-bold tracking-[0.2em] text-accent-copper">WESTERN WEAR</span>
            </div>
          </div>

          <div className="flex flex-col px-6 py-8">
            {NAV_LINKS.map((link) => (
              <div key={link.key} className="border-b border-gray-50 last:border-0">
                <div className="flex items-center justify-between py-4">
                  <Link 
                    to={link.path}
                    className={`text-lg font-bold uppercase tracking-wide transition-colors ${
                      location.pathname === link.path ? 'text-accent-copper' : 'text-primary-dark'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t(link)}
                  </Link>
                  {link.subLinks && (
                    <button 
                      className="p-2"
                      onClick={() => setActiveSubMenu(activeSubMenu === link.key ? null : link.key)}
                    >
                      <ChevronDown className={`transition-transform duration-300 ${activeSubMenu === link.key ? 'rotate-180 text-accent-copper' : 'text-gray-400'}`} />
                    </button>
                  )}
                </div>
                
                {link.subLinks && activeSubMenu === link.key && (
                  <div className="bg-bg-cream rounded-2xl mb-4 px-4 py-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.key}
                        to={sub.path}
                        className={`block py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
                          location.pathname === sub.path ? 'text-accent-copper' : 'text-body-text'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {t(sub)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col gap-6">
              <a href="tel:7708618830" className="flex items-center gap-4 p-4 bg-bg-cream rounded-2xl group active:scale-95 transition-transform">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent-copper shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-copper mb-0.5">{t({ en: 'Call Us Now', es: 'Llámanos Ahora' })}</p>
                  <p className="font-black text-primary-dark">(770) 861-8830</p>
                </div>
              </a>

              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl active:scale-95 transition-transform"
              >
                <div className="w-12 h-12 bg-primary-dark rounded-xl flex items-center justify-center text-white">
                  <Globe size={24} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-0.5">{t({ en: 'Language', es: 'Idioma' })}</p>
                  <p className="font-black text-primary-dark">{language === 'en' ? 'Switch to Español' : 'Cambiar a Inglés'}</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
