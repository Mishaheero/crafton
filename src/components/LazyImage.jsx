import React, { useEffect, useRef, useState } from "react";

// Komponent LazyImage
const LazyImage = ({ src, alt, className, style }) => {
  const imgRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); 

  
  const handleImageLoad = () => {
    setIsLoaded(true); 
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); 
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current); 
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current); 
      }
    };
  }, []);

  return (
    <img
      ref={imgRef} 
      src={isInView ? src : ""} 
      alt={alt}
      onLoad={handleImageLoad} 
      className={`transition-opacity ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        ...style,
      }}
    />
  );
};

export default LazyImage;
