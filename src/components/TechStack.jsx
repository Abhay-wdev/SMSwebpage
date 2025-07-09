import React from "react";
import GridMotion from "./GridMotion";

const technologies = [
  { name: "React", category: "Frontend", logo: "images/react.png" },
  { name: "Node.js", category: "Backend", logo: "images/nodejs.png" },
  { name: "WordPress", category: "CMS", logo: "images/wordpress.png" },
  { name: "MongoDB", category: "Database", logo: "images/mongodb.png" },

  { name: "Next.js", category: "Framework", logo: "images/nextjs.png" },
  { name: "Tailwind CSS", category: "Styling", logo: "images/tailwind.png" },
  {
    name: "Google Analytics",
    category: "Analytics",
    logo: "images/google.png",
  },
  { name: "Google Ads", category: "Advertising", logo: "images/ad.png" },
  
  { name: "Premiere", category: "Video Editing", logo: "images/premiere.png" },
  { name: "Meta Ads", category: "Advertising", logo: "images/meta.png" },
  { name: "React", category: "Frontend", logo: "images/react.png" },
  { name: "Node.js", category: "Backend", logo: "images/nodejs.png" },
  { name: "WordPress", category: "CMS", logo: "images/wordpress.png" },
  { name: "MongoDB", category: "Database", logo: "images/mongodb.png" },

  { name: "Next.js", category: "Framework", logo: "images/nextjs.png" },
  { name: "Tailwind CSS", category: "Styling", logo: "images/tailwind.png" },
  { name: "Canva", category: "Design", logo: "images/canva.png" },
  { name: "GitHub", category: "Version Control", logo: "images/github.png" },
  { name: "Docker", category: "DevOps", logo: "images/docker.png" },
  { name: "SEMrush", category: "SEO", logo: "images/semrush.png" },
  { name: "AWS", category: "Cloud", logo: "images/aws.png" },
  { name: "Figma", category: "Design", logo: "images/figma.png" },
  { name: "HootSuite", category: "Social Media", logo: "images/hoot.png" },
];

const TechGridMotion = () => {
  const items = technologies.map((tech, index) => (
    <div
      key={`tech-${index}`}
      className=" flex flex-col items-center justify-center p-4 hover:bg-gray-100 rounded-xl transition duration-300"
    >
      <div className="w-16 h-16 mb-2 p-2 bg-white rounded-lg shadow-md flex items-center justify-center">
        <img
          src={tech.logo}
          alt={tech.name}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-sm font-semibold text-center text-gray-800">
        {tech.name}
      </span>
      <span className="text-xs text-center text-gray-500">{tech.category}</span>
    </div>
  ));

  return <GridMotion className="rounded-lg" items={items} />;
};

export default TechGridMotion;
