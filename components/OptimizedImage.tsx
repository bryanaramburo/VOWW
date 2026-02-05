
import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  containerClassName?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  fallbackSrc, 
  className, 
  containerClassName = '',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Default image classes if none are provided
  const defaultImgClasses = "w-full h-full object-cover";
  const finalImgClasses = className?.includes('w-') || className?.includes('h-') 
    ? className 
    : `${defaultImgClasses} ${className || ''}`;

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Skeleton / Placeholder - Only show if not loaded and no error */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 flex items-center justify-center min-h-[100px]">
          <div className="w-8 h-8 border-2 border-accent-copper border-t-transparent rounded-full animate-spin opacity-20" />
        </div>
      )}
      
      <img
        src={error ? (fallbackSrc || 'https://via.placeholder.com/800x1000?text=Image+Not+Found') : src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={`transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${finalImgClasses}`}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
