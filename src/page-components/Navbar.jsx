import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#272727] shadow-md" : "bg-[#2e2e2e]"
      }`}
    >
      <div className="mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-lg font-bold">Welcome!</div>
        <ul className="flex space-x-6 text-white">
          <li
            onClick={() => scrollToSection("home")}
            className="hover:text-blue-700 cursor-pointer transition-colors font-semibold"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className="hover:text-blue-700 cursor-pointer transition-colors font-semibold"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="hover:text-blue-700 cursor-pointer transition-colors font-semibold"
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}
