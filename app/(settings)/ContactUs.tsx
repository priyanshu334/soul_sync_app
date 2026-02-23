import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaReddit,
  FaEnvelope
} from "react-icons/fa";
import { SiThreads, SiX } from "react-icons/si";

export default function ContactUs() {
  const socials = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://instagram.com/yourapp"
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://facebook.com/yourapp"
    },
    {
      name: "Threads",
      icon: <SiThreads />,
      link: "https://threads.net/@yourapp"
    },
    {
      name: "X",
      icon: <SiX />,
      link: "https://x.com/yourapp"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://linkedin.com/company/yourapp"
    },
    {
      name: "Reddit",
      icon: <FaReddit />,
      link: "https://reddit.com/r/yourapp"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-8 rounded-2xl shadow-lg bg-white">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-gray-500 mt-2">
          Reach out through any platform below. We usually respond within 24 hours.
        </p>
      </div>

      {/* Email Section */}
      <div className="flex justify-center mb-10">
        <a
          href="mailto:support@yourapp.com"
          className="flex items-center gap-3 px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition"
        >
          <FaEnvelope />
          Email Support
        </a>
      </div>

      {/* Social Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {socials.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 rounded-xl border hover:shadow-md hover:scale-105 transition"
          >
            <div className="text-2xl mb-2">{item.icon}</div>
            <span className="text-sm font-medium text-gray-700">
              {item.name}
            </span>
          </a>
        ))}
      </div>

      {/* Footer Note */}
      <p className="text-center text-sm text-gray-400 mt-10">
        Your privacy and messages are always protected.
      </p>
    </div>
  );
}