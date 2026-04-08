import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
  onExploreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onExploreClick }) => {
  return (
    <div
      id="home"
      className="relative bg-art-green min-h-screen lg:min-h-[85vh] flex items-center overflow-hidden pt-24 sm:pt-28 pb-6 sm:pb-8 lg:pt-0 lg:pb-0"
    >
      {/* Dynamic Background Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-white/20 rounded-full blur-[100px] animate-blob mix-blend-overlay pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-art-gold/30 rounded-full blur-[90px] animate-blob animation-delay-2000 pointer-events-none"></div>

      {/* Subtle Grid Pattern for Premium Feel */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Grain Texture */}

      <div className="max-w-[98rem] mx-auto px-4 sm:px-2 lg:px-2 relative z-10 w-full lg:-mt-8">
        {/* ✅ Key: ensure both columns align off the same vertical center on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-24 items-center lg:min-h-[800px]">
          {/* Typography Section (Left) */}
          <div className="lg:col-span-7 relative z-20">
            {/* Premium Pill Badge */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-10">
              <div className="inline-flex items-center gap-3 bg-art-text/5 backdrop-blur-md px-5 py-2 rounded-full border border-art-text/10 shadow-sm animate-fade-in-up cursor-default hover:scale-105 transition-transform">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span className="font-sans font-bold uppercase tracking-[0.2em] text-[10px] text-art-text">
                  Est. 2018 • New Delhi
                </span>
              </div>

              {/* PDF Matching Badge */}
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-art-text shadow-quirky-sm transform rotate-2">
                <span className="font-quirky font-bold text-xs uppercase tracking-widest text-art-text">
                  For Kids & Adults
                </span>
              </div>
            </div>

            <div className="mb-6 sm:mb-8 lg:hidden">
              <div className="relative mx-auto w-full max-w-[16rem] sm:max-w-[20rem]">
                <div className="overflow-hidden rounded-[2rem] border-[3px] border-art-text bg-white p-2 shadow-2xl">
                  <div className="overflow-hidden rounded-[1.5rem] aspect-[4/5]">
                    <img
                      src="/Corporate-adults/corporate7.webp"
                      alt="Art Workshop"
                      width={800}
                      height={1000}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-3 rounded-full border border-art-text bg-white px-3 py-1 text-xs font-bold font-quirky text-art-text shadow-sm rotate-6">
                  Art In Action
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="relative z-10 mb-8 lg:mb-10 select-none">
              <span className="block text-3xl sm:text-5xl md:text-8xl font-serif font-medium text-art-text leading-[0.95] tracking-tight mb-2 lg:mb-6">
                Don't just{' '}
                <span className="italic text-white relative inline-block transform hover:skew-x-12 transition-transform duration-500">
                  watch.
                  {/* Hand-drawn underline */}
                  <svg
                    className="absolute w-[110%] h-4 -bottom-1 -left-2 text-art-text opacity-80"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 12 100 5"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                  </svg>
                </span>
              </span>

              <div className="flex items-center gap-4 flex-wrap mt-2">
                <span className="block text-base md:text-2xl font-sans font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-art-text/60 mb-2 lg:mb-4 ml-2">
                  It's time to
                </span>

                {/* "GET MESSY" with Paint Splatter Background */}
                <div className="relative inline-block group cursor-pointer">
                  {/* Paint Splatter SVG */}
                  <svg
                    className="absolute w-[80%] h-[150%] -top-[25%] left-[10%] text-white opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 z-0 rotate-2"
                    viewBox="0 0 200 200"
                    fill="currentColor"
                  >
                    <path
                      d="M45.7,118.3c-4.9-10.3-6.6-22.3-2.9-33.7c4.6-14.3,16.8-25.3,31.7-28.7c13.9-3.2,28.3,1.6,40.1,9.4 c8.9,5.9,16.4,14,21.5,23.6c5.5,10.4,7.4,22.8,4.2,34.5c-3.6,13.2-14.8,23.5-27.9,28c-12.8,4.4-27.2,2.2-39.2-3.8 C61.9,141.6,51.1,129.8,45.7,118.3z"
                      transform="scale(1.8) translate(-50, -50)"
                    />
                  </svg>

                  <span className="relative z-10 text-4xl sm:text-6xl md:text-9xl font-quirky font-black text-art-text group-hover:text-white transition-colors duration-300 drop-shadow-sm leading-[0.8]">
                    GET MESSY
                  </span>

                  {/* Little star sticker */}
                  <div className="absolute -top-6 right-[-20px] text-white animate-spin-slow">
                    <Star size={48} fill="currentColor" />
                  </div>
                </div>
              </div>
            </h1>

            <p className="text-base sm:text-lg md:text-2xl font-sans font-medium max-w-xl leading-relaxed text-art-text/80 mb-6 sm:mb-8 lg:mb-12">
              We curate premium, immersive{' '}
              <span className="font-bold text-art-text border-b-2 border-white">
                art experiences
              </span>
              . From fluid art chaos to elegant resin workshops, we make creativity
              accessible and unforgettable.
            </p>

            <div className="flex flex-nowrap gap-3 sm:gap-6 items-center">
              <button
                onClick={onCtaClick}
                className="cursor-pointer group relative min-w-0 flex-1 bg-art-text text-white px-4 sm:px-10 py-3.5 sm:py-5 rounded-full font-bold font-quirky text-sm sm:text-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 sm:gap-4 overflow-hidden border-2 border-art-text"
              >
                <span className="relative z-10">Start Creating</span>
                <div className="bg-white/20 rounded-full p-1.5 relative z-10 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowRight size={18} />
                </div>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
                <span className="absolute inset-0 z-10 hidden sm:flex items-center justify-center text-art-text font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none gap-4 pl-8">
                  Start Creating <ArrowRight size={20} />
                </span>
              </button>

              <button
                onClick={onExploreClick}
                className="cursor-pointer group min-w-0 flex-1 flex items-center justify-center gap-2 px-4 sm:px-8 py-3.5 sm:py-5 rounded-full font-bold font-serif italic text-sm sm:text-xl text-art-text hover:bg-white/30 transition-all border-2 border-art-text/20 hover:border-art-text relative bg-white/10 backdrop-blur-sm"
              >
                <span>View Gallery</span>
              </button>
            </div>
          </div>

          {/* ✅ Visual Section (Right) */}
          {/* FIX 1: hidden lg:flex (not lg:block) so items-center actually works */}
          {/* FIX 2: keep original height 800px */}
          <div className="lg:col-span-5 relative h-[800px] hidden lg:flex items-center justify-center">
            {/* 1. Main Arch Image Container */}
            <div className="relative w-[80%] h-[82%] z-10 group">
              <div className="w-full h-full bg-white p-2 rounded-t-full rounded-b-[12rem] border-[3px] border-art-text shadow-2xl overflow-hidden relative transform transition-transform duration-700 group-hover:-translate-y-2">
                <div className="w-full h-full rounded-t-full rounded-b-[11.5rem] overflow-hidden relative">
                  <img
                    src="/Corporate-adults/corporate7.webp"
                    alt="Art Workshop"
                    width={800}
                    height={1200}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

                </div>
              </div>

              <div className="absolute top-4 -right-4 w-full h-full rounded-t-full rounded-b-[12rem] border-[3px] border-white -z-10 opacity-60 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
            </div>

            {/* 2. Floating Circular Element (Left) */}
            <div className="absolute bottom-[20%] -left-0 w-44 h-44 z-20 animate-float">
              <div className="relative w-full h-full">
                <div className="absolute -inset-2 rounded-full bg-art-gold/35 blur-xl animate-pulse"></div>
                <div className="absolute inset-0 bg-white rounded-full border-2 border-art-text shadow-quirky overflow-hidden flex items-center justify-center p-2 group cursor-pointer">
                  <img
                    src="/Gallery/gallery6.webp"
                    alt="Mixing Paint"
                    width={400}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-full opacity-100 group-hover:scale-110 transition-transform duration-700"
                  />
                <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="absolute -top-2 -right-2 bg-art-gold text-art-text text-xs font-bold font-quirky px-3 py-1 rounded-full border border-art-text rotate-12 shadow-sm">
                  So Satisfying!
                </div>
              </div>
            </div>

            {/* 3. Rotating Text Ring (Top Right) */}
            <div className="absolute top-[10%] right-14 z-30 pointer-events-none">
              <div className="relative w-36 h-36 animate-spin-slow opacity-80">
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <defs>
                    <path
                      id="circle"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text
                    fontSize="11"
                    fontWeight="bold"
                    fill="#2E2E2E"
                    letterSpacing="1.5"
                    fontFamily="Fredoka"
                  >
                    <textPath href="#circle">• EST 2018 • ARTISTRY • NEW DELHI</textPath>
                  </text>
                </svg>
              </div>
            </div>

            {/* 4. Abstract Shape */}
            <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-white/10 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
