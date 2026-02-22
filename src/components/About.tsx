const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/Gallery/SUBLIMATION SERVER/7.jpg"
                alt="Sublimation Production"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-dark mb-6">
              Sublimation Specialists
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-bold">
              Fast Colour is a premier sublimation printing and uniform manufacturing company. We specialize in delivering high-quality, vibrant, and durable custom jerseys for sports teams, corporate events, and educational institutions across India.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-bold">
              With over 11 years of experience, our commitment to using advanced sublimation technology ensures every garment features crisp detail and permanent colors that never fade. We use premium breathable materials to ensure performance and comfort on and off the field.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-uniform-secondary mb-2">500+</div>
                <div className="text-gray-600">Designs Ready</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-uniform-secondary mb-2">5000+</div>
                <div className="text-gray-600">Units Per Day</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-uniform-secondary mb-2">20 +</div>
                <div className="text-gray-600">States Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-uniform-secondary mb-2">100%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>

            <a
              href="https://wa.me/917812865788"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-uniform-secondary text-white font-bold rounded-lg hover:bg-uniform-primary transition-colors duration-300"
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
