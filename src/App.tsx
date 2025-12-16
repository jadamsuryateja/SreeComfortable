import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { OurWorksPage } from './pages/OurWorks';
import { ProjectDetails } from './pages/ProjectDetails';
import { ContactPage } from './pages/Contact';

import { Footer } from './components/ui/footer';

import ScrollToTop from './components/ScrollToTop';
import { CustomCursor } from './components/ui/custom-cursor';
import { MarqueeStrip } from './components/ui/marquee-strip';

function App() {
  return (
    <Router>
      <MarqueeStrip />
      <ScrollToTop />
      <CustomCursor />
      <div className="min-h-screen bg-mesh-theme flex flex-col font-sans">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={
              <div className="pt-24 px-4 min-h-screen">
                <h1 className="text-4xl font-bold text-center text-white">Our Services</h1>
                <p className="text-center text-neutral-400 mt-4">Coming soon...</p>
              </div>
            } />
            <Route path="/works" element={<OurWorksPage />} />
            <Route path="/works/:category" element={<OurWorksPage />} />
            <Route path="/our-works/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
