import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const MarketingGrid = () => {
    const services = [
        {
          title: "Your All-in-One Digital Marketing Partner",
          description: "We don't just market your business—we build brands. From SEO and social media to PPC and content marketing, we craft strategies that drive real growth.",
          expandedText: "At SEOcial Media Solutions, we take a 360° approach to digital marketing. Our expert team blends creativity with data-driven insights to help you rank higher, attract more customers, and grow your business online."
        },
        {
          title: "6+ Years of Helping Businesses Succeed",
          description: "With over six years of experience, we've helped businesses in Jaipur and beyond turn clicks into customers and brands into success stories.",
          expandedText: "Our journey is built on trust, innovation, and results. We know what works in today's digital world, and we tailor every strategy to fit your business goals perfectly."
        },
        {
          title: "Tailored Solutions for 15+ Industries",
          description: "Every business is unique, and so is our approach. Whether you're in healthcare, real estate, education, or e-commerce, we craft digital strategies that deliver results.",
          expandedText: "We take the time to understand your industry, competitors, and target audience to create a marketing plan that helps you stand out and stay ahead."
        },
        {
          title: "99.9% Client Retention – Because We Deliver",
          description: "Our clients stay with us because we focus on results, not just promises. We believe in building long-term partnerships with honesty, transparency, and success.",
          expandedText: "From startups to established brands, we've helped businesses grow exponentially through data-backed strategies and continuous optimization."
        },
        {
          title: "Hassle-Free Onboarding & Execution",
          description: "We make digital marketing simple. Our streamlined onboarding process ensures you see results quickly—without the stress of managing it yourself.",
          expandedText: "From planning to execution, we handle everything so you can focus on what you do best—running your business. Think of us as your digital growth partner."
        },
        {
          title: "Smart Market Research for Smarter Strategies",
          description: "Great marketing starts with great insights. We dive deep into data, trends, and competitor analysis to create strategies that give you a competitive edge.",
          expandedText: "Using cutting-edge tools and a keen eye for market trends, we ensure your business reaches the right audience at the right time, turning visitors into loyal customers."
        }
    ];

    const [expandedItems, setExpandedItems] = React.useState({});

    const toggleExpand = (index) => {
        setExpandedItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        Your Ultimate Partner
                    </span>
                    <br />
                    <span className="text-gray-800">
                        for 360° Digital Marketing Success
                    </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 font-medium mt-4 max-w-2xl mx-auto leading-relaxed">
                    Let's Elevate Your Brand & Drive Real Results!
                </p>
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mt-6 rounded-full"/>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        }}
                        className="relative bg-white rounded-lg p-6 cursor-pointer overflow-hidden group transition-all duration-300 ease-in-out"
                    >
                        <div className="absolute inset-0 bg-blue-600 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 opacity-90"></div>
                        
                        <div className="relative z-10">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-white transition-colors duration-300">
                                {service.title}
                            </h3>
                            <motion.div
                                animate={{ height: expandedItems[index] ? "auto" : "100px" }}
                                className="overflow-hidden"
                            >
                                <p className="text-gray-600 mb-4 group-hover:text-blue-50 transition-colors duration-300">
                                    {service.description}
                                </p>
                                {expandedItems[index] && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-gray-600 group-hover:text-blue-50 transition-colors duration-300"
                                    >
                                        {service.expandedText}
                                    </motion.p>
                                )}
                            </motion.div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => toggleExpand(index)}
                                className="mt-4 flex items-center text-blue-600 group-hover:text-white transition-colors duration-300"
                            >
                                Read {expandedItems[index] ? 'Less' : 'More'}
                                <motion.div
                                    animate={{ rotate: expandedItems[index] ? 180 : 0 }}
                                    className="ml-1"
                                >
                                    <ChevronDown size={16} />
                                </motion.div>
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MarketingGrid;