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
            <h2 className="text-4xl md:text-6xl font-black text-navy-dark mb-8 leading-[0.9] tracking-tighter uppercase">
              Sublimation <br />
              <span className="text-uniform-secondary">Specialists</span>
            </h2>
            <div className="space-y-6 text-base md:text-lg text-gray-600 mb-10 leading-relaxed font-bold">
              <p className="text-justify md:text-center lg:text-left">
                Fast Colour is a premier sublimation printing and uniform manufacturing company. We specialize in delivering high-quality, vibrant, and durable custom jerseys for sports teams, corporate events, and educational institutions across India.
              </p>
              <p className="hidden md:block text-justify md:text-center lg:text-left text-sm opacity-80">
                With over 11 years of experience, our commitment to using advanced sublimation technology ensures every garment features crisp detail and permanent colors that never fade. We use premium breathable materials to ensure performance and comfort on and off the field.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-12">
              {[
                { label: 'Designs Ready', value: '500+' },
                { label: 'Units Per Day', value: '5000+' },
                { label: 'States Served', value: '20+' },
                { label: 'Satisfaction', value: '100%' }
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-2xl md:text-4xl font-black text-uniform-secondary mb-1 tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] md:text-xs text-navy-dark uppercase tracking-widest font-black opacity-60">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/917812865788"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-5 bg-navy-dark text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-uniform-secondary transition-all duration-300 shadow-2xl hover:shadow-uniform-secondary/30 transform hover:-translate-y-1"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
