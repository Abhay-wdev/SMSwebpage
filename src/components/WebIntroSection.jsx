import React from 'react';
import { motion } from 'framer-motion';

const WebIntroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative mt-12 mb-24 mx-auto max-w-7xl px-4"
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
                The Best Website Designing Company in Jaipur, India
              </h2>
              
              <div className="space-y-6 text-white text-justify text-lg">
                <p>
                  Are you wondering how your dream website can be converted into a reality? Well, you need not fantasize anymore! The expert team of website designers and website developers in Jaipur at SEOcial Media Solutions will bring your imagination alive. Whether your fantasy revolves around a single-page website in static mode or it includes complex web applications, our team of expert web designers and developers helps you create the website of your dream.
                </p>
                
                <p>
                  A website is an insight into the brand or the product you have to offer. Its presentation will include the designing, coloring, text, shapes, graphics and above all, the user experience. Web designing, in layman's terms, can be explained as the display, the design, the first interaction of any website. Web Development, on the other hand, includes all the work done to develop a website for the use of the internet or intranet. So, once you have shared your dream with us, the best website development company in Jaipur, India will get into action.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/3 flex justify-center">
              <img 
                src="/images/websitedevelopment.jpg"
                alt="Web Development Services"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WebIntroSection;