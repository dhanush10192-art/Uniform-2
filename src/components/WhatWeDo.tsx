import { motion } from 'framer-motion';

const WhatWeDo = () => {
  return (
    <section id="whatwedo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Sublimation Printing</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Sublimation printing is a state-of-the-art process that fuses ink directly into the fabric fibers. This technology allows for unlimited colors, intricate designs, and photographic quality prints that are breathable, extremely durable, and will never crack or peel.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <img
              src="/Gallery/SUBLIMATION SERVER/2.jpg"
              alt="Sublimation design 1"
              className="w-full h-50 object-cover rounded-lg hidden md:block"
            />

            <img
              src="/Gallery/SUBLIMATION SERVER/3.jpg"
              alt="Sublimation production"
              className="w-100% h-100  object-cover rounded-lg"
            />

            <img
              src="/Gallery/SUBLIMATION SERVER/4.jpg"
              alt="Sublimation design 2"
              className="w-full h-75 object-cover rounded-lg hidden md:block"
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
            <a href="#about" className="px-6 py-3 bg-uniform-secondary text-white rounded-lg font-semibold shadow hover:bg-uniform-primary transition">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
