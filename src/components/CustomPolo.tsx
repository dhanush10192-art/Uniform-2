import { motion } from 'framer-motion';

const CustomPolo = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative">
                            <img
                                src="/Gallery/SUBLIMATION SERVER/01.png"
                                alt="Sublimation Custom Polo"
                                className="w-full h-auto rounded-[2.5rem] shadow-2xl"
                            />
                            {/* Accent Background */}
                            <div className="absolute -inset-4 bg-orange-100/30 -z-10 rounded-[3rem] transform -rotate-3"></div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 text-center lg:text-left"
                    >
                        <h2 className="text-3xl md:text-6xl font-black text-navy-dark mb-8 leading-[0.9] uppercase tracking-tighter">
                            Permanent <br />
                            <span className="text-uniform-secondary">Color Fusion</span>
                        </h2>
                        <div className="space-y-8 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                            <p className="text-justify md:text-center lg:text-justify border-l-4 border-uniform-secondary pl-6 italic bg-slate-50 py-4 rounded-r-2xl">
                                Our molecular-level printing process ensures vibrant designs that become part of the fabric itself. No peeling, no cracking—just pure, permanent performance.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                                {[
                                    'HD Vibrant Clarity',
                                    'Anti-Fade Technology',
                                    'Odor Resistant',
                                    'Quick-Dry Mesh',
                                    'Precision Hemming',
                                    '4-Way Stretch'
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 group">
                                        <div className="w-6 h-6 rounded-full bg-uniform-secondary/10 flex items-center justify-center group-hover:bg-uniform-secondary transition-colors duration-300">
                                            <svg className="w-3.5 h-3.5 text-uniform-secondary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-sm font-bold text-navy-dark tracking-tight uppercase">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CustomPolo;
