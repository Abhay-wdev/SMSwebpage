import React from 'react';
import { FaBullhorn, FaUsers, FaCloud, FaChartLine, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    title: 'Business Marketing Strategy',
    description: 'We develop tailored business marketing strategies to position your brand effectively, target the right audience, and achieve measurable growth outcomes for your business.',
    image: '/images/marketing.jpg',
    icon: <FaBullhorn size={20} />,
  },
  {
    title: 'Social Campaign Management',
    description: 'Our team manages end-to-end social media campaigns to increase engagement, build brand awareness, and drive conversions across all major social platforms.',
    image: '/images/social.webp',
    icon: <FaUsers size={20} />,
  },
  {
    title: 'SEO & Advertisement Placement',
    description: 'Boost your online visibility with our SEO expertise and strategic advertisement placements to rank higher on search engines and reach your ideal customers effectively.',
    image: '/images/seo.jpg',
    icon: <FaCloud size={20} />,
  },
  {
    title: 'Business Market Collaboration',
    description: 'We create business market collaborations and partnerships that expand your reach, enhance credibility, and drive sustainable growth within your industry.',
    image: '/images/collab.webp',
    icon: <FaChartLine size={20} />,
  },
];


const ServicesSectionAjmer = () => {
  return (
    <div className="bg-[#f3f5fc] py-12 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="w-full flex flex-col lg:flex-row items-center justify-between bg-white rounded-2xl shadow-sm p-6 relative overflow-hidden"
        >
          {/* Image First on Small Screens */}
          <div className="relative w-full lg:w-1/2 order-1 lg:order-2 mb-4 lg:mb-0">
            <div className="absolute ml-auto lg:ml-6 bottom-0 lg:bottom-auto  left-1/2 lg:-left-6 lg:top-1/2 transform -translate-x-1/2   lg:-translate-y-1/2 bg-purple-700 text-white p-3 rounded-full z-10 border-4 border-white shadow-md">
              {service.icon}
            </div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
  
          {/* Text Second on Small Screens */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 pr-0 lg:pr-4">
            <h3 className="text-xl font-bold text-[#2b2350] mb-2">{service.title}</h3>
            <p className="text-gray-500 mb-4 text-sm">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default ServicesSectionAjmer;
