import React, { Suspense, lazy, useEffect } from 'react';
import { Navigate, Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import ActivityCategories from './components/ActivityCategories';
import CalendarSection from './components/CalendarSection';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import QuoteForm from './components/QuoteForm';
import WorkshopDetail from './components/WorkshopDetail';
import { WORKSHOPS } from './constants';
import { Category, Workshop } from './types';

const AboutUs = lazy(() => import('./components/AboutUs'));
const WorkshopGrid = lazy(() => import('./components/WorkshopGrid'));

const CATEGORY_SLUGS: Record<Category, string> = {
  [Category.ALL]: 'all',
  [Category.KIDS]: 'kids-art-activities',
  [Category.RESIN]: 'resin-art',
  [Category.HAMPERS]: 'gift-hampers',
  [Category.CORPORATE_ADULT]: 'corporate-adult-art-activities',
  [Category.RETURN_GIFTS]: 'return-gift-options',
};

const getCategorySlug = (category: Category) => CATEGORY_SLUGS[category];

const getCategoryFromSlug = (slug: string) =>
  (Object.entries(CATEGORY_SLUGS).find(([, value]) => value === slug)?.[0] as Category | undefined);

const scrollToSection = (sectionId: string) => {
  window.setTimeout(() => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
};

const ScrollManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      scrollToSection(location.hash.replace('#', ''));
      return;
    }

    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
};

const HomePage: React.FC<{ onCategoryClick: (category: Category) => void }> = ({ onCategoryClick }) => (
  <>
    <Hero
      onCtaClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
      onExploreClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
    />
    <ActivityCategories onCategoryClick={onCategoryClick} />
    <Gallery />
    <CalendarSection />
    <QuoteForm />
  </>
);

const AboutPage: React.FC = () => (
  <Suspense fallback={<div className="py-20 text-center text-art-text/60">Loading...</div>}>
    <AboutUs />
  </Suspense>
);

const CategoryPage: React.FC = () => {
  const navigate = useNavigate();
  const { categorySlug } = useParams();

  if (!categorySlug) {
    return <Navigate to="/" replace />;
  }

  const category = getCategoryFromSlug(categorySlug);
  if (!category) {
    return <Navigate to="/" replace />;
  }

  return (
    <Suspense fallback={<div className="py-20 text-center text-art-text/60">Loading...</div>}>
      <WorkshopGrid
        category={category}
        onBack={() => navigate({ pathname: '/', hash: '#activities' })}
        onViewWorkshop={(workshop) => navigate(`/activities/${categorySlug}/${workshop.id}`)}
      />
    </Suspense>
  );
};

const WorkshopPage: React.FC = () => {
  const navigate = useNavigate();
  const { categorySlug, workshopId } = useParams();

  if (!categorySlug || !workshopId) {
    return <Navigate to="/" replace />;
  }

  const category = getCategoryFromSlug(categorySlug);
  if (!category) {
    return <Navigate to="/" replace />;
  }

  const workshop = WORKSHOPS.find(
    (item: Workshop) => item.id === workshopId && item.categories.includes(category)
  );

  if (!workshop) {
    return <Navigate to={`/activities/${categorySlug}`} replace />;
  }

  return (
    <WorkshopDetail
      workshop={workshop}
      onBack={() => navigate(`/activities/${categorySlug}`)}
      onBook={() => navigate({ pathname: '/', hash: '#quote' })}
    />
  );
};

const App: React.FC = () => {
  const navigate = useNavigate();
  const whatsappLink = 'https://wa.me/message/Y4KIHBXFIBEOA1';

  const handleCategoryClick = (category: Category) => {
    navigate(`/activities/${getCategorySlug(category)}`);
  };

  return (
    <div className="min-h-screen bg-art-beige font-sans selection:bg-art-green selection:text-white flex flex-col">
      <ScrollManager />
      <Navbar />

      <main className="relative z-10 flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onCategoryClick={handleCategoryClick} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/activities/:categorySlug" element={<CategoryPage />} />
          <Route path="/activities/:categorySlug/:workshopId" element={<WorkshopPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact on WhatsApp"
        className="fixed right-6 bottom-6 z-[60] w-14 h-14 rounded-full bg-[#25D366] shadow-lg border-2 border-white flex items-center justify-center hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white" aria-hidden="true">
          <path d="M19.11 17.2c-.26-.13-1.52-.75-1.75-.83-.23-.09-.4-.13-.57.13-.17.26-.65.83-.8 1-.15.17-.3.2-.56.07-.26-.13-1.1-.4-2.1-1.28-.78-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.57-1.38-.79-1.89-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.46.06-.7.33-.24.26-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.73.13.17 1.84 2.8 4.46 3.93.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.08 1.52-.62 1.74-1.21.22-.59.22-1.1.15-1.2-.06-.1-.23-.17-.49-.3z" />
          <path d="M16.02 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.25.59 4.45 1.72 6.4L3 29l6.8-1.78a12.74 12.74 0 0 0 6.22 1.6h.01c7.07 0 12.8-5.73 12.8-12.8 0-3.43-1.34-6.66-3.77-9.08a12.69 12.69 0 0 0-9.04-3.74zm0 23.45h-.01a10.6 10.6 0 0 1-5.39-1.47l-.39-.23-4.03 1.06 1.08-3.93-.25-.4a10.62 10.62 0 1 1 8.99 4.97z" />
        </svg>
      </a>

      <Footer />
    </div>
  );
};

export default App;
