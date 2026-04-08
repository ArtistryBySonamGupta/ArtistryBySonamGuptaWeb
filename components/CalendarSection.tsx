import React, { useEffect, useMemo, useState } from 'react';
import { Calendar as CalendarIcon, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

const CalendarSection: React.FC = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 60 * 1000);

    return () => window.clearInterval(timer);
  }, []);

  const currentDay = now.getDate();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const monthName = useMemo(
    () =>
      now.toLocaleString('en-US', {
        month: 'long',
      }),
    [now]
  );

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const leadingEmptySlots = Array.from({ length: firstDayOfMonth }, (_, i) => `empty-${i}`);

  return (
    <section id="calendar" className="py-16 md:py-24 bg-white relative z-20 overflow-hidden">
      <div className="w-full max-w-[98rem] mx-auto px-4 md:px-8 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
                
            {/* Left: Text Content */}
            <div className="relative">
                 <div className="absolute -top-10 -left-10 w-24 h-24 bg-art-green/20 rounded-full blur-xl animate-pulse"></div>
                 <h2 className="text-4xl sm:text-7xl md:text-9xl font-serif font-bold text-art-text mb-6 md:mb-8 leading-[0.9] md:leading-[0.85]">
                     Save the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-art-green-dark to-art-green">Date.</span>
                 </h2>
                 <p className="text-base md:text-xl font-sans text-art-text/70 mb-8 md:mb-10 max-w-md">
                    Our calendar fills up faster than paint dries! Book your slot 2 weeks in advance for the best experience.
                 </p>

                 <div className="space-y-6">
                    {[
                        { icon: Clock, title: "Duration", text: "90 - 120 Minutes of fun" },
                        { icon: CheckCircle2, title: "All Inclusive", text: "We bring all materials & magic" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 border-2 border-gray-100 rounded-2xl hover:border-art-text transition-colors bg-white">
                            <div className="p-3 bg-art-beige rounded-full border border-art-text">
                                <item.icon size={20} className="text-art-text"/>
                            </div>
                            <div>
                                <h3 className="font-bold font-quirky text-lg">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.text}</p>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>

            {/* Right: Giant Calendar Card */}
            <div className="relative perspective-1000">
                {/* Visual stacks behind */}
                <div className="absolute top-4 right-[-10px] w-full h-full bg-art-text rounded-[3rem] -rotate-2 z-0"></div>
                
                <div className="relative bg-[#FFFBF0] p-5 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border-2 border-art-text shadow-2xl z-10 transform rotate-1 transition-transform hover:rotate-0">
                    
                    {/* Calendar Header */}
                    <div className="flex justify-between items-center mb-10 border-b-4 border-art-text/10 pb-6">
                        <div>
                            <span className="block text-xs font-bold text-art-text/70 font-quirky uppercase tracking-widest mb-1">Current Month</span>
                            <span className="text-4xl sm:text-6xl font-serif font-bold text-art-text">{monthName}</span>
                        </div>
                        <div className="text-right hidden sm:block">
                            <span className="block text-xs font-bold text-art-text/70 font-quirky uppercase tracking-widest mb-1">Year</span>
                            <span className="text-3xl sm:text-4xl font-quirky font-bold text-art-text">{currentYear}</span>
                        </div>
                    </div>
                    
                    {/* Days Grid */}
                    <div className="grid grid-cols-7 gap-1.5 sm:gap-2 md:gap-4 mb-8">
                        {['S','M','T','W','T','F','S'].map((d, idx) => (
                            <div key={`${d}-${idx}`} className="text-center font-black text-sm text-art-text/30 mb-2 font-quirky">{d}</div>
                        ))}
                        {leadingEmptySlots.map((slot) => (
                            <div key={slot} className="aspect-square"></div>
                        ))}
                        {days.map(day => {
                            const weekday = new Date(currentYear, currentMonth, day).getDay();
                            const isWeekend = weekday === 0 || weekday === 6;
                            const isSelected = day === currentDay;
                            
                            return (
                                <div 
                                    key={day} 
                                    className={`
                                        aspect-square rounded-full flex items-center justify-center text-sm sm:text-lg font-bold font-sans relative
                                        ${isSelected ? 'text-white' : 'text-art-text'}
                                        ${isWeekend && !isSelected ? 'text-art-green-dark bg-art-green/10' : ''}
                                    `}
                                >
                                    {day}
                                    {/* Hand drawn circle for selected date */}
                                    {isSelected && (
                                        <svg className="absolute w-[150%] h-[150%] -top-[25%] -left-[25%] text-art-text z-[-1] animate-wiggle" viewBox="0 0 100 100" fill="currentColor">
                                            <path d="M50,10 C20,10 5,30 5,50 C5,80 30,95 50,95 C80,95 95,70 95,50 C95,20 70,5 50,10 Z" fill="#2E2E2E" />
                                        </svg>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                    
                    {/* Bottom Sticker */}
                    <div className="absolute -bottom-6 -right-6 bg-art-gold text-art-text px-6 py-2 rounded-full border-2 border-art-text font-bold font-quirky shadow-quirky transform -rotate-6">
                        Book Now!
                    </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
