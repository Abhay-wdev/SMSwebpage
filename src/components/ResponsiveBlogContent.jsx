import React from 'react';
import ReactMarkdown from 'react-markdown';

const ResponsiveBlogContent = ({content}) => {
  // const content = `

  // # Best Digital Marketing Company in Jaipur | SEOcial Media Solutions

  // In the vibrant city of Jaipur, where traditional culture meets modern business, SEOcial Media Solutions has emerged as the leading digital marketing company, transforming how local businesses establish their online presence. As the top digital marketing agency in Jaipur, we combine innovative strategies with proven methodologies to deliver exceptional results for our clients.

  // ## Why Choose SEOcial Media Solutions?

  // As the best SEO agency in Jaipur, we pride ourselves on delivering comprehensive digital marketing services that drive real business growth. Our expertise spans across multiple digital marketing disciplines, ensuring your business gets the visibility it deserves in the online marketplace.

  // ## Our Comprehensive Service Portfolio

  // ### 1. Professional SEO Services
  // As a premier SEO company in Jaipur, we offer:
  // - Advanced keyword research and optimization
  // - Local SEO strategies tailored for Jaipur businesses
  // - Technical SEO audits and improvements
  // - Content optimization and creation
  // - Link building and authority development

  // ### 2. Social Media Marketing Excellence
  // Our social media marketing in Jaipur includes:
  // - Strategic platform selection and optimization
  // - Engaging content creation and scheduling
  // - Community management and engagement
  // - Paid social media advertising
  // - Performance tracking and analytics

  // ### 3. Results-Driven PPC Services
  // Our PPC services in Jaipur deliver:
  // - Strategic campaign planning and execution
  // - Keyword research and targeting
  // - Ad copy optimization
  // - Landing page optimization
  // - ROI tracking and reporting

  // ### 4. Comprehensive Digital Marketing Solutions
  // As a leading online marketing agency in Jaipur, we provide:
  // - Website design and development
  // - Content marketing strategies
  // - Email marketing campaigns
  // - Brand development
  // - Marketing automation

  // ## The SEOcial Media Solutions Advantage

  // ### 1. Local Expertise
  // - Deep understanding of Jaipur's business landscape
  // - Culturally relevant marketing strategies
  // - Strong network of local business partnerships
  // - Bilingual communication capabilities

  // ### 2. Proven Track Record
  // - Consistent client success stories
  // - Measurable ROI for our clients
  // - Industry-leading retention rates
  // - Award-winning campaigns

  // ### 3. Innovation and Technology
  // - Latest digital marketing tools and technologies
  // - AI-powered analytics and insights
  // - Advanced tracking and reporting systems
  // - Continuous strategy optimization

  // ## Our Process for Digital Success

  // ### 1. Initial Consultation
  // - Understanding your business goals
  // - Market analysis and competitor research
  // - Strategy development and planning
  // - Custom solution design

  // ### 2. Implementation
  // - Systematic execution of strategies
  // - Regular progress monitoring
  // - Real-time optimizations
  // - Continuous communication

  // ### 3. Analysis and Reporting
  // - Comprehensive performance tracking
  // - Regular progress reports
  // - ROI analysis
  // - Strategy refinement

  // ## Client Success Stories

  // Our position as the top digital marketing agency in Jaipur is backed by numerous success stories:
  // - 200% increase in organic traffic for local retail clients
  // - 150% growth in social media engagement
  // - 180% improvement in conversion rates through PPC
  // - 90% client satisfaction rate

  // ## Website Marketing Services in Jaipur

  // Our website marketing services include:
  // - Website optimization for conversions
  // - User experience enhancement
  // - Mobile optimization
  // - Speed optimization
  // - Security implementation

  // ## Digital Advertising Excellence

  // As a leading digital advertising company in Jaipur, we excel in:
  // - Cross-platform advertising strategies
  // - Budget optimization
  // - Advanced targeting techniques
  // - Creative ad development
  // - Performance tracking

  // ## Conclusion

  // SEOcial Media Solutions stands as the best digital marketing company in Jaipur, offering a perfect blend of local expertise and global digital marketing standards. Our comprehensive service portfolio, proven track record, and commitment to client success make us the ideal partner for businesses looking to thrive in the digital landscape.

  // Contact us today to transform your digital presence and achieve unprecedented growth in the online marketplace. Let SEOcial Media Solutions be your partner in digital success.
  // `;

  const components = {
    h1: ({ children }) => (
      <h1 className="text-4xl lg:text-5xl font-bold text-[#0092ca] mb-8 mt-12 leading-tight break-words">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl lg:text-4xl font-semibold text-[#0965FE] mb-6 mt-12 leading-tight break-words">
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
        <div className="inline-block">{children}</div>
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-6 py-2 my-8 bg-gray-50 rounded-r-lg">
        <div className="text-base lg:text-lg text-gray-700 italic break-words">{children}</div>
      </blockquote>
    ),
    code: ({ inline, children }) =>
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
        <img src={src} alt={alt} className="rounded-lg w-full h-auto object-cover" />
        {alt && <p className="text-sm text-gray-500 mt-2 text-center italic">{alt}</p>}
      </div>
    ),
    hr: () => <hr className="my-12 border-t border-gray-200" />,
  };

  return (
    <article className="w-full max-w-4xl bg-[#f5ebeb] mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown components={components} className="space-y-6">
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default ResponsiveBlogContent;
