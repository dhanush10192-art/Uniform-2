import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Truck, RotateCcw, CreditCard, Headphones } from 'lucide-react';
import { useScrollToSection } from '../utils/navigation';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollToSection = useScrollToSection();

  const jerseyImages = [
    'banner1.jpg',
    'banner2.jpg',
    'banner3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % jerseyImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % jerseyImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + jerseyImages.length) % jerseyImages.length);

  return (
    <div className="flex flex-col w-full">


      {/* 1. NEW VIDEO HEADER SECTION */}
      <section className="relative w-full min-h-[450px] md:min-h-[650px] flex items-center overflow-hidden pt-20">

        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <div className="absolute inset-0 z-10 bg-black/50 md:bg-black/20"></div> {/* Overlay for readability */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <video
              className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
              src="dd.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        {/* Mobile Gradient Overlay (Bottom Up) */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0a1d37] to-transparent z-10 md:hidden"></div>

        {/* Desktop Angled Navy Gradient Overlay - Left Side */}
        <div
          className="hidden md:block absolute inset-y-0 left-0 w-[60%] lg:w-[50%] bg-gradient-to-r from-[#0a1d37] via-[#0a1d37]/95 to-transparent z-10"
        ></div>

        {/* Content Layer */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center h-full">
          <div className="w-full md:w-3/5 lg:w-1/2 text-white p-4 md:p-0 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase drop-shadow-2xl">
              Vibrant & <span className="text-uniform-secondary">Durable</span> <br />
              Sublimation <br />
              Prints.
            </h1>
            <p className="text-base md:text-xl text-gray-200 mb-10 max-w-md mx-auto md:mx-0 font-medium">
              High-definition performance wear designed for comfort and built to last.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('gallery')}
                className="bg-uniform-secondary text-white hover:bg-uniform-primary text-sm md:text-lg font-bold py-4 px-10 md:px-14 rounded-full transition-all duration-300 shadow-2xl hover:shadow-uniform-secondary/50 transform hover:-translate-y-1 uppercase tracking-widest"
              >
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* 2. EXISTING SLIDER SECTION */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Slider Section */}
          <div className="relative">
            {/* Navigation Arrows - Outside the card on large screens */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-2 text-uniform-primary hover:text-uniform-secondary transition-colors hidden lg:block"
            >
              <ChevronLeft size={40} strokeWidth={2.5} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-2 text-uniform-primary hover:text-uniform-secondary transition-colors hidden lg:block"
            >
              <ChevronRight size={40} strokeWidth={2.5} />
            </button>

            {/* Card Slider */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
              {jerseyImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                </div>
              ))}

              {/* Dots Pagination */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {jerseyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/80 w-2.5'
                      }`}
                  />
                ))}
              </div>

              {/* Mobile Navigation Arrows (Inside card) */}
              <div className="absolute inset-0 flex justify-between items-center px-4 md:hidden pointer-events-none z-20">
                <button onClick={prevSlide} className="p-2 pointer-events-auto bg-black/20 rounded-full text-white/90 hover:text-white">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={nextSlide} className="p-2 pointer-events-auto bg-black/20 rounded-full text-white/90 hover:text-white">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Features/Trust Banner */}
          <div className="mt-8 bg-uniform-primary rounded-xl py-8 px-6 md:px-8 text-white shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Feature 1 */}
              <div className="flex items-center gap-4 border-b sm:border-b-0 sm:border-r border-blue-800/30 pb-4 sm:pb-0 last:border-0">
                <Truck size={36} className="text-blue-400 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-base uppercase">Fast Delivery</h3>
                  <p className="text-blue-200/70 text-[10px] uppercase tracking-wider">All over India</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4 border-b lg:border-b-0 lg:border-r border-blue-800/30 pb-4 sm:pb-0 last:border-0 lg:border-r-0 xl:border-r">
                <RotateCcw size={36} className="text-blue-400 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-base uppercase">7 Days Return</h3>
                  <p className="text-blue-200/70 text-[10px] uppercase tracking-wider">Quality Guarantee</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4 border-b sm:border-b-0 sm:border-r border-blue-800/30 pb-4 sm:pb-0 last:border-0">
                <CreditCard size={36} className="text-blue-400 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-base uppercase">Secure Payment</h3>
                  <p className="text-blue-200/70 text-[10px] uppercase tracking-wider">100% Safe Checkout</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-4">
                <Headphones size={36} className="text-blue-400 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-base uppercase">Customer Care</h3>
                  <p className="text-blue-200/70 text-[10px] uppercase tracking-wider">Mon-Sat 10am-7pm</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Hero;
