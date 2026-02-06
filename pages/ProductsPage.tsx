
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { CATEGORIES } from '../constants';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

// Product data - controls which images appear per category
// To add more products: just add more entries to each array
const PRODUCTS: { [key: string]: { id: number; image: string; alt: string }[] } = {
  'men-boots': [
    { id: 0, image: 'images/products/men-boots/product-0.png', alt: "Men's western boot" },
    { id: 1, image: 'images/products/men-boots/product-1.png', alt: "Men's western boot" },
    { id: 2, image: 'images/products/men-boots/product-2.png', alt: "Men's western boot" },
    { id: 3, image: 'images/products/men-boots/product-3.png', alt: "Men's western boot" },
    { id: 4, image: 'images/products/men-boots/product-4.png', alt: "Men's western boot" },
    { id: 5, image: 'images/products/men-boots/product-5.png', alt: "Men's western boot" },
    { id: 6, image: 'images/products/men-boots/product-6.png', alt: "Men's western boot" },
    { id: 7, image: 'images/products/men-boots/product-7.png', alt: "Men's western boot" },
    { id: 8, image: 'images/products/men-boots/product-8.png', alt: "Men's western boot" },
    { id: 9, image: 'images/products/men-boots/product-9.png', alt: "Men's western boot" },
    { id: 10, image: 'images/products/men-boots/product-10.png', alt: "Men's western boot" },
    { id: 11, image: 'images/products/men-boots/product-11.png', alt: "Men's western boot" },
    // Add more: { id: 12, image: 'images/products/men-boots/product-12.png', alt: "Men's western boot" },
  ],
  'women-boots': [
    { id: 0, image: 'images/products/women-boots/product-0.png', alt: "Women's western boot" },
    { id: 1, image: 'images/products/women-boots/product-1.png', alt: "Women's western boot" },
    { id: 2, image: 'images/products/women-boots/product-2.png', alt: "Women's western boot" },
    { id: 3, image: 'images/products/women-boots/product-3.png', alt: "Women's western boot" },
    { id: 4, image: 'images/products/women-boots/product-4.png', alt: "Women's western boot" },
    { id: 5, image: 'images/products/women-boots/product-5.png', alt: "Women's western boot" },
    { id: 6, image: 'images/products/women-boots/product-6.png', alt: "Women's western boot" },
    { id: 7, image: 'images/products/women-boots/product-7.png', alt: "Women's western boot" },
    { id: 8, image: 'images/products/women-boots/product-8.png', alt: "Women's western boot" },
    { id: 9, image: 'images/products/women-boots/product-9.png', alt: "Women's western boot" },
    { id: 10, image: 'images/products/women-boots/product-10.png', alt: "Women's western boot" },
    { id: 11, image: 'images/products/women-boots/product-11.png', alt: "Women's western boot" },
  ],
  'hats': [
    { id: 0, image: 'images/products/hats/product-0.png', alt: 'Western hat' },
    { id: 1, image: 'images/products/hats/product-1.png', alt: 'Western hat' },
    { id: 2, image: 'images/products/hats/product-2.png', alt: 'Western hat' },
    { id: 3, image: 'images/products/hats/product-3.png', alt: 'Western hat' },
    { id: 4, image: 'images/products/hats/product-4.png', alt: 'Western hat' },
    { id: 5, image: 'images/products/hats/product-5.png', alt: 'Western hat' },
    { id: 6, image: 'images/products/hats/product-6.png', alt: 'Western hat' },
    { id: 7, image: 'images/products/hats/product-7.png', alt: 'Western hat' },
    { id: 8, image: 'images/products/hats/product-8.png', alt: 'Western hat' },
    { id: 9, image: 'images/products/hats/product-9.png', alt: 'Western hat' },
    { id: 10, image: 'images/products/hats/product-10.png', alt: 'Western hat' },
    { id: 11, image: 'images/products/hats/product-11.png', alt: 'Western hat' },
  ],
  'tejanas': [
    { id: 0, image: 'images/products/tejanas/product-0.png', alt: 'Tejana hat' },
    { id: 1, image: 'images/products/tejanas/product-1.png', alt: 'Tejana hat' },
    { id: 2, image: 'images/products/tejanas/product-2.png', alt: 'Tejana hat' },
    { id: 3, image: 'images/products/tejanas/product-3.png', alt: 'Tejana hat' },
    { id: 4, image: 'images/products/tejanas/product-4.png', alt: 'Tejana hat' },
    { id: 5, image: 'images/products/tejanas/product-5.png', alt: 'Tejana hat' },
    { id: 6, image: 'images/products/tejanas/product-6.png', alt: 'Tejana hat' },
    { id: 7, image: 'images/products/tejanas/product-7.png', alt: 'Tejana hat' },
    { id: 8, image: 'images/products/tejanas/product-8.png', alt: 'Tejana hat' },
    { id: 9, image: 'images/products/tejanas/product-9.png', alt: 'Tejana hat' },
    { id: 10, image: 'images/products/tejanas/product-10.png', alt: 'Tejana hat' },
    { id: 11, image: 'images/products/tejanas/product-11.png', alt: 'Tejana hat' },
  ],
  'belts': [
    { id: 0, image: 'images/products/belts/product-0.png', alt: 'Western belt' },
    { id: 1, image: 'images/products/belts/product-1.png', alt: 'Western belt' },
    { id: 2, image: 'images/products/belts/product-2.png', alt: 'Western belt' },
    { id: 3, image: 'images/products/belts/product-3.png', alt: 'Western belt' },
    { id: 4, image: 'images/products/belts/product-4.png', alt: 'Western belt' },
    { id: 5, image: 'images/products/belts/product-5.png', alt: 'Western belt' },
    { id: 6, image: 'images/products/belts/product-6.png', alt: 'Western belt' },
    { id: 7, image: 'images/products/belts/product-7.png', alt: 'Western belt' },
    { id: 8, image: 'images/products/belts/product-8.png', alt: 'Western belt' },
    { id: 9, image: 'images/products/belts/product-9.png', alt: 'Western belt' },
    { id: 10, image: 'images/products/belts/product-10.png', alt: 'Western belt' },
    { id: 11, image: 'images/products/belts/product-11.png', alt: 'Western belt' },
  ],
  'buckles': [
    { id: 0, image: 'images/products/buckles/product-0.png', alt: 'Western buckle' },
    { id: 1, image: 'images/products/buckles/product-1.png', alt: 'Western buckle' },
    { id: 2, image: 'images/products/buckles/product-2.png', alt: 'Western buckle' },
    { id: 3, image: 'images/products/buckles/product-3.png', alt: 'Western buckle' },
    { id: 4, image: 'images/products/buckles/product-4.png', alt: 'Western buckle' },
    { id: 5, image: 'images/products/buckles/product-5.png', alt: 'Western buckle' },
    { id: 6, image: 'images/products/buckles/product-6.png', alt: 'Western buckle' },
    { id: 7, image: 'images/products/buckles/product-7.png', alt: 'Western buckle' },
    { id: 8, image: 'images/products/buckles/product-8.png', alt: 'Western buckle' },
    { id: 9, image: 'images/products/buckles/product-9.png', alt: 'Western buckle' },
    { id: 10, image: 'images/products/buckles/product-10.png', alt: 'Western buckle' },
    { id: 11, image: 'images/products/buckles/product-11.png', alt: 'Western buckle' },
  ],
  'caps': [
    { id: 0, image: 'images/products/caps/product-0.png', alt: 'Western cap' },
    { id: 1, image: 'images/products/caps/product-1.png', alt: 'Western cap' },
    { id: 2, image: 'images/products/caps/product-2.png', alt: 'Western cap' },
    { id: 3, image: 'images/products/caps/product-3.png', alt: 'Western cap' },
    { id: 4, image: 'images/products/caps/product-4.png', alt: 'Western cap' },
    { id: 5, image: 'images/products/caps/product-5.png', alt: 'Western cap' },
    { id: 6, image: 'images/products/caps/product-6.png', alt: 'Western cap' },
    { id: 7, image: 'images/products/caps/product-7.png', alt: 'Western cap' },
    { id: 8, image: 'images/products/caps/product-8.png', alt: 'Western cap' },
    { id: 9, image: 'images/products/caps/product-9.png', alt: 'Western cap' },
    { id: 10, image: 'images/products/caps/product-10.png', alt: 'Western cap' },
    { id: 11, image: 'images/products/caps/product-11.png', alt: 'Western cap' },
  ],
  'outfits': [
    { id: 0, image: 'images/products/outfits/product-0.png', alt: 'Western outfit' },
    { id: 1, image: 'images/products/outfits/product-1.png', alt: 'Western outfit' },
    { id: 2, image: 'images/products/outfits/product-2.png', alt: 'Western outfit' },
    { id: 3, image: 'images/products/outfits/product-3.png', alt: 'Western outfit' },
    { id: 4, image: 'images/products/outfits/product-4.png', alt: 'Western outfit' },
    { id: 5, image: 'images/products/outfits/product-5.png', alt: 'Western outfit' },
    { id: 6, image: 'images/products/outfits/product-6.png', alt: 'Western outfit' },
    { id: 7, image: 'images/products/outfits/product-7.png', alt: 'Western outfit' },
    { id: 8, image: 'images/products/outfits/product-8.png', alt: 'Western outfit' },
    { id: 9, image: 'images/products/outfits/product-9.png', alt: 'Western outfit' },
    { id: 10, image: 'images/products/outfits/product-10.png', alt: 'Western outfit' },
    { id: 11, image: 'images/products/outfits/product-11.png', alt: 'Western outfit' },
  ],
};

const ProductsPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const { t } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const selectedCategory = category ? CATEGORIES.find(c => c.id === category) : null;
  
  // Get products from the PRODUCTS data (supports unlimited products)
  const categoryProducts = category ? (PRODUCTS[category] || []) : [];
  const productCount = categoryProducts.length;

  const getProductImage = (index: number) => {
    if (categoryProducts[index]) {
      return categoryProducts[index].image;
    }
    return `images/products/${category}/product-${index}.png`;
  };

  const getProductAlt = (index: number) => {
    if (categoryProducts[index]?.alt) {
      return categoryProducts[index].alt;
    }
    return `${selectedCategory ? t(selectedCategory.name) : 'Product'} ${index + 1}`;
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex !== null) setActiveImageIndex((activeImageIndex + 1) % productCount);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex !== null) setActiveImageIndex((activeImageIndex - 1 + productCount) % productCount);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex]);

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
            {t({ en: 'Product Gallery - View Only', es: 'Galeria de Productos - Solo Vista' })}
          </p>
          {selectedCategory && productCount > 0 && (
            <p className="text-body-text/60 mt-2 text-sm">
              {t({ en: `Showing ${productCount} products`, es: `Mostrando ${productCount} productos` })}
            </p>
          )}
        </div>

        {selectedCategory ? (
          <div className="animate-in fade-in duration-700">
            <Link to="/products" className="inline-flex items-center gap-2 mb-8 font-black text-primary-dark hover:text-accent-copper uppercase tracking-widest transition text-sm">
              &larr; {t({ en: 'Back to Categories', es: 'Volver a Categorias' })}
            </Link>
            
            {productCount > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {categoryProducts.map((product, i) => (
                  <div 
                    key={product.id} 
                    onClick={() => setActiveImageIndex(i)} 
                    className="relative aspect-[3/4] overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 rounded-2xl bg-white"
                  >
                    <OptimizedImage 
                      src={product.image} 
                      alt={product.alt || `${t(selectedCategory.name)} ${i + 1}`} 
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
              <div className="text-center py-20">
                <p className="text-body-text/60 text-lg">
                  {t({ en: 'Products coming soon...', es: 'Productos proximamente...' })}
                </p>
              </div>
            )}
            
            {activeImageIndex !== null && (
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
                    src={getProductImage(activeImageIndex)} 
                    alt={getProductAlt(activeImageIndex)} 
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
                <OptimizedImage 
                  src={cat.image} 
                  alt={t(cat.name)} 
                  containerClassName="absolute inset-0" 
                  className="w-full h-full transition duration-1000" 
                  fallbackSrc="https://via.placeholder.com/600x800?text=Category" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                  <h3 className="text-4xl font-serif font-black text-white uppercase mb-4">{t(cat.name)}</h3>
                  <span className="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm group-hover:text-accent-gold transition-colors">
                    {t({ en: 'Explore Collection', es: 'Explorar Coleccion' })} <ChevronRight size={18} />
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
