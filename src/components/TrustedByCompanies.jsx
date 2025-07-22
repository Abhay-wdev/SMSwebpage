import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiUpwork,
  SiZoom,
  SiShopify,
  SiWebflow,
  SiYoutube,
  SiNetflix,
   
  SiFacebook,
  SiInstagram,
  SiWordpress,
  
  SiGoogleads,
} from "react-icons/si";

const companies = [
   
   
  { name: "shopify", icon: SiShopify },
 
  { name: "youtube", icon: SiYoutube },
   
   
  { name: "facebook", icon: SiFacebook },
   
  { name: "wordpress", icon: SiWordpress },
 
  { name: "google ads", icon: SiGoogleads },
];

const TrustedByCompanies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <div
      ref={ref}
      className="bg-[#0a0d2b] py-16 px-6 text-white text-center overflow-hidden"
    >
      <h3 className="text-lg sm:text-xl font-medium mb-10">
        SMS is used by over{" "}
        <span className="text-orange-500 font-semibold">100+</span> companies
        across the world
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {companies.map((company, index) => {
          const IconComponent = company.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="bg-[#101340] p-4 rounded-md flex items-center justify-center border border-[#1e214a]"
            >
              <IconComponent className="text-white text-3xl sm:text-4xl" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustedByCompanies;
