import React from 'react';
import { 
  Search, 
  TrendingUp, 
  Globe, 
  BarChart2, 
  Link2,
  Users,
  Clock,
  Target,
  PieChart,
  ArrowUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Seo = () => {
  const technologies = [
    {
      icon: Search,
      title: "Keyword Research",
      category: "On-Page SEO",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Technical SEO",
      category: "Performance",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "International SEO",
      category: "Global Reach",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart2,
      title: "Analytics",
      category: "Tracking",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Link2 ,
      title: "Link Building",
      category: "Off-Page SEO",
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      icon: Users,
      title: "Local SEO",
      category: "Local Search",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: Clock,
      title: "SEO Monitoring",
      category: "Maintenance",
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  const services = [
    {
      title: "On-Page SEO",
      description: "Optimize your website content and structure for maximum search visibility.",
      image: "/images/onpage-seo.jpg"
    },
    {
      title: "Technical SEO",
      description: "Enhance your website's technical foundation for better search performance.",
      image: "/images/technical-seo.jpg"
    },
    {
      title: "Content Strategy",
      description: "Create engaging, SEO-optimized content that drives organic traffic.",
      image: "/images/content-strategy.jpg"
    },
    {
      title: "Local SEO",
      description: "Dominate local search results and attract nearby customers.",
      image: "/images/seo.jpg"
    }
  ];

  
  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-amber-500" />,
      title: "Targeted Traffic",
      description: "Attract qualified visitors who are actively searching for your products or services."
    },
    {
      icon: <PieChart className="w-8 h-8 text-orange-500" />,
      title: "Measurable Results",
      description: "Track your SEO performance with detailed analytics and regular reporting."
    },
    {
      icon: <ArrowUp className="w-8 h-8 text-amber-500" />,
      title: "Higher ROI",
      description: "Generate long-term value with sustainable organic search traffic."
    }
  ];

  const stats = [
    { value: "93%", label: "Of online experiences begin with search engines" },
    { value: "75%", label: "Of users never scroll past the first page" },
    { value: "200+", label: "Ranking factors in Google's algorithm" },
    { value: "67%", label: "Of all clicks go to the first five results" }
  ];

  const process = [
    {
      number: "01",
      title: "Technical Audit",
      description: "Conduct a comprehensive analysis of your website’s technical SEO elements to ensure a solid foundation."
    },
    {
      number: "02",
      title: "Keyword Research",
      description: "Identify high-value search terms your target audience is actively searching for."
    },
    {
      number: "03",
      title: "Content Optimization",
      description: "Refine your content to align with search intent, boost relevance, and drive user engagement."
    },
    {
      number: "04",
      title: "Link Building",
      description: "Establish authority with quality backlinks and targeted outreach strategies."
    }
  ];

  return (
    <>
    <Helmet>
         <title>Best SEO company | SEOcial Media Solutions</title>
         <meta
           name="description"
           content=" Improve your website's visibility with SEOcial Media's expert search engine optimization services. Achieve better rankings and drive organic traffic."
         />
         <meta name="keywords" content="IT services, web development, SEO, digital marketing" />
         <link rel="canonical" href="https://seocialmedia.in/" />
         <meta property="og:title" content="Best SEO company in Jaipur and Ajmer | seocial media solutions" />
         <meta property="og:description" content="Discover professional IT solutions tailored to your business needs." />
         <meta property="og:image" content="https://yourwebsite.com/images/og-home.jpg" />
         <meta property="og:url" content="https://seocialmedia.in/" />
         <meta name="twitter:card" content="summary_large_image" />
     </Helmet>
    <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50">
    <div className="px-4 py-16 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section - Enhanced with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute -top-4 left-1/2 transform -translate-x-1/2"
          >
          
          </motion.div>
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm rounded-full font-medium shadow-lg">
            Expert SEO Services
          </span>
          <h1 className="mt-6 pb-3 text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent md:text-7xl">
            Dominate Search Rankings
          </h1>
          <p className="mt-6 text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto">
            Drive organic traffic and increase conversions with our data-driven SEO strategies
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex justify-center space-x-4"
          >
          </motion.div>
        </motion.div>

        {/* Technologies Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${tech.gradient} p-3 rounded-xl`}>
                    <tech.icon className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {tech.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {tech.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-24"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 pb-2 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Search Engine Optimization That Drives Results
              </h2>
              <p className="text-gray-600 text-lg mb-6">
              In today’s competitive digital landscape, visibility on search engines is essential for business success. Our data-driven SEO strategies are designed to boost your rankings and attract valuable organic traffic.
              </p>
              <p className="text-gray-600 text-lg">
              By blending technical expertise with creative content strategies, we deliver sustainable results that drive long-term business growth.
              </p>
            </div>
          </div>
        </motion.div>

          

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Our SEO Process
              </h2>
              <p className="text-xl text-gray-600">A proven approach to achieving search success</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="bg-white p-8 rounded-xl shadow-lg group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Why Choose Our SEO Services
              </h2>
              <p className="text-xl text-gray-600">Drive sustainable growth through search</p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {benefits.map((benefit) => (
    <motion.div
      key={benefit.title}
      variants={fadeInUp}
      className="bg-white p-2 rounded-lg shadow-md text-center group hover:scale-105 transition-transform duration-200"
    >
      <div className="mb-4 transform group-hover:scale-105 transition-transform duration-200">
        {benefit.icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
      <p className="text-sm text-gray-500">{benefit.description}</p>
    </motion.div>
  ))}
</div>

          </motion.div>


          {/* Services Section */}
          <div className="py-24">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-xl text-gray-600">Comprehensive SEO solutions for your business</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-fit"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-600 text-lg">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Results Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-24"
          >
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-white">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
                <p className="text-xl opacity-90">Real results for real businesses</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-4">150%</div>
                  <p className="text-lg opacity-90">Average Traffic Increase</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-4">90%</div>
                  <p className="text-lg opacity-90">Client Retention Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-4">500+</div>
                  <p className="text-lg opacity-90">Successful Projects</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="relative max-w-3xl mx-auto p-12 rounded-2xl overflow-hidden bg-white shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-5" />
              <div className="relative">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl mb-6">
                  Ready to Boost Your Search Rankings?
                </h2>
                <p className="text-gray-600 text-xl mb-8">
                  Get your SEO audit and discover untapped growth opportunities
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg"
                  >
                    Contact Us
                  </Link>
                 
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

export default Seo;