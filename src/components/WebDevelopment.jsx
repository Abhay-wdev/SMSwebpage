import React from 'react';
import { 
  Code, 
  Globe, 
  Server, 
  Database, 
  Cloud, 
  ShoppingCart, 
  PenTool,
  CheckCircle, 
  Users, 
  Clock 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import WebServicesSection from './WebServicesSection';
import WebIntroSection from './WebIntroSection';
import WebIndustriesSection from './WebIndustriesSection';

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

const WebDevelopment = () => {
  const technologies = [
    { 
      name: "HTML5", 
      category: "Frontend",
      icon: <Globe className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      name: "React.js", 
      category: "Frontend Framework",
      icon: <Code className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      name: "Node.js", 
      category: "Backend",
      icon: <Server className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      name: "WordPress", 
      category: "CMS",
      icon: <PenTool className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      name: "Shopify", 
      category: "E-commerce",
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      name: "MongoDB", 
      category: "Database",
      icon: <Database className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      name: "AWS", 
      category: "Cloud Platform",
      icon: <Cloud className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

 

 

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-indigo-500" />,
      title: "Custom Solutions",
      description: "Every business is unique, and so should be your web presence. Our custom development approach ensures your website perfectly aligns with your business goals."
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: "User-Centric Design",
      description: "We prioritize user experience in every project, creating intuitive interfaces that engage visitors and drive conversions."
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-500" />,
      title: "Timely Delivery",
      description: "Our efficient development process ensures your project is delivered on time without compromising on quality."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed development roadmap"
    },
    {
      number: "02",
      title: "Design & Development",
      description: "Our team brings your vision to life with clean, efficient code"
    },
    {
      number: "03",
      title: "Testing & QA",
      description: "Rigorous testing ensures your website performs flawlessly"
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "Smooth launch and ongoing technical support for your website"
    }
  ];

  return (
    <>
    <Helmet>
         <title>Best Website Development Company | SEOcial Media Solutions</title>
         <meta
           name="description"
           content=" Create a stunning, responsive, and user-friendly website with SEOcial Media's expert website development services. Build your online brand today"
         />
         <meta name="keywords" content="IT services, web development, SEO, digital marketing" />
         <link rel="canonical" href="https://seocialmedia.in/" />
         <meta property="og:title" content="Best Web Development Company | SMS" />
         <meta property="og:description" content="Discover professional IT solutions tailored to your business needs." />
         <meta property="og:image" content="https://seocialmedia.in/images/og-home.jpg" />
         <meta property="og:url" content="https://seocialmedia.in/" />
         <meta name="twitter:card" content="summary_large_image" />
     </Helmet>
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="px-4 py-16 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full font-medium">
              Professional Web Solutions
            </span>
            <h1 className="mt-6 text-4xl pb-3 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent md:text-6xl">
           Best Web Development Services in Jaipur
            </h1>
            <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Web design & development services involve designing, building, regularly supporting and gradually evolving different types of websites.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg"
            >
              Contact Us Now
            </Link>
          </motion.div>


           {/* Technologies Grid */}
           <div className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${tech.gradient} p-3 rounded-xl`}>
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {tech.name}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {tech.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <WebIntroSection/>

          <WebServicesSection/>



          {/* Process Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pb-10"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-600">A proven approach to project success</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="bg-white p-8 rounded-xl shadow-lg group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Add this Benefits Section right after the Process Section and before the Services Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=""
          >
            <div className="text-center mb-14">
              <h2 className="text-4xl pb-2 font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-600">Delivering excellence in web development</p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  variants={fadeInUp}
                  className="bg-white p-8 rounded-xl shadow-lg text-center group hover:scale-105 transition-transform duration-200"
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-200">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
            
            <WebIndustriesSection/>
          
        
          {/* Results Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pb-10"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
                <p className="text-xl opacity-90">Real results for real businesses</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-4">200+</div>
                  <p className="text-lg opacity-90">Active Clients</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-4">95%</div>
                  <p className="text-lg opacity-90">Client Satisfaction</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-4">500+</div>
                  <p className="text-lg opacity-90">Projects Delivered</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" text-center"
          >
            <div className="relative max-w-3xl mx-auto p-12 rounded-2xl overflow-hidden bg-white shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-5" />
              <div className="relative">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl mb-6">
                  Ready to Transform Your Web Presence?
                </h2>
                <p className="text-gray-600 text-xl mb-8">
                  Let's create something amazing together
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg"
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

export default WebDevelopment;