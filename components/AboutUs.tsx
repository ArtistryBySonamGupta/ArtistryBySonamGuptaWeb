import React from 'react';
import { Heart, Coffee, Palette, Gem, Star, Users, Briefcase, PartyPopper, CheckCircle } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-24 md:pt-28 pb-0 relative overflow-hidden font-sans selection:bg-art-green selection:text-art-text">
        {/* Subtle grid texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#2E2E2E 1px, transparent 1px), linear-gradient(90deg, #2E2E2E 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        {/* 1. HERO SECTION - Editorial Layout */}
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-6 relative z-10 mb-20 md:mb-32 pt-6 md:pt-10">
            <div className="flex flex-col items-center justify-center relative min-h-[60vh]">
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-10 hidden lg:block animate-spin-slow opacity-30">
                    <Star size={60} className="text-art-gold fill-art-gold" />
                </div>
                <div className="absolute bottom-10 left-10 hidden lg:block animate-float opacity-30">
                    <div className="w-16 h-16 bg-art-green rounded-full blur-xl"></div>
                </div>

                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-art-text/10 bg-white shadow-quirky-sm mb-12 transform -rotate-2 hover:rotate-0 transition-transform cursor-default">
                    <span className="w-2 h-2 rounded-full bg-art-green animate-pulse"></span>
                    <span className="font-quirky text-xs font-bold tracking-[0.2em] uppercase text-art-text/60">
                        Est. 2018 • New Delhi
                    </span>
                </div>
                
                <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif font-bold text-art-text leading-[0.9] md:leading-[0.85] text-center mb-8 md:mb-10 relative z-10">
                    AWE <br/>
                    <span className="relative inline-block mt-2">
                        <span className="italic text-art-text relative z-10 px-4">by Sonam</span>
                        <div className="absolute inset-0 bg-art-green transform -skew-x-12 translate-y-2 -z-0 opacity-50 blur-[2px]"></div>
                    </span>
                    <span className="text-art-gold">.</span>
                </h1>
                
                <p className="text-base sm:text-xl md:text-2xl font-light text-art-text/70 max-w-3xl mx-auto leading-relaxed text-center font-sans">
                    An art-driven events company born from a love for creativity, community, and meaningful experiences.
                </p>
                
            </div>
        </div>

        {/* 2. THE STORY - Editorial Split */}
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-6 relative z-10 mb-20 md:mb-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
                
                {/* Image Side */}
                <div className="relative group perspective-1000 order-2 lg:order-1 lg:mt-12">
                    {/* Abstract Shapes behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-art-text/5 rounded-full z-0"></div>
                    
                    <div className="relative z-10 transform transition-transform duration-700 hover:scale-[1.01]">
                        <div className="bg-white p-3 pb-16 shadow-2xl rotate-[-2deg] border border-gray-200">
                             <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                                 <img src="/sonamgupta.jpeg" alt="Sonam Gupta" width={800} height={1000} className="w-full h-full object-cover" />
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                             </div>
                             <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                 <div>
                                    <p className="font-quirky font-bold text-2xl text-art-text leading-none mb-1">Sonam Gupta</p>
                                    <p className="font-serif italic text-sm text-art-text/50">Founder</p>
                                 </div>
                             </div>
                        </div>
                        
                        {/* Decorative 'Tape' */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-8 bg-white/40 backdrop-blur-sm shadow-sm rotate-2 z-20"></div>
                    </div>
                </div>

                {/* Text Side */}
                <div className="order-1 lg:order-2 lg:pl-10">
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 md:mb-10 flex flex-col items-start gap-2">
                        <span className="font-quirky text-sm font-bold tracking-widest uppercase text-art-gold border border-art-text px-3 py-1 rounded-full bg-white">The Journey</span>
                        <span>From Passion to <br/>Profession.</span>
                    </h2>
                    
                    <div className="space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl text-art-text/80 font-sans font-light leading-relaxed">
                        <p>
                            <span className="text-6xl float-left font-serif font-bold text-art-green mr-4 mt-[-8px]">F</span>
                            ounded in 2018 by artist Sonam Gupta, our journey began with a deep passion for art. Sonam started her career exploring abstract art and oil paintings, creating artworks for offices, homes, and individual clients. Her curiosity and constant urge to innovate led her to experiment with resin art, where she evolved as a self-taught artist and developed a distinctive style.
                        </p>
                        <p>
                            Her resin artworks gained widespread attention and went viral multiple times, thanks to the unique concepts and stories she brought to life through her work.
                        </p>
                        <p>
                             In 2023, this artistic journey expanded into something bigger — <strong>AWE by Sonam</strong> (Art Workshops & Events). The idea was simple yet powerful: to make art accessible, engaging, and enjoyable for all age groups. From hands-on workshops to interactive art activities, AWE was created to bring people together through creativity.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* 3. CURRENT ACTIVITIES (Previously Lifecycle) */}
        <div className="py-16 md:py-32 bg-art-text text-white relative overflow-hidden mb-20 md:mb-32 rounded-[2rem] md:rounded-[3rem] mx-4 lg:mx-8">
            
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-art-green/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-art-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-10 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif font-bold mb-6">Art for Everyone</h2>
                    <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
                        Today, AWE by Sonam hosts art events across Delhi NCR, curating experiences for birthdays, small gatherings, corporate meet-ups, kitty parties, and private celebrations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Activity 1 */}
                    <div className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] relative group hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-8">
                                <PartyPopper className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4">Celebrations</h3>
                            <p className="text-white/60 text-lg leading-relaxed">
                                Curating experiences for birthdays, small gatherings, and private parties where creativity takes center stage.
                            </p>
                        </div>
                    </div>

                    {/* Activity 2 */}
                    <div className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] relative group hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-8">
                                <Briefcase className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4">Corporate & Social</h3>
                            <p className="text-white/60 text-lg leading-relaxed">
                                From corporate meet-ups to kitty parties, we bring people together with engaging art activities designed for interaction.
                            </p>
                        </div>
                    </div>

                    {/* Activity 3 */}
                    <div className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] relative group hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-8 bg-white">
                                <Palette className="w-6 h-6 text-art-text fill-art-text" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4">Fun & Educational</h3>
                            <p className="text-white/60 text-lg leading-relaxed">
                                Our forte lies in designing fun, educational, and engaging art activities that both kids and adults genuinely enjoy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 4. ACHIEVEMENTS & VALUES (Previously Apron) */}
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-6 mb-20 md:mb-32">
             <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-art-text mb-4">The AWE Promise</h2>
                    <p className="text-base sm:text-xl text-art-text/60 font-sans max-w-xl font-light">
                        Each event is designed with care, creativity, and the belief that art has the power to connect, inspire, and create lasting memories.
                    </p>
                </div>
                <div className="h-[1px] flex-1 bg-art-text/10 mx-8 hidden md:block self-center"></div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                     { icon: Users, title: "50+ Events", desc: "Successfully hosted in a short span.", bg: "bg-[#FFDAC1]" },
                     { icon: CheckCircle, title: "Budget-Friendly", desc: "Packages designed for everyone.", bg: "bg-[#C7CEEA]" },
                     { icon: Gem, title: "Quality Focus", desc: "Premium materials & guidance.", bg: "bg-[#E2F0CB]" },
                     { icon: Star, title: "Crafted Concepts", desc: "Thoughtfully designed themes.", bg: "bg-[#FFB7B2]" },
                 ].map((item, i) => (
                     <div key={i} className="group bg-white p-6 md:p-8 rounded-[2rem] border border-art-text/10 hover:border-art-text transition-all duration-300 hover:shadow-quirky hover:-translate-y-1 relative overflow-hidden">
                         <div className={`absolute top-0 right-0 w-24 h-24 ${item.bg} rounded-bl-[4rem] -mr-8 -mt-8 transition-transform group-hover:scale-150`}></div>
                         
                         <div className="relative z-10">
                            <item.icon size={32} className="text-art-text mb-6 stroke-[1.5]" />
                            <h3 className="font-quirky font-bold text-xl mb-2 text-art-text">{item.title}</h3>
                            <p className="font-sans text-art-text/60 text-base">{item.desc}</p>
                         </div>
                     </div>
                 ))}
             </div>
        </div>

        {/* 5. PHILOSOPHY (Previously Myth Busters) */}
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-6 mb-20 md:mb-32">
             <div className="bg-[#E6FFFA] rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-20 relative overflow-hidden border-2 border-art-text">
                 
                 {/* Decorative background lines */}
                 <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{ backgroundImage: 'radial-gradient(#2E2E2E 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

                 <div className="text-center mb-10 md:mb-16 relative z-10">
                     <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-art-text">Our Core <span className="italic text-art-green-dark bg-white px-2 rounded">Beliefs</span></h2>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                     <div className="bg-white p-6 md:p-10 rounded-[2rem] shadow-sm border border-art-text/10 hover:border-art-text transition-all">
                         <div className="font-quirky font-bold text-xs uppercase tracking-widest text-art-text/40 mb-4">Value #01</div>
                         <h3 className="text-2xl font-serif font-bold mb-4 text-art-text">Care & Creativity</h3>
                         <p className="text-base md:text-lg font-sans text-art-text/80 leading-relaxed">
                             Each event is designed with care, creativity, and a strong focus on quality ensuring there’s always something creative for guests to explore.
                         </p>
                     </div>

                     <div className="bg-white p-6 md:p-10 rounded-[2rem] shadow-sm border border-art-text/10 hover:border-art-text transition-all">
                         <div className="font-quirky font-bold text-xs uppercase tracking-widest text-art-text/40 mb-4">Value #02</div>
                         <h3 className="text-2xl font-serif font-bold mb-4 text-art-text">Lasting Memories</h3>
                         <p className="text-base md:text-lg font-sans text-art-text/80 leading-relaxed">
                             We believe that art has the power to connect, inspire, and create lasting memories for everyone involved.
                         </p>
                     </div>
                 </div>
             </div>
        </div>

        {/* 6. MANIFESTO / CLOSING */}
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-6 pb-20 md:pb-32">
            <div className="border-t border-art-text/10 pt-12 md:pt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                     <div className="text-center md:text-left">
                        <Heart size={32} className="text-art-green mb-6 mx-auto md:mx-0" />
                        <h3 className="font-quirky font-bold text-xl mb-3">More Than Events</h3>
                        <p className="text-base leading-relaxed text-art-text/60">
                            At AWE, we don’t just host events.
                        </p>
                     </div>
                     <div className="text-center md:text-left">
                        <Palette size={32} className="text-art-gold mb-6 mx-auto md:mx-0" />
                        <h3 className="font-quirky font-bold text-xl mb-3">Creating Experiences</h3>
                        <p className="text-base leading-relaxed text-art-text/60">
                            We create experiences where art comes to life.
                        </p>
                     </div>
                     <div className="text-center md:text-left">
                        <Coffee size={32} className="text-[#FFB7B2] mb-6 mx-auto md:mx-0" />
                        <h3 className="font-quirky font-bold text-xl mb-3">Shared Joy</h3>
                        <p className="text-base leading-relaxed text-art-text/60">
                            ...where art becomes a shared joy.
                        </p>
                     </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutUs;
