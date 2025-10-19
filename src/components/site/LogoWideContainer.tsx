"use client";

import React from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useCallback, useEffect, useState } from 'react';
import { useTexture } from '@react-three/drei';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface LogoMeshProps {
  rotationRef: React.MutableRefObject<{ x: number; y: number }>;
}

function LogoMesh({ rotationRef }: LogoMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();
  const [dimensions, setDimensions] = useState({ width: 15, height: 5.25 });
  
  // Load the SVG texture
  const texture = useTexture('/logo-wide.svg');
  // Configure texture for proper display
  useEffect(() => {
    if (texture) {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.needsUpdate = true;
    }
  }, [texture]);
  
  // Calculate responsive dimensions based on viewport
  useEffect(() => {
    const isMobile = size.width < 768;
    const aspectRatio = 2.86; // logo-wide.svg aspect ratio (approximately)
    
    console.log('Three.js size:', size, 'isMobile:', isMobile);
    
    if (isMobile) {
      // Fixed small size for mobile minus additional 40px equivalent
      const width = 2; // Reduced from 4 to 2 (equivalent to -40px reduction)
      console.log('Mobile width calculated:', width);
      setDimensions({ 
        width, 
        height: width / aspectRatio 
      });
    } else {
      // Desktop size also reduced by equivalent amount
      const width = Math.min(size.width * 0.6, 18) - 5; // Subtract 2 units (equivalent to -40px)
      console.log('Desktop width calculated:', width);
      setDimensions({ 
        width, 
        height: width / aspectRatio 
      });
    }
  }, [size]);

  // Smooth rotation animation with damping
  useFrame(() => {
    if (!meshRef.current) return;
    
    const dampingFactor = 0.08;
    meshRef.current.rotation.x += (rotationRef.current.x - meshRef.current.rotation.x) * dampingFactor;
    meshRef.current.rotation.y += (rotationRef.current.y - meshRef.current.rotation.y) * dampingFactor;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[dimensions.width, dimensions.height]} />
      <meshBasicMaterial
        map={texture}
        transparent
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
}

// Mobile Scroll Indicator Component
function MobileScrollIndicator({ isVisible, onContinue }: { isVisible: boolean; onContinue: () => void }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile || !isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[60]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative"
      >
        {/* Black circle background */}
        <div className="w-16 h-16 bg-black/90 rounded-full flex items-center justify-center shadow-2xl border border-white/30 backdrop-blur-sm">
          {/* Animated arrow */}
          <motion.button
            onClick={onContinue}
            className="text-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded p-1"
            animate={{
              y: [0, 6, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut"
            }}
            aria-label="Continue scrolling"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default function LogoWideContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  // Initialize mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setShowScrollIndicator(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simplified rotation update
  const updateRotation = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalize position to [-1, 1]
    const normalizedX = Math.max(-1, Math.min(1, (clientX - centerX) / (rect.width / 2)));
    const normalizedY = Math.max(-1, Math.min(1, (clientY - centerY) / (rect.height / 2)));
    
    // Elegant rotation scaling
    const rotationScale = 0.3;
    
    rotationRef.current = {
      x: -normalizedY * rotationScale,
      y: normalizedX * rotationScale
    };
  }, []);

  // Smooth rotation reset
  const resetRotation = useCallback(() => {
    const animate = () => {
      const damping = 0.05;
      rotationRef.current.x *= (1 - damping);
      rotationRef.current.y *= (1 - damping);
      
      if (Math.abs(rotationRef.current.x) > 0.01 || Math.abs(rotationRef.current.y) > 0.01) {
        requestAnimationFrame(animate);
      } else {
        rotationRef.current = { x: 0, y: 0 };
      }
    };
    animate();
  }, []);

  // Mouse interactions for desktop
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    updateRotation(e.clientX, e.clientY);
  }, [updateRotation, isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      resetRotation();
    }
  }, [resetRotation, isMobile]);

  // Touch interactions for mobile
  useEffect(() => {
    if (!isMobile || !containerRef.current) return;
    
    const container = containerRef.current;

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        e.preventDefault();
        const touch = e.touches[0];
        updateRotation(touch.clientX, touch.clientY);
      }
    };

    const handleTouchEnd = () => {
      resetRotation();
    };

    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile, updateRotation, resetRotation]);

  // Handle continue scrolling
  const handleContinueScrolling = useCallback(() => {
    setShowScrollIndicator(false);
    
    setTimeout(() => {
      const nextSection = document.querySelector('#hero');
      if (nextSection) {
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }, []);

  return (
    <>
      <section 
        id="logo-container"
        className="w-full h-screen bg-[#0044a3] relative overflow-hidden"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Canvas
          camera={{ 
            position: [0, 0, 8], 
            fov: 75
          }}
          gl={{ 
            antialias: !isMobile,
            alpha: true,
            powerPreference: 'high-performance'
          }}
          dpr={isMobile ? 1 : Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2)}
        >
          <ambientLight intensity={0.6} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={0.4}
          />
          
          <LogoMesh rotationRef={rotationRef} />
        </Canvas>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
      </section>
      
      {/* Simplified Mobile Scroll Indicator */}
      <MobileScrollIndicator 
        isVisible={showScrollIndicator} 
        onContinue={handleContinueScrolling} 
      />
    </>
  );
}
