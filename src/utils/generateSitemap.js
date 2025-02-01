// src/utils/generateSitemap.js
const fs = require('fs');
const path = require('path');
const { blogPosts } = require('../data/blog-posts');

const DOMAIN = 'https://seocialmedia.in';

// Get all unique categories from blog posts
const getCategories = () => {
  return [...new Set(blogPosts.map(post => post.category))];
};

// Helper function to determine priority based on URL
const getPriority = (url) => {
  if (url === '/') return '1.0';
  if (url === '/blog') return '0.9';
  if (url.includes('/blog/category/')) return '0.8';
  if (url.includes('/blog/')) return '0.7';
  return '0.6';
};

// Generate sitemap XML
const generateSitemap = () => {
  try {
    const staticRoutes = [
      '/',
      '/about-us',
      '/web-development',
      '/seo',
      '/google-ads',
      '/content',
      '/social-media-marketing',
      '/contact',
      '/career',
      '/google-business-profile',
      '/google',
      '/blog'
    ];

    // Get all categories for category pages
    const categories = getCategories();
    const categoryUrls = categories.map(category => 
      `/blog/category/${category.toLowerCase().replace(/ /g, '-')}`
    );

    // Get all blog post URLs
    const blogUrls = blogPosts.map(post => `/blog/${post.slug}`);

    // Combine all URLs
    const allUrls = [...staticRoutes, ...categoryUrls, ...blogUrls];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${DOMAIN}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${url.includes('/blog/') ? 'monthly' : 'weekly'}</changefreq>
    <priority>${getPriority(url)}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Ensure the public directory exists
    const publicDir = path.join(__dirname, '../../public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Write sitemap to public directory
    fs.writeFileSync(
      path.join(publicDir, 'sitemap.xml'),
      sitemap.trim()
    );

    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
};

module.exports = generateSitemap;