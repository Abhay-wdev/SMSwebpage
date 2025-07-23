import React from 'react';
import { FaCheckCircle, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';
const SocialMediaHeroAjmer = () => {
  return (
    <section className="bg-[#FFF9F5]  px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center bg-[#FF4E66] rounded-3xl overflow-hidden shadow-lg p-6 lg:p-12">
 
        {/* Left Image Section */}
        <div className="relative flex justify-center w-full lg:w-1/2">
          <img
            src="/images/social-bg.jpg"
            alt="People with social icons"
            className="rounded-2xl w-[60%] h-full object-cover"
          />

          {/* Experience Badge */}
          <div className="absolute top-6 left-6 bg-white text-black flex items-center gap-2 px-4 py-2 rounded-full shadow-md">
            <FaTrophy className="text-2xl text-yellow-500" />
            <div className="text-left">
              <p className="text-xl font-bold leading-none">12+</p>
              <p className="text-xs text-gray-500">YEAR EXPERIENCE</p>
            </div>
          </div>

          {/* Circular Floating Image */}
          <div className="absolute bottom-0  transform -translate-x-1/2 lg:right-0 lg:translate-x-0">
            <img
              src="/images/person-laptop.jpg"
              alt="Person with laptop"
              className="w-[25%] h-[100%] rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>
        
        {/* Right Text Section */}
        <div className="w-full flex justify-center flex-col lg:w-1/2 mt-16 lg:mt-0 lg:pl-16 text-white">
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Giving <span className="text-white font-extrabold">Solution</span> For <br />
            <span className="text-white">Social Media !</span>
          </h2>
          <p className="text-sm mb-6 leading-relaxed text-white/80">
            Ridiculus dui varius egestas cras dicta aliquid culpa voluptate! Aut. Lacinia
            temporibus quis autem. Netus erat eros. Eiusmod fuga, conubia tem. Tortor
            placerat consequat rutrum, eu convallis, nihil.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 gap-3 text-sm mb-6">
            <p className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Impedit rerum, montes atque.</p>
            <p className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Provident rerum, curae.</p>
            <p className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Unde fames mollis rutrum.</p>
            <p className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Volutpat mi litora perspiciatis.</p>
          </div>

          {/* Profile + CTA */}
          <div className="flex items-center justify-between">
            

            <button className="bg-white text-[#FF4E66] font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
              MORE ABOUT US
            </button>
          </div>
        </div>


      </div>
    </section>
  );
};

export default SocialMediaHeroAjmer;
