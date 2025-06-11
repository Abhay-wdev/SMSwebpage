import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';
import ResponsiveBlogContent from './ResponsiveBlogContent';
import { blogPosts } from '../data/blog-posts';
import { Helmet } from 'react-helmet-async';

const ShareButtons = ({ url, title }) => (
  <div className="fixed left-4 top-1/2 transform -translate-y-1/2 space-y-4 hidden lg:flex flex-col">
    <FacebookShareButton url={url} quote={title}>
      <div className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
        <FacebookIcon size={32} round />
      </div>
    </FacebookShareButton>
    <TwitterShareButton url={url} title={title}>
      <div className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
        <TwitterIcon size={32} round />
      </div>
    </TwitterShareButton>
    <LinkedinShareButton url={url} title={title}>
      <div className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
        <LinkedinIcon size={32} round />
      </div>
    </LinkedinShareButton>
  </div>
);

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);
  const relatedPosts = blogPosts
    .filter(p => 
      p.slug !== slug && 
      (p.category === post?.category || 
       p.tags.some(tag => post?.tags.includes(tag)))
    )
    .slice(0, 2);
  
  const currentUrl = window.location.href;
  const siteUrl = window.location.origin;
  const fullImageUrl = `${siteUrl}${post?.featuredImage.url}`;

  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Post not found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Calculate reading time
  const wordsPerMinute = 200;
  const wordCount = post.content.split(' ').length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{post.title}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta name="author" content={post.author.name} />
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:image:width" content={post.featuredImage.width} />
        <meta property="og:image:height" content={post.featuredImage.height} />
        <meta property="og:image:alt" content={post.featuredImage.alt} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="SEOcial Media Solutions" />
        <meta property="og:locale" content="en_US" />
        
        {/* Article specific Open Graph */}
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.lastModified} />
        <meta property="article:author" content={post.author.name} />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={fullImageUrl} />
        <meta name="twitter:image:alt" content={post.featuredImage.alt} />
        <meta name="twitter:site" content="@seocialmedia" />
        <meta name="twitter:creator" content="@seocialmedia" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Enhanced Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.metaDescription,
            "image": {
              "@type": "ImageObject",
              "url": fullImageUrl,
              "width": post.featuredImage.width,
              "height": post.featuredImage.height,
              "caption": post.featuredImage.alt
            },
            "datePublished": post.date,
            "dateModified": post.lastModified,
            "author": {
              "@type": "Person",
              "name": post.author.name,
              "jobTitle": post.author.role,
              "image": `${siteUrl}${post.author.image}`
            },
            "publisher": {
              "@type": "Organization",
              "name": "SEOcial Media Solutions",
              "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/images/logo.png`
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": currentUrl
            },
            "articleSection": post.category,
            "keywords": post.tags.join(', '),
            "wordCount": wordCount,
            "timeRequired": `PT${readingTime}M`,
            "inLanguage": "en-US",
            "isAccessibleForFree": true,
            "copyrightHolder": {
              "@type": "Organization",
              "name": "SEOcial Media Solutions"
            },
            "copyrightYear": new Date(post.date).getFullYear()
          })}
        </script>
        
        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": `${siteUrl}/blog`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.category,
                "item": `${siteUrl}/blog/category/${post.category.toLowerCase().replace(' ', '-')}`
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": post.title,
                "item": currentUrl
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <ShareButtons url={currentUrl} title={post.title} />
        
        {/* Breadcrumb Navigation */}
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li className="before:content-['/'] before:mx-2">
              <Link to="/blog" className="hover:text-blue-600">Blog</Link>
            </li>
            <li className="before:content-['/'] before:mx-2">
              <Link to={`/blog/category/${post.category.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-600">
                {post.category}
              </Link>
            </li>
            <li className="before:content-['/'] before:mx-2 text-gray-900 font-medium" aria-current="page">
              {post.title.length > 50 ? `${post.title.substring(0, 50)}...` : post.title}
            </li>
          </ol>
        </nav>
        
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 bg-white shadow-sm rounded-lg">
          {/* Hero Section */}
          <div className="mb-8 sm:mb-12">
            <div className="relative">
              <img
                src={post.featuredImage.url}
                alt={post.featuredImage.alt}
                className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-xl shadow-lg mb-6 sm:mb-8"
                width={post.featuredImage.width}
                height={post.featuredImage.height}
                loading="eager"
              />
            </div>

            {/* Category & Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="inline-flex items-center text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
                >
                  <Tag className="h-4 w-4 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author and Meta */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="block font-medium text-gray-900">{post.author.name}</span>
                  <span className="text-sm">{post.author.role}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  <span>{readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <ResponsiveBlogContent content={post.content} />
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="group block"
                  >
                    <div className="relative">
                      <img
                        src={relatedPost.featuredImage.url}
                        alt={relatedPost.featuredImage.alt}
                        className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white font-medium">Read More</span>
                      </div>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-2 text-gray-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Navigation */}
          <div className="mt-12 flex justify-between pt-8 border-t border-gray-200">
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Back to Blog
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              More Articles
              <ChevronRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;