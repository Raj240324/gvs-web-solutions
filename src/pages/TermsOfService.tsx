import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#1e2a44] to-[#2a9d8f] bg-fixed aos-fade-up"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%), url('https://via.placeholder.com/2000x2000?text=Circuit+Pattern')`,
        backgroundSize: 'cover, 2000px 2000px',
        backgroundPosition: 'center, center',
      }}
      animate={{ backgroundPosition: ['center, 0% 0%', 'center, 100% 100%'] }}
      transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
    >
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 text-[#1e2a44] bg-white/90 backdrop-blur-md rounded-xl relative z-10"
      >
        <h1 className="font-montserrat font-bold text-4xl mb-8 text-[#2a9d8f]">
          Terms of Service
        </h1>
        <div className="prose max-w-none text-[#1e2a44]">
          <p className="mb-4">
            <strong>Last Updated: April 20, 2025</strong>
          </p>
          <p className="mb-4">
            Welcome to www.gvscontrols.com, operated by GVS Controls, a leader in electrical and automation solutions since 2017. We provide consultancy, engineering, manufacturing, and automation services for industries such as power plants, renewable energy, cement, and automotive sectors. By accessing or using our website, you agree to these Terms of Service ("Terms"). If you do not agree, please do not use our website.
          </p>

          <h2 className="font-montserrat font-semibold text-2xl mt-6 mb-4 text-[#ff6f61]">
            1. Use of the Website
          </h2>
          <p className="mb-4">
            You agree to use the website only for lawful purposes related to exploring our services, such as project consultancy, electrical panel manufacturing, or automation solutions, and in a manner that does not infringe the rights of others. Prohibited activities include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Distributing malicious code or engaging in hacking attempts.</li>
            <li>Posting offensive or unlawful content.</li>
            <li>Attempting to gain unauthorized access to our systems or project data.</li>
          </ul>

          <h2 className="font-montserrat font-semibold text-2xl mt-6 mb-4 text-[#ff6f61]">
            2. Intellectual Property
          </h2>
          <p className="mb-4">
            All content on the website, including text, images, technical diagrams, and logos, is owned by GVS Controls or its licensors and protected by copyright and trademark laws. You may not reproduce or distribute content, such as details about our Medium Voltage Panels or automation solutions, without permission.
          </p>

          <h2 className="font-montserrat font-semibold text-2xl mt-6 mb-4 text-[#ff6f61]">
            3. Services and Contracts
          </h2>
          <p className="mb-4">
            Information about our services, including project management, manufacturing of Power Control Centers, or automation for clients like NTPC and Aditya Birla Group, is for informational purposes. Any engagement for services will be governed by separate contracts tailored to specific projects.
          </p>

          <h2 className="font-montserrat font-semibold text-2xl mt-6 mb-4 text-[#ff6f61]">
            4. Limitation of Liability
          </h2>
          <p className="mb-4">
            The website is provided "as is." GVS Controls is not liable for any damages arising from your use of the website, including loss of data or profits, whether related to accessing service descriptions or submitting inquiries.
          </p>

          <h2 className="font-montserrat font-semibold text-2xl mt-6 mb-4 text-[#ff6f61]">
            5. Third-Party Links
          </h2>
          <p className="mb-4">
            Our website may contain links to third-party sites, such as those of our partners like EIL or MECON. We are not responsible for their content or practices.
          </p>

          <h2 className="font-montserrat font-semibold text-2xl mt-6 mb-4 text-[#ff6f61]">
            6. Termination
          </h2>
          <p className="mb-4">
            We may suspend or terminate your access to the website if you violate these Terms, including misuse of information about our services or clients.
          </p>

          <h2 className="font-montserrat font-semibold text-2xl mt-6 mb-4 text-[#ff6f61]">
            7. Governing Law
          </h2>
          <p className="mb-4">
            These Terms are governed by the laws of Tamil Nadu, India. Disputes will be resolved in the courts of Chengalpattu.
          </p>

          <h2 className="font-montserrat font-semibold text-2xl mt-6 mb-4 text-[#ff6f61]">
            8. Changes to These Terms
          </h2>
          <p className="mb-4">
            We may update these Terms from time to time. Changes will be posted on this page with an updated effective date.
          </p>

          <h2 className="font-montserrat font-semibold text-2xl mt-6 mb-4 text-[#ff6f61]">
            9. Contact Us
          </h2>
          <p className="mb-4">
            For questions about these Terms or our services, please contact:
          </p>
          <p className="mb-4">
            GVS Controls<br />
            No.9/14, First Floor, EWS Plot, Gudalur, Maraimalai Nagar,<br />
            Chengalpattu District, Tamil Nadu, Pin: 603209<br />
            Email: <a href="mailto:gvscontrols@gmail.com" className="text-[#2a9d8f] hover:text-[#ff6f61]">gvscontrols@gmail.com</a><br />
            Phone: +91 90877 72798
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;