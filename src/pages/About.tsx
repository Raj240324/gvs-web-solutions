import { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Compare } from '@/components/ui/compare';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Timeline } from '@/components/ui/timeline';
import { motion } from 'framer-motion';
import mission from '../../public/assets/mission.jpg';
import vision from '../../public/assets/Vision-New.png';
import power_plants from '../assets/power_plants.jpg';
import renewable_energy from '../assets/renewable_energy.jpg';
import automation from '../../public/assets/automation.jpg';
import founded from '../../public/assets/founded-about.jpg';
import clients from '../../public/assets/clients-about.jpg';

const About = () => {
  useEffect(() => {
    document.title = 'About GVS Controls - Our Journey and Expertise';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Learn about GVS Controls, established in 2017, offering innovative electrical engineering solutions with 30+ years of industry experience.'
      );
    }

    const handleScroll = () => {
      const elements = document.querySelectorAll('.aos-fade-up, .aos-fade-in, .aos-fade-right, .aos-fade-left');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.75) {
          element.classList.add('aos-animate');
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineData = [
    {
      title: '2017',
      content: (
        <div>
          <h3 className="text-xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600">Founded GVS Controls</h3>
          <p className="text-gray-600 mt-2">Established as a proprietary company with a vision for innovative, cost-effective engineering solutions.</p>
          <img src={founded} alt="Founded GVS Controls" className="w-full h-40 object-cover rounded-xl shadow-md mt-4" />
        </div>
      ),
    },
    {
      title: '2018-2020',
      content: (
        <div>
          <h3 className="text-xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600">Early Projects</h3>
          <p className="text-gray-600 mt-2">Collaborated with Shriram EPC Ltd., Black Stone Group, and L&T on power plants and material handling systems.</p>
          <img src={power_plants} alt="Early Projects" className="w-full h-40 object-cover rounded-xl shadow-md mt-4" />
        </div>
      ),
    },
    {
      title: '2021',
      content: (
        <div>
          <h3 className="text-xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600">Expansion</h3>
          <p className="text-gray-600 mt-2">Executed projects for SAIL, TISCO, and RINL in renewable energy and steel sectors.</p>
          <img src={renewable_energy} alt="Expansion" className="w-full h-40 object-cover rounded-xl shadow-md mt-4" />
        </div>
      ),
    },
    {
      title: '2022-2023',
      content: (
        <div>
          <h3 className="text-xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600">Automation Leadership</h3>
          <p className="text-gray-600 mt-2">Introduced advanced PLC and VFD control systems for process plants.</p>
          <img src={automation} alt="Automation Leadership" className="w-full h-40 object-cover rounded-xl shadow-md mt-4" />
        </div>
      ),
    },
    {
      title: '2024-2025',
      content: (
        <div>
          <h3 className="text-xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600">Global Reach</h3>
          <p className="text-gray-600 mt-2">Partnered with international clients like Titan Cement (Egypt) and Republic Cement (Philippines).</p>
          <img src={clients} alt="Global Reach" className="w-full h-40 object-cover rounded-xl shadow-md mt-4" />
        </div>
      ),
    },
  ];

  const teamValues = [
    {
      title: 'Integrity',
      desc: 'Upholding ethical standards in all dealings, ensuring trust and reliability with clients like SAIL, TISCO, and NTPC.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
      ),
    },
    {
      title: 'Innovation',
      desc: 'Pioneering cutting-edge automation and engineering solutions for complex challenges across power plants, renewable energy, and process industries.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v5" />
          <path d="m19.07 7.93-3.54 3.54" />
          <path d="M22 12h-5" />
          <path d="m19.07 16.07-3.54-3.54" />
          <path d="M12 22v-5" />
          <path d="m4.93 16.07 3.54-3.54" />
          <path d="M2 12h5" />
          <path d="m4.93 7.93 3.54 3.54" />
        </svg>
      ),
    },
    {
      title: 'Reliability',
      desc: 'Delivering quality solutions on time with tailored timelines, backed by 30+ years of experience with industry leaders like Shriram EPC and L&T.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5.4L2 8zm0-6l7 5.4L16 8" />
          <path d="M20 4H4a2 2 0 0 0-2 2v2l7 5.4L16 8l7-5.4V6a2 2 0 0 0-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Excellence',
      desc: 'Striving for top-tier results in every project, leveraging updated technology and quality manufacturing for turnkey solutions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Customer Focus',
      desc: 'Listening to your needs and offering flexible, cost-effective services tailored to your business and technical objectives.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: 'Efficiency',
      desc: 'Maximizing resource efficiency to deliver results swiftly, with expertise in utility systems and operations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v10" />
          <path d="M12 12l-4-4" />
          <path d="M12 12l4-4" />
        </svg>
      ),
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
    hover: {
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.4, yoyo: Infinity },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Spacer to push content below fixed header */}
      <div className="h-[84px] lg:h-[129px]"></div>
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-800 via-teal-600 to-fuchsia-700 text-white py-20 md:py-28 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0,_transparent_60%)] opacity-80"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPjxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiPjxjaXJjbGUgY3g9IjIuNSIgY3k9IjIuNSIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L3BhdHRlcm4+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-30"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-teal-200 text-sm mb-6 border border-white/30 shadow-md">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-300 drop-shadow-md">
                About GVS Controls
              </h1>
              <p className="text-lg text-white/90 leading-relaxed drop-shadow-sm">
                Established in 2017, we bring over three decades of expertise to innovative electrical engineering solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-20 bg-gradient-to-tr from-teal-100 via-indigo-200 to-purple-200 relative">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[size:20px_20px] opacity-50"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aos-fade-right">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 drop-shadow-sm">Our Mission & Vision</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Founded in 2017, GVS Controls is dedicated to delivering innovative and cost-effective engineering solutions, specializing in power plants, automation, and renewable energy.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  With promoters boasting over 30 years of EPC experience with industry leaders like Shriram EPC Ltd., Black Stone Group, and L&T, we redefine customer satisfaction.
                </p>
                <div className="space-y-4 mt-8">
                  {[
                    { title: 'Quality Excellence', desc: 'Highest standards in all our solutions.' },
                    { title: 'Customer Focus', desc: 'Tailored services to meet your needs.' },
                    { title: 'Innovation', desc: 'Cutting-edge solutions for complex challenges.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className="text-teal-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-800">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aos-fade-left flex justify-center">
                <div className="relative w-full max-w-[500px]">
                  <div className="border rounded-3xl bg-neutral-100 border-neutral-300 shadow-xl overflow-hidden ring-2 ring-teal-300/20">
                    <Compare
                      firstImage={mission}
                      secondImage={vision}
                      firstImageClassName="object-cover w-full h-full"
                      secondImageClassname="object-cover w-full h-full"
                      className="w-full h-[250px] md:h-[400px] rounded-2xl"
                      slideMode="hover"
                      initialSliderPercentage={50}
                    />
                  </div>
                  <div className="absolute bottom-0 left-4 translate-y-1/2 bg-gradient-to-r from-teal-500 to-indigo-600 text-white p-4 rounded-lg shadow-lg z-50">
                    <p className="text-xl font-bold">30+ Years</p>
                    <p className="text-sm">Industry Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-teal-200 via-blue-300 to-indigo-400 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.3)_0,_transparent_70%)] opacity-60"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 aos-fade-up">
              <span className="inline-block px-3 py-1 bg-teal-100/80 text-teal-800 rounded-full text-sm font-medium mb-3 border border-teal-200 shadow-sm">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 drop-shadow-md">Our Milestones</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Explore key milestones in GVS Controls’ growth since 2017.
              </p>
            </div>
            <Timeline data={timelineData} />
          </div>
        </section>

        {/* Enhanced Team Values Section */}
        <section className="py-16 md:py-20 bg-gradient-to-bl from-indigo-100 via-teal-100 to-fuchsia-200 relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTYwIDMwIHEtMTUgMTUtMzAgMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] opacity-40"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 aos-fade-up">
              <span className="inline-block px-3 py-1 bg-indigo-100/80 text-indigo-800 rounded-full text-sm font-medium mb-3 border border-indigo-200 shadow-sm">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 drop-shadow-md">What Drives Us</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Core values guiding our work with clients like SAIL, NTPC, and TISCO, ensuring innovative and reliable solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamValues.map((value, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  variants={cardVariants}
                  className="relative bg-gradient-to-br from-white/80 to-teal-50/50 backdrop-blur-md p-6 rounded-xl shadow-xl border border-teal-200/50 overflow-hidden transform-gpu"
                >
                  <GlowingEffect spread={40} glow={true} proximity={64} className="rounded-xl" />
                  <div className="relative z-10">
                    <motion.div
                      variants={iconVariants}
                      className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-600 mb-4 shadow-sm"
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;