import React from 'react';
import Carousel from 'react-multi-carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const WorkShowcase = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1
    }
  };

  const clientIndustries = [
    {
      image: "images/realestate.jpg",
      industry: "Real Estate",
      description: "Helping property developers and realtors boost online visibility",
      achievement: "300% Lead Generation Increase",
      clientType: "Property Developers & Agents"
    },
    {
      image: "images/medical.jpg",
      industry: "Healthcare",
      description: "Digital solutions for medical practices and healthcare providers",
      achievement: "200% Patient Inquiries",
      clientType: "Medical Practices & Clinics"
    },
    {
      image: "images/online.jpg",
      industry: "E-commerce",
      description: "Driving sales for online retailers and brands",
      achievement: "5x Revenue Growth",
      clientType: "Online Retailers & D2C Brands"
    },
    {
      image: "images/school.jpg",
      industry: "Education",
      description: "Marketing solutions for educational institutions",
      achievement: "150% Enrollment Growth",
      clientType: "Schools & Universities"
    },
    {
      image: "images/law.jpg",
      industry: "Professional Services",
      description: "Digital presence for law firms and consultancies",
      achievement: "400% Quality Leads",
      clientType: "Law Firms & Consultants"
    },
    {
      image: "images/hotel.jpg",
      industry: "Restaurant & Hospitality",
      description: "Boosting bookings and online orders",
      achievement: "250% Booking Increase",
      clientType: "Restaurants & Hotels"
    },
    {
      image: "images/tech.jpg",
      industry: "Technology",
      description: "Marketing for SaaS and tech companies",
      achievement: "180% User Acquisition",
      clientType: "SaaS & Tech Companies"
    },
    {
      image: "images/technology.jpg",
      industry: "Manufacturing",
      description: "Digital solutions for industrial clients",
      achievement: "3x B2B Leads",
      clientType: "Manufacturers & Suppliers"
    }
  ];

  const CustomButtonGroup = ({ next, previous }) => {
    return (
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={previous}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 bg-transparent">
      <div className="text-center mb-6 sm:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <span className="block text-lg font-extrabold text-blue-600 tracking-wider uppercase mb-2">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Work Showcase
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
          Delivering exceptional digital marketing results across diverse industries
        </motion.p>
      </div>
      
      <div className="relative">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all 500ms ease"
          transitionDuration={500}
          containerClass="pb-4"
          renderButtonGroupOutside={true}
          customButtonGroup={<CustomButtonGroup />}
          arrows={false}
          itemClass="px-2"
        >
          {clientIndustries.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg h-64 sm:h-72 shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.industry}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2">
                    {item.industry}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">{item.clientType}</h3>
                  <p className="text-xs sm:text-sm text-gray-200 mb-2">{item.description}</p>
                  <div className="flex items-center">
                    <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded backdrop-blur">
                      {item.achievement}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default WorkShowcase;