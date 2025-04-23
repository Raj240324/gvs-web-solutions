import { ArrowRight, X, Mail, BookOpen, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ImagesSlider from "../home/ImageSlider";
import ContactModal from "../ContactModal";

// Define types for content
interface Content {
  title: string;
  badge: string;
  description: string;
  images: string[];
}

// Placeholder images (replace with GVS CONTROLS-specific images if available)
const images: string[] = [
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1581091877018-4b6e1d1c1c7d?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1581091012184-7b7f7c1a1e7a?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1581092160607-36e2f7c0c7b2?auto=format&fit=crop&w=1920&q=80",
];

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [currentContent, setCurrentContent] = useState<number>(0);
  const [expandedButton, setExpandedButton] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isHeroVisible, setIsHeroVisible] = useState<boolean>(true);
  const navigate = useNavigate(); // Initialize useNavigate

  const contents: Content[] = [
    {
      title: "GVS Controls - Powering Industries",
      badge: "Since 2017",
      description:
        "With over 30 years of expertise in EPC projects, we deliver cutting-edge electrical and automation solutions for power plants, renewable energy, steel, cement, and more. Trust us for innovative consultancy, manufacturing, and system integration.",
      images: [images[0], images[1]],
    },
    {
      title: "Medium Voltage Panels & Control Centers",
      badge: "Precision Manufacturing",
      description:
        "We design and manufacture Medium Voltage Panels, Power Control Centers, and Motor Control Centers for seamless industrial operations. Our panels ensure reliability and efficiency across power plants, cement, and steel industries.",
      images: [images[2], images[3]],
    },
    {
      title: "้นAutomation & Instrumentation",
      badge: "Smart Solutions",
      description:
        "Our process automation and instrumentation solutions optimize operations in chemical plants, water treatment, and automobile industries. From PLC control panels to field instruments, we deliver tailored automation systems.",
      images: [images[4], images[0]],
    },
    {
      title: "Turnkey Project Management",
      badge: "End-to-End Execution",
      description:
        "From consultancy to commissioning, we manage turnkey projects with precision. Our services include system design, equipment sizing, installation, and revamping of electrical systems for industries like renewable energy and cooling towers.",
      images: [images[1], images[2]],
    },
  ];

  useEffect(() => {
    const loadingTimeout = setTimeout(() => setIsLoaded(true), 300);
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contents.length);
    }, 8000);

    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setIsHeroVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      clearTimeout(loadingTimeout);
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const current: Content = contents[currentContent];

  const buttons = [
    {
      id: "inquiry",
      href: "/contact", // Update href to /contact
      icon: "Mail",
      color: "#f28e38",
      hoverColor: "#d67a30",
      text: "Send Inquiry",
      action: () => navigate("/contact"), // Navigate to /contact
    },
    {
      id: "catalogue",
      href: "/catalogue",
      icon: "BookOpen",
      color: "#f28e38",
      hoverColor: "#d67a30",
      text: "Catalogue",
      action: () => alert("Catalogue PDF opened"),
    },
    {
      id: "call",
      href: "tel:+919884001597",
      icon: "Phone",
      color: "#4a4a4a",
      hoverColor: "#333333",
      text: "Call",
      action: () => alert("Call initiated to +91 9884001597"),
    },
    {
      id: "whatsapp",
      href: "/whatsapp",
      icon: "WhatsApp",
      color: "#25D366",
      hoverColor: "#1DA851",
      text: "WhatsApp",
      action: () => alert("WhatsApp chat opened"),
    },
  ];

  const expandVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "16rem", opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.5 } },
    exit: { width: 0, opacity: 0, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.5 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.3 } },
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 pt-24 lg:pt-32 overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-full h-full bg-gradient-to-r from-teal-500/10 to-blue-500/10"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row h-full z-10">
        {/* Left Side - Images Slider with Parallax */}
        <motion.div
          className="w-full lg:w-1/2 h-[50vh] lg:h-[calc(100vh-160px)] relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <ImagesSlider
            className="h-full w-full rounded-2xl shadow-2xl object-cover"
            images={current.images}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
        </motion.div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentContent}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-lg bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20"
            >
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-600 text-white text-sm font-semibold mb-6 shadow-lg"
              >
                {current.badge}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl lg:text-4xl font-extrabold leading-tight mb-6 tracking-tight text-white font-roboto"
              >
                {current.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base lg:text-lg text-gray-200 mb-8 leading-relaxed font-light"
              >
                {current.description}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-sm text-gray-300 mt-6 italic"
              >
                Trusted by SAIL, NTPC, Aditya Birla Group, and more
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Fixed button stack in right-middle corner, visible only in Hero section */}
      <div
        className={`fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-3 z-50 transition-opacity duration-300 ${
          isHeroVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {buttons.map((button, index) => {
          const isMiddleButton = index === 1; // Catalogue button

          return (
            <div key={button.id} className="relative">
              <motion.button
                onClick={() => setExpandedButton(expandedButton === button.id ? null : button.id)}
                aria-label={button.text}
                className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${button.color}]/50 shadow-[0_0_12px_rgba(255,255,255,0.3)] ${
                  isMiddleButton
                    ? "bg-gradient-to-br from-orange-500 to-red-600 shadow-[0_0_18px_rgba(242,142,56,0.7)]"
                    : `bg-gradient-to-br from-[${button.color}] to-[${button.color}]/70`
                }`}
                animate={{ scale: isMiddleButton ? [1, 1.06, 1] : [1, 1.04, 1] }}
                transition={{ repeat: Infinity, duration: isMiddleButton ? 1.8 : 2.2, ease: "easeInOut" }}
                whileHover={{ scale: 1.2, boxShadow: `0 0 25px rgba(255,255,255,0.5)` }}
                whileTap={{ scale: 0.85 }}
              >
                <span className="text-xl">
                  {button.id === "inquiry" && <Mail size={24} />}
                  {button.id === "catalogue" && <BookOpen size={24} />}
                  {button.id === "call" && <Phone size={24} />}
                  {button.id === "whatsapp" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.669-.719-.911-.99-.24-.272-.482-.558-.707-.558-.224 0-.423-.024-.602-.074-.178-.05-.999-.233-1.522.335-.522.558-.923 1.692-.99 2.785-.074 1.092.452 3.385.916 4.61.465 1.224 3.234 5.158 8.007 7.233 1.158.5 2.066.674 2.774.558.707-.117 2.19-.867 2.498-1.71.307-.842.307-1.567.223-1.716-.086-.149-.322-.223-.52-.347zm-5.648 7.617A11.93 11.93 0 01.96 12.075 A11.93 11.93 0 0111.824 2.15c3.198 0 6.22 1.245 8.485 3.505a11.93 11.93 0 012.74 8.42 11.93 11.93 0 01-11.777 11.524zm0-21.998C5.296 0 0 5.296 0 11.824c0 2.132.582 4.243 1.683 6.095L0 24l6.308-1.657a11.93 11.93 0 005.516 1.346c6.528 0 11.824-5.296 11.824-11.824S18.352 0 11.824 0z" />
                    </svg>
                  )}
                </span>
                {isMiddleButton && (
                  <motion.span
                    className="absolute inset-0 rounded-xl border-2 border-orange-400 opacity-60"
                    style={{ pointerEvents: "none" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </motion.button>
              <AnimatePresence>
                {expandedButton === button.id && (
                  <motion.div
                    variants={expandVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-teal-500 to-blue-600 bg-opacity-90 backdrop-blur-md text-white p-4 rounded-xl shadow-lg border border-white/20"
                    style={{ minWidth: "16rem", maxWidth: "20rem", minHeight: "8rem" }}
                  >
                    <motion.div className="flex justify-between items-center mb-2">
                      <motion.h3
                        variants={contentVariants}
                        className="text-lg font-semibold font-poppins"
                      >
                        {button.text}
                      </motion.h3>
                      <motion.button
                        onClick={() => setExpandedButton(null)}
                        variants={contentVariants}
                        whileHover={{ rotate: 90, scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                        className="text-white hover:text-gray-300 focus:outline-none"
                      >
                        <X size={20} />
                      </motion.button>
                    </motion.div>
                    <motion.p
                      variants={contentVariants}
                      className="text-sm mb-4 font-poppins"
                    >
                      {button.text === "Send Inquiry" && "Fill out the form to get in touch."}
                      {button.text === "Catalogue" && "Download our latest catalogue."}
                      {button.text === "Call" && "Contact us directly at +91 9884001597."}
                      {button.text === "WhatsApp" && "Chat with us instantly."}
                    </motion.p>
                    <motion.a
                      variants={contentVariants}
                      href={button.href}
                      onClick={(e) => {
                        e.preventDefault();
                        button.action();
                      }}
                      className="inline-flex items-center px-3 py-1 bg-white text-teal-600 font-semibold rounded-md hover:bg-gray-100 transition-colors duration-300"
                    >
                      Proceed <ArrowRight className="ml-1 h-4 w-4" />
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Contact Modal with EmailJS (optional, can be removed if not needed) */}
      <ContactModal open={showModal} onOpenChange={setShowModal} />
    </section>
  );
};

export default Hero;