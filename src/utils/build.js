// src/utils/build.js
const generateSitemap = require('./generateSitemap');

try {
  generateSitemap();
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}