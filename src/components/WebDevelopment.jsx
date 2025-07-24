import React, { useState } from "react";


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
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import WebServicesSection from "./WebServicesSection";
import WebIntroSection from "./WebIntroSection";
import WebIndustriesSection from "./WebIndustriesSection";
import WorkingProcessimgMediajaipur from "./WorkingProcessimgMediajaipur";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const WebDevelopment = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const technologies = [
    {
      name: "HTML5",
      category: "Frontend",
      icon: <Globe className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "React.js",
      category: "Frontend Framework",
      icon: <Code className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: <Server className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "WordPress",
      category: "CMS",
      icon: <PenTool className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "Shopify",
      category: "E-commerce",
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: <Database className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "AWS",
      category: "Cloud Platform",
      icon: <Cloud className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-indigo-500" />,
      title: "Custom Solutions",
      description:
        "Every business is unique, and so should be your web presence. Our custom development approach ensures your website perfectly aligns with your business goals.",
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: "User-Centric Design",
      description:
        "We prioritize user experience in every project, creating intuitive interfaces that engage visitors and drive conversions.",
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-500" />,
      title: "Timely Delivery",
      description:
        "Our efficient development process ensures your project is delivered on time without compromising on quality.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Planning",
      description:
        "We analyze your requirements and create a detailed development roadmap",
    },
    {
      number: "02",
      title: "Design & Development",
      description:
        "Our team brings your vision to life with clean, efficient code",
    },
    {
      number: "03",
      title: "Testing & QA",
      description: "Rigorous testing ensures your website performs flawlessly",
    },
    {
      number: "04",
      title: "Deployment & Support",
      description:
        "Smooth launch and ongoing technical support for your website",
    },
  ];

  const faqs = [
    {
      question:
        "Why should I choose SEOcial Media Solutions over other web design companies in Jaipur?",
      answer:
        "SEOcial Media Solutions stands out with our comprehensive approach combining cutting-edge technology, proven expertise, and personalized service. We offer end-to-end solutions from design to deployment, with ongoing support. Our team has delivered 500+ successful projects with 95% client satisfaction, ensuring your website not only looks great but also drives business results.",
    },
    {
      question:
        "What types of websites do you develop at SEOcial Media Solutions?",
      answer:
        "We develop a wide range of websites including corporate websites, e-commerce platforms, portfolio sites, blogs, educational platforms, healthcare websites, real estate portals, restaurant websites, and custom web applications. Our expertise spans across various industries and business sizes, from startups to enterprise-level solutions.",
    },
    {
      question:
        "Do you offer custom website design services for businesses in Jaipur and across India?",
      answer:
        "Yes, we specialize in custom website design services for businesses across Jaipur and all over India. Every website we create is tailored to your specific business needs, brand identity, and target audience. We don't use generic templates - instead, we craft unique designs that reflect your brand personality and business objectives.",
    },
    {
      question:
        "How much does it cost to build an eCommerce website with SEOcial Media Solutions?",
      answer:
        "The cost of an eCommerce website varies based on features, complexity, and specific requirements. Basic eCommerce sites start from ₹25,000, while advanced platforms with custom features range from ₹50,000 to ₹2,00,000+. We provide detailed quotes after understanding your specific needs, including payment gateways, inventory management, and marketing tools.",
    },
    {
      question:
        "Can you redesign or upgrade an existing website to make it more modern and mobile-friendly?",
      answer:
        "Absolutely! We specialize in website redesign and modernization services. Our team can transform your outdated website into a modern, mobile-responsive, and SEO-optimized platform. We ensure seamless migration of your existing content while improving user experience, loading speed, and overall functionality.",
    },
    {
      question:
        "How long does it take to design and develop a complete website?",
      answer:
        "Project timelines vary based on complexity and requirements. A basic business website typically takes 2-3 weeks, while custom websites take 4-6 weeks. E-commerce platforms usually require 6-8 weeks, and complex web applications can take 8-12 weeks. We provide detailed project timelines during the planning phase and keep you updated throughout the development process.",
    },
    {
      question:
        "Do you provide SEO-optimized web development services for better Google ranking?",
      answer:
        "Yes, all our websites are built with SEO best practices from the ground up. We implement clean code structure, fast loading speeds, mobile responsiveness, proper meta tags, schema markup, and optimized content architecture. Our SEO-ready websites give you a strong foundation for better search engine rankings and online visibility.",
    },
    {
      question:
        "Which platforms do you use for eCommerce website development (like Shopify, WooCommerce, Magento)?",
      answer:
        "We work with all major eCommerce platforms including Shopify, WooCommerce, Magento, OpenCart, and custom solutions. The platform choice depends on your specific needs - Shopify for quick setup, WooCommerce for WordPress integration, Magento for large-scale operations, or custom development for unique requirements. We'll recommend the best platform based on your business model and growth plans.",
    },
  ];

  return (
    <>
 <Helmet>
  <title>
    Best Website Development & Digital Marketing Company in Jaipur
  </title>

  {/* Basic SEO Meta Tags */}
  <meta
    name="description"
    content="Looking for the best website development company in Jaipur? SEOcial Media Solutions offers full-service digital marketing, SEO, and web design tailored to grow your business online."
  />
  <meta
    name="keywords"
    content="website development company in Jaipur, best digital marketing agency Jaipur, SEO company Jaipur, affordable web design services, social media marketing Jaipur, full-service digital agency, content marketing India, Google ads management, Jaipur IT company"
  />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charSet="UTF-8" />
  <meta name="author" content="SEOcial Media Solutions" />
  <meta name="theme-color" content="#0e76a8" />

  {/* Canonical URL */}
  <link
    rel="canonical"
    href="https://seocialmedia.in/digital-marketing-company-jaipur"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Top Website Development & SEO Company in Jaipur | SEOcial Media"
  />
  <meta
    property="og:description"
    content="Full-service digital marketing and website development agency in Jaipur. Custom web design, SEO, Google Ads, and more to grow your online presence."
  />
  <meta
    property="og:image"
    content="https://seocialmedia.in/images/og-home.jpg"
  />
  <meta property="og:url" content="https://seocialmedia.in/" />
  <meta property="og:locale" content="en_IN" />
  <meta property="og:site_name" content="SEOcial Media Solutions" />
  <meta
    property="article:publisher"
    content="https://www.facebook.com/SEODigitalSolutions"
  />

  {/* Standard Publisher Tag */}
  <meta name="publisher" content="SEOcial Media Solutions" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Top Website Development Company in Jaipur | SEOcial Media"
  />
  <meta
    name="twitter:description"
    content="Best digital marketing agency in Jaipur offering SEO, web development, content creation, and more tailored for startups and enterprises alike."
  />
  <meta
    name="twitter:image"
    content="https://seocialmedia.in/images/og-home.jpg"
  />

  {/* Geo Tags */}
  <meta name="geo.region" content="IN-RJ" />
  <meta name="geo.placename" content="Jaipur" />
  <meta name="geo.position" content="26.9124;75.7873" />
  <meta name="ICBM" content="26.9124,75.7873" />
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
              <h1 className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full font-medium">
                Best Web Development Services in Jaipur
              </h1>
              <h1 className="mt-6 text-4xl pb-3 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent md:text-6xl">
                Professional Web Solutions
              </h1>
              <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
                Web design & development services involve designing, building,
                regularly supporting and gradually evolving different types of
                websites.
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
                    <div
                      className={`bg-gradient-to-r ${tech.gradient} p-3 rounded-xl`}
                    >
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {tech.name}
                      </h3>
                      <p className="mt-2 text-gray-600">{tech.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>


        
            <WorkingProcessimgMediajaipur/>

            <WebIntroSection />

            <WebServicesSection />

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
                <p className="text-xl text-gray-600">
                  A proven approach to project success
                </p>
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

            {/* Benefits Section */}
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
                <p className="text-xl text-gray-600">
                  Delivering excellence in web development
                </p>
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.title}
                    variants={fadeInUp}
                    className="bg-white p-8 rounded-xl shadow-lg text-center group hover:scale-105 transition-transform duration-200"
                  >
                    <div className="mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-200">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <WebIndustriesSection />

            {/* FAQ Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="py-16"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600">
                  Everything you need to know about our web development services
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-200 hover:bg-gray-50"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800 pr-8">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0">
                          {openFaq === index ? (
                            <ChevronUp className="w-5 h-5 text-indigo-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-indigo-600" />
                          )}
                        </div>
                      </div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? "auto" : 0,
                        opacity: openFaq === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

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
                  <p className="text-xl opacity-90">
                    Real results for real businesses
                  </p>
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
