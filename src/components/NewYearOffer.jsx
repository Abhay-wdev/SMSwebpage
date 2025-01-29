import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const NewYearOffer = ({ videoUrl }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = (e) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-16 right-2 md:top-20 md:right-4 z-50 cursor-pointer"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <motion.video
              autoPlay
              muted
              loop
              playsInline
              className="w-[150px] h-[225px] md:w-[200px] md:h-[300px] object-cover rounded-lg shadow-lg"
              whileHover={{
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>

            <motion.button
              className="absolute top-1 right-1 md:top-2 md:right-2 bg-black/50 text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center hover:bg-black/70 backdrop-blur-sm"
              onClick={handleClose}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(0, 0, 0, 0.7)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X size={16} strokeWidth={2.5} className="md:w-5 md:h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewYearOffer;