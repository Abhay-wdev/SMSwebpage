import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag as TagIcon, ArrowRight } from 'lucide-react';

const RelatedPostCard = ({ post }) => {
  return (
    <div className="group relative flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image Container with Overlay */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={post.featuredImage.url}
          alt={post.featuredImage.alt}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          width={post.featuredImage.width}
          height={post.featuredImage.height}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="flex flex-col flex-grow p-4 sm:p-6">
        {/* Category and Tags Container */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
            {post.category}
          </span>
          {post.tags.slice(0, 2).map(tag => (
            <span 
              key={tag} 
              className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
            >
              <TagIcon className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <Link 
          to={`/blog/${post.slug}`}
          className="block text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2"
        >
          {post.title}
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {post.excerpt}
        </p>

        {/* Meta Information */}
        <div className="mt-auto">
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
            <div className="flex items-center text-sm text-gray-500">
              <User className="h-4 w-4 mr-1.5 text-gray-400 shrink-0" />
              <span className="font-medium truncate">{post.author.name}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1.5 text-gray-400 shrink-0" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Read More Link */}
          <div className="mt-4 flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
            Read More
            <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

const RelatedPosts = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {posts.map(post => (
        <RelatedPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default RelatedPosts;