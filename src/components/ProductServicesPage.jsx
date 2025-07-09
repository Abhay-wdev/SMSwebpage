import React from "react";
import { motion } from "framer-motion";
import WorkShowcase from "./WorkShowcase";
import MarketingGrid from "./MarketingGrid";

import {
  ArrowRight,
  Code,
  Paintbrush,
  Sparkles,
  Check,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ProductServicesPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden pt-8 pb-8">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />

      {/* Animated Blobs */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite_2s]" />
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite_4s]" />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="block text-lg font-extrabold text-blue-600 tracking-wider uppercase mb-2">

              Why Choose Us
            </span>
            <h2 className=" text-3xl sm:text-4xl md:text-5xl  font-extrabold mb-4">
                Transforming Businesses
             
              <span
                className="block text-blue-600"
                
              >
                Through Digital Excellence
              </span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg font-medium"
          >
            Experience unparalleled digital transformation with our
            comprehensive suite of services, backed by years of expertise and
            innovation.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-8 gap-3 mx-auto max-w-[1000px]">
          {/* Product Strategy */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-5 rounded-2xl p-4 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-purple-100/90 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative z-10 mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-900 mb-3">
                Product Strategy
              </h2>
              <p className="text-purple-800 text-base sm:text-lg font-semibold">
                Crafting visionary blueprints to drive your product's success.
              </p>
            </div>
            <motion.div
              className="absolute left-0 right-0 bottom-0 h-1/2 bg-cover bg-center opacity-90"
              style={{
                backgroundImage: 'url("images/grid.png")',
                backgroundPosition: "center bottom",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* UI & UX Design */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-3 md:col-start-3 rounded-2xl p-5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-pink-400/90 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative z-10 mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                UI & UX Design
              </h2>
              <p className="text-gray-700 text-base sm:text-lg font-semibold">
                Designing<span className="block sm:hidden"> </span> delightful
                and <span className="block sm:hidden"></span> intuitive user
                <span className="block sm:hidden"></span> experiences.
              </p>
            </div>
            <motion.div
              className="absolute top-1/4 right-0 w-1/2 h-3/4 bg-contain bg-no-repeat bg-right"
              style={{ backgroundImage: 'url("images/grid2.png")' }}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* Product Research */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-4 rounded-2xl p-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-green-200/90 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative z-10 mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-green-900 mb-3">
                Product Research
              </h2>
              <p className="text-green-800 text-base font-semibold">
                Uncovering deep insights to fuel informed decisions.
              </p>
            </div>
            <motion.div
              className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-contain bg-no-repeat bg-right-bottom"
              style={{ backgroundImage: 'url("images/grid4.png")' }}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* Product Growth */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-4 rounded-2xl p-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-blue-200/90 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative z-10 mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">
                Product Growth
              </h2>
              <p className="text-blue-800 text-base font-semibold">
                Accelerating your product's journey to market dominance.
              </p>
            </div>
            <motion.div
              className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-contain bg-no-repeat bg-right-bottom"
              style={{ backgroundImage: 'url("images/grid4.webp")' }}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* Software Development */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-3 md:row-start-6 rounded-2xl p-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-orange-200/90 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative z-10 mb-16 text-right">
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-900 mb-3">
                Software Development
              </h2>
              <p className="text-orange-800 text-base sm:text-lg font-semibold">
                Building robust software solutions tailored{" "}
                <span className="block sm:hidden"></span> to your needs.
              </p>
            </div>
            <motion.div
              className="absolute bottom-0 left-0 w-1/2 h-3/4 bg-contain bg-no-repeat bg-left-bottom"
              style={{ backgroundImage: 'url("images/grid5.png")' }}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* Maintenance & Support */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-3 md:col-start-5 md:row-start-6 rounded-2xl p-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-yellow-200/90 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative z-10 mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-yellow-900 mb-3">
                Maintenance & Support
              </h2>
              <p className="text-yellow-800 text-base font-semibold">
                Keeping your software seamless with expert updates and support.
              </p>
            </div>
            <motion.div
              className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-contain bg-no-repeat bg-right-bottom"
              style={{ backgroundImage: 'url("images/grid7.png")' }}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </div>

        {/* 7 days section  */}
        <div className="w-full back rounded-3xl mt-10 p-6 md:p-8 shadow-2xl">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            {/* Sparkle decorations */}
            <div className="relative">
              <Sparkles className="absolute -top-4 -left-4 w-6 h-6 text-yellow-300" />
              <Sparkles className="absolute -top-4 -right-4 w-6 h-6 text-yellow-300" />

              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  Get Your Customized Website
                  <span className="block"> in Just 7 Days!</span>
                </h2>

                <p className="text-base md:text-lg text-white/90 max-w-xl mx-auto">
                  Transform your online presence with our expert web development
                  services.
                </p>

                {/* Feature list */}
                <div className="flex flex-col md:flex-row gap-4 justify-center text-white max-w-lg mx-auto">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Responsive Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-sm">SEO Optimized</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/90">
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group">
                <Code className="w-6 h-6 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-1 text-sm">
                  Custom Development
                </h3>
                <p className="text-xs">
                  Tailored solutions built with modern technologies
                </p>
              </div>

              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group">
                <Paintbrush className="w-6 h-6 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-1 text-sm">Unique Design</h3>
                <p className="text-xs">
                  Stand out with stunning, brand-aligned visuals
                </p>
              </div>

              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group">
                <Rocket className="w-6 h-6 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-1 text-sm">Fast Delivery</h3>
                <p className="text-xs">From concept to launch in just 7 days</p>
              </div>
            </div>

            <div className="pt-6">
              <Link
                to="/contact" // Specify the route to navigate to
                className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold text-base hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto group"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        <WorkShowcase />
        <MarketingGrid />
      </div>
    </div>
  );
};

export default ProductServicesPage;
