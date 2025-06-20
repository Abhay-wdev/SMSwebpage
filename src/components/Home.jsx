import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Sparkles } from 'lucide-react';
import ProductServicesPage from './ProductServicesPage';
import ServicesCarousel from './ServicesCarousel';
import GoogleMap from './GoogleMap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Enhanced Background Component
const HeroBackground = () => (
  <div className="absolute inset-0 -z-10 bg-slate-950 overflow-hidden">
    <div className="absolute inset-0">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </div>
  </div>
);

// Improved Wave Transition
const WaveBottom = () => (
  <div className="absolute bottom-0 left-0 right-0">
    <svg className="w-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#f9fafb', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#f3f4f6', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M0,50 C150,20 350,0 500,15 C650,30 800,70 1000,80 C1200,90 1320,70 1440,40 L1440,100 L0,100 Z" fill="url(#gradient1)" />
    </svg>
  </div>
);

// Fixed YouTube Video Component
const YouTubeVideo = ({ videoId }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [apiLoaded, setApiLoaded] = useState(false);
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  // Load YouTube API script
  useEffect(() => {
    if (window.YT) {
      setApiLoaded(true);
      return;
    }

    const loadYouTubeAPI = () => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    };

    // Set up the callback for when API is ready
    window.onYouTubeIframeAPIReady = () => {
      setApiLoaded(true);
    };

    loadYouTubeAPI();

    // Cleanup
    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  // Initialize player once API is loaded
  useEffect(() => {
    if (!apiLoaded || !containerRef.current) return;

    const playerId = `youtube-player-${Math.random().toString(36).substr(2, 9)}`;
    containerRef.current.id = playerId;

    if (playerRef.current) {
      playerRef.current.destroy();
    }

    playerRef.current = new window.YT.Player(playerId, {
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 0,
        showinfo: 0,
        rel: 0,
        enablejsapi: 1,
        modestbranding: 1,
        loop: 1,
        playlist: videoId
      },
      events: {
        onReady: (event) => {
          event.target.playVideo();
          setVideoLoaded(true);
          setIsPlaying(true);
        },
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.PLAYING) {
            setVideoLoaded(true);
            setIsPlaying(true);
          }
        },
        onError: (event) => {
          console.error('YouTube Player Error:', event.data);
          setVideoLoaded(true);
        }
      }
    });

    // Cleanup
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [apiLoaded, videoId]);

  const handlePlayPause = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="rounded-lg overflow-hidden shadow-2xl border border-white/10 relative"
      style={{ 
        width: '100%', 
        maxWidth: '560px',
        aspectRatio: '16/9',
        background: 'rgba(0,0,0,0.2)'
      }}
    >
      {(!videoLoaded || !apiLoaded) && (
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center bg-slate-900/80 z-10"
        >
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
        </motion.div>
      )}
      
      <div ref={containerRef} className="w-full h-full"></div>
      
      {videoLoaded && (
        <button 
          className="absolute bottom-4 right-4 bg-white/10 p-2 rounded-full transition-all duration-300 opacity-0 hover:opacity-100"
          onClick={handlePlayPause}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21" />
            </svg>
          )}
        </button>
      )}
    </motion.div>
  );
};

// Responsive Animated Title
const AnimatedTitle = () => (
  <div className="text-2xl sm:text-3xl md:text-4xl mb-6 lg:mb-12 font-bold leading-tight">
    <div className="text-white whitespace-nowrap lg:text-5xl">Transform Your</div>
    <div className="text-white whitespace-nowrap pb-2 lg:text-5xl">Digital Presence with</div>
    <div className="w-full overflow-hidden">
      <TypeAnimation
        sequence={[
          'Website Development',
          1500,
          'SEO Optimization',
          1500,
          'Google Ads',
          1500,
          'Social Media Marketing',
          1500,
          'Content Writing',
          1500,
        ]}
        wrapper="div"
        speed={50}
        repeat={Infinity}
        className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400 text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] pb-4 whitespace-nowrap"
      />
    </div>
  </div>
);

// Hero Section Component
const HeroSection = () => {
  const youtubeVideoId = 'obyYIaHxkSo';

  return (
    <section className="relative min-h-screen">
      <HeroBackground />

      <div className="relative container mx-auto px-4">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-6"
        >
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400">
                SEO
              </span>
              cial Media Solutions
            </div>
          </div>
        </motion.nav>

        <div className=" flex flex-col lg:flex-row items-center py-8 gap-12">
          <div className="w-fit lg:w-1/2 w-fit overflow-hidden space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 
                        backdrop-blur-sm rounded-full space-x-2 border border-white/10"
            >
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 animate-pulse" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400 text-sm sm:text-base font-semibold">
                AI-Powered Digital Marketing Solutions
              </span>
            </motion.div>

            <AnimatedTitle />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-gray-300 max-w-xl"
            >
              Unlock the power of AI-driven marketing solutions that deliver real results.
              Boost your online visibility and grow your business with our cutting-edge platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
             <Link to="/contact" className="inline-block">
    <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
      <span>Get Started</span>
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </Link>
            </motion.div>
          </div>

          <div className="relative lg:w-1/2 w-full flex justify-center items-center">
            <YouTubeVideo videoId={youtubeVideoId} />
          </div>
        </div>
      </div>

      <WaveBottom />
    </section>
  );
};

// Main HomePage Component
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Best Digital Marketing Agency in Jaipur | SEOcial Media Solutions</title>
        <meta
          name="description"
          content="Best Digital Marketing Agency in Jaipur delivering ROI-driven results. Expert services in SEO, Social Media, PPC & Content Marketing. 100+ satisfied clients. Get free consultation today!"
        />
        {/* Rest of your meta tags */}
      </Helmet>
      <div className="relative">
        <h1 className='hidden'>Best Digital Marketing Agency in Jaipur</h1>
        <HeroSection />
        <ProductServicesPage />
        <ServicesCarousel />
        <GoogleMap />
      </div>
    </>
  );
};

export default HomePage; 