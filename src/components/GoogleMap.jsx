import React from "react";
import { MapPin, Phone, Mail, Layers, Rocket, Lightbulb} from "lucide-react";

import Testimonial from "./Testimonial";
import TechShowcase from "./TechShowcase";
import FAQAccordion from "./FAQAccordion";

const UnifiedLandingPage = () => {
  const features = [
    {
      title: "Digital Innovation & Transformation",
      description: "Unlock the power of digital innovation to drive growth and create transformative experiences for your brand.",
      icon: Rocket,
    },
    {
      title: "Creative Digital Marketing Strategies",
      description: "Developing customized digital marketing strategies that maximize brand visibility, engagement, and conversions.",
      icon: Lightbulb,
    },
    {
      title: "Tech-Driven Digital Presence",
      description: "Harnessing advanced technology to enhance your digital presence and ensure your business stands out online.",
      icon: Layers,
    },
    {
      title: "Data-Driven Marketing Solutions",
      description: "Utilizing data insights to craft tailored marketing campaigns that boost performance and deliver measurable results.",
      icon: Layers,
    },
  ]
  

  return (
    <>
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />

      {/* Animated Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite_2s]" />
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite_4s]" />
      </div>
   

      {/* Main Content */}
      <div className="relative w-full px-4 md:px-8 pt-8">
        {/* Hero Section */}
       <TechShowcase/>
        
           

        {/* Location Section */}
        <div className="max-w-[1200px] mt-8 mx-auto mb-12">
          <div className="text-center mb-6 sm:mb-10">
            <div className="inline-block">
              <span className="block text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">
                Visit Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                SEOcial Media Solutions
                <span className="block text-blue-600"> in the Heart of Jaipur</span>
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
            </div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Where creativity meets technology to build innovative solutions and unique experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl  shadow-lg overflow-hidden transition-all duration-300 hover:rounded-none">
              <div className="h-[300px] sm:h-[400px] relative">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.185377920299!2d75.759862!3d26.886502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x497961d98b0fc69b%3A0xac294f01cba870af!2sSEOcial%20Media%20Solutions!5e0!3m2!1sen!2sin!4v1698067342738!5m2!1sen!2sin"
                  className="w-full h-full border-none"
                  allowFullScreen
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <MapPin className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Visit Us</h2>
                    <p className="text-gray-600">1, Sagar, Shiv Shakti Nagar, Nirman Nagar, Jaipur, Rajasthan, 302019</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-xl">
                      <Phone className="text-blue-600 w-5 h-5" />
                    </div>
                    <p className="text-gray-600">+91 9461677122,<br /> +91 8949342270</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-xl">
                      <Mail className="text-blue-600 w-5 h-5" />
                    </div>
                    <p className="text-gray-600">info@seocialmedia.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mb-10 mx-auto">
       
        <Testimonial/>
        <FAQAccordion/>
        
        </div>
      </div>
    </div>
    
    
      </>
  );
};

export default UnifiedLandingPage;