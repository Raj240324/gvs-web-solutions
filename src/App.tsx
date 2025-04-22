import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner"; // Renamed to avoid confusion
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";

// Pages (verify these files exist in src/pages)
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import WhyUs from "./pages/WhyUs";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

// Components (verify these files exist in src/components)
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate application loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Initialize AOS-like animations on page load
  useEffect(() => {
    if (!isLoading) {
      // Debounce scroll handler to optimize performance
      const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
          clearTimeout(timeout);
          timeout = setTimeout(() => func(...args), wait);
        };
      };

      const handleScroll = debounce(() => {
        const elements = document.querySelectorAll('.aos-fade-up, .aos-fade-in, .aos-fade-right, .aos-fade-left');
        elements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;
          if (rect.top <= windowHeight * 0.75) {
            element.classList.add('aos-animate');
          }
        });
      }, 50);

      // Initial check
      setTimeout(handleScroll, 100);

      // Add scroll event listener
      window.addEventListener('scroll', handleScroll, { passive: true });

      // Cleanup
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isLoading]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <SonnerToaster />
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Header />
            {/* Cookie Consent Popup */}
            <CookieConsent
              location="bottom"
              buttonText="Accept All"
              declineButtonText="Reject Non-Essential"
              cookieName="gvsControlsCookieConsent"
              style={{
                background: '#1e2a44',
                color: '#e0f7fa',
                fontFamily: 'Montserrat, sans-serif',
                padding: '1rem',
                borderTop: '2px solid #2a9d8f',
                zIndex: 1000,
              }}
              buttonStyle={{
                background: '#2a9d8f',
                color: '#e0f7fa',
                fontWeight: '600',
                padding: '0.5rem 1rem',
                borderRadius: '0.25rem',
                transition: 'background 0.3s',
              }}
              declineButtonStyle={{
                background: '#ff6f61',
                color: '#e0f7fa',
                fontWeight: '600',
                padding: '0.5rem 1rem',
                borderRadius: '0.25rem',
                transition: 'background 0.3s',
              }}
              enableDeclineButton
              onAccept={() => {
                console.log('Cookies accepted');
              }}
              onDecline={() => {
                console.log('Non-essential cookies rejected');
              }}
            >
              <span style={{ fontSize: '1rem' }}>
                We use cookies to enhance your experience on www.gvscontrols.com, as described in our{' '}
                <a
                  href="/cookie-policy"
                  style={{ color: '#ff6f61', textDecoration: 'underline' }}
                >
                  Cookie Policy
                </a>
                . By clicking "Accept All," you agree to the use of all cookies, including analytics and marketing cookies for personalized content. You can reject non-essential cookies or manage preferences via your browser settings.
              </span>
            </CookieConsent>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <BackToTop />
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;