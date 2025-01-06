import React, { } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Sparkles } from 'lucide-react';
import ProductServicesPage from './ProductServicesPage';
import ServicesCarousel from './ServicesCarousel';
import GoogleMap from './GoogleMap';
import { Helmet } from 'react-helmet-async';


// Enhanced Background Component
const HeroBackground = () => (
  <div className="absolute inset-0 -z-10 bg-slate-950 overflow-hidden">
    <div className="absolute inset-0">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </div>
  </div>
);

// Improved Wave Transition
const WaveBottom = () => (
  <div className="absolute bottom-0 left-0 right-0">
    <svg className="w-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#f9fafb', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#f3f4f6', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M0,50 C150,20 350,0 500,15 C650,30 800,70 1000,80 C1200,90 1320,70 1440,40 L1440,100 L0,100 Z" fill="url(#gradient1)" />
    </svg>
  </div>
);

// Responsive Animated Title
const AnimatedTitle = () => (
  <div className="text-2xl sm:text-3xl md:text-4xl  mb-6 lg:mb-12 font-bold leading-tight">
    <div className="text-white whitespace-nowrap lg:text-5xl">Transform Your</div>
    <div className="text-white whitespace-nowrap pb-2 lg:text-5xl">Digital Presence with</div>
    <div className="w-full overflow-hidden">
      <TypeAnimation
        sequence={[
          'Website Development',
          1500,
          'SEO Optimization',
          1500,
          'Google Ads',
          1500,
          'Social Media Marketing',
          1500,
          'Content Writing',
          1500,
        ]}
        wrapper="div"
        speed={50}
        repeat={Infinity}
        className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400 text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] pb-4 whitespace-nowrap"
      />
    </div>
  </div>
);

// Hero Section Component
const HeroSection = () => (
  <section className="relative  min-h-screen">
    <HeroBackground />

    <div className="relative container mx-auto px-4">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-6"
      >
        <div className="flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400">
              SEO
            </span>
            cial Media Solutions
          </div>
        </div>
      </motion.nav>

      <div className="flex flex-col lg:flex-row items-center py-8 sm:py-16 gap-8 sm:gap-12">
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 
                      backdrop-blur-sm rounded-full space-x-2 border border-white/10"
          >
            <Sparkles className="h-3 w-3 sm:h-4 sm:https://yourwebsite.com/w-4 text-yellow-400 animate-pulse" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400 text-sm sm:text-base font-semibold">
              AI-Powered Digital Marketing Solutions
            </span>
          </motion.div>

          <AnimatedTitle />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg text-gray-300"
          >
            Unlock the power of AI-driven marketing solutions that deliver real results.
            Boost your online visibility and grow your business with our cutting-edge platform.
          </motion.p>
        </div>

        {/* Image Section */}
        <div className="relative lg:w-1/2 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute  top-[80px] md:top-3 transform -translate-x-1/2 rounded-lg overflow-hidden shadow-lg "
          >
            <img
              src="images/bestdigitalmarketingcompany.png" // Replace with your image URL
              alt="Digital Marketing"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>

    <WaveBottom />
  </section>
);


// Main HomePage Component
const HomePage = () => {
  return (
    <>

<Helmet>
        <title>Best Digital Marketing Company  | SEOcial Media Solutions</title>
        <meta
          name="description"
          content="Welcome to Your IT Company. We provide top-notch IT services, including web development, SEO, and digital marketing."
        />
        <meta name="keywords" content="IT services, web development, SEO, digital marketing" />
        <link rel="canonical" href="" />
        <meta property="og:title" content="Home | Your IT Company" />
        <meta property="og:description" content="Discover professional IT solutions tailored to your business needs." />
        <meta property="og:image" content="https://yourwebsite.com/images/og-home.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    <div className="relative">
      <HeroSection />
      <ProductServicesPage />
      <ServicesCarousel />
      <GoogleMap />

    </div>
    </>
  );
};

export default HomePage;
