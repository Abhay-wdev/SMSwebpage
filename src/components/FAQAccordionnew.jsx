import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQAccordionnew = ({ content, title = "Frequently Asked", subtitle = "Questions" }) => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
     
        
<motion.div
 
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.2 }}
 transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
 >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {title}
          </span>
          <br />
          <span className="text-gray-800">{subtitle}</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mt-6 rounded-full"/>
        </motion.div>
      
      
      <div className="space-y-4">
        {content.map((item, index) => (

<motion.div
 
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
>


          <div key={index} className="border-b border-gray-300 bg-pink-100 rounded-3px px-5">
            <motion.button
              className="w-full py-6 flex justify-between items-center text-left"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <span className="text-lg">{item.question}</span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-start text-gray-600">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          </motion.div>

        ))}
      </div>
    </div>
  );
};

export default FAQAccordionnew;
