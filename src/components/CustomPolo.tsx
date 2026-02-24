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
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 text-center lg:text-left"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 md:mb-8 leading-tight uppercase tracking-tighter">
                            Premium Sublimation <span className="text-uniform-secondary">Prints</span>
                        </h2>
                        <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            <p className="text-justify md:text-center lg:text-justify lg:font-bold">
                                Our premium sublimation printing process ensures that every design is embedded directly into the fabric, providing a permanent, high-resolution finish that will never crack, peel, or fade. Perfect for complex patterns and vibrant team colors on professional-grade performance fabrics.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CustomPolo;
