import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const Highlights = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Expertise Data
  const expertiseContent = [
    {
      title: 'Consultancy',
      description: 'Project management consultancy (PMC), system design, engineering, and procurement assistance for turnkey projects.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      gradient: 'from-blue-600 to-indigo-700',
      serviceId: 'consultancy-engineering', // Maps to Services component ID
    },
    {
      title: 'Automation',
      description: 'Total automation and process control solutions with PLC and relay logic systems for optimal operational efficiency.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      gradient: 'from-teal-600 to-cyan-700',
      serviceId: 'automation-solutions', // Maps to Services component ID
    },
    {
      title: 'Product Manufacturing',
      description: 'Manufacture of electrical control panels adhering to IE standards, including MV Panels, PCC, MCC, and VFD Panels.',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      gradient: 'from-orange-600 to-red-700',
      serviceId: 'panel-manufacturing', // Maps to Services component ID
    },
    {
      title: 'Erection & Commissioning',
      description: 'Installation, troubleshooting, and commissioning of electrical systems and panels for seamless operation.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      gradient: 'from-gray-600 to-blue-700',
      serviceId: 'installation-commissioning', // Maps to Services component ID
    },
    {
      title: 'Renovation & Revamping',
      description: 'Upgrading existing electrical systems to enhance safety, efficiency, and compliance with current standards.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      gradient: 'from-purple-600 to-pink-700',
      serviceId: 'renovation-revamping', // Maps to Services component ID
    },
  ];

  // Handle card click to navigate to services page with hash
  const handleCardClick = (serviceId) => {
    navigate(`/services#${serviceId}`);
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            variants={textVariants}
            className="inline-block px-4 py-2 bg-gradient-to-r from-[#ff6f61] to-[#4a0e78] text-white text-sm font-semibold rounded-full mb-4 shadow-md"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            variants={textVariants}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight"
          >
            Engineering Excellence Unveiled
          </motion.h2>
          <motion.p
            variants={textVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto"
          >
            Discover our comprehensive solutions designed to elevate your projects with innovation and precision.
          </motion.p>
        </motion.div>

        {/* Expertise Cards */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {expertiseContent.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => handleCardClick(item.serviceId)} // Use serviceId for navigation
              className="relative group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              {/* Image with Gradient Overlay */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}
                />
                <h3 className="absolute bottom-4 left-4 text-xl md:text-2xl font-bold text-white z-10">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#ff6f61]/20 to-[#4a0e78]/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
export { Highlights };