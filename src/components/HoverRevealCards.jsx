import React, { useState } from "react";

const cards = [
  {
    title: "SEO & Marketing",
    description: "Boost your brand’s visibility with expert SEO strategies.",
    image: "/images/other/seo.jpg",
  },
  {
    title: "Digital Marketing",
    description: "Reach your audience across all platforms with digital campaigns.",
    image: "/images/other/digital.jpg",
  },
  {
    title: "Web Development",
    description: "Custom web development for your business needs and strategy.",
    image: "/images/other/dev.jpg",
  },
  {
    title: "Media Marketing",
    description: "Grow engagement through creative media planning and execution.",
    image: "/images/other/media.jpg",
  },
  {
    title: "Content Writing",
    description: "Engage your audience with impactful, SEO-friendly content tailored to your brand voice.",
    image: "/images/other/strategy.jpg",
  }
  ,
  {
    
    title: "PPC Advertising",
    description: "Drive instant traffic with data-driven PPC ad campaigns.",
    image: "/images/other/ppc.jpg",
  },
];

const HoverSlideCards = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      {/* Large Screen - Hover Slide Cards */}
      <div className="hidden sm:flex overflow-hidden w-[95%] h-[500px] rounded-xl shadow-2xl group mx-auto">
        {cards.map((card, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`relative transition-all duration-500 ease-in-out overflow-hidden cursor-pointer h-full ${
                isActive ? "flex-[4]" : "flex-[1]"
              }`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div
                className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-60"
                }`}
              >
                <h2
                  className={`text-white font-bold text-xl transition-transform duration-500 ease-in-out ${
                    isActive
                      ? "rotate-0 mb-2"
                      : "-rotate-90 origin-bottom-left mb-0"
                  }`}
                >
                  {card.title}
                </h2>
                {isActive && (
                  <p className="text-sm text-gray-200 transition-opacity duration-500">
                    {card.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Small Screen - Cards as stacked */}
      <div className="flex flex-col sm:hidden space-y-4 w-[95%] mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h2 className="text-white font-bold text-lg">{card.title}</h2>
              <p className="text-sm text-gray-200">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HoverSlideCards;
