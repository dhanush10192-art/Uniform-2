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
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-dark mb-4">
            Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Latest insights and tips on Uniforms design and care
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  <span>{article.date}</span>
                </div>

                <h3 className="text-xl font-bold text-navy-dark mb-3 group-hover:text-uniform-secondary transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <span className="text-uniform-secondary font-semibold group-hover:text-uniform-primary transition-colors inline-flex items-center">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              {/* Prev Button */}
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-semibold transition-all duration-200 ${currentPage === 1
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-white'
                    : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400'
                  }`}
              >
                <ChevronLeft size={16} />
                Previous
              </button>

              {/* Page Number Buttons */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => paginate(page)}
                    className={`w-10 h-10 rounded-lg text-sm font-bold transition-all duration-200 ${currentPage === page
                        ? 'bg-navy-dark text-white shadow-md scale-105'
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
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
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-semibold transition-all duration-200 ${currentPage === totalPages
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-white'
                    : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400'
                  }`}
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>

            <p className="text-sm text-gray-500">
              Page {currentPage} of {totalPages} &mdash; {blogData.length} articles total
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
