import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Types ---
type Product = {
    id: number;
    title: string;
    category: string;
    image: string;
};

// --- Real Gallery Image Data ---
const sublimationImages = Array.from({ length: 40 }, (_, i) => `/Gallery/SUBLIMATION SERVER/${i + 1}.jpg`);

const allProducts: Product[] = [
    ...sublimationImages.map((image, i) => ({
        id: i + 1,
        category: 'Sublimation Design',
        title: `Sublimation Design ${i + 1}`,
        image,
    })),
];

// --- Sub-components ---

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg cursor-pointer transition-shadow duration-300">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain p-2 transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl" />
        </div>
    );
};

const GalleryPage = () => {
    const [activeCategory] = useState('Sublimation Design');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const filteredProducts = allProducts;
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);


    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navigation />

            {/* Banner Section */}
            <div className="pt-20 pb-6 md:pt-24 md:pb-12 text-center bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl md:text-5xl font-black text-gray-900 mb-2 md:mb-4 tracking-tighter uppercase">
                        Our Gallery
                    </h1>
                    <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto font-medium mb-5 md:mb-8">
                        Explore our collection of stunning gallery images
                    </p>

                    {/* Category Tabs — horizontally scrollable on mobile */}
                    {/* Category Tabs — Removed since only one category exists */}
                </div>
            </div>

            <main className="flex-grow py-6 md:py-12 container mx-auto px-3 sm:px-6 lg:px-8">
                {/* Active Category Title */}
                <div className="flex items-center gap-3 mb-6 md:mb-10">
                    <h2 className="text-lg md:text-3xl font-black text-gray-900 uppercase tracking-tighter whitespace-nowrap">
                        {activeCategory}
                    </h2>
                    <div className="h-[2px] bg-gray-200 flex-1 min-w-0" />
                    <span className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-gray-100 whitespace-nowrap">
                        {filteredProducts.length} Images
                    </span>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 mb-10 md:mb-16">
                    {currentItems.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex flex-col items-center space-y-3">
                    {/* Mobile: simple prev/next with page info */}
                    <div className="flex items-center gap-3 w-full max-w-xs sm:hidden">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`flex-1 flex items-center justify-center gap-1 px-3 py-2.5 rounded-lg bg-white border border-gray-200 text-sm font-semibold transition-all ${currentPage === 1
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <ChevronLeft size={16} /> Prev
                        </button>
                        <span className="text-sm font-bold text-gray-700 whitespace-nowrap">
                            {currentPage} / {totalPages}
                        </span>
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`flex-1 flex items-center justify-center gap-1 px-3 py-2.5 rounded-lg bg-white border border-gray-200 text-sm font-semibold transition-all ${currentPage === totalPages
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            Next <ChevronRight size={16} />
                        </button>
                    </div>

                    {/* Desktop: full pagination */}
                    <div className="hidden sm:flex items-center space-x-2">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-semibold transition-all ${currentPage === 1
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                                }`}
                        >
                            <ChevronLeft size={18} />
                            Previous
                        </button>

                        <div className="flex items-center space-x-1">
                            {Array.from({ length: totalPages }, (_, i) => {
                                const pageNum = i + 1;
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => paginate(pageNum)}
                                        className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${currentPage === pageNum
                                            ? 'bg-gray-900 text-white shadow-lg'
                                            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-semibold transition-all ${currentPage === totalPages
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                                }`}
                        >
                            Next
                            <ChevronRight size={18} />
                        </button>
                    </div>

                    <p className="text-xs md:text-sm text-gray-500 font-medium text-center">
                        Page {currentPage} of {totalPages} &mdash; {filteredProducts.length} images in {activeCategory}
                    </p>
                </div>
            </main>

            <Footer />
            <WhatsAppIcon />
        </div>
    );
};

export default GalleryPage;
