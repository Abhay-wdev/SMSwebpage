import React, { useState } from "react";
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
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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

const GoogleServicesJaipur = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question:
        "Why SEOcial Media Solutions is considered the best lead generation agency in Jaipur?",
      answer:
        "SEOcial Media Solutions stands out as the best lead generation agency in Jaipur due to our proven track record of delivering exceptional results. We combine data-driven strategies, cutting-edge technology, and deep local market knowledge to generate high-quality leads consistently. Our team of certified Google Ads experts and digital marketing specialists has helped 300+ businesses achieve an average ROI increase of 200%. We focus on understanding your unique business needs and creating customized campaigns that deliver measurable results.",
    },
    {
      question:
        "What industries or business types do you specialize in for digital marketing and lead generation?",
      answer:
        "We specialize in serving a diverse range of industries including healthcare, education, real estate, e-commerce, manufacturing, hospitality, automotive, financial services, and professional services. Our experience spans from local small businesses to large enterprises. We understand that each industry has unique challenges and customer behaviors, which is why we develop industry-specific strategies that resonate with your target audience and drive qualified leads for your business.",
    },
    {
      question:
        "Can SEOcial Media Solutions manage my Google My Business profile for better local reach and calls?",
      answer:
        "Absolutely! Google My Business optimization is one of our core specialties. We provide comprehensive GMB management including profile setup and optimization, regular posting, review management, photo optimization, Q&A management, and local SEO strategies. Our GMB optimization services help businesses increase their local visibility by up to 85%, resulting in more phone calls, website visits, and foot traffic. We ensure your business appears prominently in local search results and Google Maps.",
    },
    {
      question: "Which platforms do you use for lead generation?",
      answer:
        "We leverage multiple high-performing platforms for lead generation including Google Ads (Search, Display, Shopping, YouTube), Google My Business, Facebook Ads, Instagram Ads, LinkedIn Ads, and organic social media marketing. We also utilize email marketing, content marketing, and SEO strategies. Our multi-platform approach ensures maximum reach and allows us to capture leads at different stages of the customer journey, providing you with a steady stream of qualified prospects.",
    },
    {
      question:
        "How can your company help increase my brand visibility on Google and social media?",
      answer:
        "We employ a comprehensive digital visibility strategy that includes Google Ads campaigns, Google My Business optimization, SEO, content marketing, and strategic social media management. Our approach includes creating engaging content, optimizing for local search, running targeted advertising campaigns, and building a strong online reputation through review management. We focus on consistent brand messaging across all platforms to ensure maximum visibility and brand recognition in your target market.",
    },
    {
      question: "Do you provide Google Ads (PPC) for generating quality leads?",
      answer:
        "Yes, Google Ads management is one of our flagship services. We create and manage high-converting PPC campaigns including Search Ads, Display Ads, Shopping Ads, and YouTube Ads. Our certified Google Ads specialists conduct thorough keyword research, create compelling ad copy, optimize landing pages, and continuously monitor and adjust campaigns for maximum ROI. We focus on generating quality leads rather than just traffic, ensuring every click has the potential to convert into a valuable customer.",
    },
    {
      question:
        "Do you offer customized digital marketing packages based on client goals and budgets?",
      answer:
        "Absolutely! We understand that every business has unique goals, challenges, and budget constraints. We offer flexible, customized digital marketing packages tailored to your specific needs and objectives. Whether you're a startup looking for cost-effective solutions or an established business aiming for aggressive growth, we create personalized strategies that align with your budget and deliver maximum value. Our packages can include any combination of Google Ads, social media marketing, SEO, content creation, and more.",
    },
  ];

  const technologies = [
    {
      icon: MapPin,
      title: "Google Business Profile",
      category: "Local Visibility",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Google Ads",
      category: "Paid Advertising",
      gradient: "from-lime-500 to-green-500",
    },
    {
      icon: Target,
      title: "Targeted Campaigns",
      category: "Precision Marketing",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: BarChart2,
      title: "Performance Analytics",
      category: "Tracking",
      gradient: "from-teal-500 to-green-500",
    },
    {
      icon: Link2,
      title: "Ad Network",
      category: "Extensive Reach",
      gradient: "from-green-500 to-lime-500",
    },
    {
      icon: Users,
      title: "Audience Targeting",
      category: "Precise Reach",
      gradient: "from-emerald-500 to-green-500",
    },
    {
      icon: Search,
      title: "Search Intent",
      category: "Keyword Optimization",
      gradient: "from-lime-500 to-emerald-500",
    },
  ];

  const services = [
    {
      title: "Google Business Profile Optimization",
      description:
        "Make your business easier to find on Google and attract more local customers.",
      image: "/images/gbp-setup.jpg",
    },
    {
      title: "Google Ads Management",
      description:
        "Run smart and effective Google ads that bring real results and more clicks.",
      image: "/images/googlead.jpg",
    },
    {
      title: "Keyword Strategy",
      description:
        "Find and use the best search terms to reach the right people online.",
      image: "/images/content-writing.jpg",
    },
    {
      title: "Performance Tracking",
      description:
        "Track your results with clear data and improve your marketing over time.",
      image: "/images/analytics.jpg",
    },
  ];
  
  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Precise Targeting",
      description:
        "Reach your ideal customers with laser-focused advertising strategies.",
    },
    {
      icon: <PieChart className="w-8 h-8 text-emerald-500" />,
      title: "Measurable Results",
      description:
        "Track and optimize your marketing performance with detailed insights.",
    },
    {
      icon: <ArrowUp className="w-8 h-8 text-lime-500" />,
      title: "Scalable Growth",
      description:
        "Expand your business reach with flexible, data-driven marketing solutions.",
    },
  ];

  const stats = [
    { value: "3.5B", label: "Daily Google searches" },
    { value: "90%", label: "Businesses using Google Ads" },
    { value: "85%", label: "Mobile search traffic" },
    { value: "46%", label: "Average click-through rate" },
  ];

  const process = [
    {
      number: "01",
      title: "Strategy Development",
      description:
        "Comprehensive analysis of your business goals and target market",
    },
    {
      number: "02",
      title: "Campaign Setup",
      description: "Creating targeted ads with precise audience targeting",
    },
    {
      number: "03",
      title: "Continuous Optimization",
      description: "Real-time performance tracking and strategic adjustments",
    },
    {
      number: "04",
      title: "Reporting & Insights",
      description:
        "Detailed performance reports and actionable recommendations",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Best Lead Generation Agency in Jaipur | SEOcial Media Solutions
        </title>
        <meta
          name="description"
          content="Get more leads with expert Google Ads & Business Profile management. Jaipur’s trusted digital marketing & local SEO pros. Real results. No fluff."
        />
        <meta
          name="keywords"
          content="Lead generation Jaipur, Google Ads experts, local SEO Jaipur, digital marketing agency"
        />
        <link
          rel="canonical"
          href="https://seocialmedia.in/lead-generation-company-jaipur "
        />
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
              <h1 className="inline-block px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm rounded-full font-medium shadow-lg">
                Top Google Services Agency in Jaipur
              </h1>
              <h2 className="mt-6 pb-3 text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent md:text-7xl">
                Elevate Your Digital Presence
              </h2>
              <p className="mt-6 text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto">
                Harness the power of Google Business Profile and Google Ads to
                drive business growth
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
                    <div
                      className={`bg-gradient-to-r ${tech.gradient} p-3 rounded-xl`}
                    >
                      <tech.icon className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {tech.title}
                      </h3>
                      <p className="mt-2 text-gray-600">{tech.category}</p>
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
      Grow Your Business with Google Marketing
    </h2>
    <p className="text-gray-600 text-lg mb-6">
      Use Google’s tools to reach more people, attract the right customers, and grow your business online.
    </p>
    <p className="text-gray-600 text-lg">
      Our simple and smart strategies help you get the most out of Google to stay ahead of the competition.
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
                <p className="text-xl text-gray-600">
                  Strategic approach to digital marketing success
                </p>
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
                <p className="text-xl text-gray-600">
                  Drive sustainable digital growth
                </p>
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.title}
                    variants={fadeInUp}
                    className="bg-white p-2 rounded-lg shadow-md text-center group hover:scale-105 transition-transform duration-200"
                  >
                    <div className="mb-4 flex justify-center transform group-hover:scale-105 transition-transform duration-200">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-medium mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {benefit.description}
                    </p>
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
                <p className="text-xl text-gray-600">
                  Comprehensive Google marketing solutions
                </p>
              </motion.div>

              <div className="grid max-w-7xl md:grid-cols-2 gap-8">
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
                      <h3 className="text-2xl font-semibold mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {service.description}
                      </p>
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
                  <p className="text-xl opacity-90">
                    Real growth for ambitious businesses
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-4">200%</div>
                    <p className="text-lg opacity-90">Average ROI Increase</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-4">85%</div>
                    <p className="text-lg opacity-90">
                      Client Satisfaction Rate
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-4">300+</div>
                    <p className="text-lg opacity-90">Successful Campaigns</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="py-24"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600">
                  Get answers to common questions about our services
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                {faqData.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="mb-6 bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFAQ === index ? (
                          <ChevronUp className="w-6 h-6 text-green-600" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-green-600" />
                        )}
                      </div>
                    </button>

                    {openFAQ === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-8 pb-6"
                      >
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
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
                    Get a free consultation and unlock your business's digital
                    potential
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

export default GoogleServicesJaipur;
