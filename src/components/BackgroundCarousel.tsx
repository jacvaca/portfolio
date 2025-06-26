
import { useState, useEffect } from 'react';

const BackgroundCarousel = () => {
  const images = [
    '/lovable-uploads/41fe0f1f-4c55-4b1b-90fa-e922b58cb054.png',
    '/lovable-uploads/716a79c2-9a5d-458c-9a99-031237adf64e.png',
    '/lovable-uploads/5e92095c-8eeb-4f83-b090-966ddb53328d.png',
    '/lovable-uploads/392edf94-5d03-49ab-b781-8feda6c77fb9.png',
    '/lovable-uploads/01f49fad-53ea-4c67-be53-2b15320226f6.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="fixed inset-0 z-0">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-30' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Background ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 to-white/80" />
    </div>
  );
};

export default BackgroundCarousel;
