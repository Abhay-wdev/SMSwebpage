import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();
  const activePath = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about-us" },
    {
      title: "Services",
      submenu: [
        { title: "Web Development", href: "/web-development" },
        { title: "SEO Optimization", href: "/seo" },
        { title: "Google Ads", href: "/google-ads" },
        { title: "Content Writing", href: "/content" },
        { title: "Social Media Marketing", href: "/social-media-marketing" },
        { title: "Google Business Profile", href: "/google-business-profile" }
      ],
    },
    { title: "Careers", href: "/career" },
    { title: "Contact", href: "/contact" },
  ];

  const toggleSubmenu = (title) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  const ContactInfo = ({ className = "" }) => (
    <div className={`flex items-center ${className}`}>
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-3 py-2 rounded-lg">
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-indigo-600 shrink-0" />
          <span className="text-xs text-gray-500 whitespace-nowrap">For Consultation:</span>
          <div className="flex items-center gap-2">
            <a 
              href="tel:+91 9461677122" 
              className="text-sm text-gray-800 hover:text-indigo-600 whitespace-nowrap transition-colors"
            >
              +91 9461677122
            </a>
            <span className="text-gray-300">|</span>
            <a 
              href="tel:+91 8949342270" 
              className="text-sm text-gray-800 hover:text-indigo-600 whitespace-nowrap transition-colors"
            >
              +91 8949342270
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const QuickContactButtons = () => (
    <div className="flex items-center gap-2">
      <a
        href="tel:+91 9461677122"
        className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 
                 rounded-full hover:from-green-500 hover:to-green-600 transition-all duration-300"
        aria-label="Call us for consultation"
      >
        <Phone size={16} className="text-white" />
      </a>
      <a
        href="https://wa.me/+919461677122"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-emerald-400 to-emerald-500 
                 rounded-full hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300"
        aria-label="Contact on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 text-white fill-current"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Contact Us | SEOcial Media Solutions</title>
        <meta
          name="description"
          content="Welcome to Your IT Company. We provide top-notch IT services, including web development, SEO, and digital marketing."
        />
        <meta name="keywords" content="IT services, web development, SEO, digital marketing" />
        <link rel="canonical" href="https://yourwebsite.com/" />
        <meta property="og:title" content="Home | Your IT Company" />
        <meta property="og:description" content="Discover professional IT solutions tailored to your business needs." />
        <meta property="og:image" content="https://yourwebsite.com/images/og-home.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="images/company-logo.jpeg"
                alt="Company Logo"
                className="h-12"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6 items-center">
              {menuItems.map((item) => (
                <div key={item.title} className="relative group">
                  <Link
                    to={item.href}
                    className={`relative text-gray-700 font-medium transition-colors duration-300 hover:text-indigo-600 ${
                      activePath === item.href ? "text-indigo-600" : ""
                    }`}
                  >
                    {item.title}
                    {item.submenu && (
                      <ChevronDown className="inline-block ml-1 w-4 h-4 transform transition-transform group-hover:rotate-180" />
                    )}
                  </Link>
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-56 bg-white/90 backdrop-blur-md shadow-xl rounded-lg 
                                 opacity-0 invisible transform -translate-y-2 group-hover:opacity-100 
                                 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.href}
                          className={`block px-4 py-3 text-sm text-gray-600 hover:text-indigo-600 hover:bg-gray-50/80 transition-colors duration-200 ${
                            activePath === subItem.href ? "text-indigo-600 bg-gray-50/80" : ""
                          }`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <ContactInfo className="hidden lg:flex" />
              <QuickContactButtons />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <QuickContactButtons />
              <button
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden bg-white/90 backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="py-4 space-y-2 px-4">
              {menuItems.map((item) => (
                <div key={item.title}>
                  {!item.submenu ? (
                    <Link
                      to={item.href}
                      className={`block py-2 text-gray-700 font-medium hover:text-indigo-600 ${
                        activePath === item.href ? "text-indigo-600" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <div>
                      <button
                        className={`flex justify-between items-center w-full text-gray-700 py-2 font-medium hover:text-indigo-600 ${
                          activeSubmenu === item.title ? "text-indigo-600" : ""
                        }`}
                        onClick={() => toggleSubmenu(item.title)}
                      >
                        {item.title}
                        <ChevronDown
                          className={`w-4 h-4 transform transition-transform duration-200 ${
                            activeSubmenu === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`pl-4 space-y-1 overflow-hidden transition-all duration-200 ${
                          activeSubmenu === item.title ? "max-h-screen py-2" : "max-h-0"
                        }`}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            className={`block py-2 text-gray-600 hover:text-indigo-600 ${
                              activePath === subItem.href ? "text-indigo-600" : ""
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;