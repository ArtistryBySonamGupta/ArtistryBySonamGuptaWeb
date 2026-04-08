import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
    showContactInfo?: boolean;
}

const Footer: React.FC<FooterProps> = ({ showContactInfo = true }) => {
  return (
    <footer id="contact" className="bg-art-text text-white pt-14 md:pt-20 pb-10 border-t border-white/10 relative z-50">
       <div className="w-full max-w-[98rem] mx-auto px-4 md:px-8 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12 mb-12 md:mb-20">
              <div className="max-w-md">
                  <h3 className="font-quirky font-bold text-3xl md:text-4xl mb-5 md:mb-6">Artistry by Sonam Gupta<span className="text-art-green">.</span></h3>
                  <p className="text-white/60 leading-relaxed text-base md:text-lg mb-6 md:mb-8 font-light">
                      Creating messy, magical, and memorable art experiences for everyone. From custom workshops to curated hampers, we bring the creativity to you.
                  </p>
                  <div className="flex gap-4">
                      <a aria-label="Open Instagram profile" title="Instagram" href={`https://www.instagram.com/artistrybysonamgupta/`} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-art-text hover:border-white transition-all"><Instagram size={22} /></a>
                      <a aria-label="Send email" title="Email" href={`mailto:${CONTACT_INFO.email}`} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-art-text hover:border-white transition-all"><Mail size={22} /></a>
                  </div>
              </div>

              <div className={`grid ${showContactInfo ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} gap-10 md:gap-24 w-full md:w-auto`}>
                  <div>
                      <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-art-green">Explore</h4>
                      <ul className="space-y-4 text-base text-white/70">
                          <li><a href="#home" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-art-green transition-all"></span> Home</a></li>
                          <li><a href="#activities" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-art-green transition-all"></span> Activities</a></li>
                          <li><a href="#gallery" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-art-green transition-all"></span> Gallery</a></li>
                          <li><a href="#quote" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-art-green transition-all"></span> Get Quote</a></li>
                      </ul>
                  </div>
                  
                  {showContactInfo && (
                  <div>
                      <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-art-green">Get in Touch</h4>
                      <ul className="space-y-6 text-base text-white/70">
                          <li className="flex items-start gap-3">
                              <Phone size={18} className="mt-1 flex-shrink-0 text-art-green"/> 
                              <span>{CONTACT_INFO.phone}</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <MapPin size={18} className="mt-1 flex-shrink-0 text-art-green"/> 
                              <span className="max-w-[200px]">{CONTACT_INFO.address}</span>
                          </li>
                      </ul>
                  </div>
                  )}
              </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm text-white/70 font-sans">
             <span>&copy; {new Date().getFullYear()} Artistry by Sonam Gupta. All rights reserved.</span>
          </div>
       </div>
    </footer>
  );
};

export default Footer;
