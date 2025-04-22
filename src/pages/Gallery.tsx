import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { FocusCards, Card as CardType } from "@/components/ui/focus-cards";
import gal_1 from '../../public/assets/photo-gallery/gal-1.png';
import gal_2 from '../../public/assets/photo-gallery/gal-2.png';
import gal_3 from '../../public/assets/photo-gallery/gal-3.png';
import gal_4 from '../../public/assets/photo-gallery/gal-4.png';
import gal_5 from '../../public/assets/photo-gallery/gal-5.png';
import gal_6 from '../../public/assets/photo-gallery/gal-6.png';
import gal_7 from '../../public/assets/photo-gallery/gal-7.png';
import gal_8 from '../../public/assets/photo-gallery/gal-8.png';
import gal_9 from '../../public/assets/photo-gallery/gal-9.png';
import gal_10 from '../../public/assets/photo-gallery/gal-10.png';

// Define gallery image type
interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [headerHeight, setHeaderHeight] = useState(0);

  const galleryImages: GalleryImage[] = [
    { id: '1', src: gal_1, alt: 'Control Panel Manufacturing', category: 'Manufacturing' },
    { id: '2', src: gal_2, alt: 'Electrical Installation at Power Plant', category: 'Installation' },
    { id: '3', src: gal_3, alt: 'Automation System Design', category: 'Automation' },
    { id: '4', src: gal_4, alt: 'Switchgear Panel Testing', category: 'Testing' },
    { id: '5', src: gal_5, alt: 'Electrical Panel Wiring', category: 'Manufacturing' },
    { id: '6', src: gal_6, alt: 'Site Installation Work', category: 'Installation' },
    { id: '7', src: gal_7, alt: 'Control System Programming', category: 'Automation' },
    { id: '8', src: gal_8, alt: 'Quality Inspection Process', category: 'Testing' },
    { id: '9', src: gal_9, alt: 'Motor Control Center', category: 'Manufacturing' },
    { id: '10', src: gal_10, alt: 'Panel Installation at Client Site', category: 'Installation' },
  ];

  const categories = ['All', ...new Set(galleryImages.map(image => image.category))];

  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.querySelector('header');
      if (headerElement) {
        setHeaderHeight(headerElement.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  useEffect(() => {
    document.title = 'Photo Gallery - GVS Controls';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore GVS Controls photo gallery showcasing our electrical engineering projects, control panels, and installations across various industries.');
    }

    setTimeout(() => setLoading(false), 1000);

    if (activeCategory === 'All') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(image => image.category === activeCategory));
    }

    const handleScroll = () => {
      const elements = document.querySelectorAll('.aos-fade-up, .aos-fade-in, .aos-fade-right, .aos-fade-left');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.75) {
          element.classList.add('aos-animate');
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEscKey);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [activeCategory]);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const focusCardsData: CardType[] = filteredImages.map(image => ({
    title: image.alt,
    src: image.src,
    onClick: () => openLightbox(image),
  }));

  return (
    <main style={{ paddingTop: `${headerHeight}px` }} className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 via-teal-600 to-purple-600 text-white py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0,_transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 sm:px-4 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm text-teal-200 text-xs sm:text-sm mb-4 sm:mb-6 border border-white/20">
              Our Work
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-300">
              Photo Gallery
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              Discover our electrical engineering projects through stunning visuals.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-teal-200 via-indigo-300 to-fuchsia-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 aos-fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Project Showcase</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              A visual journey through our innovative solutions across industries.
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-8 sm:mb-10 md:mb-12 aos-fade-in">
            <div className="inline-flex flex-wrap justify-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-200 rounded-lg shadow-sm max-w-full">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-md text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-teal-500 to-indigo-500 text-white shadow-md'
                      : 'bg-transparent text-gray-800 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-10 sm:py-16 md:py-20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
            </div>
          ) : (
            <div className="mt-8 sm:mt-10 mb-12 sm:mb-16 md:mb-20">
              <FocusCards cards={focusCardsData} />
            </div>
          )}

          {filteredImages.length === 0 && (
            <div className="text-center py-8 sm:py-10 md:py-12">
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">No images found in this category. Please try another filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900/90 via-indigo-900/90 to-teal-900/90 flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          <div 
            className="relative w-full max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <button 
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-colors"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent text-white p-3 sm:p-4 backdrop-blur-sm rounded-b-lg">
              <h3 className="font-medium text-base sm:text-lg md:text-xl">{selectedImage.alt}</h3>
              <p className="text-teal-300 text-xs sm:text-sm md:text-base">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;