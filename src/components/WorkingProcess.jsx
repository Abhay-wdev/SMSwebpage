'use client';
import React from 'react';
import { FaClipboardCheck, FaLightbulb, FaAtom, FaChartLine } from 'react-icons/fa';
import HoverSlideCards from './HoverRevealCards';
import { motion } from 'framer-motion';
import { Clock, Shield, HeartHandshake } from 'lucide-react';


const WorkingProcess = () => {
  const steps = [
    {
      icon: <FaClipboardCheck className="text-teal-400 size-12" />,
      title: 'Planning',
    },
    {
      icon: <FaLightbulb className="text-teal-400 size-12" />,
      title: 'Research',
    },
    {
      icon: <FaAtom className="text-teal-400 size-12" />,
      title: 'Optimizing',
    },
    {
      icon: <FaChartLine className="text-teal-400 size-12" />,
      title: 'Results',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 text-center text-white">
      <div className="container mx-auto px-4">
        <p className="text-lg mb-2">Work Flow</p>
        <h2 className="text-3xl font-bold mb-10">Our Working Process</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white bg-opacity-10 rounded-full p-8 hover:bg-opacity-20 transition"
            >
              {step.icon}
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <center className='mt-[50px]'>
      
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
 
 initial={{ opacity: 0, x: -50 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, amount: 0.2 }}
 transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
 >
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white">
                    Expert Digital Solutions at Your Fingertips
                  </h2>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Connect with Jaipur's best digital marketing agency for tailored web solutions, 
                    SEO strategies, and social media expertise. Our dedicated team ensures your business 
                    achieves maximum online visibility and engagement through data-driven approaches 
                    and innovative digital marketing solutions.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">24/7 Support</h3>
                        <p className="text-sm text-gray-100">Quick response guaranteed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Trusted Agency</h3>
                        <p className="text-sm text-gray-100">Proven track record</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                        <HeartHandshake className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Client Success</h3>
                        <p className="text-sm text-gray-100">Results-driven approach</p>
                      </div>
                    </div>
                  </div>
                </div>
                </motion.div>
                <motion.div
 
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.6, ease: "easeOut", delay:  0 }}
>
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src="images/technology.jpg"
                    alt="Digital marketing expertise"
                    className="w-full h-full object-cover aspect-4/3"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-xl font-semibold">Leading Digital Marketing Agency in Jaipur</p>
                      <p className="mt-2 text-sm opacity-90">Transforming businesses through digital excellence</p>
                    </div>
                  </div>
                </div>
                </motion.div>
              </div>
            </div>
          
      <HoverSlideCards/></center>
    </section>
  );
};

export default WorkingProcess;
