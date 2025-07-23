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
import WebIntroSectionAjmer from "./WebIntroSectionaAjmer";
import TrustedByCompanies from "./TrustedByCompanies";
import WorkingProcess from "./WorkingProcess";
import WorkingProcessimgMedia from "./WorkingProcessimgMedia";
 
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

const WebDevelopmentAjmer = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const technologies = [
    {
      name: "HTML5",
      category: "Frontend Development in Ajmer",
      icon: <Globe className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "React.js",
      category: "Frontend Framework for Dynamic Ajmer Websites",
      icon: <Code className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "Node.js",
      category: "Backend Development for Ajmer Businesses",
      icon: <Server className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "WordPress",
      category: "CMS Solutions in Ajmer",
      icon: <PenTool className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "Shopify",
      category: "E-commerce Sites for Ajmer Market",
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "MongoDB",
      category: "Database Integration in Ajmer Projects",
      icon: <Database className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "AWS",
      category: "Cloud Hosting for Ajmer Clients",
      icon: <Cloud className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-indigo-500" />,
      title: "Tailored Web Solutions for Ajmer",
      description:
        "We provide custom websites tailored to Ajmer’s local businesses, ensuring relevance and effectiveness.",
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: "Local User Experience Focus",
      description:
        "We prioritize design that resonates with the Ajmer audience for better engagement and conversions.",
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-500" />,
      title: "On-Time Project Delivery in Ajmer",
      description:
        "Efficient processes to ensure timely delivery of websites for Ajmer clients without compromising quality.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Ajmer Market Research",
      description:
        "We understand your business and Ajmer’s audience before development begins.",
    },
    {
      number: "02",
      title: "Local-Focused Design & Development",
      description:
        "Our developers build responsive websites optimized for Ajmer users.",
    },
    {
      number: "03",
      title: "Testing for Ajmer Demographics",
      description:
        "Each website is tested thoroughly for user behavior common in Ajmer.",
    },
    {
      number: "04",
      title: "Launch & Ajmer-Based Support",
      description:
        "We offer smooth deployment with local SEO and support for Ajmer clients.",
    },
  ];

  const faqs = [
    {
      question: "Why should I choose SEOcial Media Solutions over other web design companies in Ajmer?",
      answer:
        "SEOcial Media Solutions stands out in Ajmer with personalized service, cutting-edge web technologies, and deep local market understanding. We’ve built 500+ websites for Ajmer and nearby businesses that convert visitors into customers.",
    },
    {
      question: "What types of websites do you develop for Ajmer-based businesses?",
      answer:
        "We design and develop a wide range of websites including business websites, eCommerce stores, education portals, and custom applications tailored to Ajmer’s growing industries.",
    },
    {
      question: "Do you offer affordable custom website design in Ajmer?",
      answer:
        "Yes, we offer budget-friendly custom web design packages for Ajmer startups, SMEs, and local businesses. Each design is aligned with your goals and Ajmer market trends.",
    },
    {
      question: "How much does an eCommerce website cost in Ajmer?",
      answer:
        "Our eCommerce solutions in Ajmer start at ₹25,000 and scale based on your features and integrations such as payment gateways, inventory, and shipping.",
    },
    {
      question: "Can you revamp our old Ajmer-based website to be mobile-friendly?",
      answer:
        "Absolutely. We specialize in redesigning existing websites for Ajmer businesses into mobile-first, SEO-friendly, and conversion-optimized platforms.",
    },
    {
      question: "How long does it take to build a website for a business in Ajmer?",
      answer:
        "Typically, it takes 2–4 weeks for a standard business website in Ajmer. Custom features and eCommerce stores may take 6–8 weeks.",
    },
    {
      question: "Is SEO included in your Ajmer web development services?",
      answer:
        "Yes, all our websites for Ajmer clients come with technical SEO, fast loading speeds, schema markup, and mobile responsiveness.",
    },
    {
      question: "Which platforms do you use for eCommerce website development in Ajmer?",
      answer:
        "We work with Shopify, WooCommerce, Magento, and also offer custom eCommerce development based on your Ajmer-specific business model.",
    },
  ];


  return (
    <>
     <Helmet>
  <title>
    Best Web Development Company in Ajmer | SEOcial Media Solutions
  </title>

  <meta
    name="description"
    content="SEOcial Media Solutions is the leading web development company in Ajmer, offering responsive website design, e-commerce development, and full-stack web solutions to grow your business online."
  />
  <meta
    name="keywords"
    content="web development company Ajmer, website design Ajmer, e-commerce development Ajmer, Ajmer web agency, responsive website Ajmer, affordable web development, SEOcial Media Solutions Ajmer"
  />
  <link
    rel="canonical"
    href="https://seocialmedia.in/web-development-company-ajmer"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Top Web Development Company in Ajmer | SEOcial Media Solutions"
  />
  <meta
    property="og:description"
    content="Need a powerful online presence? Partner with Ajmer’s top web development company for custom websites, fast performance, and mobile-friendly designs."
  />
  <meta
    property="og:image"
    content="https://seocialmedia.in/images/og-ajmer-web.jpg"
  />
  <meta
    property="og:url"
    content="https://seocialmedia.in/web-development-company-ajmer"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Ajmer’s Best Website Development Company | SEOcial Media"
  />
  <meta
    name="twitter:description"
    content="Custom web development services in Ajmer for businesses of all sizes. Get stunning, high-performing websites designed by experts."
  />
  <meta
    name="twitter:image"
    content="https://seocialmedia.in/images/og-ajmer-web.jpg"
  />
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
    Best Web Development Services in Ajmer
  </h1>
  <h1 className="mt-6 text-4xl pb-3 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent md:text-6xl">
    Professional Web Solutions for Ajmer Businesses
  </h1>
  <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
    We offer cutting-edge web design & development services in Ajmer—crafting responsive, modern, and SEO-friendly websites tailored to your business needs.
  </p>
  
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
 
          <WorkingProcessimgMedia/>
<WebIntroSectionAjmer/>
           

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
                    <div className="mb-4 transform flex justify-center  group-hover:scale-110 transition-transform duration-200">
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

export default WebDevelopmentAjmer;
