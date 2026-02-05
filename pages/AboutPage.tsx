import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Map, Award, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h1 className="text-5xl md:text-6xl font-serif font-black text-primary-dark mb-12 uppercase tracking-tighter text-center">
          {t({ en: 'About Us', es: 'Nosotros' })}
        </h1>
        
        <div className="mb-16 aspect-video bg-bg-cream rounded-3xl overflow-hidden shadow-2xl relative">
          <img 
            src="images/about-store.png" 
            alt="Viejo Oeste Store Interior" 
            className="w-full h-full object-cover grayscale"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/viejooeste-about/1200/800';
            }}
          />
          <div className="absolute inset-0 bg-primary-dark/30 mix-blend-overlay" />
        </div>

        <div className="prose prose-lg mx-auto text-body-text leading-relaxed space-y-8 mb-24">
          <h2 className="text-3xl font-serif font-bold text-primary-dark border-b-2 border-accent-copper inline-block pb-2 mb-4">
            {t({ en: 'Our Heritage', es: 'Nuestra Herencia' })}
          </h2>
          <p>
            {t({ 
              en: 'Viejo Oeste Western Wear was founded on the principles of tradition, craftsmanship, and the rich culture of Mexican western style. For years, we have served as the premier destination in the Northeast for those seeking authentic, high-quality western apparel that reflects their identity and pride.',
              es: 'Viejo Oeste Western Wear fue fundada sobre los principios de tradición, artesanía y la rica cultura del estilo vaquero mexicano. Durante años, hemos servido como el destino principal en el noreste para quienes buscan ropa vaquera auténtica y de alta calidad que refleje su identidad y orgullo.'
            })}
          </p>

          <p>
            {t({ 
              en: 'From our original location in the New Castle Farmers Market to our boutique in the heart of Philadelphia\'s Italian Market, we take pride in offering a curated selection of products that you won\'t find anywhere else. Our shelves are stocked with premium brands like Stetson, Resistol, and custom-made exotic leather boots.',
              es: 'Desde nuestra ubicación original en el New Castle Farmers Market hasta nuestra tienda en el corazón del Italian Market de Philadelphia, nos enorgullecemos de ofrecer una selección curada de productos que no encontrarás en ningún otro lugar. Nuestras tiendas están llenas de marcas premium como Stetson, Resistol y botas de piel exótica hechas a medida.'
            })}
          </p>

          <h2 className="text-3xl font-serif font-bold text-primary-dark border-b-2 border-accent-copper inline-block pb-2 mb-4">
            {t({ en: 'Our Commitment', es: 'Nuestro Compromiso' })}
          </h2>
          <p>
            {t({ 
              en: 'We believe that western wear is more than just clothing—it\'s a lifestyle. That\'s why we offer specialized services like Tejana hat fitting, cleaning, and custom boot orders. Our bilingual staff is here to ensure that every customer walks out with a product that fits perfectly and lasts for years to come.',
              es: 'Creemos que la ropa vaquera es más que solo ropa; es un estilo de vida. Es por eso que ofrecemos servicios especializados como ajuste de sombreros de Tejana, limpieza y pedidos de botas personalizados. Nuestro personal bilingüe está aquí para garantizar que cada cliente salga con un producto que se ajuste perfectamente y dure años.'
            })}
          </p>
        </div>
      </div>

      {/* Core Values Section - matching user request image */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-bg-cream/50 p-12 rounded-[2rem] flex flex-col items-center text-center transition-all duration-300 hover:bg-bg-cream">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-8">
              <Map size={32} className="text-accent-gold" />
            </div>
            <h3 className="text-2xl font-serif font-black text-primary-dark mb-4 uppercase tracking-tight">
              {t({ en: 'Quality', es: 'Calidad' })}
            </h3>
            <p className="text-body-text/80 leading-relaxed font-medium">
              {t({ 
                en: 'Only the best brands and premium materials.', 
                es: 'Solo las mejores marcas y materiales premium.' 
              })}
            </p>
          </div>

          <div className="bg-bg-cream/50 p-12 rounded-[2rem] flex flex-col items-center text-center transition-all duration-300 hover:bg-bg-cream">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-8">
              <Award size={32} className="text-accent-gold" />
            </div>
            <h3 className="text-2xl font-serif font-black text-primary-dark mb-4 uppercase tracking-tight">
              {t({ en: 'Authenticity', es: 'Autenticidad' })}
            </h3>
            <p className="text-body-text/80 leading-relaxed font-medium">
              {t({ 
                en: 'Authentic Mexican western tradition.', 
                es: 'Auténtica tradición vaquera de México.' 
              })}
            </p>
          </div>

          <div className="bg-bg-cream/50 p-12 rounded-[2rem] flex flex-col items-center text-center transition-all duration-300 hover:bg-bg-cream">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-8">
              <Users size={32} className="text-accent-gold" />
            </div>
            <h3 className="text-2xl font-serif font-black text-primary-dark mb-4 uppercase tracking-tight">
              {t({ en: 'Community', es: 'Comunidad' })}
            </h3>
            <p className="text-body-text/80 leading-relaxed font-medium">
              {t({ 
                en: 'Proudly serving our people.', 
                es: 'Sirviendo con orgullo a nuestra gente.' 
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;