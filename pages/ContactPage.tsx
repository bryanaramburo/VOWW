import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MessageSquare, Instagram, Facebook, Smartphone } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-32 bg-bg-cream min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif font-black text-primary-dark mb-6 uppercase tracking-tighter">
            {t({ en: 'Contact Us', es: 'Contáctanos' })}
          </h1>
          <p className="text-lg md:text-xl text-body-text max-w-2xl mx-auto leading-relaxed">
            {t({ 
              en: "Have questions about our collection, need a custom hat fitting, or looking for specific exotic leather boots? Reach out through any of our official channels.",
              es: '¿Tienes preguntas sobre nuestra colección, necesitas un ajuste de sombrero personalizado o buscas botas de piel exótica específicas? Contáctanos a través de cualquiera de nuestros canales oficiales.'
            })}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {/* Phone Card */}
            <a 
              href="tel:7708618830" 
              className="bg-white p-6 shadow-lg border-b-4 border-accent-copper flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 rounded-2xl"
            >
              <div className="w-14 h-14 bg-bg-cream rounded-2xl flex items-center justify-center text-accent-copper mb-4 group-hover:bg-accent-copper group-hover:text-white transition-colors">
                <Phone size={28} />
              </div>
              <h3 className="font-black uppercase tracking-widest text-[10px] text-gray-400 mb-1">
                {t({ en: 'Call Us', es: 'Llámanos' })}
              </h3>
              <p className="font-black text-base text-primary-dark">(770) 861-8830</p>
            </a>

            {/* SMS Card */}
            <a 
              href="sms:+17708618830" 
              className="bg-white p-6 shadow-lg border-b-4 border-primary-dark flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 rounded-2xl"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-primary-dark mb-4 group-hover:bg-primary-dark group-hover:text-white transition-colors">
                <Smartphone size={28} />
              </div>
              <h3 className="font-black uppercase tracking-widest text-[10px] text-gray-400 mb-1">
                {t({ en: 'Text Us', es: 'Texto' })}
              </h3>
              <p className="font-black text-base text-primary-dark">(770) 861-8830</p>
            </a>

            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/17708618830" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 shadow-lg border-b-4 border-green-500 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 rounded-2xl"
            >
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-500 mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors">
                <MessageSquare size={28} />
              </div>
              <h3 className="font-black uppercase tracking-widest text-[10px] text-gray-400 mb-1">WhatsApp</h3>
              <p className="font-black text-base text-primary-dark">(770) 861-8830</p>
            </a>

            {/* Facebook Card */}
            <a 
              href="https://www.facebook.com/viejooeste.westernwear/photos/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 shadow-lg border-b-4 border-blue-600 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 rounded-2xl"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Facebook size={28} />
              </div>
              <h3 className="font-black uppercase tracking-widest text-[10px] text-gray-400 mb-1">Facebook</h3>
              <p className="font-black text-base text-primary-dark">@viejooeste</p>
            </a>

            {/* Instagram Card */}
            <a 
              href="https://www.instagram.com/viejooestewesternwear/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 shadow-lg border-b-4 border-accent-gold flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 rounded-2xl"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-accent-gold mb-4 group-hover:bg-accent-gold group-hover:text-white transition-colors">
                <Instagram size={28} />
              </div>
              <h3 className="font-black uppercase tracking-widest text-[10px] text-gray-400 mb-1">Instagram</h3>
              <p className="font-black text-base text-primary-dark">@viejooeste</p>
            </a>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-2xl font-serif font-black text-primary-dark mb-4 uppercase">
              {t({ en: 'Visit Us in Person', es: 'Visítanos en Persona' })}
            </h2>
            <p className="text-body-text mb-8">
              {t({ 
                en: 'Check our store locations and hours to see our full collection.',
                es: 'Consulta nuestras ubicaciones y horarios para ver nuestra colección completa.'
              })}
            </p>
            <button 
              onClick={() => window.location.hash = '#/locations'}
              className="inline-block bg-primary-dark text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-accent-copper transition shadow-xl rounded-full"
            >
              {t({ en: 'View Locations', es: 'Ver Ubicaciones' })}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;