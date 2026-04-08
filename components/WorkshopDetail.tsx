import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Workshop } from '../types';

interface WorkshopDetailProps {
  workshop: Workshop;
  onBack: () => void;
  onBook: () => void;
}

const WorkshopDetail: React.FC<WorkshopDetailProps> = ({ workshop, onBack, onBook }) => {
  return (
    <div className="min-h-screen bg-[#f8f4ec] pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-3 px-5 py-3 mb-10 md:mb-14 bg-white border-2 border-art-text/10 rounded-full text-art-text font-bold hover:border-art-text hover:shadow-quirky transition-all duration-300"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-quirky uppercase tracking-wider text-xs">Back to Activities</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-5">
            <div className="h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-[0_24px_60px_rgba(0,0,0,0.14)] bg-white">
              <img
                src={workshop.image}
                alt={workshop.title}
                width={1200}
                height={1400}
                className="w-full h-full object-cover min-h-[420px] lg:min-h-[100%]"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="h-full rounded-[2rem] bg-white border border-art-text/10 shadow-[0_24px_60px_rgba(0,0,0,0.08)] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f8f4ec] border border-art-text/10 text-art-text/60 text-xs font-bold uppercase tracking-[0.2em] mb-5">
                  Workshop Details
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-art-text leading-[0.92] tracking-tight mb-6">
                  {workshop.title}
                </h1>
                <div className="w-20 h-[2px] bg-art-text mb-6"></div>
                <p className="text-base md:text-lg text-art-text/75 leading-relaxed font-light whitespace-pre-line">
                  {workshop.description}
                </p>
              </div>

              <div className="mt-10 md:mt-12">
                <button
                  onClick={onBook}
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-art-text text-white font-bold font-quirky uppercase tracking-widest text-sm border-2 border-art-text hover:bg-art-green hover:text-art-text transition-all duration-300"
                >
                  <span>Request Quote</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetail;
