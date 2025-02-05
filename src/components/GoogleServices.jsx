import React from 'react';
import { 
  MapPin, 
  TrendingUp, 
  Target, 
  BarChart2, 
  Link2,
  Users,
  PieChart,
  ArrowUp,
  Search,
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

const GoogleServices = () => {
  const technologies = [
    {
      icon: MapPin,
      title: "Google Business Profile",
      category: "Local Visibility",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Google Ads",
      category: "Paid Advertising",
      gradient: "from-lime-500 to-green-500"
    },
    {
      icon: Target,
      title: "Targeted Campaigns",
      category: "Precision Marketing",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: BarChart2,
      title: "Performance Analytics",
      category: "Tracking",
      gradient: "from-teal-500 to-green-500"
    },
    {
      icon: Link2,
      title: "Ad Network",
      category: "Extensive Reach",
      gradient: "from-green-500 to-lime-500"
    },
    {
      icon: Users,
      title: "Audience Targeting",
      category: "Precise Reach",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: Search,
      title: "Search Intent",
      category: "Keyword Optimization",
      gradient: "from-lime-500 to-emerald-500"
    }
  ];

  const services = [
    {
      title: "Google Business Profile Optimization",
      description: "Maximize your local online presence and attract nearby customers.",
      image: "/images/gbp-setup.jpg"
    },
    {
      title: "Google Ads Management",
      description: "Create and optimize high-converting paid advertising campaigns.",
      image: "/images/googlead.jpg"
    },
    {
      title: "Keyword Strategy",
      description: "Develop a data-driven approach to target the right audience.",
      image: "/images/content-writing.jpg"
    },
    {
      title: "Performance Tracking",
      description: "Detailed analytics and insights to continuously improve results.",
      image: "/images/analytics.jpg"
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Precise Targeting",
      description: "Reach your ideal customers with laser-focused advertising strategies."
    },
    {
      icon: <PieChart className="w-8 h-8 text-emerald-500" />,
      title: "Measurable Results",
      description: "Track and optimize your marketing performance with detailed insights."
    },
    {
      icon: <ArrowUp className="w-8 h-8 text-lime-500" />,
      title: "Scalable Growth",
      description: "Expand your business reach with flexible, data-driven marketing solutions."
    }
  ];

  const stats = [
    { value: "3.5B", label: "Daily Google searches" },
    { value: "90%", label: "Businesses using Google Ads" },
    { value: "85%", label: "Mobile search traffic" },
    { value: "46%", label: "Average click-through rate" }
  ];

  const process = [
    {
      number: "01",
      title: "Strategy Development",
      description: "Comprehensive analysis of your business goals and target market"
    },
    {
      number: "02",
      title: "Campaign Setup",
      description: "Creating targeted ads with precise audience targeting"
    },
    {
      number: "03",
      title: "Continuous Optimization",
      description: "Real-time performance tracking and strategic adjustments"
    },
    {
      number: "04",
      title: "Reporting & Insights",
      description: "Detailed performance reports and actionable recommendations"
    }
  ];

  return (
    <>
    <Helmet>
         <title>Best Google Services Company | SEOcial Media Solutions</title>
         <meta
           name="description"
           content="Maximize your online presence with expert Google Business Profile and Google Ads management. Drive targeted traffic and grow your business."
         />
         <meta name="keywords" content="Google Ads, Business Profile, digital marketing, local SEO" />
         <link rel="canonical" href="https://seocialmedia.in/google-services" />
     </Helmet>
    <section className="bg-gradient-to-br from-green-50 via-white to-lime-50">
    <div className="px-4 py-16 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center relative"
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm rounded-full font-medium shadow-lg">
            Google Marketing Solutions
          </span>
          <h1 className="mt-6 pb-3 text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent md:text-7xl">
            Elevate Your Digital Presence
          </h1>
          <p className="mt-6 text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto">
            Harness the power of Google Business Profile and Google Ads to drive business growth
          </p>
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
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-lime-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
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
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
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
              <h2 className="text-3xl font-bold mb-6 pb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Digital Marketing Powered by Google
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Leverage the most powerful digital marketing platforms to connect with your ideal customers and drive business growth.
              </p>
              <p className="text-gray-600 text-lg">
                Our expert strategies transform Google's marketing tools into a competitive advantage for your business.
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
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600">Strategic approach to digital marketing success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
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
            <h2 className="text-4xl font-bold mb-4 pb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Why Choose Our Google Services
            </h2>
            <p className="text-xl text-gray-600">Drive sustainable digital growth</p>
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
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">Comprehensive Google marketing solutions</p>
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
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-white">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
              <p className="text-xl opacity-90">Real growth for ambitious businesses</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">200%</div>
                <p className="text-lg opacity-90">Average ROI Increase</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">85%</div>
                <p className="text-lg opacity-90">Client Satisfaction Rate</p>
              </div>
            <div className="text-center">
            <div className="text-center">
                <div className="text-5xl font-bold mb-4">300+</div>
                <p className="text-lg opacity-90">Successful Campaigns</p>
              </div>
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
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-5" />
              <div className="relative">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl mb-6">
                  Ready to Boost Your Digital Marketing?
                </h2>
                <p className="text-gray-600 text-xl mb-8">
                  Get a free consultation and unlock your business's digital potential
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg"
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

export default GoogleServices;