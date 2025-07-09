import React from "react";
import TechGridMotion from "./TechStack";
import { useEffect, useState } from 'react';
const technologies = [
  // Digital Marketing Tools
  {
    name: "Google Analytics",
    category: "Analytics",
    logo: "images/google.png", // In production: "/images/tools/google-analytics.svg"
  },
  {
    name: "Google Ads",
    category: "Advertising",
    logo: "images/ad.png", // In production: "/images/tools/google-ads.svg"
  },
  {
    name: "SEMrush",
    category: "SEO",
    logo: "images/semrush.png", // In production: "/images/tools/semrush.svg"
  },
  {
    name: "Premiere",
    category: "Video Editing",
    logo: "images/premiere.png", // In production: "/images/tools/mailchimp.svg"
  },
  {
    name: "HootSuite",
    category: "Social Media",
    logo: "images/hoot.png", // In production: "/images/tools/hootsuite.svg"
  },
  {
    name: "Meta Ads",
    category: "Advertising",
    logo: "images/meta.png", // In production: "/images/tools/meta-ads.svg"
  },
  // Web Development Tools
  {
    name: "React",
    category: "Frontend",
    logo: "images/react.png", // In production: "/images/tools/react.svg"
  },
  {
    name: "Node.js",
    category: "Backend",
    logo: "images/nodejs.png", // In production: "/images/tools/nodejs.svg"
  },
  {
    name: "WordPress",
    category: "CMS",
    logo: "images/wordpress.png", // In production: "/images/tools/wordpress.svg"
  },
  {
    name: "MongoDB",
    category: "Database",
    logo: "images/mongodb.png", // In production: "/images/tools/mongodb.svg"
  },
  {
    name: "TypeScript",
    category: "Language",
    logo: "images/typescript.png", // In production: "/images/tools/typescript.svg"
  },
  {
    name: "Next.js",
    category: "Framework",
    logo: "images/nextjs.png", // In production: "/images/tools/nextjs.svg"
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    logo: "images/tailwind.png", // In production: "/images/tools/tailwind.svg"
  },
  {
    name: "Canva",
    category: "Design",
    logo: "images/canva.png", // In production: "/images/tools/canva.svg"
  },
  {
    name: "GitHub",
    category: "Version Control",
    logo: "images/github.png", // In production: "/images/tools/github.svg"
  },
  {
    name: "Docker",
    category: "DevOps",
    logo: "images/docker.png", // In production: "/images/tools/docker.svg"
  },
  {
    name: "AWS",
    category: "Cloud",
    logo: "images/aws.png", // In production: "/images/tools/aws.svg"
  },
  {
    name: "Figma",
    category: "Design",
    logo: "images/figma.png", // In production: "/images/tools/figma.svg"
  },
];

const TechShowcase = () => {
  
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Tailwind 'lg' starts at 1024px
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="lg:w-1/3">
          <h2 className="text-3xl font-bold mb-6">Our Technology Stack</h2>
          <p className="text-gray-600 mb-4">
            We combine powerful digital marketing tools with cutting-edge web
            development technologies to create comprehensive digital solutions.
            Our expertise spans from SEO and social media marketing to
            full-stack web development.
          </p>
          <p className="text-gray-600">
            As certified partners with major platforms and technology providers,
            we deliver scalable, modern, and effective digital solutions for
            your business.
          </p>
        </div>
        {isDesktop ? (
        <TechGridMotion className="w-full" />
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              <div className="w-16 h-16 mb-3 p-2 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm text-center font-medium text-gray-700">
                {tech.name}
              </span>
              <span className="text-xs text-center text-gray-400 mt-1">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default TechShowcase;
