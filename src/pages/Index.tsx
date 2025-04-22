import Highlights from '@/components/home/Highlights';
import FeaturedClients from '@/components/home/FeaturedClients';
import { Link } from 'react-router-dom';
import { ArrowRight, GanttChartSquare, Award, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import { useContactModal } from '@/hooks/use-contact-modal';
import Hero from '@/components/home/Hero';
import AnimatedGVSTestimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';



const Index = () => {
  const contactModal = useContactModal();
  const statsRef = useRef(null);

  useEffect(() => {
    document.title = 'GVS Controls - Innovative Electrical Engineering Solutions';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'GVS Controls offers innovative electrical and automation solutions for industries like power, steel, and renewable energy.');
    }
  
    const handleScroll = () => {
      // Define windowHeight at the top of the function to ensure it's in scope
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
      // AOS animation logic
      const elements = document.querySelectorAll('.aos-fade-up, .aos-fade-in, .aos-fade-right, .aos-fade-left');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.8) {
          element.classList.add('aos-animate');
        }
      });
  
      // Stats counter animation logic
      if (statsRef.current && !statsRef.current.dataset.animated) {
        const statsRect = statsRef.current.getBoundingClientRect();
        if (statsRect.top <= windowHeight * 0.9) {
          statsRef.current.dataset.animated = 'true';
          const counters = statsRef.current.querySelectorAll('.stat-counter');
          counters.forEach(counter => {
            const target = parseInt(counter.dataset.target);
            let count = 0;
            const increment = target / 50;
            const updateCounter = () => {
              count += increment;
              if (count < target) {
                counter.textContent = Math.ceil(count);
                requestAnimationFrame(updateCounter);
              } else {
                counter.textContent = target + '+';
              }
            };
            requestAnimationFrame(updateCounter);
          });
        }
      }
    };
  
    setTimeout(handleScroll, 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <Hero />
      
      <section className="section-padding bg-gradient-to-br from-indigo-600 via-teal-400 to-purple-500 dark:from-indigo-900 dark:via-teal-800 dark:to-purple-900 relative overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-0 w-64 h-64 bg-gvs-blue/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gvs-green/20 rounded-full blur-3xl animate-pulse delay-1000" />
  </div>
  <div className="container-custom relative z-10">
    <div className="text-center mb-12">
      <span className="inline-block px-4 py-1 bg-white/20 dark:bg-black/20 text-white rounded-full text-sm font-semibold tracking-wide mb-4 animate-fade-in backdrop-blur-sm">
        About Us
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Engineering Excellence Since <span className="bg-gradient-to-r from-gvs-blue to-gvs-green text-transparent bg-clip-text">2017</span>
      </h2>
      <p className="text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200">
        M/s GVS Controls, founded in 2017, delivers innovative, cost-effective engineering solutions, redefining customer satisfaction through advanced automation and man-machine interfaces.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {/* Flip Card 1: Our Foundation */}
      <div className="flip-card group">
        <div className="flip-card-inner">
          <div className="flip-card-front bg-gradient-to-br from-gvs-blue/10 to-blue-100 dark:from-gvs-blue/20 dark:to-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center glassmorphic border border-white/20 transition-transform duration-300 group-hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-gvs-blue/30 to-gvs-blue/10 dark:from-gvs-blue/40 dark:to-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-7 h-7 text-gvs-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gvs-dark-gray dark:text-white bg-clip-text bg-gradient-to-r from-gvs-blue to-blue-600 dark:from-gvs-blue dark:to-blue-400 text-transparent">
              Our Foundation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 font-medium">Est. 2017</p>
          </div>
          <div className="flip-card-back bg-gradient-to-br from-gvs-blue to-blue-600 text-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center">
            <p className="text-sm leading-relaxed line-clamp-6">
              Founded in 2017, M/s GVS Controls provides innovative, cost-effective engineering solutions, emphasizing a problem-solving culture to optimize man-machine interfaces and redefine customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Flip Card 2: Our Experience */}
      <div className="flip-card group">
        <div className="flip-card-inner">
          <div className="flip-card-front bg-gradient-to-br from-gvs-green/10 to-green-100 dark:from-gvs-green/20 dark:to-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center glassmorphic border border-white/20 transition-transform duration-300 group-hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-gvs-green/30 to-gvs-green/10 dark:from-gvs-green/40 dark:to-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-7 h-7 text-gvs-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gvs-dark-gray dark:text-white bg-clip-text bg-gradient-to-r from-gvs-green to-green-600 dark:from-gvs-green dark:to-green-400 text-transparent">
              Our Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 font-medium">30+ Years</p>
          </div>
          <div className="flip-card-back bg-gradient-to-br from-gvs-green to-green-600 text-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center">
            <p className="text-sm leading-relaxed line-clamp-6">
              With over 30 years of EPC project experience, our promoters have worked with industry leaders like Shriram EPC Ltd. and L&T, serving sectors like power plants, material handling, and renewable energy.
            </p>
          </div>
        </div>
      </div>

      {/* Flip Card 3: Our Expertise */}
      <div className="flip-card group">
        <div className="flip-card-inner">
          <div className="flip-card-front bg-gradient-to-br from-gvs-red/10 to-red-100 dark:from-gvs-red/20 dark:to-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center glassmorphic border border-white/20 transition-transform duration-300 group-hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-gvs-red/30 to-gvs-red/10 dark:from-gvs-red/40 dark:to-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-7 h-7 text-gvs-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gvs-dark-gray dark:text-white bg-clip-text bg-gradient-to-r from-gvs-red to-red-600 dark:from-gvs-red dark:to-red-400 text-transparent">
              Our Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 font-medium">Automation</p>
          </div>
          <div className="flip-card-back bg-gradient-to-br from-gvs-red to-red-600 text-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center">
            <p className="text-sm leading-relaxed line-clamp-6">
              We specialize in total automation, process control, and instrumentation, designing cost-effective systems and providing pragmatic site services for diverse industries.
            </p>
          </div>
        </div>
      </div>

      {/* Flip Card 4: Our Services */}
      <div className="flip-card group">
        <div className="flip-card-inner">
          <div className="flip-card-front bg-gradient-to-br from-gvs-yellow/10 to-yellow-100 dark:from-gvs-yellow/20 dark:to-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center glassmorphic border border-white/20 transition-transform duration-300 group-hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-gvs-yellow/30 to-gvs-yellow/10 dark:from-gvs-yellow/40 dark:to-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-7 h-7 text-gvs-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gvs-dark-gray dark:text-white bg-clip-text bg-gradient-to-r from-gvs-yellow to-yellow-600 dark:from-gvs-yellow dark:to-yellow-400 text-transparent">
              Our Services
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 font-medium">Solutions</p>
          </div>
          <div className="flip-card-back bg-gradient-to-br from-gvs-yellow to-yellow-600 text-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center">
            <p className="text-sm leading-relaxed line-clamp-6">
              We offer consultancy, manufacturing (control panels, bus ducts), and services like erection, testing, and revamping of electrical systems for safety and efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Flip Card 5: Our Clients */}
      <div className="flip-card group">
        <div className="flip-card-inner">
          <div className="flip-card-front bg-gradient-to-br from-gvs-purple/10 to-purple-100 dark:from-gvs-purple/20 dark:to-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center glassmorphic border border-white/20 transition-transform duration-300 group-hover:scale-105">
            <div className="w-14 h-14 bg-gradient-to-br from-gvs-purple/30 to-gvs-purple/10 dark:from-gvs-purple/40 dark:to-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-7 h-7 text-gvs-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gvs-dark-gray dark:text-white bg-clip-text bg-gradient-to-r from-gvs-purple to-purple-600 dark:from-gvs-purple dark:to-purple-400 text-transparent">
              Our Clients
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 font-medium">Partners</p>
          </div>
          <div className="flip-card-back bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center">
            <p className="text-sm leading-relaxed line-clamp-6">
              We’ve partnered with clients like SAIL, TISCO, RINL, CPCL, and Aditya Birla Group, collaborating with consultants like EIL and MECON.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mt-12 animate-fade-in delay-400">
      <Link to="/about" className="inline-flex items-center text-white font-medium hover:text-gvs-green transition-colors group">
        Discover Our Full Story
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2 duration-300" />
      </Link>
    </div>
  </div>
</section>

      <Highlights />
      <FeaturedClients />
      <AnimatedGVSTestimonials />
    

    

      <FAQ />

      <section className="section-padding bg-gvs-light-gray dark:bg-black/20 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="bg-white dark:bg-gvs-dark-gray/80 rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto glassmorphic relative overflow-hidden">
            <div className="absolute inset-0 pulsating-bg" />
            <h2 className="text-3xl md:text-4xl font-bold text-gvs-dark-gray dark:text-white mb-6 animate-text-reveal">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
              Our team of expert engineers is ready to help you with your electrical systems, automation, and engineering needs.
            </p>
            <Button 
              variant="gradient" 
              size="lg" 
              className="relative ripple-button overflow-hidden"
              onClick={contactModal.onOpen}
            >
              <span className="relative z-10">Get in Touch</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;