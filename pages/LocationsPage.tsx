
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LOCATIONS } from '../constants';
import { MapPin, Phone, Clock } from 'lucide-react';

const LocationsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-black text-primary-dark mb-16 uppercase tracking-tighter text-center">
          {t({ en: 'Visit Our Stores', es: 'Visita Nuestras Tiendas' })}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="flex flex-col">
              <div className="mb-8 aspect-video overflow-hidden rounded-3xl shadow-xl">
                <img 
                  src={`images/location-${loc.id}.png`} 
                  alt={`${loc.id} storefront`} 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/viejooeste-loc-${loc.id}/1200/800`;
                  }}
                />
              </div>
              <div className="bg-white p-8 md:p-12 shadow-lg border-l-8 border-accent-copper flex-grow rounded-3xl">
                <span className="inline-block px-4 py-1.5 bg-accent-gold text-white text-xs font-black uppercase tracking-widest mb-6 rounded-full">
                  {t(loc.badge)}
                </span>
                <h2 className="text-4xl font-serif font-black text-primary-dark mb-8 uppercase tracking-tight">
                  {loc.id === 'new-castle' ? 'New Castle, Delaware' : 'Philadelphia, Pennsylvania'}
                </h2>
                
                <div className="space-y-8 mb-12">
                  <div className="flex gap-4">
                    <MapPin className="text-accent-copper shrink-0" size={24} />
                    <div>
                      <h3 className="font-black uppercase tracking-widest text-xs mb-2 text-gray-400">Address</h3>
                      <p className="text-xl font-bold text-primary-dark">{loc.address}</p>
                      <p className="text-accent-copper font-medium italic mt-2">"{t(loc.note)}"</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="text-accent-copper shrink-0" size={24} />
                    <div>
                      <h3 className="font-black uppercase tracking-widest text-xs mb-2 text-gray-400">Phone Number</h3>
                      <a href={`tel:${loc.phone.replace(/\D/g,'')}`} className="text-2xl font-black text-primary-dark hover:text-accent-copper transition underline decoration-accent-gold decoration-2 underline-offset-4">
                        {loc.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="text-accent-copper shrink-0" size={24} />
                    <div>
                      <h3 className="font-black uppercase tracking-widest text-xs mb-2 text-gray-400">Store Hours</h3>
                      <ul className="space-y-1">
                        {t(loc.hours).map((line, idx) => (
                          <li key={idx} className="text-lg font-bold text-body-text">{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <a 
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-dark text-white px-10 py-5 font-black uppercase tracking-widest hover:bg-accent-copper transition shadow-lg w-full justify-center rounded-full"
                >
                  <MapPin size={20} /> {t({ en: 'Get Directions', es: 'Obtener Direcciones' })}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
