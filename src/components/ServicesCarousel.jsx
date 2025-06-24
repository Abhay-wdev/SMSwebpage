import React, { useState, useEffect } from 'react';
import { Code, Search, PenTool, MousePointer, Share2,  
Building 
} from 'lucide-react';

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building modern, responsive websites that drive results.',
      image: 'images/website-dev.jpg',
      actionLink: '/web-development-company-jaipur',
    },
    {
      icon: Search,
      title: 'SEO',
      description: 'Boost your visibility and attract organic traffic.',
      image: 'images/seo.jpg',
      actionLink: '/seo-company-jaipur',
    },
    {
      icon: Building,
      title: 'Video Editing',
      description: 'High-quality videos that capture attention and elevate your brand.',
      image: 'images/video-editing.jpg',
      actionLink: '/video-editing-company-jaipur',
    },
    {
      icon: MousePointer,
      title: 'Google Services',
      description: 'Strategic PPC campaigns that maximize ROI.',
      image: 'images/googlead.jpg',
      actionLink: '/lead-generation-company-jaipur ',
    },
    {
      icon: PenTool,
      title: 'Content Writing',
      description: 'Compelling content that engages your audience.',
      image: 'images/content-writing.jpg',
      actionLink: '/content-writing-company-jaipur',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategic campaigns that build brand awareness.',
      image: 'images/social-media.jpg',
      actionLink: '/social-media-marketing-jaipur',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <section className="py-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-3 py-1 bg-yellow-400/10 rounded-full mb-2 backdrop-blur-sm border border-yellow-400/20 hover:bg-yellow-400/20 transition-colors">
            <span className="text-yellow-400 text-sm font-semibold">Services</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-white to-yellow-400">
            Digital Solutions
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="min-w-full">
                  <div className="grid md:grid-cols-2">
                    {/* Image Section */}
                    <div className="relative h-48 md:h-[350px] overflow-hidden group">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-transparent transition-opacity duration-700 group-hover:opacity-75" />
                      
                      {/* Content Overlay */}
                      <div className="relative h-full p-4 md:p-6 flex flex-col justify-between z-10">
                        <div className="space-y-2 transform transition-all duration-500 group-hover:translate-y-1">
                          <div className="flex items-center space-x-2">
                            <div className="p-2 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-colors">
                              <service.icon className="w-5 h-5 text-yellow-400 transform transition-transform duration-500 group-hover:rotate-12" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* New Right Section */}
                    <div className="p-4 md:p-6 bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <a
                        href={service.actionLink}
                        className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-colors"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-4 space-x-1">
            {services.map((_, index) => (
              <div
                key={index}
                className={`transition-all duration-500 rounded-full cursor-pointer hover:scale-110 ${
                  currentSlide === index 
                    ? 'w-6 h-1.5 bg-yellow-400' 
                    : 'w-1.5 h-1.5 bg-yellow-400/30 hover:bg-yellow-400/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
