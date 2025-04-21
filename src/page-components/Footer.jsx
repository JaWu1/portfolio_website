// components/Footer.jsx

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1f283161] text-gray-300 py-10 mt-20">
      <div className="flex flex-col items-center space-y-6">
        {/* Connect Section */}
        <div className="flex space-x-8">
          <a
            href="https://github.com/JaWu1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/john-wu2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="mailto:johnw0103@icloud.com"
            className="hover:text-white transition"
          >
            <FaEnvelope size={32} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} John Wu - All rights reserved.
        </div>
      </div>
    </footer>
  );
}
