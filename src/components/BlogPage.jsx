import React, { useMemo, useState } from 'react';
import { Calendar, Tag, ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts } from '../data/blog-posts';

const POSTS_PER_PAGE = 6;

const BlogCard = ({ post }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
  >
    <Link to={`/blog/${post.slug}`}>
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={post.featuredImage.url}
          alt={post.featuredImage.alt}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          width={post.featuredImage.width}
          height={post.featuredImage.height}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
      </div>
      <div className="p-6">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
          {post.category}
        </span>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => (
            <span 
              key={tag} 
              className="inline-flex items-center text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="font-medium">{post.author.name}</span>
            </div>
          </div>
          <span className="text-blue-600 group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center">
            Read More 
            <ArrowRight className="h-4 w-4 ml-2" />
          </span>
        </div>
      </div>
    </Link>
  </motion.article>
);

const CustomSelect = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-left flex items-center justify-between hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      >
        <span>{value}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden"
          >
            {options.map((option) => (
              <button
                key={option}
                className={`w-full px-4 py-2 text-left hover:bg-blue-50 transition-colors
                  ${value === option ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-10 h-10 flex items-center justify-center rounded-lg border
          ${currentPage === 1 
            ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
            : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500'
          } transition-colors`}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-colors
            ${currentPage === page 
              ? 'bg-blue-600 text-white border-blue-600' 
              : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500'
            }`}
        >
          {page}
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 flex items-center justify-center rounded-lg border
          ${currentPage === totalPages 
            ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
            : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500'
          } transition-colors`}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

const BlogPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique categories from blog posts
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(blogPosts.map(post => post.category))];
    return ['All Posts', ...uniqueCategories.sort()];
  }, []);

  // Filter posts based on category
  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    if (category && category !== 'all') {
      const decodedCategory = decodeURIComponent(category).replace(/-/g, ' ');
      posts = posts.filter(post => 
        post.category.toLowerCase() === decodedCategory.toLowerCase()
      );
    }
    
    return posts;
  }, [category]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Handle category change
  const handleCategoryChange = (value) => {
    setCurrentPage(1);
    if (value === 'All Posts') {
      navigate('/blog');
    } else {
      navigate(`/blog/category/${value.toLowerCase().replace(/ /g, '-')}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 sm:py-28"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 opacity-10" />
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="container mx-auto px-4 relative"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6">
             Blog's
            <span className="block text-lg sm:text-xl md:text-2xl text-blue-200 mt-4 font-normal">
              Expert Insights on SEO, Content Marketing, Digital Strategy & Many more.
            </span>
          </h1>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Category Dropdown */}
        <div className="max-w-xs mx-auto mb-12">
          <CustomSelect
            value={category ? decodeURIComponent(category).replace(/-/g, ' ') : 'All Posts'}
            onChange={handleCategoryChange}
            options={categories}
          />
        </div>

        {/* Posts Grid */}
        <section className="mb-12">
          {paginatedPosts.length > 0 ? (
            <>
              <motion.div 
                layout
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence>
                  {paginatedPosts.map(post => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </AnimatePresence>
              </motion.div>
              
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 bg-white rounded-xl shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">No posts found</h2>
              <p className="text-gray-600 mb-6">There are no posts in this category yet.</p>
              <button
                onClick={() => navigate('/blog')}
                className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                View All Posts
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </motion.div>
          )}
        </section>
      </main>
    </div>
  );
};

export default BlogPage;