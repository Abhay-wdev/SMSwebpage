import React, { useState } from 'react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '+919461677122';

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in your services.");
    window.open(
      `https://wa.me/${phoneNumber.replace('+', '')}?text=${message}`,
      '_blank'
    );
  };

  const ActionButton = ({ onClick, icon, label, bgColor }) => (
    <div className="group relative flex items-center">
    <div className="absolute z-[-1] left-[-5rem] md:left-[-5rem] top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm md:text-base font-medium whitespace-nowrap shadow-lg z-10">
      {label}
    </div>
  
    <button
      onClick={onClick}
      className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${bgColor}`}
    >
      <div className="w-6 h-6 md:w-8 md:h-8">
        {icon}
      </div>
    </button>
  </div>
  
  );

  return (
    <div className="fixed right-4 md:right-8 bottom-4 md:bottom-8 z-50">
      <div className="relative">
        {/* Action Buttons */}
        <div
          className={`flex flex-col gap-3 md:gap-4 items-center mb-3 md:mb-4 transition-all duration-500 transform ${
            isOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        >
          <ActionButton 
            onClick={handleWhatsAppClick}
            icon={
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full text-white fill-current"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            }
            label="Chat on"
            bgColor="bg-green-500 hover:bg-green-600"
          />
          <ActionButton
         
            onClick={handleCallClick}
            icon={
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full text-white fill-current"
              >
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
            }
            label="Call Us"
            bgColor="bg-blue-500 hover:bg-blue-600"
          />
        </div>

        {/* Character Toggle Button */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Chat Bubble */}
          <div className={`absolute bottom-full right-0 mb-3 md:mb-4 transition-all duration-500 transform ${
            isOpen ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}>
            <div className="bg-white rounded-2xl px-4 md:px-6 py-2 md:py-3 shadow-2xl border-2 border-purple-100">
              <p className="text-base md:text-lg font-medium text-gray-800 whitespace-nowrap">
                👋 How can I help you?
              </p>
              {/* Bouncing Animation */}
              <div className="absolute -bottom-1 right-8 md:right-12 transform">
                <div className="w-3 md:w-4 h-3 md:h-4 bg-white rotate-45 border-r-2 border-b-2 border-purple-100" />
              </div>
            </div>
          </div>

          {/* Character Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-16 h-16 md:w-24 md:h-24 transition-all duration-500 transform hover:scale-110 active:scale-95"
          >
            <div className={`relative w-full h-full rounded-full overflow-hidden transition-all duration-500 ${
              isOpen ? 'scale-90' : 'scale-100'
            }`}>
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 transition-all duration-500 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`} />
              
              {/* Placeholder for character - replace with your image */}
              <img
                src="/images/smsavatar.png"
                alt="Chat Character"
                className={`relative w-full h-full object-cover transition-transform duration-500 ${
                  isHovered ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>

            {/* Close button when open */}
            {isOpen && (
              <div className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 bg-red-500 rounded-full p-1.5 md:p-2 shadow-lg transition-transform duration-300 hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 md:w-5 md:h-5 text-white fill-current"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </div>
            )}

            {/* Pulsing effect */}
            <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
              !isOpen && !isHovered ? 'animate-pulse' : ''
            }`}>
              <div className="absolute inset-0 rounded-full bg-purple-400 opacity-20" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingContact;