import React from 'react';
import { FaBullhorn, FaUsers, FaCloud, FaChartLine, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    title: 'Business Marketing Strategy',
    description: 'Omnis quis sunt quasi aliquet senectus tenetur dolor! Omnis! Corrupti, esto.',
    image: '/images/marketing.jpg',
    icon: <FaBullhorn size={20} />,
  },
  {
    title: 'Social Campaign Management',
    description: 'Omnis quis sunt quasi aliquet senectus tenetur dolor! Omnis! Corrupti, esto.',
    image: '/images/social.webp',
    icon: <FaUsers size={20} />,
  },
  {
    title: 'SEO & Advertisement Placement',
    description: 'Omnis quis sunt quasi aliquet senectus tenetur dolor! Omnis! Corrupti, esto.',
    image: '/images/seo.jpg',
    icon: <FaCloud size={20} />,
  },
  {
    title: 'Business Market Collaboration',
    description: 'Omnis quis sunt quasi aliquet senectus tenetur dolor! Omnis! Corrupti, esto.',
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
            className="flex items-center justify-between bg-white rounded-2xl shadow-sm p-6 relative overflow-hidden"
          >
            {/* Text Content */}
            <div className="w-1/2 pr-4">
              <h3 className="text-xl font-bold text-[#2b2350] mb-2">{service.title}</h3>
              <p className="text-gray-500 mb-4 text-sm">{service.description}</p>
              
            </div>

            {/* Image Content */}
            <div className="relative w-1/2">
              <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-purple-700 text-white p-3 rounded-full z-10 border-4 border-white shadow-md">
                {service.icon}
              </div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSectionAjmer;
