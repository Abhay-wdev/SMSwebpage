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
      'Grow your brand on social platforms with targeted campaigns that boost visibility, connect with your audience, and increase business.',
    points: [
      'Content creation and scheduling',
      'Managing social media accounts',
      'Running creative ad campaigns',
      'Growing and engaging followers',
      'Analyzing and reporting performance',
      'Hashtag research and usage',
      'Working with influencers',
      'Creating stories and reels',
      'Hosting giveaways and contests',
      'Handling comments and messages',
    ],
    percentage: '86%',
    note: 'Marketers see greater brand exposure with social media marketing',
    path: '/top-social-media-solution-company-jaipur',
  },
  {
    title: 'Full-Stack Web Development',
    description:
      'We build fast, mobile-friendly, and fully functional websites using the latest web technologies.',
    points: [
      'Frontend with React and Next.js',
      'Backend with Node.js',
      'WordPress website development',
      'MongoDB database setup',
      'Tailwind CSS for clean design',
      'Responsive across devices',
      'API creation and use',
      'Speed and performance tuning',
      'SEO-friendly website structure',
      'Works on all browsers and screens',
    ],
    percentage: '91%',
    note: 'Most users decide credibility based on website quality',
    path: '/web-development-company-jaipur',
  },
  {
    title: 'SEO & Analytics',
    description:
      'Improve your site’s Google ranking and track performance with expert SEO and data analysis tools.',
    points: [
      'SEO on-page and off-page',
      'Keyword and competitor research',
      'Building strong backlinks',
      'Google Analytics setup',
      'SEMrush-based reporting',
      'Technical SEO health checks',
      'Content optimized for searches',
      'Local SEO improvements',
      'Schema markup for better indexing',
      'Goal and conversion tracking',
    ],
    percentage: '93%',
    note: 'Most online activity starts with a search, making SEO vital',
    path: '/top-seo-company-jaipur',
  },
  {
    title: 'Video Editing',
    description:
      'Create engaging, professional videos that tell your brand story and captivate your audience.',
    points: [
      'Editing using Premiere Pro',
      'Creating reels and Shorts',
      'Storytelling through video',
      'Color correction and filters',
      'Optimized formats for social platforms',
      'Animated intros and outros',
      'Subtitles and captions',
      'Sound editing and music syncing',
      'Explainer videos for products',
      'Video resizing for reuse on platforms',
    ],
    percentage: '89%',
    note: 'Video marketing brings strong returns on investment',
    path: '/top-video-editing-company-jaipur',
  },
  {
    title: 'Content Writing',
    description:
      'We write high-quality, compelling content that informs, connects, and converts your audience.',
    points: [
      'Website and landing page copy',
      'SEO-optimized blog articles',
      'Product/service descriptions',
      'Captions for social media and ads',
      'Proofreading and editing',
      'Email campaigns and newsletters',
      'Video scripts and voiceovers',
      'Press releases and brand updates',
      'Whitepapers and case studies',
      'Planning your content strategy',
    ],
    percentage: '78%',
    note: 'Customers trust brands with consistent, quality content',
    path: '/top-content-writing-company-jaipur',
  },
  {
    title: 'Google Services & PPC',
    description:
      'Get more leads with data-driven Google Ads that bring quality traffic and high conversion rates.',
    points: [
      'Finding best keywords and competitors',
      'Creating ad copy and visuals',
      'Tracking and analyzing ad performance',
      'Designing landing pages for results',
      'Maximizing ad return on investment',
      'Split-testing ads (A/B testing)',
      'Filtering out bad keyword traffic',
      'Location-based targeting',
      'Retargeting past visitors',
      'Auditing and improving ad accounts',
    ],
    percentage: '82%',
    note: 'PPC ads are a powerful way to drive conversions',
    path: '/top-lead-generation-company-jaipur',
  },
];

const WorkingProcessimgJaipur = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
     {/* Background heading */}
     <h2 className="  w-fit  mb-2  z-0 text-white font-bold text-3xl py-3 px-6 rounded-3xl bg-blue-900 text-center">
          Our Services in Jaipur
        </h2>
      <section className="  max-w-7xl mx-auto mb-10 rounded-[60px] z-10 overflow-hidden flex flex-col lg:flex-row shadow-md">
       

        {/* Left menu */}
        <div className="bg-[#0A0D2B]  z-0 text-white w-full lg:w-1/3 p-6  flex flex-col gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            >
              <div
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
        <div className="bg-gradient-to-r   from-blue-500 to-transparent bg-gray-50 w-full lg:w-2/3 p-6 md:p-10 flex flex-col lg:flex-row gap-8 rounded-br-[60px]">
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

            <Link
              to={services[activeIndex].path}
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

export default WorkingProcessimgJaipur;
