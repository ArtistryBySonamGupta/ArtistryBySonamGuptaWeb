import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHashNavigation = (sectionId: string) => {
    const hash = `#${sectionId}`;

    if (location.pathname === '/' && location.hash === hash) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    navigate({ pathname: '/', hash });
  };

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Activities', to: '/#activities' },
    { name: 'Gallery', to: '/#gallery' },
    { name: 'Contact', to: '/#contact' },
  ];

  // Common glass style for the "Islands" when scrolled
  const glassPillStyle = scrolled 
    ? "bg-white/90 backdrop-blur-md border border-art-text/5 shadow-sm py-1.5 px-2" 
    : "bg-transparent py-2 px-0";

  return (
    <>
      {/* 
        Main Navbar Container 
        Using pointer-events-none allows clicks to pass through the empty space.
      */}
      <nav className="fixed top-0 left-0 right-0 z-[80] pointer-events-none transition-all duration-300">
        <div className="max-w-[98rem] mx-auto px-4 md:px-8 pt-6 flex justify-between items-start relative">

          {/* 1. Left Island: Logo */}
          <div className={`pointer-events-auto relative z-50 rounded-full transition-all duration-500 ease-in-out ${glassPillStyle} ${scrolled ? 'pr-5' : ''}`}>
            <Link
              to="/"
              className="group flex items-center gap-3 cursor-pointer"
            >
               <div className={`w-10 h-10 md:w-12 md:h-12 bg-art-text rounded-full flex items-center justify-center text-white font-serif font-bold text-xl md:text-2xl shadow-quirky-sm group-hover:rotate-12 transition-transform duration-300`}>
                  A
               </div>
               <span className="font-quirky font-black text-xl md:text-2xl tracking-tight text-art-text">
                  Artistry.
               </span>
            </Link>
          </div>

          {/* 2. Center Island: Nav Pill (Desktop Only) */}
          <div className={`hidden md:flex pointer-events-auto absolute left-1/2 top-6 -translate-x-1/2 transition-all duration-500 ${scrolled ? 'translate-y-[-5px]' : 'translate-y-0'}`}>
            <div className="bg-white/90 backdrop-blur-md border border-art-text/10 rounded-full p-1.5 shadow-sm hover:shadow-quirky-sm transition-shadow duration-300 flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={(e) => {
                    setIsOpen(false);
                    if (link.to.startsWith('/#')) {
                      e.preventDefault();
                      handleHashNavigation(link.to.replace('/#', ''));
                    }
                  }}
                  className="px-5 py-2.5 rounded-full text-sm font-bold font-sans text-art-text/70 hover:text-art-text hover:bg-art-beige/50 transition-all duration-300 hover:scale-105"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* 3. Right Island: CTA & Mobile Toggle */}
          <div className={`pointer-events-auto relative z-50 flex items-center gap-3 rounded-full transition-all duration-500 ${glassPillStyle} ${scrolled ? 'pl-2' : ''}`}>
             <Link
              to="/#quote"
              onClick={(e) => {
                if (location.pathname === '/' && location.hash === '#quote') {
                  e.preventDefault();
                  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all border-2 bg-art-text text-white border-art-text shadow-quirky-sm hover:shadow-none hover:translate-y-[2px] hover:bg-art-green hover:text-art-text hover:border-art-text ${scrolled ? 'py-2.5 px-5 shadow-none' : ''}`}
            >
              Get Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white text-art-text border-2 border-art-text shadow-quirky-sm active:scale-95 transition-all hover:bg-art-green"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-art-beige z-[75] transform transition-transform duration-500 cubic-bezier(0.7, 0, 0.3, 1) ${isOpen ? 'translate-y-0' : '-translate-y-full'} flex flex-col md:hidden`}>

         <div className="flex-1 flex flex-col justify-center items-center px-8 space-y-4 relative z-10">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={(e) => {
                  setIsOpen(false);
                  if (link.to.startsWith('/#')) {
                    e.preventDefault();
                    handleHashNavigation(link.to.replace('/#', ''));
                  }
                }}
                className="text-4xl font-serif font-bold text-art-text hover:text-art-green transition-colors transform hover:translate-x-2 duration-300 w-full text-center py-2"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
         </div>

         <div className="p-8 pb-12 relative z-10">
            <Link
                to="/#quote"
                onClick={(e) => {
                  setIsOpen(false);
                  if (location.pathname === '/' && location.hash === '#quote') {
                    e.preventDefault();
                    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full py-4 bg-art-text text-white rounded-xl font-quirky font-bold text-lg shadow-quirky flex items-center justify-center gap-2 active:shadow-none active:translate-y-1 transition-all hover:bg-art-green hover:text-art-text border-2 border-art-text"
            >
               Get a Quote <ArrowRight size={20}/>
            </Link>
         </div>
      </div>
    </>
  );
};

export default Navbar;
