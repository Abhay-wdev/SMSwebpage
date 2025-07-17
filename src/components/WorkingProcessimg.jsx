'use client';

import React, { useState } from 'react';
 
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { IoTrendingUp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const services = [
  {
    title: 'Social Media Marketing',
    description:
      'Strategic social media campaigns to increase brand awareness, engage your audience, and drive business growth.',
    points: [
      'Content strategy & planning',
      'Platform management',
      'Creative ad campaigns',
      'Audience engagement & growth',
      'Performance analysis & reporting',
      'Hashtag research and optimisation',
      'Influencer outreach and collaborations',
      'Story and reel content creation',
      'Social media contests and giveaways',
      'Community management and responses',
    ],
    percentage: '86%',
    note: 'Of marketers report increased exposure through social media marketing',
    path: '/social-media-marketing-company-ajmer',
  },
  {
    title: 'Full-Stack Web Development',
    description:
      'Build modern, responsive, and high-performing websites with our expertise in full-stack web development.',
    points: [
      'React & Next.js frontend development',
      'Node.js backend development',
      'WordPress CMS development',
      'MongoDB database integration',
      'Tailwind CSS for styling',
      'Responsive design implementation',
      'API development and integration',
      'Performance optimization and caching',
      'SEO-optimized web structures',
      'Cross-browser and device compatibility',
    ],
    percentage: '91%',
    note: 'Of users judge a company’s credibility based on website experience',
    path: '/web-development-company-ajmer',
  },
  {
    title: 'SEO & Analytics',
    description:
      'Boost your website’s organic traffic and monitor performance with advanced SEO and analytics strategies.',
    points: [
      'On-page & off-page SEO',
      'Keyword & competitor analysis',
      'Backlink building',
      'Google Analytics setup & insights',
      'Performance reporting with SEMrush',
      'Technical SEO audits',
      'Content optimisation for search intent',
      'Local SEO strategies',
      'Schema markup implementation',
      'Conversion and goal tracking setup',
    ],
    percentage: '93%',
    note: 'Of online experiences begin with search, making SEO crucial',
    path: '/seo-company-ajmer',
  },
  {
    title: 'Video Editing',
    description:
      'Create high-quality videos that capture attention, engage viewers, and elevate your brand’s visual identity.',
    points: [
      'Professional editing with Premiere Pro',
      'Short-form reels and YouTube Shorts',
      'Brand-focused video storytelling',
      'Colour grading and enhancements',
      'Optimised video formats for platforms',
      'Video intros and outros design',
      'Captioning and subtitles for accessibility',
      'Sound design and audio mastering',
      'Product and service explainer videos',
      'Video resizing and repurposing for social media',
    ],
    percentage: '89%',
    note: 'Of marketers say video provides a good ROI for their brand strategy',
    path: '/video-editing-company-ajmer',
  },
  {
    title: 'Content Writing',
    description:
      'Engage your audience with compelling content that communicates your brand’s message clearly and drives action.',
    points: [
      'Website copywriting',
      'SEO-friendly blog posts',
      'Product and service descriptions',
      'Social media captions & ads',
      'Proofreading and editing',
      'Email newsletters and campaigns',
      'Video script writing',
      'Press releases and PR content',
      'Case studies and white papers',
      'Content strategy and planning',
    ],
    percentage: '78%',
    note: 'Of customers prefer companies with quality, consistent content',
    path: '/content-writing-company-ajmer',
  },
  
  
  {
    title: 'Google Services & PPC',
    description:
      'Strategic Google Ads campaigns to maximise your ROI and drive targeted, high-converting traffic to your website.',
    points: [
      'Keyword and competitor research',
      'Ad copywriting and creative design',
      'Performance tracking & analytics',
      'Conversion-focused landing pages',
      'Campaign optimisation for ROI',
      'A/B testing of ad creatives',
      'Negative keyword management',
      'Geo-targeting and audience segmentation',
      'Retargeting campaigns setup',
      'Google Ads account audits and improvements',
    ],
    percentage: '82%',
    note: 'Of clicks on search ads lead to conversions, making PPC essential',
    path: '/lead-generation-company-ajmer',
  },
];

const WorkingProcessimg = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2 className="z-10 text-white font-bold w-fit text-3xl py-1 px-4 rounded-t-3xl bg-blue-900">
        Our Services in Ajmer
      </h2>

      <section className="max-w-7xl mx-auto mb-10 rounded-[60px] overflow-hidden flex flex-col lg:flex-row shadow-md">
        {/* Left menu */}
        <div className="bg-[#0A0D2B] text-white w-full lg:w-1/3 p-6 flex flex-col gap-4">
          {services.map((service, index) => (

<motion.div
 
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
>
            <div
              key={index}
              className={`flex items-center justify-between px-4 py-3 rounded-full cursor-pointer transition ${
                activeIndex === index ? 'bg-purple-600' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="text-left text-sm md:text-base">{service.title}</span>
              {activeIndex === index && (
                <div className="bg-black rounded-full p-2">
                  <FaArrowRight className="text-white" />
                </div>
              )}
            </div>
            </motion.div>
          ))}
        </div>

        {/* Right content */}
        <div className="bg-gradient-to-r from-blue-500 to-transparent bg-gray-50 w-full lg:w-2/3 p-6 md:p-10 flex flex-col lg:flex-row gap-8 rounded-br-[60px]">
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              {services[activeIndex].description}
            </h3>
            <ul className="space-y-2">
              {services[activeIndex].points.map((point, i) => (
                <li key={i} className="flex items-center gap-2 text-sm md:text-base">
                  <FaCheck className="text-purple-600 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Link for Learn More */}
            <Link
              to={ services[activeIndex].path}
              className="inline-block mt-6 text-sm font-semibold border-b-2 border-purple-600"
            >
              LEARN MORE
            </Link>
          </div>

          {/* Percentage Card */}
          <div className="flex flex-col items-center justify-center bg-white rounded-3xl p-6 md:p-8 shadow w-full lg:w-1/3">
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border border-purple-400 flex items-center justify-center text-2xl md:text-4xl font-bold relative">
              {services[activeIndex].percentage}
              <IoTrendingUp className="text-purple-600 absolute bottom-3 md:bottom-4" />
            </div>
            <p className="text-center mt-4 text-sm md:text-base">{services[activeIndex].note}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkingProcessimg;
