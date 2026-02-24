import { motion } from 'framer-motion';
import { useScrollToSection } from '../utils/navigation';

const WhatWeDo = () => {
  const scrollToSection = useScrollToSection();
  return (
    <section id="whatwedo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-6xl font-black text-navy-dark mb-6 uppercase tracking-tighter leading-[0.9]">
            The Art of <br />
            <span className="text-uniform-secondary">Sublimation</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-bold text-sm md:text-base leading-relaxed">
            A state-of-the-art fusion process that embeds ink directly into the fabric fibers. Unlimited colors, intricate details, and photographic quality that never cracks or peels.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <img
              src="/Gallery/SUBLIMATION SERVER/3.jpg"
              alt="Sublimation design 3"
              className="w-full h-48 md:h-64 object-cover rounded-lg hidden md:block"
            />

            <img
              src="/3322.png"
              alt="Sublimation design 1"
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />

            <img
              src="/33344.png"
              alt="Sublimation design 2"
              className="w-full h-48 md:h-72 object-cover rounded-lg hidden md:block"
            />
          </div>

          {/* <div>
            <img
              src="/"
              alt="Premium cricket jersey fabric"
              className="w-100% h-48 md:h-64 object-cover rounded-lg"
            />
          </div> */}

          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection('about')}
              className="px-6 py-3 bg-uniform-secondary text-white rounded-lg font-semibold shadow hover:bg-uniform-primary transition"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
