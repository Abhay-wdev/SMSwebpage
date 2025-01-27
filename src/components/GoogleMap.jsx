import React from "react";
import { MapPin, Phone, Mail, Layers, Rocket, Lightbulb, ArrowRight, Code, Paintbrush, Sparkles, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Testimonial from "./Testimonial";

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
          <div className="w-full back rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              {/* Sparkle decorations */}
              <div className="relative">
                <Sparkles className="absolute -top-4 -left-4 w-6 h-6 text-yellow-300" />
                <Sparkles className="absolute -top-4 -right-4 w-6 h-6 text-yellow-300" />
                
                <div className="space-y-4">
                  <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    Get Your Customized Website
                    <span className="block"> in Just 7 Days!</span>
                  </h1>
                  
                  <p className="text-base md:text-lg text-white/90 max-w-xl mx-auto">
                    Transform your online presence with our expert web development services.
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
                  <h3 className="font-semibold mb-1 text-sm">Custom Development</h3>
                  <p className="text-xs">Tailored solutions built with modern technologies</p>
                </div>
                
                <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group">
                  <Paintbrush className="w-6 h-6 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-1 text-sm">Unique Design</h3>
                  <p className="text-xs">Stand out with stunning, brand-aligned visuals</p>
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
        <Testimonial/>
        </div>
      </div>
    </div>
    
    
      </>
  );
};

export default UnifiedLandingPage;