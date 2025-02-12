'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './NeonCursor.css';

const NeonCursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
  });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const trailControls = useAnimation();
  const glowControls = useAnimation();

  const handleMouseMove = useCallback((e) => {
    setPosition((prev) => ({
      ...prev,
      x: e.clientX,
      y: e.clientY,
    }));

    // Update trail and glow positions
    trailControls.set({ x: e.clientX, y: e.clientY });
    glowControls.set({ x: e.clientX, y: e.clientY });
  }, [trailControls, glowControls]);

  const handleMouseDown = useCallback(() => {
    setIsClicking(true);
    void trailControls.start({
      scale: 0.8,
      opacity: 0.7,
      transition: { duration: 0.2 }
    });
  }, [trailControls]);

  const handleMouseUp = useCallback(() => {
    setIsClicking(false);
    void trailControls.start({
      scale: 1,
      opacity: 0.5,
      transition: { duration: 0.2 }
    });
  }, [trailControls]);

  const handleMouseOver = useCallback((e) => {
    const target = e.target;
    if (target.matches('a, button, input, [data-hover="true"]')) {
      setIsHovering(true);
      void trailControls.start({
        scale: 1.5,
        borderColor: 'rgb(255, 150, 50)',
        opacity: 0.8,
        transition: { duration: 0.2 }
      });
      void glowControls.start({
        scale: 2,
        opacity: 0.6,
        transition: { duration: 0.2 }
      });
    }
  }, [trailControls, glowControls]);

  const handleMouseOut = useCallback(() => {
    setIsHovering(false);
    void trailControls.start({
      scale: 1,
      borderColor: 'rgb(236, 101, 23)',
      opacity: 0.5,
      transition: { duration: 0.2 }
    });
    void glowControls.start({
      scale: 1,
      opacity: 0.4,
      transition: { duration: 0.2 }
    });
  }, [trailControls, glowControls]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseOut, handleMouseDown, handleMouseUp]);

  return (
    <div className="neon-cursor-container">
      <motion.div
        className="cursor-main"
        animate={{
          x: position.x,
          y: position.y,
          scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 400,
          mass: 0.5,
        }}
      />
      <motion.div
        className="cursor-trail"
        animate={trailControls}
        initial={false}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.8,
        }}
      />
      <motion.div
        className="cursor-glow"
        animate={glowControls}
        initial={false}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 150,
          mass: 1,
        }}
      />
    </div>
  );
};

export default NeonCursor;