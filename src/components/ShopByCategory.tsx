import { useNavigate } from 'react-router-dom';

const ShopByCategory = () => {
    const navigate = useNavigate();

    const categories = [
        {
            id: 2,
            title: 'Sublimation',
            image: '/Gallery/SUBLIMATION SERVER/3.jpg',
        },
        {
            id: 3,
            title: 'Sublimation#1',
            image: '/Gallery/SUBLIMATION SERVER/4.jpg',
        },
        {
            id: 4,
            title: 'Sublimation',
            image: '/Gallery/SUBLIMATION SERVER/5.jpg',
        }
    ];

    return (
        <section id="shop-by-category" className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-16 border-b border-gray-100 pb-8">
                    <div className="text-center sm:text-left">
                        <h2 className="text-3xl md:text-5xl font-black text-navy-dark leading-none uppercase tracking-tighter">
                            Shop By <span className="text-uniform-secondary">Category</span>
                        </h2>
                        <p className="text-gray-400 font-bold text-xs mt-3 uppercase tracking-widest">Premium Collection 2026</p>
                    </div>
                    <button
                        onClick={() => navigate('/gallery')}
                        className="group flex items-center gap-2 px-10 py-4 bg-navy-dark text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-uniform-secondary transition-all duration-300 shadow-xl hover:shadow-uniform-secondary/20 transform hover:-translate-y-1"
                    >
                        Explore All
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="group flex flex-col items-center cursor-pointer"
                            onClick={() => navigate('/gallery')}
                        >
                            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1.5 border-2 border-gray-100 group-hover:border-uniform-secondary transition-all duration-500 shadow-sm hover:shadow-md">
                                <div className="w-full h-full rounded-full overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            <h3 className="mt-4 text-sm md:text-base font-bold text-gray-800 text-center uppercase tracking-tighter group-hover:text-uniform-secondary transition-colors">
                                {category.title}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ShopByCategory;
