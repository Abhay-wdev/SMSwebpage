import React, { useState } from 'react';
import { MessageCircle, Share2, ThumbsUp, ThumbsDown } from 'lucide-react';
import { motion } from 'framer-motion';

const YouTubeShort = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  
  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isDisliked) setIsDisliked(false);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) setIsLiked(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Watch Our YouTube Shorts – 
          </span>
          <br />
          <span className="text-gray-800">Digital Marketing in Action</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mt-6 rounded-full"/>
      </motion.div>

      <div className="flex justify-center items-center">
        <div className="relative w-80 h-[600px] bg-black rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/dRRn72Zob7o?autoplay=1"
            title="YouTube video player"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <div className="absolute bottom-0 right-0 p-6">
            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={handleLike}
                className="transform transition-transform hover:scale-110"
              >
                <ThumbsUp 
                  className={`w-7 h-7 ${isLiked ? 'text-blue-600' : 'text-white'}`} 
                />
                <span className="text-white text-xs font-semibold">123K</span>
              </button>

              <button 
                onClick={handleDislike}
                className="transform transition-transform hover:scale-110"
              >
                <ThumbsDown 
                  className={`w-7 h-7 ${isDisliked ? 'text-blue-600' : 'text-white'}`} 
                />
              </button>

              <button className="transform transition-transform hover:scale-110">
                <MessageCircle className="w-7 h-7 text-white" />
                <span className="text-white text-xs font-semibold">2.1K</span>
              </button>

              <button className="transform transition-transform hover:scale-110">
                <Share2 className="w-7 h-7 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeShort;