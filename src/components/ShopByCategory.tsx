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
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
                    <h2 className="text-2xl md:text-3xl font-light text-navy-dark text-center sm:text-left">
                        SHOP <span className="font-bold">BY CATEGORY</span>
                    </h2>
                    <button
                        onClick={() => navigate('/gallery')}
                        className="px-8 py-2 border-2 border-uniform-secondary text-uniform-secondary rounded-full text-sm font-bold hover:bg-uniform-secondary hover:text-white transition-all duration-300"
                    >
                        View All
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
