// components/BoostTrafficSection.jsx
import React from "react";
import ContactForm from "./ContactForm";

const BoostTrafficSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-8">
          <p className="text-orange-600 font-semibold">Ready to Grow</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Boosts your <span className="text-blue-600">website</span> traffic!
          </h2>

          {/* Form Inputs */}
           
<ContactForm/>
         
         
        </div>

        {/* Right Mobile Mockup with floating animation */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/other/seo-jaipur.png"
            alt="Credit Mobile UI"
            className="w-full max-w-sm rounded-3xl shadow-xl animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default BoostTrafficSection;
