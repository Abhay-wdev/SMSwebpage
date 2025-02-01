import React from 'react';
import ReactMarkdown from 'react-markdown';

const ResponsiveBlogContent = ({ content }) => {
  const components = {
    h1: ({ children }) => (
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 mt-12 leading-tight break-words">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-6 mt-12 leading-tight break-words">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 mt-8 leading-tight break-words">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6 break-words whitespace-pre-wrap">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc space-y-4 pl-8 mb-6 text-gray-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal space-y-4 pl-8 mb-6 text-gray-700">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-base lg:text-lg leading-relaxed pl-2 break-words">
        <div className="inline-block">
          {children}
        </div>
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-6 py-2 my-8 bg-gray-50 rounded-r-lg">
        <div className="text-base lg:text-lg text-gray-700 italic break-words">
          {children}
        </div>
      </blockquote>
    ),
    code: ({ inline, children }) => (
      inline ? (
        <code className="bg-gray-100 text-pink-600 rounded px-2 py-1 text-sm font-mono whitespace-normal break-words">
          {children}
        </code>
      ) : (
        <pre className="bg-gray-100 rounded-lg p-6 my-6 overflow-x-auto">
          <code className="text-sm font-mono text-gray-800 block whitespace-pre-wrap break-words">
            {children}
          </code>
        </pre>
      )
    ),
    a: ({ href, children }) => (
      <a 
        href={href} 
        className="text-blue-600 hover:text-blue-800 underline break-words"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    img: ({ src, alt }) => (
      <div className="my-8">
        <img
          src={src}
          alt={alt}
          className="rounded-lg w-full h-auto object-cover"
        />
        {alt && (
          <p className="text-sm text-gray-500 mt-2 text-center italic">
            {alt}
          </p>
        )}
      </div>
    ),
    hr: () => (
      <hr className="my-12 border-t border-gray-200" />
    ),
  };

  return (
    <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown 
          components={components}
          className="space-y-6"
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default ResponsiveBlogContent;