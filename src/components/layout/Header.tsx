import { useState, useEffect, useCallback, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import ContactModal from "@/components/ContactModal";
import { useContactModal } from "@/hooks/use-contact-modal";
import { cn } from "@/lib/utils";
import logo from "../../../public/assets/GVS-logo.png";

// Utility function to debounce scroll events
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Custom X Icon (since lucide-react doesn't have an official X icon)
const XIcon = ({ size = 20, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.94 4.22c-.66.29-1.37.49-2.12.58.76-.46 1.35-1.18 1.62-2.04-.71.42-1.5.73-2.34.89-.67-.71-1.63-1.16-2.69-1.16-2.03 0-3.69 1.65-3.69 3.69 0 .29.03.57.09.84-3.06-.22-5.78-1.62-7.59-3.84-.32.55-.49 1.19-.49 1.85 0 1.28.65 2.41 1.64 3.07-.61-.02-1.18-.19-1.67-.46v.05c0 1.79 1.27 3.28 2.96 3.62-.31.08-.63.13-.97.13-.24 0-.46-.02-.68-.06.47 1.47 1.83 2.54 3.45 2.57-1.26.99-2.85 1.58-4.57 1.58-.3 0-.59-.02-.88-.05 1.64 1.05 3.59 1.67 5.68 1.67 6.79 0 10.51-5.62 10.51-10.51 0-.16 0-.32-.01-.47.72-.52 1.35-1.17 1.84-1.91l-.03-.02z" />
  </svg>
);

// Top Contact Navbar Component
const TopContactBar = () => (
  <div className="hidden lg:block bg-white/10 dark:bg-black/20 backdrop-blur-md py-3 border-b border-white/20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm font-inter text-[#4a0e78] dark:text-white/90">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Follow us:</span>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4a0e78] dark:text-white/90 hover:text-[#ff6f61] transition-transform duration-300 hover:scale-110"
          aria-label="Visit our Facebook page"
        >
          <Facebook size={20} />
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4a0e78] dark:text-white/90 hover:text-[#ff6f61] transition-transform duration-300 hover:scale-110"
          aria-label="Visit our X profile"
        >
          <XIcon size={20} className={undefined} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4a0e78] dark:text-white/90 hover:text-[#ff6f61] transition-transform duration-300 hover:scale-110"
          aria-label="Visit our Instagram page"
        >
          <Instagram size={20} />
        </a>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-sm font-medium text-white hidden xl:block">
          Leading Electrical Control Panel Manufacturer
        </span>
        <a
          href="mailto:gvscontrols@gmail.com"
          className="flex items-center gap-2 hover:text-[#ff6f61] transition-colors duration-300"
          aria-label="Email us at gvscontrols@gmail.com"
        >
          <Mail size={18} />
          <span className="text-sm">gvscontrols@gmail.com</span>
        </a>
        <a
          href="tel:+919958611814"
          className="flex items-center gap-2 hover:text-[#ff6f61] transition-colors duration-300"
          aria-label="Call us at +91 90877 72798"
        >
          <Phone size={18} />
          <span className="text-sm">+91 90877 72798</span>
        </a>
      </div>
    </div>
  </div>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const contactModal = useContactModal();
  const prevScrollY = useRef(0);

  const handleScroll = useCallback(
    debounce(() => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setIsVisible(currentScrollY < 50 || currentScrollY < prevScrollY.current);
      prevScrollY.current = currentScrollY;
    }, 50),
    []
  );

  useEffect(() => {
    prevScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Projects", path: "/projects" },
    { name: "Clients", path: "/clients" },
    { name: "Why Us", path: "/why-us" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const headerVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 500, damping: 40, mass: 0.5 },
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: { type: "spring", stiffness: 500, damping: 40, mass: 0.5 },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  const navItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 300, damping: 25 },
    }),
  };

  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 0.7 },
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="visible"
        animate={isVisible ? "visible" : "hidden"}
        className={cn(
          "fixed top-0 left-0 w-full z-[1000] will-change-transform",
          scrolled
            ? "bg-gradient-to-r from-[#b2ff8b] via-[#4ecdc4] to-[#2a9d8f] shadow-md"
            : "bg-gradient-to-r from-[#b2ff8b]/90 via-[#4ecdc4]/90 to-[#2a9d8f]/90"
        )}
      >
        <TopContactBar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between min-h-[60px]">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center shrink-0"
              onClick={handleNavClick}
            >
              <img
                src={logo}
                alt="GVS Controls Logo"
                className="h-8 w-auto transition-transform hover:scale-105"
              />
            </NavLink>

            {/* Title and Slogan (Centered in Mobile) */}
            <div className="flex-1 flex justify-center items-center lg:hidden">
              <div className="text-center">
                <span className="block text-[#4a0e78] font-montserrat font-bold text-base">
                  GVS Controls
                </span>
                <span className="block text-[#ff6f61] text-xs font-medium">
                  Engineering Solutions
                </span>
              </div>
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#4a0e78] hover:text-[#ff6f61] p-2 rounded-full hover:bg-white/20 transition-all duration-300"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-end w-full lg:w-auto mt-2 lg:mt-0">
              <nav className="flex items-center">
                <div className="flex items-center gap-1 bg-white/20 border border-white/30 rounded-full py-1 px-2">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      end
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        cn(
                          "text-sm font-semibold px-3 py-1.5 rounded-full transition-colors whitespace-nowrap",
                          isActive
                            ? "bg-gradient-to-r from-[#ff6f61]/20 to-[#ffd700]/20 text-[#ff6f61]"
                            : "text-[#4a0e78] hover:text-[#ff6f61] hover:bg-white/10"
                        )
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </nav>
              <Button
                variant="gradient"
                size="sm"
                className="ml-4 bg-gradient-to-r from-[#ff6f61] to-[#4a0e78] text-white hover:from-[#4a0e78] hover:to-[#ff6f61] text-sm px-4 py-1.5 rounded-full whitespace-nowrap shrink-0"
                onClick={() => contactModal.onOpen()}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden fixed inset-0 bg-black/70 z-[1999]"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="lg:hidden fixed top-0 right-0 w-4/5 max-w-[320px] max-h-screen z-[2000] bg-gradient-to-br from-[#ffffff] via-[#f8f9fa] to-[#e9ecef] shadow-2xl overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="h-full flex flex-col overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-[#b2ff8b]/20 via-[#4ecdc4]/20 to-[#2a9d8f]/20">
                  <NavLink to="/" className="flex items-center" onClick={handleNavClick}>
                    <img src={logo} alt="GVS Controls Logo" className="h-8 w-auto" />
                  </NavLink>
                  <div className="flex-1 text-center">
                    <span className="block text-[#4a0e78] font-montserrat font-bold text-base">
                      GVS Controls
                    </span>
                    <span className="block text-[#ff6f61] text-xs font-medium">
                      Engineering Solutions
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#4a0e78] hover:text-[#ff6f61] p-2 rounded-full hover:bg-white/20 transition-all duration-300"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex-1 flex flex-col p-4">
                  <div className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        custom={index}
                        variants={navItemVariants}
                        initial="closed"
                        animate="open"
                      >
                        <NavLink
                          to={link.path}
                          end
                          onClick={handleNavClick}
                          className={({ isActive }) =>
                            cn(
                              "block text-base font-semibold px-3 py-2 rounded-lg transition-all duration-300",
                              isActive
                                ? "bg-gradient-to-r from-[#ff6f61]/20 to-[#ffd700]/20 text-[#ff6f61] shadow-md"
                                : "text-[#4a0e78] hover:bg-[#4ecdc4]/10 hover:text-[#ff6f61] hover:shadow-sm"
                            )
                          }
                        >
                          {link.name}
                        </NavLink>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    variants={navItemVariants}
                    custom={navLinks.length}
                    initial="closed"
                    animate="open"
                    className="pt-4 border-t border-gray-200 mt-auto"
                  >
                    <div className="text-center text-[#4a0e78] mb-4">
                      <p className="flex items-center justify-center gap-2 text-sm">
                        <Phone size={16} />
                        <a href="tel:+919958611814" className="hover:text-[#ff6f61] transition-colors">
                          +91 90877 72798
                        </a>
                      </p>
                      <p className="flex items-center justify-center gap-2 mt-2 text-sm">
                        <Mail size={16} />
                        <a href="mailto:gvscontrols@gmail.com" className="hover:text-[#ff6f61] transition-colors">
                          gvscontrols@gmail.com
                        </a>
                      </p>
                      <div className="flex justify-center gap-4 mt-3">
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4a0e78] hover:text-[#ff6f61] transition-colors"
                          aria-label="Visit our Facebook page"
                        >
                          <Facebook size={20} />
                        </a>
                        <a
                          href="https://x.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4a0e78] hover:text-[#ff6f61] transition-colors"
                          aria-label="Visit our X profile"
                        >
                          <XIcon size={20} className={undefined} />
                        </a>
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4a0e78] hover:text-[#ff6f61] transition-colors"
                          aria-label="Visit our Instagram page"
                        >
                          <Instagram size={20} />
                        </a>
                      </div>
                    </div>
                    <Button
                      variant="gradient"
                      className="w-full bg-gradient-to-r from-[#ff6f61] to-[#4a0e78] text-white hover:from-[#4a0e78] hover:to-[#ff6f61] rounded-lg py-2.5 text-sm font-semibold"
                      onClick={(e) => {
                        e.stopPropagation();
                        setMobileMenuOpen(false);
                        setTimeout(() => contactModal.onOpen(), 300);
                      }}
                    >
                      Contact Us
                    </Button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ContactModal open={contactModal.isOpen} onOpenChange={contactModal.onToggle} />
    </>
  );
};

export default Header;