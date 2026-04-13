import React from 'react';
import { Category } from '../types';
import { Palette, Gift, Briefcase, PartyPopper, Heart, ArrowUpRight, Star, Grid } from 'lucide-react';

interface ActivityCategoriesProps {
    onCategoryClick: (cat: Category) => void;
}

const ActivityCategories: React.FC<ActivityCategoriesProps> = ({ onCategoryClick }) => {
  return (
    <section id="activities" className="py-16 md:py-24 bg-art-beige relative overflow-hidden z-10">
       
       {/* Background Noise Text - Marquee Effect */}
       <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.04] select-none">
          <div className="animate-marquee whitespace-nowrap text-[12vw] font-black font-quirky text-art-text leading-none">
             CREATE • PLAY • DISCOVER • MESSY • ART • CREATE • PLAY • DISCOVER • MESSY • ART •
          </div>
       </div>

       <div className="max-w-[98rem] mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
               <div className="max-w-3xl">
                   <div className="flex items-center gap-3 mb-4">
                        <span className="w-12 h-[2px] bg-art-text"></span>
                        <span className="font-quirky font-bold text-sm uppercase tracking-widest">Our Offerings</span>
                   </div>
                   <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold text-art-text leading-[0.9]">
                       Pick Your <span className="font-serif italic text-art-green-dark bg-white px-2 rounded-lg border-2 border-art-text inline-block transform -rotate-2">Vibe.</span>
                   </h2>
               </div>
               <div className="hidden md:block text-left md:text-right">
                   <p className="text-base lg:text-xl font-sans max-w-xs text-art-text/70 mb-4">
                       From messy play to elegant resin art, we've got something for every creative soul.
                   </p>
               </div>
           </div>
           
           {/* BENTO GRID LAYOUT - 5 Specific Categories */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:auto-rows-[350px]">
               
               {/* 1. Kids Art Activities (Span 6) */}
               <div 
                  onClick={() => onCategoryClick(Category.KIDS)}
                  className="lg:col-span-6 cursor-pointer group relative bg-[#FFB7B2] rounded-[2.5rem] border-2 border-art-text overflow-hidden hover:shadow-quirky hover:-translate-y-2 transition-all duration-300 p-6 md:p-8 flex flex-col justify-between"
               >
                   <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                       <Palette size={200} />
                   </div>
                   
                   <div className="relative z-10">
                       <h3 className="text-4xl md:text-6xl font-quirky font-black text-art-text leading-none uppercase">Kids Art<br/>Activities</h3>
                   </div>
                   
                   <div className="relative z-10 flex justify-end items-end">
                       <img src="/Kids-art/decoden.webp" width={600} height={400} className="w-44 h-32 sm:w-64 sm:h-48 object-cover rounded-2xl border-2 border-art-text transform rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-lg" alt="Kids Art" />
                   </div>
               </div>

               {/* 2. Resin Art (Span 6) */}
               <div 
                  onClick={() => onCategoryClick(Category.RESIN)}
                  className="lg:col-span-6 cursor-pointer group relative bg-[#E2F0CB] rounded-[2.5rem] border-2 border-art-text overflow-hidden hover:shadow-quirky hover:-translate-y-2 transition-all duration-300 p-6 md:p-8"
               >
                   <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/30 rounded-full blur-3xl"></div>
                   
                   <div className="flex flex-col sm:flex-row justify-between h-full items-start sm:items-center gap-5">
                       <div className="relative z-10 flex flex-col justify-center sm:max-w-[50%]">
                           <h3 className="text-4xl md:text-6xl font-serif font-bold italic text-art-text mb-2">Resin Art</h3>
                           <p className="font-sans font-bold text-lg opacity-70">Preserve memories in gloss.</p>
                       </div>
                       <div className="w-full sm:w-1/2 h-44 sm:h-full relative">
                           <img src="/Resin-art/resin19.webp" width={500} height={600} className="absolute inset-0 w-full h-full object-cover rounded-2xl border-2 border-art-text transform -rotate-2 group-hover:rotate-0 transition-transform shadow-lg" alt="Resin" />
                       </div>
                   </div>
               </div>

               {/* 3. Gift Hampers (Span 4) */}
               <div 
                  onClick={() => onCategoryClick(Category.HAMPERS)}
                  className="lg:col-span-4 cursor-pointer group relative bg-[#FFDAC1] rounded-[2.5rem] border-2 border-art-text overflow-hidden hover:shadow-quirky hover:-translate-y-2 transition-all duration-300 p-6 md:p-8 flex flex-col"
               >
                   <div className="flex justify-between items-start mb-4">
                       <div className="w-14 h-14 bg-white rounded-full border-2 border-art-text flex items-center justify-center shadow-sm">
                           <Gift size={24}/>
                       </div>
                       <ArrowUpRight size={28} className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0"/>
                   </div>
                   <h3 className="text-3xl md:text-4xl font-quirky font-bold text-art-text mt-auto leading-tight">Gift<br/>Hampers</h3>
                   <img src="/hampers/hamper10.webp" width={400} height={400} className="absolute right-4 bottom-4 md:right-5 md:bottom-5 w-40 h-40 md:w-52 md:h-52 object-cover rounded-2xl border-2 border-art-text group-hover:scale-105 transition-transform shadow-md" alt="Hampers"/>
               </div>

               {/* 4. Corporate / Adults (Span 4) */}
               <div 
                  onClick={() => onCategoryClick(Category.CORPORATE_ADULT)}
                  className="lg:col-span-4 cursor-pointer group relative bg-[#C7CEEA] rounded-[2.5rem] border-2 border-art-text overflow-hidden hover:shadow-quirky hover:-translate-y-2 transition-all duration-300 p-6 md:p-8 text-center flex flex-col items-center justify-center"
               >
                   <div className="bg-white p-4 rounded-2xl border-2 border-art-text mb-6 shadow-sm group-hover:rotate-3 transition-transform">
                        <Briefcase size={32} className="text-art-text"/>
                   </div>
                   <h3 className="text-3xl font-serif font-bold text-art-text leading-tight mb-3">Corporate / Adults</h3>
                   <div className="bg-white/50 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-art-text/20 group-hover:bg-white group-hover:border-art-text transition-colors">Art Activities</div>
                   <div className="relative w-full h-36 mt-6 bg-white rounded-xl border-2 border-art-text overflow-hidden group-hover:rotate-1 transition-transform shadow-md">
                       <img src="/Corporate-adults/corporate22.webp" width={1200} height={675} className="w-full h-full object-cover" alt="Corporate and Adults" />
                   </div>
               </div>

               {/* 5. Return Gift Options (Span 4) */}
               <div 
                  onClick={() => onCategoryClick(Category.RETURN_GIFTS)}
                  className="lg:col-span-4 cursor-pointer group relative bg-[#E0BBE4] rounded-[2.5rem] border-2 border-art-text overflow-hidden hover:shadow-quirky hover:-translate-y-2 transition-all duration-300 p-6 md:p-8 flex flex-col justify-between"
               >
                   <div className="relative z-10 flex items-start justify-between">
                       <div className="bg-art-text text-white p-3 rounded-full border-2 border-white shadow-sm ml-auto">
                           <PartyPopper size={20}/>
                       </div>
                   </div>
                   <div className="relative z-10 flex items-end justify-between gap-3">
                       <div>
                           <h3 className="text-2xl md:text-3xl font-quirky font-bold text-art-text mb-2">Return Gift<br/>Options</h3>
                       </div>
                       <div className="relative w-28 h-40 sm:w-36 sm:h-52 bg-white rounded-xl border-2 border-art-text overflow-hidden group-hover:rotate-1 transition-transform shadow-md flex-shrink-0">
                           <img src="/return-gift/return24.webp" width={720} height={1080} className="w-full h-full object-cover" alt="Return Gifts"/>
                       </div>
                   </div>
               </div>

           </div>

           {/* VIEW FULL MENU BUTTON */}
           <div className="mt-16 text-center">
              <a
                href="https://drive.google.com/file/d/1u2MsM6fplcObG9sMjOc7TD0CXQ7XtdnX/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer group inline-flex items-center gap-3 sm:gap-4 bg-white px-6 sm:px-12 py-4 sm:py-6 rounded-full border-2 border-art-text shadow-quirky hover:shadow-quirky-hover hover:-translate-y-1 transition-all"
              >
                  <span className="w-12 h-12 bg-art-green rounded-full flex items-center justify-center border border-art-text group-hover:rotate-12 transition-transform">
                      <Grid size={24} className="text-art-text"/>
                  </span>
                  <div className="text-left">
                      <div className="font-quirky font-bold text-base sm:text-xl text-art-text uppercase leading-none mb-1">View Full Catalog</div>
                      <div className="font-sans text-sm text-art-text/80 font-bold">Open the complete catalog</div>
                  </div>
                  <ArrowUpRight size={24} className="ml-4 text-art-text group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
              </a>
           </div>
       </div>
    </section>
  );
};

export default ActivityCategories;
