import React from 'react';
import { motion } from 'framer-motion';

const WebIntroSectionAjmer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative mt-12 mb-24 mx-auto max-w-7xl  "
    >
      <div className="rounded-2xl overflow-hidden">
        <div className="relative p-8 md:p-12">
          {/* Background with specified gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />
          
          {/* Content */}
          <div className="relative flex flex-col lg:flex-row gap-8 items-center">
            {/* Text Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                The Best Website Designing Company in Ajmer, India
              </h2>
              
              <div className="space-y-6 text-white text-justify text-lg">
                <p>
                  Looking to turn your website idea into a powerful online presence? At SEOcial Media Solutions in Ajmer, we specialize in crafting stunning websites tailored to your vision. Whether you need a sleek single-page site or a full-scale web application, our skilled designers and developers are here to make it happen.
                </p>
                
                <p>
                  Your website represents your brand and builds your first impression online. We focus on everything—design layout, color schemes, typography, graphics, and a seamless user experience. While web design defines the look and feel, web development ensures performance and functionality. Share your vision with us, and our team in Ajmer will bring it to life with precision and creativity.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/3 flex justify-center">
              <img 
                src="/images/websitedevelopment.jpg"
                alt="Web Development Services in Ajmer"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WebIntroSectionAjmer;
