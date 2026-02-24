import { motion } from 'framer-motion';
import { useScrollToSection } from '../utils/navigation';

const DesignIn3D = () => {
  const scrollToSection = useScrollToSection();
  return (
    <section id="design3d" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-6xl font-black text-navy-dark mb-8 uppercase tracking-tighter leading-[0.9]">
              Real-Time <br />
              <span className="text-uniform-secondary">3D Customization</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 font-bold text-sm md:text-base leading-relaxed">
              Design your apparel in full 3D. Choose styles, customize colors, and add logos in real-time. Share with your team and finalize your vision before we even start printing.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'Instant 3D Sublimation Preview',
                'Live Logo & Name Placement',
                'Team-Wide Design Sharing',
                'Direct Seamless Ordering'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 justify-center lg:justify-start group">
                  <div className="w-5 h-5 rounded-md bg-uniform-secondary/10 flex items-center justify-center group-hover:bg-uniform-secondary transition-colors duration-300">
                    <svg className="w-3 h-3 text-uniform-secondary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-sm font-black text-navy-dark tracking-tighter uppercase">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className="px-12 py-5 bg-navy-dark text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-uniform-secondary transition-all duration-300 shadow-2xl hover:shadow-uniform-secondary/30 transform hover:-translate-y-1"
            >
              Learn the Process
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="relative p-2 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
              <img
                src="/Gallery/SUBLIMATION SERVER/10.jpg"
                alt="3D sublimation preview"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-[2rem] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-8 right-8 bg-uniform-secondary/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg">
                <span className="text-white font-black text-[10px] tracking-widest uppercase">Live 3D Engine</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesignIn3D;
