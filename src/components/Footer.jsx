import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  ExternalLink 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/career' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy & policy', href: '/privacy-policy' }
  ];

  const services = [
    { name: 'SEO Optimization', href: '/seo' },
    { name: 'Social Media Marketing', href: '/social-media-marketing' },
    { name: 'Google Services', href: '/google' },
    // { name: 'Google Business Profile', href: '/google-business-profile' },
    { name: 'Website Development', href: '/web-development' },
    { name: 'Content Writing', href: '/content' },
    { name: 'Video Editing', href: '/video-editing' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61564390163701' },
    // { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/seocialmediasolutions360/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/seocial-media-solution/' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="images/footer-logo.jpg"
                alt="Company Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Empowering businesses with comprehensive digital marketing solutions that drive real growth. 
              Your trusted partner in the digital transformation journey.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm hover:text-white hover:underline transition-colors duration-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-sm hover:text-white hover:underline transition-colors duration-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <p className="text-sm">
                1, Sagar, Shiv Shakti Nagar, Nirman Nagar, Jaipur, Rajasthan, 302019
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a 
                  href="tel:+91 9461677122"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  +91 9461677122
                </a>, &nbsp;
                <a 
                  href="tel:+91 8949342270"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  +91 8949342270
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:info@seocialmedia.in"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  info@seocialmedia.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            © {currentYear} SEOcial Media Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;