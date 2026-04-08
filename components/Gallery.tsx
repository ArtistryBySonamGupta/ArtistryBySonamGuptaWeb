import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const manualOffsetRef = useRef(0);
  const [manualOffset, setManualOffset] = useState(0);
  const [offsetBounds, setOffsetBounds] = useState({ min: -720, max: 0 });

  const galleryImages = [
    '/Gallery/gallery1.webp',
    '/Gallery/gallery2.webp',
    '/Gallery/gallery3.webp',
    '/Gallery/gallery4.webp',
    '/Gallery/gallery5.webp',
    '/Gallery/gallery6.webp',
    '/Gallery/gallery7.webp',
    '/Gallery/gallery8.webp',
    '/Gallery/gallery9.webp',
    '/Gallery/gallery10.webp',
    '/Gallery/gallery11.webp',
    '/Gallery/gallery12.webp',
  ];

  const captions = [
    'Messy Hands',
    'Pure Joy',
    'Resin Magic',
    'Creative Focus',
    'Team Fun',
    'Happy Moments',
    'Color Play',
    'Workshop Vibes',
    'Little Artists',
    'Art In Action',
    'Big Smiles',
    'Masterpiece',
  ];

  const row1Images = galleryImages.filter((_, i) => i % 2 === 0).map((src, i) => ({
    src,
    caption: captions[i * 2] || 'Captured Moment',
    id: `r1-${i}`,
  }));

  const row2Images = galleryImages.filter((_, i) => i % 2 !== 0).map((src, i) => ({
    src,
    caption: captions[i * 2 + 1] || 'Captured Moment',
    id: `r2-${i}`,
  }));

  // Tripling the array to ensure we have enough content for the scroll effect without running out
  const displayRow1 = [...row1Images, ...row1Images, ...row1Images];
  const displayRow2 = [...row2Images, ...row2Images, ...row2Images];

  const applyTransforms = (scrollY: number, offset = manualOffsetRef.current) => {
    if (!row1Ref.current || !row2Ref.current) return;

    const speed1 = 0.15;
    const speed2 = 0.12;
    const x1 = -(scrollY * speed1) + offset;
    const x2 = (scrollY * speed2) - 600 + offset;

    row1Ref.current.style.transform = `translate3d(${x1}px, 0, 0)`;
    row2Ref.current.style.transform = `translate3d(${x2}px, 0, 0)`;
  };

  useEffect(() => {
    const updateBounds = () => {
      if (!sectionRef.current || !row1Ref.current) return;

      const totalWidth = row1Ref.current.scrollWidth;
      const visibleWidth = sectionRef.current.clientWidth;
      const maxTravel = Math.max(0, totalWidth - visibleWidth - 48);
      const boundedTravel = Math.min(maxTravel, totalWidth / 3);

      setOffsetBounds({
        min: -boundedTravel,
        max: 0,
      });
    };

    let animationFrameId: number;

    const handleScroll = () => {
        if (!sectionRef.current || !row1Ref.current || !row2Ref.current) return;
        
        const scrollY = window.scrollY;

        animationFrameId = requestAnimationFrame(() => {
            applyTransforms(scrollY);
        });
    };

    updateBounds();
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateBounds);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', updateBounds);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const nudgeGallery = (direction: 'left' | 'right') => {
    const delta = direction === 'left' ? 180 : -180;
    const nextOffset = Math.min(offsetBounds.max, Math.max(offsetBounds.min, manualOffsetRef.current + delta));

    manualOffsetRef.current = nextOffset;
    setManualOffset(nextOffset);
    applyTransforms(window.scrollY, nextOffset);
  };

  const isAtLeftEnd = manualOffset >= offsetBounds.max;
  const isAtRightEnd = manualOffset <= offsetBounds.min;

  return (
    <section id="gallery" ref={sectionRef} className="py-16 md:py-32 bg-white overflow-hidden relative border-t-2 border-art-text">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#2E2E2E 1px, transparent 1px), linear-gradient(90deg, #2E2E2E 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="max-w-[98rem] mx-auto px-4 md:px-8 mb-10 md:mb-16 relative z-10">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
                 <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold text-art-text mb-4">
                    Captured <span className="text-art-green font-quirky">Moments</span>
                 </h2>
                 <p className="text-base md:text-lg text-art-text/60 font-sans max-w-md">
                    We don't just teach art; we create memories. Here is a glimpse into the madness and the magic.
                 </p>
            </div>
            
            <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/artistrybysonamgupta/" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 px-6 py-3 bg-art-text text-white rounded-full font-bold hover:bg-art-green hover:text-art-text transition-all shadow-quirky-sm hover:translate-y-[2px] hover:shadow-none">
                    <Instagram size={20}/> View All on Instagram
                </a>
            </div>
         </div>
      </div>

      <button
        type="button"
        aria-label="Scroll gallery left"
        onClick={() => nudgeGallery('left')}
        disabled={isAtLeftEnd}
        className="absolute left-3 md:left-4 lg:left-6 top-1/2 md:top-[54%] -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-art-text bg-white/95 text-art-text flex items-center justify-center shadow-lg hover:bg-art-text hover:text-white transition-colors disabled:opacity-35 disabled:hover:bg-white/95 disabled:hover:text-art-text disabled:cursor-not-allowed"
      >
        <ArrowLeft size={20} />
      </button>

      <button
        type="button"
        aria-label="Scroll gallery right"
        onClick={() => nudgeGallery('right')}
        disabled={isAtRightEnd}
        className="absolute right-3 md:right-4 lg:right-6 top-1/2 md:top-[54%] -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-art-text bg-white/95 text-art-text flex items-center justify-center shadow-lg hover:bg-art-text hover:text-white transition-colors disabled:opacity-35 disabled:hover:bg-white/95 disabled:hover:text-art-text disabled:cursor-not-allowed"
      >
        <ArrowRight size={20} />
      </button>

      {/* SCROLL LINKED FILM STRIPS */}
      <div className="flex flex-col gap-8 md:gap-12 py-6 md:py-10">
         
         {/* ROW 1: Moves Left on Scroll */}
         <div className="relative w-full rotate-1">
             <div className="absolute top-0 left-0 w-full h-full bg-art-green/10 -z-10 transform skew-y-1"></div>
             {/* Using will-change-transform for performance hint */}
             <div ref={row1Ref} className="flex w-max items-center space-x-4 sm:space-x-8 px-4 will-change-transform transition-transform duration-75 ease-linear">
                {displayRow1.map((item, index) => (
                   <div 
                      key={`${item.id}-${index}`} 
                      className="relative group w-[220px] sm:w-[280px] bg-white p-3 pb-12 shadow-md border border-gray-100 rounded-sm hover:shadow-xl hover:scale-105 transition-all duration-300"
                   >
                      {/* Washi Tape */}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-art-green/40 rotate-2 blur-[0.5px] z-10"></div>
                      
                      <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100">
                          <img src={item.src} alt={item.caption} width={400} height={500} className="w-full h-full object-cover filter contrast-110 group-hover:contrast-125 transition-all duration-700" loading="lazy" />
                      </div>
                      <div className="absolute bottom-3 left-0 w-full text-center">
                          <p className="font-quirky text-art-text/60 text-sm tracking-widest uppercase">{item.caption}</p>
                      </div>
                   </div>
                ))}
             </div>
         </div>

         {/* ROW 2: Moves Right on Scroll */}
         <div className="relative w-full -rotate-1 mt-4">
             <div className="absolute top-0 left-0 w-full h-full bg-art-gold/10 -z-10 transform -skew-y-1"></div>
             <div ref={row2Ref} className="flex w-max items-center space-x-4 sm:space-x-8 px-4 will-change-transform transition-transform duration-75 ease-linear">
                {displayRow2.map((item, index) => (
                   <div 
                      key={`${item.id}-${index}`} 
                      className="relative group w-[220px] sm:w-[280px] bg-white p-3 pb-12 shadow-md border border-gray-100 rounded-sm hover:shadow-xl hover:scale-105 transition-all duration-300"
                   >
                      {/* Washi Tape */}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-art-gold/40 -rotate-3 blur-[0.5px] z-10"></div>

                      <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100">
                          <img src={item.src} alt={item.caption} width={400} height={500} className="w-full h-full object-cover filter contrast-110 group-hover:contrast-125 transition-all duration-700" loading="lazy" />
                      </div>
                      <div className="absolute bottom-3 left-0 w-full text-center">
                          <p className="font-quirky text-art-text/60 text-sm tracking-widest uppercase">{item.caption}</p>
                      </div>
                   </div>
                ))}
             </div>
         </div>

      </div>
      
      <div className="px-4 mt-14 md:hidden relative z-20">
         <a
            href="https://www.instagram.com/artistrybysonamgupta/"
            target="_blank"
            rel="noreferrer"
            aria-label="View more on Instagram"
            className="pointer-events-auto mx-auto flex w-full max-w-sm items-center justify-center gap-3 rounded-2xl border-2 border-art-text bg-white px-5 py-4 text-art-text shadow-quirky-sm"
         >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E1306C] text-white border border-art-text/10">
              <Instagram size={22} />
            </span>
            <span className="text-left">
              <span className="block font-quirky text-base font-bold uppercase tracking-wide">View More on Instagram</span>
              <span className="block text-sm font-sans text-art-text/70">@artistrybysonamgupta</span>
            </span>
            <ArrowRight size={18} className="shrink-0" />
         </a>
      </div>
    </section>
  );
};

export default Gallery;
