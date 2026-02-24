import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

const POSTS_PER_PAGE = 3;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogData.length / POSTS_PER_PAGE);
  const indexOfLast = currentPage * POSTS_PER_PAGE;
  const indexOfFirst = indexOfLast - POSTS_PER_PAGE;
  const currentPosts = blogData.slice(indexOfFirst, indexOfLast);

  const paginate = (page: number) => {
    setCurrentPage(page);
    const section = document.getElementById('blog');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-dark mb-4 uppercase tracking-tighter">
            The <span className="text-uniform-secondary">Blog</span>
          </h2>
          <p className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Industry insights, design tips, and the latest from the world of sublimation printing
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentPosts.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="group bg-slate-50 border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 block"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
                  <Calendar size={14} className="text-uniform-secondary" />
                  <span className="text-[10px] md:text-xs font-bold text-navy-dark uppercase tracking-widest">{article.date}</span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl md:text-2xl font-black text-navy-dark mb-4 group-hover:text-uniform-secondary transition-colors tracking-tight leading-tight">
                  {article.title}
                </h3>

                <p className="text-gray-500 mb-6 line-clamp-2 text-sm md:text-base leading-relaxed font-medium">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-2 text-uniform-secondary font-black text-xs md:text-sm uppercase tracking-widest border-b-2 border-transparent group-hover:border-uniform-secondary self-start transition-all">
                  Read Article
                  <ChevronRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 md:gap-4">
              {/* Prev Button */}
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${currentPage === 1
                  ? 'border-gray-100 text-gray-200 cursor-not-allowed bg-white'
                  : 'border-gray-200 text-navy-dark bg-white hover:bg-uniform-secondary hover:border-transparent hover:text-white hover:shadow-lg'
                  }`}
              >
                <ChevronLeft size={20} />
              </button>

              {/* Page Number Buttons */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => paginate(page)}
                    className={`w-12 h-12 rounded-2xl text-sm font-black transition-all duration-300 ${currentPage === page
                      ? 'bg-navy-dark text-white shadow-xl scale-110 border-transparent'
                      : 'bg-white border-2 border-gray-100 text-gray-400 hover:text-uniform-secondary hover:border-uniform-secondary/30'
                      }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${currentPage === totalPages
                  ? 'border-gray-100 text-gray-200 cursor-not-allowed bg-white'
                  : 'border-gray-200 text-navy-dark bg-white hover:bg-uniform-secondary hover:border-transparent hover:text-white hover:shadow-lg'
                  }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <p className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-widest">
              Page {currentPage} of {totalPages} &mdash; {blogData.length} INSIGHTS
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
