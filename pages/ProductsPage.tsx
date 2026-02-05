
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { CATEGORIES } from '../constants';
import { PRODUCTS } from '../products';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const { t } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const selectedCategory = category ? CATEGORIES.find(c => c.id === category) : null;
  const categoryProducts = category ? (PRODUCTS[category] || []) : [];
  const productCount = categoryProducts.length;

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex !== null && productCount > 0) {
      setActiveImageIndex((activeImageIndex + 1) % productCount);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex !== null && productCount > 0) {
      setActiveImageIndex((activeImageIndex - 1 + productCount) % productCount);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, productCount]);

  return (
    <div className="pt-20 pb-24 px-4 md:px-8">
      <SEO 
        title={selectedCategory ? t(selectedCategory.name) : "Our Collections"} 
        description={selectedCategory ? `Browse our premium collection of ${t(selectedCategory.name)}.` : "Explore our authentic Mexican western wear collections."} 
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-black text-primary-dark mb-4 uppercase tracking-tighter">
            {selectedCategory ? t(selectedCategory.name) : t({ en: 'Our Collections', es: 'Nuestras Colecciones' })}
          </h1>
          <p className="text-accent-copper font-bold uppercase tracking-[0.3em] text-xs">
            {t({ en: 'Product Gallery • View Only', es: 'Galería de Productos • Solo Vista' })}
          </p>
        </div>

        {selectedCategory ? (
          <div className="animate-in fade-in duration-700">
            <Link to="/products" className="inline-flex items-center gap-2 mb-8 font-black text-primary-dark hover:text-accent-copper uppercase tracking-widest transition text-sm">
              ← {t({ en: 'Back to Categories', es: 'Volver a Categorías' })}
            </Link>
            
            {productCount > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {categoryProducts.map((product, i) => (
                  <div key={product.id} onClick={() => setActiveImageIndex(i)} className="relative aspect-[3/4] overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 rounded-2xl bg-white">
                    <OptimizedImage 
                      src={product.image} 
                      alt={`${t(selectedCategory.name)} ${i + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      fallbackSrc={`https://picsum.photos/seed/viejooeste-prod-${category}-${i}/800/1000`}
                    />
                    <div className="absolute inset-0 bg-primary-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 size={24} className="text-white scale-75 group-hover:scale-100 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-bg-cream rounded-3xl">
                <p className="text-primary-dark font-bold uppercase tracking-widest">
                  {t({ en: 'Coming Soon: New items being added to our collection.', es: 'Próximamente: Nuevos artículos en camino.' })}
                </p>
              </div>
            )}
            
            {activeImageIndex !== null && productCount > 0 && (
              <div 
                className="fixed inset-0 z-[100] bg-primary-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300" 
                onClick={() => setActiveImageIndex(null)}
              >
                <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-[110]" onClick={() => setActiveImageIndex(null)}>
                  <X size={40} strokeWidth={1.5} />
                </button>
                <button 
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:bg-white/10 transition-all p-4 z-[110] rounded-full hidden sm:block" 
                  onClick={handlePrev}
                >
                  <ChevronLeft size={48} strokeWidth={1.5} />
                </button>
                <button 
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:bg-white/10 transition-all p-4 z-[110] rounded-full hidden sm:block" 
                  onClick={handleNext}
                >
                  <ChevronRight size={48} strokeWidth={1.5} />
                </button>

                <div className="relative max-w-full max-h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
                  <OptimizedImage 
                    src={categoryProducts[activeImageIndex].image} 
                    alt="Product Detail" 
                    containerClassName="max-w-full max-h-[80vh] shadow-2xl rounded-2xl bg-transparent flex items-center justify-center" 
                    className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-xl"
                    loading="eager"
                    fallbackSrc={`https://picsum.photos/seed/viejooeste-lightbox-${activeImageIndex}/1000/1200`}
                  />
                  <div className="mt-8 text-center">
                    <p className="text-white font-serif text-2xl font-black uppercase tracking-[0.2em] mb-1">
                      {t(selectedCategory.name)}
                    </p>
                    <p className="text-accent-gold font-bold text-sm tracking-widest opacity-80">
                      {activeImageIndex + 1} / {productCount}
                    </p>
                  </div>
                  
                  <div className="flex gap-12 mt-8 sm:hidden">
                    <button onClick={handlePrev} className="text-white bg-white/10 p-4 rounded-full"><ChevronLeft size={32} /></button>
                    <button onClick={handleNext} className="text-white bg-white/10 p-4 rounded-full"><ChevronRight size={32} /></button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat) => (
              <Link key={cat.id} to={`/products/${cat.id}`} className="group relative h-[600px] overflow-hidden rounded-3xl shadow-xl w-full">
                <OptimizedImage src={cat.image} alt={t(cat.name)} containerClassName="absolute inset-0" className="w-full h-full transition duration-1000 grayscale group-hover:grayscale-0" fallbackSrc="https://via.placeholder.com/600x800?text=Category" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                  <h3 className="text-4xl font-serif font-black text-white uppercase mb-4">{t(cat.name)}</h3>
                  <span className="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm group-hover:text-accent-gold transition-colors">
                    {t({ en: 'Explore Collection', es: 'Explorar Colección' })} <ChevronRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
