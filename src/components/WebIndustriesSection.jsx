import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Heart, 
  GraduationCap, 
  Plane, 
  Landmark,
  Terminal,
  Truck,
  Film,
  Car,
  Trophy,
  Home,
  UtensilsCrossed
} from 'lucide-react';

const WebIndustriesSection = () => {
  const industries = [
    { name: "Retail & eCommerce", icon: <ShoppingCart /> },
    { name: "Healthcare", icon: <Heart /> },
    { name: "Education & eLearning", icon: <GraduationCap /> },
    { name: "Travel & Tourism", icon: <Plane /> },
    { name: "Finance & Banking", icon: <Landmark /> },
    { name: "Technology & Consultancy", icon: <Terminal /> },
    { name: "Logistics & Transportation", icon: <Truck /> },
    { name: "Hospitality & Entertainment", icon: <Film /> },
    { name: "Automotive", icon: <Car /> },
    { name: "Sports", icon: <Trophy /> },
    { name: "Real Estate", icon: <Home /> },
    { name: "Food & Beverage", icon: <UtensilsCrossed /> }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-12 sm:py-16 md:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 pb-2 sm:mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent px-4">
            We Design Websites for a Wide Variety of Industries
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Tailored solutions for every sector
          </p>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5
                  }
                }
              }}
              className="group  bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex  flex-col items-center text-center space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600">
                    {industry.icon}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight">
                  {industry.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WebIndustriesSection;