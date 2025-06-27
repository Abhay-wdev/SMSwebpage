import  React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BlogPageNew = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/blogs.json');
        const data = await response.json();
        // Sort blogs by date (newest first)
        const sortedBlogs = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogs(sortedBlogs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  // Pagination handlers
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of blog section
    window.scrollTo({ top: document.querySelector('.blog-grid')?.offsetTop - 100 || 0, behavior: 'smooth' });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than or equal to maxVisiblePages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show smart pagination
      if (currentPage <= 3) {
        // Show first 5 pages
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        if (totalPages > 5) {
          pages.push('...');
          pages.push(totalPages);
        }
      } else if (currentPage >= totalPages - 2) {
        // Show last 5 pages
        pages.push(1);
        if (totalPages > 5) {
          pages.push('...');
        }
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show pages around current page
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          <div className="absolute inset-0 animate-pulse rounded-full h-16 w-16 border-4 border-blue-200 opacity-30"></div>
        </div>
      </div>
    );
  }

  // SEO metadata
  const pageTitle = "Top Digital Marketing Company | SEOcial Media Solutions";
  const pageDescription = "Explore our digital marketing blog for expert insights, social media strategies, SEO tips, and the latest trends from Jaipur's premier marketing agency.";
  const canonicalUrl = "https://seocialmedia.in/blog";
  const featuredImage = blogs.length > 0 ? `https://seocialmedia.in${blogs[0].image}` : "https://seocialmedia.in/images/blog-default.jpg";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={featuredImage} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={featuredImage} />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "headline": pageTitle,
            "description": pageDescription,
            "url": canonicalUrl,
            "image": featuredImage,
            "publisher": {
              "@type": "Organization",
              "name": "SEOcial Media Solutions",
              "logo": {
                "@type": "ImageObject",
                "url": "https://seocialmedia.in/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.2
        }}></div>
        
        <div className="relative container mx-auto px-4 pt-32 pb-24">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-white text-sm font-medium">Digital Marketing Insights</span>
              <div className="w-2 h-2 bg-yellow-400 rounded-full ml-2 animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Blog</span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the digital curve with expert insights, proven strategies, and the latest trends in social media marketing and SEO from Jaipur's premier digital marketing agency.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center text-blue-200">
                <div className="w-8 h-8 bg-blue-500 bg-opacity-30 rounded-full flex items-center justify-center mr-2">
                  <span className="text-sm">📱</span>
                </div>
                <span className="text-sm">Social Media</span>
              </div>
              <div className="flex items-center text-blue-200">
                <div className="w-8 h-8 bg-purple-500 bg-opacity-30 rounded-full flex items-center justify-center mr-2">
                  <span className="text-sm">🚀</span>
                </div>
                <span className="text-sm">SEO</span>
              </div>
              <div className="flex items-center text-blue-200">
                <div className="w-8 h-8 bg-indigo-500 bg-opacity-30 rounded-full flex items-center justify-center mr-2">
                  <span className="text-sm">📊</span>
                </div>
                <span className="text-sm">Analytics</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 bg-opacity-20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 bg-opacity-20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Blog Stats */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white border-opacity-20">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-lg font-semibold text-gray-800">Latest Articles</h2>
            <p className="text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, blogs.length)} of {blogs.length} articles
            </p>
          </div>
          <div className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="blog-grid container mx-auto px-4 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <article 
              key={blog.id}
              className="group bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white border-opacity-20"
            >
              <Link to={`/blog/${blog.slug}`} className="block relative">
                <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black from-opacity-30 to-transparent z-10"></div>
                  <img
                    src={blog.image || '/images/placeholder.jpg'}
                    alt={blog.alt || blog.heading}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <div className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              
              <div className="p-7">
                <div className="flex items-center text-sm text-blue-600 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">SM</span>
                  </div>
                  <div>
                    <div className="font-medium">{blog.author}</div>
                    <div className="text-gray-500 text-xs">
                      {new Date(blog.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>
                
                <Link to={`/blog/${blog.slug}`} className="block">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300 leading-tight group-hover:text-blue-600">
                    {blog.heading}
                  </h2>
                </Link>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blog.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags && blog.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-1 rounded-full border border-blue-200 border-opacity-50 hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to={`/blog/${blog.slug}`}
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Read Full Article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center">
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white border-opacity-20">
              <nav className="flex items-center space-x-2">
                {/* Previous Button */}
                <button
                  onClick={goToPrevious}
                  disabled={currentPage === 1}
                  className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    currentPage === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-blue-600 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>

                {/* Page Numbers */}
                <div className="flex items-center space-x-1">
                  {getPageNumbers().map((page, index) => (
                    <React.Fragment key={index}>
                      {page === '...' ? (
                        <span className="px-3 py-2 text-gray-400">...</span>
                      ) : (
                        <button
                          onClick={() => goToPage(page)}
                          className={`w-10 h-10 rounded-xl font-medium transition-all duration-300 ${
                            currentPage === page
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                              : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                          }`}
                        >
                          {page}
                        </button>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={goToNext}
                  disabled={currentPage === totalPages}
                  className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    currentPage === totalPages
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-blue-600 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  Next
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        )}

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.3
            }}></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Boost Your Digital Presence?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Get expert digital marketing solutions tailored for your business. Let's grow your online presence together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://seocialmedia.in/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageNew;