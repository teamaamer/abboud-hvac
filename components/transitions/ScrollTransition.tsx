'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Wind, Zap, Wrench, ThermometerSun, Fan, Gauge } from 'lucide-react';

export default function ScrollTransition() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Background color transitions
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    ['#0a1f44', '#0d2854', '#1a3a6b', '#0d2854', '#0a1f44']
  );

  // Stats counter animations - reach max values by 0.5, hold until 0.7
  const customersCount = useTransform(scrollYProgress, [0.2, 0.5], [0, 500], {
    clamp: true,
  });
  const yearsCount = useTransform(scrollYProgress, [0.25, 0.5], [0, 15], {
    clamp: true,
  });
  const ratingCount = useTransform(scrollYProgress, [0.3, 0.5], [0, 5], {
    clamp: true,
  });
  
  // Round values for display
  const customersRounded = useTransform(customersCount, Math.round);
  const yearsRounded = useTransform(yearsCount, Math.round);
  const ratingRounded = useTransform(ratingCount, Math.round);

  // Opacity animations - fade in, hold at peak from 0.5-0.8 (sticky much longer), then fade out 0.8-0.95
  const statsOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.5, 0.8, 0.95], [0, 1, 1, 1, 0]);
  const iconsOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.75, 0.95], [0, 0.4, 0.4, 0]);
  const windOpacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0, 0.3, 0.3, 0]);

  // Transform animations - stats stay in place from 0.4-0.8 (much longer sticky period), then fade out
  const statsY = useTransform(scrollYProgress, [0.2, 0.4, 0.8], [100, 0, 0]);
  const statsScale = useTransform(scrollYProgress, [0.2, 0.4, 0.5, 0.8, 0.95], [0.8, 1, 1, 1, 0.9]);

  // Heading animations - appear slightly before stats
  const headingOpacity = useTransform(scrollYProgress, [0.15, 0.3, 0.5, 0.8, 0.95], [0, 1, 1, 1, 0]);
  const headingY = useTransform(scrollYProgress, [0.15, 0.35, 0.8], [50, 0, 0]);

  // Icon rotation and movement
  const iconRotate = useTransform(scrollYProgress, [0.1, 0.9], [0, 360]);
  const iconY = useTransform(scrollYProgress, [0.1, 0.5], [100, -50]);

  // Scroll indicator fade
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const floatingIcons = [
    { Icon: Wind, position: 'left-[10%] top-[20%]', delay: 0 },
    { Icon: Zap, position: 'right-[15%] top-[30%]', delay: 0.1 },
    { Icon: Wrench, position: 'left-[20%] bottom-[25%]', delay: 0.2 },
    { Icon: ThermometerSun, position: 'right-[25%] bottom-[35%]', delay: 0.3 },
    { Icon: Fan, position: 'left-[15%] top-[50%]', delay: 0.4 },
    { Icon: Gauge, position: 'right-[20%] top-[60%]', delay: 0.5 },
  ];

  return (
    <div
      ref={containerRef}
      style={{
        height: '200vh',
        position: 'relative',
        width: '100%',
      }}
    >
      <motion.div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: bgColor,
          overflow: 'hidden',
        }}
      >
        {/* Airflow/Wind Sweep Animation */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: windOpacity }}
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="windGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="0.8" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>

            {[...Array(5)].map((_, i) => (
              <motion.path
                key={i}
                d={`M -200 ${100 + i * 80} Q 400 ${80 + i * 80} 800 ${100 + i * 80} T 1800 ${100 + i * 80}`}
                stroke="url(#windGradient)"
                strokeWidth="3"
                fill="none"
                className="animate-wind-sweep"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Floating Service Icons */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: iconsOpacity }}
        >
          {floatingIcons.map(({ Icon, position, delay }, index) => (
            <motion.div
              key={index}
              className={`absolute ${position}`}
              style={{
                rotate: iconRotate,
                y: iconY,
              }}
            >
              <Icon className="h-12 w-12 text-white" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
          style={{
            opacity: statsOpacity,
            y: statsY,
            scale: statsScale,
          }}
        >
          {/* Animated Heading */}
          <motion.div
            className="text-center mb-6 sm:mb-8 lg:mb-12"
            style={{
              opacity: headingOpacity,
              y: headingY,
            }}
          >
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Numbers Speak
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-0.5 sm:h-1 w-8 sm:w-12 bg-white rounded-full"></div>
              <p className="text-white text-sm sm:text-base lg:text-lg font-semibold">Proven Excellence</p>
              <div className="h-0.5 sm:h-1 w-8 sm:w-12 bg-white rounded-full"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center">
            <motion.div className="transform">
              <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
                <div
                  className="text-4xl sm:text-5xl font-bold text-white mb-1 sm:mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  <motion.span>{customersRounded}</motion.span>+
                </div>
                <div className="text-white text-base sm:text-lg font-semibold">Happy Customers</div>
                <div className="text-white/80 text-xs sm:text-sm mt-0.5 sm:mt-1">Trusted by families & businesses</div>
              </div>
            </motion.div>

            <motion.div className="transform">
              <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
                <div
                  className="text-4xl sm:text-5xl font-bold text-white mb-1 sm:mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  <motion.span>{yearsRounded}</motion.span>+
                </div>
                <div className="text-white text-base sm:text-lg font-semibold">Years Experience</div>
                <div className="text-white/80 text-xs sm:text-sm mt-0.5 sm:mt-1">Industry expertise you can trust</div>
              </div>
            </motion.div>

            <motion.div className="transform">
              <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
                <div
                  className="text-4xl sm:text-5xl font-bold text-white mb-1 sm:mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  <motion.span>{ratingRounded}</motion.span>★
                </div>
                <div className="text-white text-base sm:text-lg font-semibold">Average Rating</div>
                <div className="text-white/80 text-xs sm:text-sm mt-0.5 sm:mt-1">Consistently excellent service</div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center mt-6 sm:mt-8 lg:mt-12"
            style={{ opacity: scrollIndicatorOpacity }}
          >
            <div className="animate-bounce-slow">
              <div className="flex flex-col items-center text-white">
                <span className="text-sm font-semibold mb-2">Explore Our Services</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
