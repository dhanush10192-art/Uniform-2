import { motion } from 'framer-motion';

const CustomRoundNeck = () => {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left"
                    >
                        <h2 className="text-3xl md:text-6xl font-black text-navy-dark mb-8 leading-[0.9] tracking-tighter uppercase">
                            Performance <br />
                            <span className="text-uniform-secondary">Workwear Elite</span>
                        </h2>
                        <div className="space-y-8 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                            <p className="text-justify md:text-center lg:text-justify border-r-4 border-uniform-secondary pr-6 italic bg-white py-4 rounded-l-2xl shadow-sm">
                                Engineered for the most demanding environments. Our sublimation workwear combines extreme durability with high-definition branding that never fades or wears off.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                                {[
                                    'Reinforced Stitching',
                                    'Industrial Strength Fabric',
                                    'Moisture Management',
                                    'UV Ray Protection',
                                    'Lightweight Comfort',
                                    'Breathable Panel Design'
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

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 order-1 lg:order-2"
                    >
                        <div className="relative">
                            <img
                                src="/Gallery/SUBLIMATION SERVER/02.png"
                                alt="Sublimation Print Design"
                                className="w-full h-auto rounded-[2.5rem] shadow-2xl"
                            />
                            {/* Accent Background */}
                            <div className="absolute -inset-4 bg-blue-100/30 -z-10 rounded-[3rem] transform rotate-3"></div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CustomRoundNeck;
