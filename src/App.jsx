import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import About from './components/About';
import Services from './components/Services';
import Feedback from './components/Feedback';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPolicy from './components/Extras/PrivacyPolicy';
import TermsAndConditions from './components/Extras/TermsAndConditions';
import MobileApp from './components/MobileApp';

const App = () => {
  const [language, setLanguage] = useState("English");
  const [showPlatform, setShowPlatform] = useState(false);
  const [platformInitialView, setPlatformInitialView] = useState(null);

  // Scroll to the top on route change
  const ScrollToTop = () => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return null;
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Navbar 
          language={language} 
          setLanguage={setLanguage}
          setShowPlatform={setShowPlatform}
          setPlatformInitialView={setPlatformInitialView}
        />
        <Routes>
          <Route path="*" element={
            <>
              <Hero 
                language={language} 
                setShowPlatform={setShowPlatform}
                setPlatformInitialView={setPlatformInitialView}
              />
              <About 
                language={language} 
                setShowPlatform={setShowPlatform}
                setPlatformInitialView={setPlatformInitialView}
              />
              <Services />
              <Mission language={language} />
              <Feedback />
              <Offer language={language} setShowPlatform={setShowPlatform} />
              <MobileApp />
              <FAQ />
              <Footer />
            </>
          } />
          <Route path="/privacy-policy" element={<><PrivacyPolicy /><Footer /></>} />
          <Route path="/terms-and-conditions" element={<><TermsAndConditions /><Footer /></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;



