import React from 'react';
import {  
  Search, 
  Star, 
  MessageSquare, 
  TrendingUp,
  Image,
  Settings,
  Users,
  CheckCircle,
  Award,
  Globe,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const GoogleBusinessServices = () => {
    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2
        }
      }
    };
  
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5
        }
      }
    };
  
    const scaleVariants = {
      hover: {
        scale: 1.05,
        transition: {
          duration: 0.3
        }
      }
    };
  

  const features = [
    { 
      name: "Profile Optimization", 
      category: "Setup",
      description: "Fully optimized Google Business Profile to maximize local visibility",
      icon: <Settings className="w-6 h-6 text-white" />,
      gradient: "from-emerald-500 to-teal-500"
    },
    { 
      name: "Local SEO", 
      category: "Visibility",
      description: "Strategic optimization for better local search rankings",
      icon: <Search className="w-6 h-6 text-white" />,
      gradient: "from-cyan-500 to-blue-500"
    },
    { 
      name: "Review Management", 
      category: "Reputation",
      description: "Active monitoring and response to customer reviews",
      icon: <Star className="w-6 h-6 text-white" />,
      gradient: "from-teal-500 to-emerald-500"
    },
    { 
      name: "Photo Optimization", 
      category: "Visual",
      description: "Professional photo management and optimization",
      icon: <Image className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Customer Insights", 
      category: "Analytics",
      description: "Detailed analytics and customer behavior tracking",
      icon: <Users className="w-6 h-6 text-white" />,
      gradient: "from-emerald-500 to-green-500"
    },
    { 
      name: "Post Management", 
      category: "Content",
      description: "Regular updates and promotional post management",
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      name: "Performance Tracking", 
      category: "Monitoring",
      description: "Comprehensive tracking of profile performance metrics",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  const services = [
    {
      title: "Profile Setup & Optimization",
      description: "Complete setup and optimization of your Google Business Profile. We ensure all business information is accurate, complete, and optimized for maximum local search visibility.",
      image: "/images/gbp-setup.jpg",
      benefits: [
        "Complete profile setup",
        "Keyword optimization",
        "Category selection",
        "Location verification"
      ]
    },
    {
      title: "Review Management",
      description: "Comprehensive review monitoring and response service. We help build and maintain your online reputation through professional review management.",
      image: "/images/review.jpg",
      benefits: [
        "Review monitoring",
        "Response management",
        "Rating improvement",
        "Customer feedback analysis"
      ]
    },
    {
      title: "Content Management",
      description: "Regular updates and content posting to keep your profile active and engaging. We create and manage posts, photos, and special offers.",
      image: "/images/content.jpg",
      benefits: [
        "Regular updates",
        "Photo optimization",
        "Promotional posts",
        "Event management"
      ]
    },
    {
      title: "Performance Analytics",
      description: "Detailed tracking and analysis of your profile's performance. Get insights into customer behavior, search visibility, and engagement metrics.",
      image: "/images/analytics.jpg",
      benefits: [
        "Search insights",
        "Customer behavior",
        "Engagement metrics",
        "Competitor analysis"
      ]
    }
  ];

  const stats = [
    {
      number: "500%",
      label: "Average Visibility Increase",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      number: "800+",
      label: "Profiles Optimized",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "4.8/5",
      label: "Client Rating",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      number: "200%",
      label: "Lead Generation Growth",
      icon: <Zap className="w-6 h-6" />,
    }
  ];

  return (
    <>
      <Helmet>
        <title>Expert Google Business Profile Management Services in Jaipur| SEOcial Media Solutions</title>
        <meta
          name="description"
          content="Boost your local presence with our expert Google Business Profile management services. Increase visibility, manage reviews, and drive more local customers to your business."
        />
         <link rel="canonical" href="https://seocialmedia.in/google-business-profile" />
        <meta name="keywords" content="Google Business Profile, Local SEO, Business Listings, Review Management, Local Marketing" />
        <meta property="og:title" content="Google Business Profile Management Services" />
        <meta property="og:description" content="Professional Google Business Profile optimization and management services to boost your local presence." />
        <meta property="og:image" content="https://seocialmedia.in/images/og-gbp.jpg" />
        <meta property="og:url" content="https://seocialmedia.in/google-business-profile" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <section className="bg-gradient-to-br from-emerald-50 via-white to-cyan-50 overflow-hidden">
        <div className="px-4 py-16 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className="inline-block px-4 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Google Business Profile Services
              </motion.span>
              <motion.h1 
                className="mt-6 text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Dominate Local Search Results
              </motion.h1>
              <motion.p 
                className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Maximize your local visibility and attract more customers with our comprehensive Google Business Profile optimization services
              </motion.p>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {stats.map((stat) => (
                <motion.div 
                  key={stat.label} 
                  className="text-center"
                  variants={itemVariants}
                  whileHover={scaleVariants.hover}
                >
                  <div className="flex justify-center items-center mb-4">
                    <motion.div 
                      className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {stat.icon}
                    </motion.div>
                  </div>
                  <motion.div 
                    className="text-3xl font-bold text-gray-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Features Grid */}
            <motion.div 
              className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  className="relative p-6 group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={scaleVariants.hover}
                >
                  <div className="relative flex flex-col space-y-4">
                    <motion.div 
                      className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-xl w-fit`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {feature.name}
                      </h3>
                      <p className="text-sm text-emerald-600 font-medium">
                        {feature.category}
                      </p>
                      <p className="mt-2 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Services Section */}
            <motion.div 
              className="py-24"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div 
                className="text-center mb-16"
                variants={itemVariants}
              >
                <h2 className="text-4xl font-bold mb-4">Complete Google Business Profile Management Solutions</h2>
                <p className="text-xl text-gray-600">Expert services to boost your local presence</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service) => (
                  <motion.div
                    key={service.title}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    variants={itemVariants}
                    whileHover={scaleVariants.hover}
                  >
                    <div className="h-64 overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-fit"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                      <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                      <motion.div 
                        className="space-y-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                      >
                        {service.benefits.map((benefit) => (
                          <motion.div 
                            key={benefit} 
                            className="flex items-center space-x-2"
                            variants={itemVariants}
                          >
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            <span className="text-gray-700">{benefit}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* SEO Content Section */}
            <motion.div 
              className="py-16 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-3xl px-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Why Choose Our Google Business Profile Services?</h2>
                <motion.div 
                  className="text-left space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                >
<div className="text-left space-y-6">
                  <p className="text-gray-700">
                    Our Google Business Profile management services help businesses maximize their local search presence and attract more customers. We understand the critical role that GBP plays in local SEO and customer acquisition.
                  </p>
                  <p className="text-gray-700">
                    From initial optimization to ongoing management, we ensure your profile works hard to attract and convert local customers. Our team stays up-to-date with the latest GBP features and best practices to give you a competitive edge.
                  </p>
                  <p className="text-gray-700">
                    With our proven track record of increasing local visibility and driving customer engagement, we help businesses establish a strong local presence that generates real results.
                  </p>
                </div>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative max-w-3xl mx-auto p-8 rounded-2xl overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-10"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="relative">
                  <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                    Ready to Boost Your Local Presence?
                  </h2>
                  <p className="mt-4 text-gray-600 text-lg">
                    Let's optimize your Google Business Profile for maximum local impact
                  </p>
                  <div className="mt-8 space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/contact"
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300"
                      >
                        Contact Us
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GoogleBusinessServices;