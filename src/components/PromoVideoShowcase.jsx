import React, { useState, useEffect, useRef } from 'react';
import { Play, Volume2, VolumeX, ChevronDown } from 'lucide-react';

const PromoVideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  // Your specific YouTube video ID
  const youtubeVideoId = "obyYIaHxkSo";

  useEffect(() => {
    // Create a unique ID for the player container
    const playerId = `youtube-player-${Math.random().toString(36).substr(2, 9)}`;
    containerRef.current.id = playerId;

    // Function to load the YouTube API
    const loadYouTubeAPI = () => {
      return new Promise((resolve) => {
        if (window.YT) {
          resolve();
          return;
        }

        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
          resolve();
        };
      });
    };

    // Function to initialize the player
    const initializePlayer = async () => {
      await loadYouTubeAPI();

      if (playerRef.current) {
        playerRef.current.destroy();
      }

      playerRef.current = new window.YT.Player(playerId, {
        videoId: youtubeVideoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          modestbranding: 1,
          loop: 1,
          playlist: youtubeVideoId
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
    };

    // Initialize the player
    initializePlayer();

    // Cleanup function
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [youtubeVideoId]);

  const handlePlayPause = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    if (!playerRef.current) return;

    if (isMuted) {
      playerRef.current.unMute();
    } else {
      playerRef.current.mute();
    }
    setIsMuted(!isMuted);
  };

  return (
    <section className="w-full py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-blue-100 opacity-20"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-blue-50 opacity-30"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-indigo-50 opacity-25"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block">
            <span className="block text-sm font-bold text-blue-600 tracking-wider uppercase mb-2 animate-pulse">
              Best Digital Marketing Agency
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              SEOcial Media Solutions
              <span className="block text-blue-600 mt-1">Transforming Businesses in Jaipur</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Innovative digital strategies that drive results and help businesses thrive in the competitive digital landscape
          </p>
        </div>

        {/* Video container with decorative elements */}
        <div className="max-w-4xl mx-auto relative">
          {/* Frame decoration */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl opacity-70 blur"></div>
          
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl border border-white/20">
            {/* Loading state */}
            {!videoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            {/* Video */}
            <div className="relative w-full h-full">
              <div ref={containerRef} className="w-full h-full"></div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none z-10"></div>
              
              {/* Controls overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center z-20">
                <button
                  onClick={handlePlayPause}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  <Play size={24} className={isPlaying ? "opacity-70" : ""} />
                </button>
                
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleMute}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </button>
                  
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-lg">
                    SEOcial Media Solutions
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* "Bouncing" scroll indicator */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-8 h-8 text-blue-500 animate-bounce" />
          </div>
        </div>

        <div className="mt-20 text-center">
          <a 
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
          >
            Get Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromoVideoShowcase;