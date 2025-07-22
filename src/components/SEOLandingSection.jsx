import React from "react";
import Masonry from "./Masonry";

const SEOLandingSection = () => {
  // Generate 10 image URLs: /images/more/best-seo-ajmer-001.jpg to 010
  const totalImages = 10;

  const items = Array.from({ length: totalImages }, (_, i) => {
    const index = (i + 1).toString().padStart(3, "0"); // "001", "002", ...
    return {
      id: (i + 1).toString(),
      img: `/images/more/best-seo-ajmer-${index}.jpg`,
      url: `https://example.com/${i + 1}`,
      height: 300 + Math.floor(Math.random() * 250), // 300–550
    };
  });

  return (
    <section className="relative bg-gradient-to-br from-[#0d47a1] to-[#1976d2] text-white overflow-hidden">
      <Masonry
        items={items}
        animateFrom="bottom"
        blurToFocus={true}
        colorShiftOnHover={true}
        scaleOnHover={true}
        hoverScale={0.95}
        duration={0.6}
        stagger={0.05}
      />

      <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-sm tracking-wide text-blue-300 uppercase">
            Change Your View of SEO
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Rank Your Local
            <br /> Business With SEO
            <br /> in Ajmer
          </h1>
          <p className="text-base text-blue-100">
            Our approach to SEO is uniquely built around what we know works and
            what we know doesn’t work.
          </p>
        </div>

        {/* Right Illustration */}
        <div className="md:w-1/2 flex justify-center relative">
          <img
            src="/images/other/banner.png"
            alt="SEO Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Wavy Bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.47C175.83,87.19,55.29,100.2,0,103.77V0H1200V27.35c-65.52,25.18-191.3,47.92-326.54,52.36C682,86.34,513.54,33.36,321.39,56.47Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default SEOLandingSection;
