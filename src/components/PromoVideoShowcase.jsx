import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowRight, Star } from 'lucide-react';

const VideoPlayer = ({ videoId, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const playerId = `player-${videoId}-${Math.random().toString(36).slice(2)}`;
    containerRef.current.id = playerId;

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const initializePlayer = () => {
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
            setIsLoaded(true);
            setIsPlaying(true);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            }
          }
        }
      });
    };

    if (window.YT && window.YT.Player) {
      initializePlayer();
    } else {
      window.onYouTubeIframeAPIReady = initializePlayer;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  const handlePlayPause = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
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
    <div className="w-full relative rounded-xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-[1.02]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-75 blur group-hover:opacity-100"></div>
      
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <div className="relative aspect-video">
        <div ref={containerRef} className="absolute inset-0" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
          <button
            onClick={handlePlayPause}
            className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>
          
          <div className="flex items-center gap-4">
            <button
              onClick={handleMute}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <div className="hidden sm:block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
              {title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DualVideoShowcase = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <span className="text-sm font-bold text-blue-600 tracking-wider uppercase">
              Best Digital Marketing Agency
            </span>
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            SEOcial Media Solutions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming Businesses in Jaipur with Innovative Digital Strategies
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          <VideoPlayer 
            videoId="obyYIaHxkSo"
            title="Our Success Story"
          />
          <VideoPlayer 
            videoId="M_EwFmLtG7g"
            title="Client Testimonials"
          />
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center space-y-8">
          <div className="relative inline-block group">
            <div 
              className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-70 blur transition-all duration-300 group-hover:opacity-100"
              aria-hidden="true"
            ></div>
            <a
              href="/contact"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get Your Free Consultation
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-gray-700 font-medium">4.9/5 Rating</span>
            </div>
            <div className="hidden sm:block text-gray-400">|</div>
            <div className="text-gray-700 font-medium">100+ Happy Clients</div>
            <div className="hidden sm:block text-gray-400">|</div>
            <div className="text-gray-700 font-medium">5+ Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualVideoShowcase;