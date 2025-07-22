import React from 'react';

const HeroSectionVideo = () => {
  return (

    <div className="relative w-full max-w-[1147px] h-[250px]  sm:h-[350px]   md:h-[425px] lg:h-[550px] xl:h-[645px] overflow-hidden bg-white rounded-none">

      {/* White background layer */}
      <div className="absolute inset-0 bg-white z-0"></div>

      {/* YouTube iframe (non-interactive, no controls) */}
      <iframe
  className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
  src="https://www.youtube.com/embed/tj_pskNDVo0?autoplay=1&mute=1&controls=0&disablekb=1&modestbranding=1&rel=0&loop=1&playlist=tj_pskNDVo0"
  title="YouTube video background"
  frameBorder="0"
  allow="autoplay; fullscreen"
  allowFullScreen
></iframe>

    </div>
  );
};
 
export default HeroSectionVideo;
