import { motion } from 'framer-motion';

const CookiePolicy = () => {
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
          Cookie Policy
        </h1>
        <div className="prose max-w-none text-[#1e2a44]">
          <p className="mb-4">
            <strong>Last Updated: April 20, 2025</strong>
          </p>
          <p className="mb-4">
            GVS Controls, a leader in electrical and automation solutions since 2017, uses cookies and similar technologies on www.gvscontrols.com to enhance your browsing experience. Our services include consultancy, manufacturing, and automation for industries such as power plants, renewable energy, cement, and automotive sectors. This Cookie Policy explains what cookies are, how we use them, and your choices.
          </p>

          <h2 className="font-montserrat font-semibold text-2xl mt-6 mb-4 text-[#ff6f61]">
            1. What Are Cookies?
          </h2>
          <p className="mb-4">
            Cookies are small text files stored on your device when you visit our website. They help us improve functionality and analyze performance, ensuring a seamless experience when exploring our services like project consultancy or automation solutions.
          </p>

          <h2 className="font-montserrat font-semibold text-2xl mt-6 mb-4 text-[#ff6f61]">
            2. Types of Cookies We Use
          </h2>
          <p className="mb-4">
            We use the following cookies:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Essential Cookies:</strong> Necessary for the website to function, such as maintaining your session while browsing details about our Medium Voltage Panels or Power Control Centers.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website, e.g., which pages about our automation services or client projects (like NTPC) are most popular.
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used to deliver personalized advertisements about our services (with your consent).
            </li>
          </ul>

          <h2 className="font-montserrat font-semibold text-2xl mt-6 mb-4 text-[#ff6f61]">
            3. How We Use Cookies
          </h2>
          <p className="mb-4">
            Cookies help us:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Ensure the website works correctly for inquiries about our engineering or automation services.</li>
            <li>Analyze website traffic and performance to improve user experience.</li>
            <li>Personalize content and ads, such as tailored information about our work with clients like Aditya Birla Group (if applicable).</li>
          </ul>

          <h2 className="font-montserrat font-semibold text-2xl mt-6 mb-4 text-[#ff6f61]">
            4. Your Choices
          </h2>
          <p className="mb-4">
            You can manage cookies via your browser settings to accept, block, or delete them. Note that blocking essential cookies may affect website functionality, such as accessing service details. For more information, visit your browser’s help section.
          </p>

          <h2 className="font-montserrat font-semibold text-2xl mt-6 mb-4 text-[#ff6f61]">
            5. Third-Party Cookies
          </h2>
          <p className="mb-4">
            Some cookies are set by third-party services, such as Google Analytics, to track website performance. These providers, which may include partners like EIL or MECON for project-related analytics, have their own privacy policies.
          </p>

          <h2 className="font-montserrat font-semibold text-2xl mt-6 mb-4 text-[#ff6f61]">
            6. Changes to This Policy
          </h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated effective date.
          </p>

          <h2 className="font-montserrat font-semibold text-2xl mt-6 mb-4 text-[#ff6f61]">
            7. Contact Us
          </h2>
          <p className="mb-4">
            For questions about this Cookie Policy or our services, please contact:
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

export default CookiePolicy;