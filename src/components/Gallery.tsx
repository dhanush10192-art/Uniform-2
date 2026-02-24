import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();

  const galleryItems = [
    { id: 1, title: 'Sublimation Design', image: '/Gallery/SUBLIMATION SERVER/1.jpg', alt: 'Sublimation Design' },
    { id: 2, title: 'Production Ready', image: '/Gallery/SUBLIMATION SERVER/2.jpg', alt: 'Production Ready' },
    { id: 3, title: 'Vibrant Colors', image: '/Gallery/SUBLIMATION SERVER/3.jpg', alt: 'Vibrant Colors' },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-dark mb-4 uppercase tracking-tighter">
            Our <span className="text-uniform-secondary">Gallery</span>
          </h2>
          <p className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Explore our collection of professional sublimation designs and custom apparel
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 mb-12">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/gallery/${item.id}`)}
              className="group relative overflow-hidden rounded-2xl h-48 md:h-80 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Subtle Branding Overlay */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10 opacity-30">
                <span className="text-white font-black text-[10px] md:text-xs tracking-widest uppercase">Fast Colour</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-sm md:text-xl font-black tracking-tight leading-tight">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-uniform-secondary text-[10px] md:text-xs font-bold uppercase tracking-widest">View Details</span>
                  <ArrowRight size={14} className="text-uniform-secondary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate('/gallery')}
            className="inline-flex items-center px-10 py-4 bg-uniform-secondary text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-uniform-primary transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Explore Collection
            <ArrowRight className="ml-3 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
