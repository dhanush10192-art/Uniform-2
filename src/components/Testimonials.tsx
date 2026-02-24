import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'RATHI D',
        content: '"The sublimation printing from Fast Colour are of top-notch quality. Our customer find them very comfortable for all-day wear and the branding is perfect."',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=compress&cs=tinysrgb&w=150'
    },
    {
        id: 2,
        name: 'PRIYA M',
        content: '"Consistently high quality for our sublimation printing. Delivery is always on time and the prices are very competitive."',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=compress&cs=tinysrgb&w=150'
    },
    {
        id: 3,
        name: 'DHANUSH R',
        content: '"The best decision for our sublimation prints. The sublimation prints are vibrant, never fade, and handle daily washing exceptionally well."',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=compress&cs=tinysrgb&w=150'
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(testimonials.length - 1);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0
        })
    };

    return (
        <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-navy-dark mb-4 uppercase tracking-tighter"
                    >
                        What Our <span className="text-uniform-secondary">Customers Say</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto font-medium"
                    >
                        Join hundreds of teams who trust Fast Colours for their performance wear
                    </motion.p>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 md:px-12 lg:px-24">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="w-full"
                        >
                            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 md:p-16 relative min-h-[300px] md:min-h-[350px] flex flex-col justify-center">
                                {/* Quote Icon - Smaller on mobile */}
                                <div className="absolute top-6 left-6 md:top-10 md:left-10 opacity-20">
                                    <Quote size={40} className="text-uniform-secondary transform -scale-x-100 md:w-16 md:h-16" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex gap-1 mb-6 justify-center md:justify-start">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} size={18} className="fill-uniform-secondary text-uniform-secondary" />
                                        ))}
                                    </div>

                                    <p className="text-lg md:text-2xl text-slate-700 leading-relaxed mb-10 italic font-medium text-center md:text-left">
                                        {testimonials[currentIndex].content}
                                    </p>

                                    <div className="flex items-center justify-center md:justify-start gap-5">
                                        <div className="relative">
                                            <img
                                                src={testimonials[currentIndex].avatar}
                                                alt={testimonials[currentIndex].name}
                                                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl object-cover shadow-md"
                                            />
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-black text-navy-dark text-lg md:text-xl tracking-tight">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <span className="text-uniform-secondary text-xs font-bold uppercase tracking-widest">Verified Customer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows - Repositioned for touch friendliness on mobile */}
                    <div className="flex justify-center md:block mt-8 md:mt-0">
                        <button
                            onClick={prevSlide}
                            className="md:absolute left-0 top-1/2 md:-translate-y-1/2 md:-translate-x-4 lg:-translate-x-12 p-4 md:p-3 rounded-full bg-white border border-gray-100 shadow-lg hover:bg-uniform-secondary hover:text-white transition-all z-20 group mx-2 md:mx-0"
                        >
                            <ChevronLeft size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="md:absolute right-0 top-1/2 md:-translate-y-1/2 md:translate-x-4 md:translate-x-12 p-4 md:p-3 rounded-full bg-white border border-gray-100 shadow-lg hover:bg-uniform-secondary hover:text-white transition-all z-20 group mx-2 md:mx-0"
                        >
                            <ChevronRight size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                        </button>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-8 md:mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`transition-all duration-500 rounded-full h-2 ${index === currentIndex ? 'bg-uniform-secondary w-10' : 'bg-gray-200 w-2 hover:bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
