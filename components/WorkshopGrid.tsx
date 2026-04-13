import React from 'react';
import { CORPORATE_ADULT_GALLERY_IMAGES, HAMPER_GALLERY_IMAGES, RESIN_GALLERY_IMAGES, RETURN_GIFT_GALLERY_IMAGES, WORKSHOPS } from '../constants';
import { Category, Workshop } from '../types';
import { ArrowLeft, ArrowUpRight, Star, Heart, Palette, Gift, Briefcase, PartyPopper, Circle, Images, Instagram, MessageCircle } from 'lucide-react';

interface WorkshopGridProps {
    category: Category;
    onBack: () => void;
    onViewWorkshop: (workshop: Workshop) => void;
}

// Configuration for each Category Landing Page
const CATEGORY_THEMES: Record<string, {
    title: string;
    tagline: string;
    description: string;
    bgColor: string;
    accentColor: string;
    accentBg: string;
    heroImage: string;
    icon: React.ElementType;
    pattern: string;
}> = {
    [Category.KIDS]: {
        title: "Little Hands, Big Mess.",
        tagline: "Sensory Art & Creative Chaos",
        description: "We believe every child is a born artist. Our workshops aren't just about painting; they're about squishing clay, mixing colors, and building confidence. It's safe, guided, and wonderfully messy.",
        bgColor: "bg-[#FFF0EE]", // Soft Red
        accentColor: "text-[#FF6B6B]",
        accentBg: "bg-[#FF6B6B]",
        heroImage: "/Kids-art/decoden.webp",
        icon: Palette,
        pattern: "radial-gradient(#FF6B6B 1.5px, transparent 1.5px)"
    },
    [Category.RESIN]: {
        title: "Frozen in Time.",
        tagline: "The Art of Gloss & Luxury",
        description: "Resin art is where chemistry meets creativity. From preserving precious memories to creating functional luxury home decor, we teach you how to tame the fluid medium.",
        bgColor: "bg-[#F0FFF4]", // Soft Green
        accentColor: "text-[#38A169]",
        accentBg: "bg-[#38A169]",
        heroImage: "/Resin-art/resin19.webp",
        icon: Star,
        pattern: "radial-gradient(#38A169 1.5px, transparent 1.5px)"
    },
    [Category.HAMPERS]: {
        title: "Unbox Happiness.",
        tagline: "Curated Art Kits & Gifts",
        description: "Why give a generic gift when you can give an experience? Our hampers are thoughtfully curated with premium supplies, instructions, and a whole lot of love.",
        bgColor: "bg-[#FFFBF0]", // Soft Gold
        accentColor: "text-[#D69E2E]",
        accentBg: "bg-[#D69E2E]",
        heroImage: "/hampers/hamper11.webp",
        icon: Gift,
        pattern: "radial-gradient(#D69E2E 1.5px, transparent 1.5px)"
    },
    [Category.CORPORATE_ADULT]: {
        title: "Sip, Paint, De-stress.",
        tagline: "Art Therapy for the Busy Soul",
        description: "Step away from the screens. Our adult workshops are designed as 'Art Therapy'—a judgement-free zone to reconnect with your hands and your team.",
        bgColor: "bg-[#F5F7FF]", // Soft Blue
        accentColor: "text-[#5A67D8]",
        accentBg: "bg-[#5A67D8]",
        heroImage: "/Corporate-adults/corporate22.webp",
        icon: Briefcase,
        pattern: "radial-gradient(#5A67D8 1.5px, transparent 1.5px)"
    },
    [Category.RETURN_GIFTS]: {
        title: "The Perfect Takeaway.",
        tagline: "Memorable Gifts",
        description: "Say goodbye to plastic junk. Give your guests a DIY kit they'll actually cherish. Our return gift options are customizable and budget-friendly.",
        bgColor: "bg-[#FAF5FF]", // Soft Purple
        accentColor: "text-[#805AD5]",
        accentBg: "bg-[#805AD5]",
        heroImage: "/return-gift/return24.webp",
        icon: PartyPopper,
        pattern: "radial-gradient(#805AD5 1.5px, transparent 1.5px)"
    },
    [Category.ALL]: {
        title: "The Full Collection.",
        tagline: "Explore Everything We Do",
        description: "Can't decide? Browse our entire catalog of creative experiences. From messy play to elegant decor, we have something for every vibe.",
        bgColor: "bg-[#F5EFE6]", // Brand Beige
        accentColor: "text-[#2E2E2E]",
        accentBg: "bg-[#2E2E2E]",
        heroImage: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080&auto=format&fit=crop",
        icon: Heart,
        pattern: "radial-gradient(#2E2E2E 1.5px, transparent 1.5px)"
    }
};

const GALLERY_CATEGORIES = [
    Category.RESIN,
    Category.HAMPERS,
    Category.CORPORATE_ADULT,
    Category.RETURN_GIFTS
];

interface GalleryItem {
  key: string;
  src: string;
  alt: string;
}

interface GalleryNote {
  key: string;
  type?: 'quote' | 'fact';
  title: string;
  text: string;
}

type GalleryCard =
  | { type: 'image'; key: string; src: string; alt: string }
  | { type: 'note'; key: string; title: string; text: string };

interface InteractiveBlock {
  id: string;
  type: 'quote' | 'fact';
  text: string;
  author?: string;
  bgColor: string;
  textColor: string;
}

const splitIntoColumns = <T,>(items: T[], columnCount: number): T[][] => {
  const columns: T[][] = Array.from({ length: columnCount }, () => []);
  items.forEach((item, index) => {
    columns[index % columnCount].push(item);
  });
  return columns;
};

const getShortDescription = (description: string) => {
  const compact = description.replace(/\s+/g, ' ').trim();
  if (compact.length <= 150) return compact;

  const firstSentence = compact.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim();
  if (firstSentence && firstSentence.length <= 150) return firstSentence;

  return `${compact.slice(0, 147).trimEnd()}...`;
};

const CATEGORY_NOTES: Record<Category, GalleryNote[]> = {
  [Category.ALL]: [
    { key: 'all-1', type: 'fact', title: 'Custom Formats', text: 'Experiences can be adapted for age group, event size, and creative mood.' },
    { key: 'all-2', type: 'quote', title: 'Hands-On Setup', text: 'Every activity is designed to feel guided, engaging, and easy to enjoy.' },
    { key: 'all-3', type: 'fact', title: 'Built Around Guests', text: 'The setup is designed to keep guests involved instead of just observing from the side.' },
    { key: 'all-4', type: 'quote', title: 'Creative Flow', text: 'Each format is paced to feel smooth, interactive, and visually memorable through the event.' },
  ],
  [Category.KIDS]: [
    { key: 'kids-1', type: 'fact', title: 'Made For Kids', text: 'Safe, guided, and playful formats that keep little hands engaged.' },
    { key: 'kids-2', type: 'quote', title: 'Take Home Joy', text: 'Each activity ends with a keepsake children are proud to carry back.' },
    { key: 'kids-3', type: 'fact', title: 'Mess With Structure', text: 'Activities stay fun and expressive while still being easy for the team to manage.' },
    { key: 'kids-4', type: 'quote', title: 'Best For Parties', text: 'A strong fit for birthdays, school workshops, hobby corners, and creative celebrations.' },
  ],
  [Category.RESIN]: [
    { key: 'resin-1', type: 'fact', title: 'Gloss & Detail', text: 'A premium format focused on finish, texture, and elevated presentation.' },
    { key: 'resin-2', type: 'quote', title: 'Best For', text: 'Luxury gifting, statement decor, preservation pieces, and curated events.' },
    { key: 'resin-3', type: 'fact', title: 'Premium Finish', text: 'The final output feels polished, durable, and display-ready rather than temporary craft.' },
    { key: 'resin-4', type: 'quote', title: 'Visual Impact', text: 'These pieces work especially well when you want the gallery to look rich and high-end.' },
  ],
  [Category.HAMPERS]: [
    { key: 'hamper-1', type: 'fact', title: 'Thoughtfully Packed', text: 'Curated hampers that feel polished, useful, and ready to gift.' },
    { key: 'hamper-2', type: 'quote', title: 'Flexible Themes', text: 'Colors, contents, and styling can be tailored to the occasion.' },
    { key: 'hamper-3', type: 'fact', title: 'Styled To Gift', text: 'Presentation matters here, so the packs are designed to feel complete and intentional.' },
    { key: 'hamper-4', type: 'quote', title: 'Good For Bulk Orders', text: 'Useful for festive gifting, custom events, client packs, and curated return gifts.' },
  ],
  [Category.CORPORATE_ADULT]: [
    { key: 'corp-1', type: 'fact', title: 'Built For Adults', text: 'Creative sessions that feel relaxed, premium, and easy to host.' },
    { key: 'corp-2', type: 'quote', title: 'Works Well At', text: 'Team events, launches, private gatherings, and employee engagement days.' },
    { key: 'corp-3', type: 'fact', title: 'Low Friction Setup', text: 'Designed to fit professional environments without making the experience feel stiff.' },
    { key: 'corp-4', type: 'quote', title: 'Shared Experience', text: 'A good choice when you want conversation, participation, and a stronger event memory.' },
  ],
  [Category.RETURN_GIFTS]: [
    { key: 'return-1', type: 'fact', title: 'Useful Keepsakes', text: 'Gifting options that feel personal instead of generic or disposable.' },
    { key: 'return-2', type: 'quote', title: 'Easy To Personalise', text: 'Themes and presentation can be tuned to match the event style.' },
    { key: 'return-3', type: 'fact', title: 'Event Ready', text: 'These formats work well when you need gifting to look presentable and easy to distribute.' },
    { key: 'return-4', type: 'quote', title: 'Memorable Takeaway', text: 'The goal is a takeaway guests actually keep, use, and remember after the event ends.' },
  ],
};

const CORPORATE_PARTNERS = [
  { name: 'Wellbeing Nutrition', src: '/Corporate-adults/wellbeing.jpeg' },
  { name: 'Mars Cosmetics', src: '/Corporate-adults/mars.jpeg' },
  { name: 'Radisson Blu Hotel', src: '/Corporate-adults/radisson.jpeg' },
];

const buildInteractiveBlocks = (category: Category, notes: GalleryNote[]): InteractiveBlock[] => {
  const palette: Record<Category, { bgColor: string; textColor: string }[]> = {
    [Category.ALL]: [
      { bgColor: 'bg-[#FF6B6B]', textColor: 'text-white' },
      { bgColor: 'bg-art-gold', textColor: 'text-art-text' },
    ],
    [Category.KIDS]: [
      { bgColor: 'bg-[#FF6B6B]', textColor: 'text-white' },
      { bgColor: 'bg-[#38A169]', textColor: 'text-white' },
    ],
    [Category.RESIN]: [
      { bgColor: 'bg-[#805AD5]', textColor: 'text-white' },
      { bgColor: 'bg-[#38A169]', textColor: 'text-white' },
    ],
    [Category.HAMPERS]: [
      { bgColor: 'bg-art-gold', textColor: 'text-art-text' },
      { bgColor: 'bg-[#FF6B6B]', textColor: 'text-white' },
    ],
    [Category.CORPORATE_ADULT]: [
      { bgColor: 'bg-[#5A67D8]', textColor: 'text-white' },
      { bgColor: 'bg-art-gold', textColor: 'text-art-text' },
    ],
    [Category.RETURN_GIFTS]: [
      { bgColor: 'bg-[#805AD5]', textColor: 'text-white' },
      { bgColor: 'bg-[#FF6B6B]', textColor: 'text-white' },
    ],
  };

  return notes.map((note, index) => ({
    id: note.key,
    type: note.type === 'fact' ? 'fact' : 'quote',
    text: note.text,
    author: note.title,
    ...palette[category][index % palette[category].length],
  }));
};

const WorkshopGrid: React.FC<WorkshopGridProps> = ({ category, onBack, onViewWorkshop }) => {
  const theme = CATEGORY_THEMES[category] || CATEGORY_THEMES[Category.ALL];
  const instagramLink = 'https://www.instagram.com/artistrybysonamgupta/';
  const whatsappLink = 'https://wa.me/message/Y4KIHBXFIBEOA1';
  
  const filteredWorkshops = category === Category.ALL 
    ? WORKSHOPS 
    : WORKSHOPS.filter(w => w.categories.includes(category));

  const isGalleryView = GALLERY_CATEGORIES.includes(category);
  const galleryItems: GalleryItem[] =
    category === Category.RESIN
      ? RESIN_GALLERY_IMAGES.map((src, index) => ({
          key: `resin-image-${index}`,
          src,
          alt: `Resin Art ${index + 1}`,
        }))
      : category === Category.HAMPERS
      ? HAMPER_GALLERY_IMAGES.map((src, index) => ({
          key: `hamper-image-${index}`,
          src,
          alt: `Hamper ${index + 1}`,
        }))
      : category === Category.CORPORATE_ADULT
      ? CORPORATE_ADULT_GALLERY_IMAGES.map((src, index) => ({
          key: `corporate-image-${index}`,
          src,
          alt: `Corporate Adult ${index + 1}`,
        }))
      : category === Category.RETURN_GIFTS
      ? RETURN_GIFT_GALLERY_IMAGES.map((src, index) => ({
          key: `return-gift-image-${index}`,
          src,
          alt: `Return Gift ${index + 1}`,
        }))
      : filteredWorkshops.map((workshop) => ({
          key: workshop.id,
          src: workshop.image,
          alt: workshop.title,
        }));

  const interactiveBlocks = buildInteractiveBlocks(category, CATEGORY_NOTES[category] || []);
  const galleryCards: Array<
    | { type: 'image'; key: string; src: string; alt: string }
    | { type: 'interactive'; key: string; block: InteractiveBlock }
  > = [];

  if (isGalleryView) {
    let noteIndex = 0;
    galleryItems.forEach((item, index) => {
      galleryCards.push({ type: 'image', key: item.key, src: item.src, alt: item.alt });
      if ((index + 1) % 4 === 0 && noteIndex < interactiveBlocks.length) {
        const block = interactiveBlocks[noteIndex];
        galleryCards.push({ type: 'interactive', key: block.id, block });
        noteIndex += 1;
      }
    });

    if (galleryCards.length > 0 && galleryCards[galleryCards.length - 1].type !== 'interactive' && noteIndex < interactiveBlocks.length) {
      const block = interactiveBlocks[noteIndex];
      galleryCards.push({ type: 'interactive', key: block.id, block });
    }
  }

  const mobileColumns = splitIntoColumns(galleryCards, 2);
  const tabletColumns = splitIntoColumns(galleryCards, 3);
  const desktopColumns = splitIntoColumns(galleryCards, 4);

  const renderGalleryCard = (
    item:
      | { type: 'image'; key: string; src: string; alt: string }
      | { type: 'interactive'; key: string; block: InteractiveBlock },
    compact = false
  ) => {
    const rotations = ['-rotate-2', 'rotate-2', '-rotate-1', 'rotate-1', '-rotate-3', 'rotate-3'];
    const tapeColors = ['bg-red-300/60', 'bg-blue-300/60', 'bg-yellow-300/60', 'bg-green-300/60', 'bg-purple-300/60'];
    const rotation = rotations[item.key.length % rotations.length];
    const tape = tapeColors[item.key.length % tapeColors.length];

    if (item.type === 'image') {
      const tapeColors = ['bg-red-300/60', 'bg-blue-300/60', 'bg-yellow-300/60', 'bg-green-300/60', 'bg-purple-300/60'];
      const rotations = ['-rotate-2', 'rotate-2', '-rotate-1', 'rotate-1', '-rotate-3', 'rotate-3'];
      const rotation = rotations[item.key.length % rotations.length];
      const tape = tapeColors[item.key.length % tapeColors.length];

      return (
        <div
          key={item.key}
          className={`break-inside-avoid relative mb-6 bg-white p-3 ${compact ? 'pb-6' : 'md:p-4 md:pb-10'} shadow-[0_10px_20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.12)] ${rotation}`}
        >
          <div className={`absolute -top-3 left-1/2 h-7 ${compact ? 'w-20' : 'w-24 md:w-28'} -translate-x-1/2 ${tape} rotate-1 z-20 backdrop-blur-sm shadow-sm opacity-80 mix-blend-multiply`}></div>
          <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] w-full">
            <img
              src={item.src}
              alt={item.alt}
              width={400}
              height={500}
              className="w-full h-full object-cover filter contrast-110 saturate-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#ff9900] mix-blend-overlay opacity-10 pointer-events-none"></div>
          </div>
        </div>
      );
    }

    const block = item.block;
    const noteIcons = [
      Circle,
      Star,
      Heart,
      theme.icon,
    ];
    const BlockIcon = noteIcons[item.key.length % noteIcons.length];

    return (
      <div
        key={item.key}
        className={`group break-inside-avoid relative mb-6 flex flex-col justify-center overflow-hidden border-8 border-white shadow-[0_15px_35px_rgba(0,0,0,0.15)] transition-all duration-500 ${block.bgColor} ${block.textColor} ${rotation} ${compact ? 'p-5' : 'p-6 md:p-8'}`}
      >
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 ${compact ? 'w-20' : 'w-24'} h-8 ${tape} z-20 backdrop-blur-sm mix-blend-multiply`}></div>
        <div className="absolute -right-8 -top-8 opacity-10 transition-transform duration-700 group-hover:scale-125">
          <BlockIcon size={compact ? 80 : 110} />
        </div>
        <div className="relative z-10">
          {block.type === 'fact' ? (
            <>
              <div className="mb-3 flex items-center gap-2 opacity-85">
                <BlockIcon size={compact ? 14 : 16} />
                <span className={`font-quirky font-bold uppercase tracking-[0.22em] ${compact ? 'text-[10px]' : 'text-xs'}`}>
                  {block.author}
                </span>
              </div>
              <p className={`font-serif font-bold leading-tight ${compact ? 'text-base' : 'text-xl md:text-2xl'}`}>{block.text}</p>
            </>
          ) : (
            <>
              <div className="mb-2 text-3xl opacity-50 font-serif">"</div>
              <p className={`font-serif font-bold leading-tight ${compact ? 'text-base' : 'text-xl md:text-2xl'} mb-3`}>
                {block.text}
              </p>
              <div className="flex items-center gap-2 opacity-85">
                <BlockIcon size={compact ? 12 : 14} />
                <span className={`font-quirky font-bold uppercase tracking-[0.22em] ${compact ? 'text-[10px]' : 'text-xs'}`}>
                  {block.author}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${theme.bgColor} relative font-sans selection:bg-art-text selection:text-white`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: theme.pattern, backgroundSize: '30px 30px' }}></div>

        {/* 1. EDITORIAL HEADER */}
        <header className="relative pt-24 md:pt-32 pb-14 md:pb-24 px-3 sm:px-4 lg:px-4 overflow-hidden">
            <div className="max-w-[96rem] mx-auto relative z-10">
                
                {/* Navigation Bar */}
                <div className="flex justify-between items-center mb-10 md:mb-16">
                    <button 
                        onClick={onBack} 
                        className="group flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-white border-2 border-art-text/10 rounded-full text-art-text font-bold hover:border-art-text hover:shadow-quirky transition-all duration-300"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
                        <span className="font-quirky uppercase tracking-wider text-xs">Back</span>
                    </button>
                </div>

                {/* Hero Content with Image */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6">
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-art-text mb-4 md:mb-5 leading-[0.9] tracking-tight">
                            {theme.title}
                        </h1>
                        <div className="flex flex-col md:flex-row gap-3 md:gap-5 md:items-center mt-6 md:mt-7 mb-5 md:mb-7">
                             <div className={`h-px w-16 ${theme.accentBg} hidden md:block`}></div>
                             <p className={`text-lg md:text-2xl font-quirky font-bold ${theme.accentColor}`}>
                                {theme.tagline}
                             </p>
                        </div>
                        <p className="text-base md:text-lg text-art-text/70 leading-relaxed font-light mb-8 md:mb-10 max-w-xl">
                            {theme.description}
                        </p>

                        {(category === Category.KIDS || category === Category.RESIN) && (
                            <div className="mb-8 md:mb-10">
                                <a
                                    href="https://drive.google.com/file/d/1u2MsM6fplcObG9sMjOc7TD0CXQ7XtdnX/view?usp=sharing"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-3 rounded-full border-2 border-art-text bg-white px-5 py-3 font-quirky text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-art-text shadow-quirky transition-all duration-300 hover:-translate-y-1 hover:shadow-quirky-hover"
                                >
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-art-text bg-[#F8C83C] text-white">
                                        <Images size={18} />
                                    </span>
                                    <span>View Full Catalog</span>
                                </a>
                            </div>
                        )}

                    </div>
                    
                    {/* Hero Image Section */}
                    <div className="lg:col-span-6 relative">
                        <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-[0_24px_60px_rgba(0,0,0,0.2)] transform rotate-1 hover:rotate-0 transition-transform duration-700 ease-out aspect-[5/4]">
                            <img 
                                src={theme.heroImage} 
                                alt={category} 
                                width={1600}
                                height={1200}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent"></div>
                        </div>
                        {/* Abstract background element */}
                        <div className={`absolute -top-6 -right-6 w-full h-full rounded-[2rem] border-2 border-art-text/10 -z-10 transform -rotate-1 ${theme.bgColor} opacity-60`}></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/50 blur-2xl -z-10"></div>
                    </div>
                </div>
            </div>
        </header>

        {category === Category.CORPORATE_ADULT && (
            <section className="px-3 sm:px-4 lg:px-4 relative z-10 pb-4 md:pb-6">
                <div className="max-w-[96rem] mx-auto">
                    <div className="rounded-[2.25rem] border border-art-text/10 bg-white px-5 py-6 md:px-8 md:py-7 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
                        <div className="mx-auto max-w-5xl text-center">
                            <span className="inline-flex items-center gap-3 rounded-full border-2 border-art-text/10 bg-white px-5 py-2.5 font-quirky font-bold text-[10px] uppercase tracking-[0.28em] text-art-text/60 mb-5">
                                <span className="h-2.5 w-2.5 rounded-full bg-art-gold border border-art-text/10"></span>
                                Trusted By
                            </span>
                            <h3 className="text-3xl md:text-5xl lg:text-[3.6rem] font-serif font-bold text-art-text leading-[0.98] mb-5">
                                Creative Work Backed By
                                <span className="block italic text-[#5C667A]">Strong Brand Trust</span>
                            </h3>
                            <p className="text-base md:text-lg text-art-text/70 leading-relaxed max-w-3xl mx-auto">
                                With trusted partners like Wellbeing Nutrition, Mars Cosmetics, Radisson Blu Hotel, and many more, our brand is associated with trust, quality, and above all, creative ideas that reflect the soul of the company.
                            </p>
                        </div>

                        <div className="mt-4 md:mt-5 pt-1">
                            <div className="mx-auto h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-art-text/10 to-transparent"></div>
                            <div className="mt-3 md:mt-4 flex flex-wrap items-center justify-center gap-10 md:gap-14 lg:gap-20">
                                {CORPORATE_PARTNERS.map((partner) => (
                                    <div
                                        key={partner.name}
                                        aria-label={partner.name}
                                        className="flex items-center justify-center px-2 py-2"
                                    >
                                        <img
                                            src={partner.src}
                                            alt=""
                                            width={180}
                                            height={80}
                                            className={`w-auto object-contain ${
                                                partner.name === 'Wellbeing Nutrition'
                                                    ? 'max-h-20 md:max-h-24'
                                                    : 'max-h-16 md:max-h-20'
                                            }`}
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )}

        {/* 2. THE CONTENT GRID */}
        <div id="grid-start" className="bg-white rounded-t-[2.5rem] md:rounded-t-[4rem] border-t-2 border-art-text/10 py-16 md:py-24 px-3 sm:px-4 lg:px-4 relative z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
            <div className="max-w-[96rem] mx-auto">
                
                {/* Grid Header */}
                <div className="flex items-end justify-between mb-10 md:mb-16 px-2">
                    <div>
                        <span className="block font-quirky font-bold text-xs uppercase tracking-[0.2em] text-art-text/40 mb-2">Portfolio</span>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-art-text">
                            Featured <span className={`italic border-b-4 border-art-text/10 ${theme.accentColor} border-opacity-30`}>Collection</span>
                        </h2>
                    </div>
                </div>

                {/* Conditional Layout Rendering */}
                {isGalleryView ? (
                    <>
                        <div className="grid grid-cols-2 gap-3 md:hidden pb-12">
                            {mobileColumns.map((column, columnIndex) => (
                                <div key={`mobile-column-${columnIndex}`} className="space-y-0">
                                    {column.map((item) => (
                                        renderGalleryCard(item, true)
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 pb-16">
                            {tabletColumns.map((column, columnIndex) => (
                                <div key={`tablet-column-${columnIndex}`} className="space-y-0">
                                    {column.map((item) => (
                                        renderGalleryCard(item)
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="hidden lg:grid grid-cols-4 gap-6 pb-20">
                            {desktopColumns.map((column, columnIndex) => (
                                <div key={`desktop-column-${columnIndex}`} className="space-y-0">
                                    {column.map((item) => (
                                        renderGalleryCard(item)
                                    ))}
                                </div>
                            ))}
                        </div>

                        {category === Category.RESIN && filteredWorkshops.length > 0 && (
                            <div className="mt-16">
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-art-text mb-6">Resin Workshop Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {filteredWorkshops.map((workshop) => (
                                        <div
                                            key={`resin-detail-${workshop.id}`}
                                            className="rounded-3xl border border-art-text/10 bg-white p-6 md:p-7 shadow-sm"
                                        >
                                            <h4 className="text-xl font-serif font-bold text-art-text mb-3">{workshop.title}</h4>
                                            <p className="text-sm md:text-base text-art-text/70 leading-relaxed">{workshop.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </>
                ) : (
                    // CARD VIEW (Original style for Kids, Resin, All)
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
                        {filteredWorkshops.map((workshop, idx) => (
                            <div 
                                key={workshop.id} 
                                role="button"
                                tabIndex={0}
                                onClick={() => onViewWorkshop(workshop)}
                                onKeyDown={(event) => {
                                  if (event.key === 'Enter' || event.key === ' ') {
                                    event.preventDefault();
                                    onViewWorkshop(workshop);
                                  }
                                }}
                                className="group flex flex-col h-full bg-[#fffdf9] rounded-[2rem] border border-art-text/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 overflow-hidden relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-art-text/20"
                                style={{ transitionDelay: `${idx * 50}ms` }}
                            >
                                {/* Image Area */}
                                <div className="aspect-[5/6] w-full overflow-hidden relative bg-art-beige/30">
                                    <img 
                                        src={workshop.image} 
                                        alt={workshop.title} 
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Content Area */}
                                <div className="flex-1 p-4 md:p-5 flex flex-col relative">
                                    <div className="mb-4 pt-1">
                                        <h3 className="text-lg md:text-xl font-serif font-bold text-art-text mb-2.5 leading-tight group-hover:text-art-green-dark transition-colors">
                                            {workshop.title}
                                        </h3>
                                        <p className="text-art-text/70 text-[13px] md:text-sm leading-relaxed font-sans">
                                            {category === Category.KIDS ? getShortDescription(workshop.description) : workshop.description}
                                        </p>
                                    </div>

                                    {/* Features / Meta */}
                                    <div className="mt-auto">
                                        <button
                                            onClick={(event) => {
                                              event.stopPropagation();
                                              onViewWorkshop(workshop);
                                            }}
                                            className="w-full py-3 rounded-xl font-bold font-quirky text-xs md:text-sm uppercase tracking-[0.18em] bg-art-text text-white hover:bg-art-green hover:text-art-text transition-all duration-300 flex items-center justify-center gap-2 border-2 border-art-text"
                                        >
                                            <span>View Details</span>
                                            <ArrowUpRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {(isGalleryView || category === Category.KIDS) && (
                    <div className="mt-12 md:mt-16">
                        <div className="text-center mb-6 md:mb-8">
                            <span className="block font-quirky font-bold text-xs uppercase tracking-[0.22em] text-art-text/45 mb-2">
                                Explore More
                            </span>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-art-text">
                                Continue The <span className={`${theme.accentColor} italic`}>Journey</span>
                            </h3>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                            <a
                                href="https://drive.google.com/file/d/1u2MsM6fplcObG9sMjOc7TD0CXQ7XtdnX/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-3 sm:gap-4 rounded-full border-2 border-art-text bg-[#FFF1CC] px-6 sm:px-10 py-4 sm:py-5 shadow-quirky transition-all duration-300 hover:-translate-y-1 hover:shadow-quirky-hover"
                            >
                                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-art-text bg-[#F8C83C] text-white transition-transform group-hover:rotate-12">
                                    <Images size={20} />
                                </span>
                                <span className="text-left">
                                    <span className="block font-quirky text-sm sm:text-base font-bold uppercase leading-none text-art-text mb-1">View Full Catalog</span>
                                    <span className="block font-sans text-xs sm:text-sm font-bold text-art-text/70">Open the complete portfolio</span>
                                </span>
                            </a>
                            <a
                                href={instagramLink}
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-3 sm:gap-4 rounded-full border-2 border-art-text bg-[#FFDCE8] px-6 sm:px-10 py-4 sm:py-5 shadow-quirky transition-all duration-300 hover:-translate-y-1 hover:shadow-quirky-hover"
                            >
                                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-art-text bg-[#E1306C] text-white transition-transform group-hover:rotate-12">
                                    <Instagram size={20} />
                                </span>
                                <span className="text-left">
                                    <span className="block font-quirky text-sm sm:text-base font-bold uppercase leading-none text-art-text mb-1">Instagram</span>
                                    <span className="block font-sans text-xs sm:text-sm font-bold text-art-text/70">See more captured moments</span>
                                </span>
                            </a>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-3 sm:gap-4 rounded-full border-2 border-art-text bg-[#DDF7E5] px-6 sm:px-10 py-4 sm:py-5 shadow-quirky transition-all duration-300 hover:-translate-y-1 hover:shadow-quirky-hover"
                            >
                                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-art-text bg-[#25D366] text-white transition-transform group-hover:rotate-12">
                                    <svg viewBox="0 0 32 32" className="h-8 w-8 fill-white" aria-hidden="true">
                                        <path d="M19.11 17.2c-.26-.13-1.52-.75-1.75-.83-.23-.09-.4-.13-.57.13-.17.26-.65.83-.8 1-.15.17-.3.2-.56.07-.26-.13-1.1-.4-2.1-1.28-.78-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.57-1.38-.79-1.89-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.46.06-.7.33-.24.26-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.73.13.17 1.84 2.8 4.46 3.93.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.08 1.52-.62 1.74-1.21.22-.59.22-1.1.15-1.2-.06-.1-.23-.17-.49-.3z" />
                                        <path d="M16.02 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.25.59 4.45 1.72 6.4L3 29l6.8-1.78a12.74 12.74 0 0 0 6.22 1.6h.01c7.07 0 12.8-5.73 12.8-12.8 0-3.43-1.34-6.66-3.77-9.08a12.69 12.69 0 0 0-9.04-3.74zm0 23.45h-.01a10.6 10.6 0 0 1-5.39-1.47l-.39-.23-4.03 1.06 1.08-3.93-.25-.4a10.62 10.62 0 1 1 8.99 4.97z" />
                                    </svg>
                                </span>
                                <span className="text-left">
                                    <span className="block font-quirky text-sm sm:text-base font-bold uppercase leading-none text-art-text mb-1">WhatsApp</span>
                                    <span className="block font-sans text-xs sm:text-sm font-bold text-art-text/70">Chat directly with Sonam</span>
                                </span>
                            </a>
                        </div>
                    </div>
                )}
                
                {/* Empty State */}
                {!isGalleryView && filteredWorkshops.length === 0 && (
                    <div className="text-center py-32">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Star size={40} className="text-gray-300"/>
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-art-text mb-2">More magic brewing...</h3>
                        <p className="text-gray-400 mb-8">We're curating new activities for {category}. Check back soon!</p>
                        <button onClick={onBack} className="text-art-green-dark font-bold hover:underline font-quirky uppercase tracking-wider text-sm">Return to Categories</button>
                    </div>
                )}

            </div>
        </div>
    </div>
  );
};

export default WorkshopGrid;
