import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle, Factory, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Define project types
type ProjectCategory = 'All' | 'Power' | 'Steel' | 'Water' | 'Chemical' | 'Automation';

interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isInView, setIsInView] = useState(false);
  const [isCaseStudiesInView, setIsCaseStudiesInView] = useState(false);
  const [isPartnerInView, setIsPartnerInView] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const partnerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const projects: Project[] = [
    {
      id: '1',
      title: 'Samson/BRU Feeder for ACC Ametha',
      description: 'Design, engineering, supply, and commissioning of Samson/BRU Feeder systems for ACC Ametha, enhancing material flow efficiency.',
      category: 'Steel',
    },
    {
      id: '2',
      title: 'Paddle Feeder for Meenakshi Energy, Nellore',
      description: 'Supply and commissioning of Paddle Feeder systems for 2x350 MW Meenakshi Energy plant in Nellore, improving fuel handling.',
      category: 'Power',
    },
    {
      id: '3',
      title: 'Stacker & Reclaimer Consultancy for JSW Cement, Dolvi',
      description: 'Technical consultancy for electrical and instrumentation systems of Stacker & Reclaimer at JSW Cement, Dolvi.',
      category: 'Steel',
    },
    {
      id: '4',
      title: '11 KV Substation Revamping for Meenakshi Medical College',
      description: 'Complete revamping of 11 KV substation with VCB, transformer, and power distribution systems for enhanced reliability.',
      category: 'Power',
    },
    {
      id: '5',
      title: 'Automation Systems for NTPC Darapalli',
      description: 'Supply and commissioning of automation systems for 2x800 MW NTPC Darapalli power plant.',
      category: 'Automation',
    },
    {
      id: '6',
      title: 'High-Pressure Water Jetting for SAIL Plants',
      description: 'Engineering and supply of high-pressure water jetting systems for SAIL plants in Bokaro, Rourkela, and Durgapur.',
      category: 'Steel',
    },
    {
      id: '7',
      title: 'STP System for Industrial Complex',
      description: 'Design, supply, and commissioning of a Sewage Treatment Plant (STP) with advanced automation for a large industrial complex.',
      category: 'Water',
    },
    {
      id: '8',
      title: 'Chemical Plant Automation for CPCL',
      description: 'Provided process control solutions and instrumentation for Chennai Petroleum Corporation Ltd (CPCL), enhancing operational efficiency.',
      category: 'Chemical',
    },
    {
      id: '9',
      title: 'ETP System for Cochin Refinery',
      description: 'Engineering and commissioning of an Effluent Treatment Plant (ETP) for Cochin Refinery, ensuring environmental compliance.',
      category: 'Water',
    },
    {
      id: '10',
      title: 'Control Systems for Sterlite Chemical Plant',
      description: 'Implemented relay logic and PLC-based control systems for Sterlite Group’s chemical processing facility.',
      category: 'Chemical',
    },
  ];

  const categories: ProjectCategory[] = ['All', 'Power', 'Steel', 'Water', 'Chemical', 'Automation'];

  // Category color mapping
  const categoryColors: Record<ProjectCategory, string> = {
    All: 'bg-gray-500',
    Power: 'bg-indigo-500',
    Steel: 'bg-gray-700',
    Water: 'bg-cyan-500',
    Chemical: 'bg-purple-500',
    Automation: 'bg-orange-500',
  };

  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.querySelector('header');
      if (headerElement) {
        setHeaderHeight(headerElement.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  useEffect(() => {
    document.title = 'Projects - GVS Controls';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover GVS Controls’ top projects in power, steel, water, chemical, and automation.');
    }

    setFilteredProjects(activeCategory === 'All' ? projects : projects.filter(project => project.category === activeCategory));

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const caseStudiesObserver = new IntersectionObserver(
      ([entry]) => setIsCaseStudiesInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const partnerObserver = new IntersectionObserver(
      ([entry]) => setIsPartnerInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (caseStudiesRef.current) caseStudiesObserver.observe(caseStudiesRef.current);
    if (partnerRef.current) partnerObserver.observe(partnerRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (caseStudiesRef.current) caseStudiesObserver.unobserve(caseStudiesRef.current);
      if (partnerRef.current) partnerObserver.unobserve(partnerRef.current);
    };
  }, [activeCategory]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 60,
      opacity: 0,
      scale: 0.95,
      rotateX: 15,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 350,
        damping: 25,
        mass: 0.7,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      rotateX: -5,
      rotateY: 5,
      boxShadow: '0 15px 30px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.3)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 20,
        duration: 0.3,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    hover: { x: 10, transition: { duration: 0.3 } },
  };

  const underlineVariants = {
    hidden: { width: '0%' },
    hover: { width: '100%', transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.1, transition: { type: 'spring', stiffness: 500, damping: 30 } },
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <main style={{ paddingTop: `${headerHeight}px` }} className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/90 via-blue-600/80 to-purple-600/70 opacity-95"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-white bg-white/15 backdrop-blur-lg rounded-full border border-white/25"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Our Legacy
            </motion.span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              GVS Controls Projects
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Engineering excellence across power, steel, water, chemical, and automation sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              Our Signature Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto text-base md:text-lg">
              Over 30 years of expertise reflected in projects for SAIL, NTPC, CPCL, and more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex flex-wrap justify-center gap-3 p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.2, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg'
                      : 'bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-white/90 hover:bg-white dark:hover:bg-gray-600'
                  }`}
                  onClick={() => setActiveCategory(category)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.05 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="relative bg-gray-100 dark:bg-gray-800 rounded-xl shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.3)] dark:shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(255,255,255,0.1)] overflow-hidden transform-gpu"
              >
                <div className="relative p-6 z-10">
                  {/* Category Label */}
                  <div className={`inline-block px-3 py-1 mb-4 text-xs font-medium text-white ${categoryColors[project.category]} rounded-full shadow-sm`}>
                    {project.category}
                  </div>
                  {/* Card Content */}
                  <motion.div variants={contentVariants}>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 leading-tight relative">
                      {project.title}
                      <motion.span
                        variants={underlineVariants}
                        className={`absolute bottom-0 left-0 h-1 ${categoryColors[project.category]}`}
                      />
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </motion.div>
                  {/* Hover Action Button */}
                  <motion.div
                    variants={buttonVariants}
                    initial="hidden"
                    whileHover="hover"
                    className="mt-4"
                  >
                    <button className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white ${categoryColors[project.category]} rounded-md hover:brightness-110 transition-all duration-300 shadow-sm`}>
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center py-12 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl max-w-lg mx-auto shadow-lg mt-10"
            >
              <p className="text-gray-600 dark:text-gray-300 text-base">
                No projects found in this category. Explore another!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Case Studies Section */}
      <section ref={caseStudiesRef} className="py-16 md:py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCaseStudiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-blue-600 bg-blue-100/50 dark:bg-blue-900/20 rounded-full">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              Client Success Stories
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto text-base md:text-lg">
              Detailed insights into how our solutions have driven efficiency and reliability for industry leaders.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isCaseStudiesInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                title: 'Optimizing Bulk Material Handling for JSW Cement',
                description: 'Our electrical and instrumentation consultancy for stacker and reclaimer systems at JSW Cement Dolvi improved material handling efficiency and reduced operational downtime.',
                results: [
                  '25% increase in material handling throughput',
                  'Reduced maintenance downtime by 30%',
                  'Enhanced safety with automated controls',
                  'Cost savings through optimized system design',
                ],
                icon: <Factory className="w-12 h-12" />,
              },
              {
                title: 'Revamping 11 KV Substation for Meenakshi Hospital',
                description: 'Complete overhaul of the hospital’s power infrastructure with modern control panels and transformers, ensuring uninterrupted power supply for critical operations.',
                results: [
                  '100% uptime for critical medical equipment',
                  '20% reduction in energy costs',
                  'Improved safety compliance with CEIG standards',
                  'Extended lifespan of electrical systems',
                ],
                icon: <Clock className="w-12 h-12" />,
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100/50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 mb-6">
                  {study.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{study.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">{study.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-sm">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white font-medium rounded-md transition-all duration-300"
                >
                  Read Full Case Study
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner Section */}
      <section ref={partnerRef} className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isPartnerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="max-w-3xl mx-auto bg-white/25 dark:bg-gray-800/25 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/15">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-6">
                Partner with GVS Controls
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-base">
                Ready to transform your vision into reality? Let’s collaborate on your next project.
              </p>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="gradient"
                  size="lg"
                  className="group bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white font-medium px-8 py-4"
                  onClick={() => navigate('/contact')} // Navigate to contact page
                >
                  Get in Touch
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-3" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Projects;