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
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 md:mb-8 leading-tight tracking-tighter uppercase">
                            Sublimation <span className="text-uniform-secondary">Print Design</span>
                        </h2>
                        <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            <p className="text-justify md:text-center lg:text-justify font-bold">
                                Fast Colors Uniform delivers professional, high-quality workwear designed for comfort, durability, and sharp presentation. Using advanced sublimation printing, every garment features vibrant, fade-resistant colors and crisp detail that lasts through daily use and frequent washing. Fabrics are breathable, lightweight, and sweat-absorbent, ensuring all-day comfort in active environments. Precision stitching, modern fits, and neat finishes create a polished look for teams across industries.
                            </p>
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
