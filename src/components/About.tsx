const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/Gallery/SUBLIMATION SERVER/03.png"
                alt="Sublimation Production"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-dark mb-6 leading-tight">
              Sublimation Specialists
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-600 mb-8 leading-relaxed font-bold">
              <p>
                Fast Colour is a premier sublimation printing and uniform manufacturing company. We specialize in delivering high-quality, vibrant, and durable custom jerseys for sports teams, corporate events, and educational institutions across India.
              </p>
              <p>
                With over 11 years of experience, our commitment to using advanced sublimation technology ensures every garment features crisp detail and permanent colors that never fade. We use premium breathable materials to ensure performance and comfort on and off the field.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-10 text-left">
              <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl md:text-3xl font-bold text-uniform-secondary mb-1">500+</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-semibold">Designs Ready</div>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl md:text-3xl font-bold text-uniform-secondary mb-1">5000+</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-semibold">Units Per Day</div>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl md:text-3xl font-bold text-uniform-secondary mb-1">20 +</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-semibold">States Served</div>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl md:text-3xl font-bold text-uniform-secondary mb-1">100%</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-semibold">Satisfaction</div>
              </div>
            </div>

            <a
              href="https://wa.me/917812865788"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-uniform-secondary text-white font-bold rounded-full hover:bg-uniform-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
