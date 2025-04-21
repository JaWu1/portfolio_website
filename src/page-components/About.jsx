import {
  SiJavascript,
  SiMongodb,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiHtml5,
} from "react-icons/si";

export default function About() {
  return (
    <section className="py-5 bg-[213547] flex flex-col items-center justify-center px-6">
      <div className="relative mb-16">
        <div className="absolute bottom-2 left-3 w-24 h-4 bg-blue-600 translate-x-2 translate-y-2 z-0"></div>
        <h2 className="relative text-4xl font-semibold text-white text-center z-10">About</h2>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: About Text */}
        <div className="text-white space-y-4">
          <p className="text-lg leading-relaxed">
            Final year Computer Science & Finance student at UNSW passionate about building scalable software solutions and leveraging technology in finance and analytics.
            I'm curious about the intersection of software engineering and finance, creating impactful solutions that bridge the gap between data and decision-making.
          </p>
        </div>

        {/* Right: Tech Stack Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 text-white justify-items-center">
          <TechIcon icon={<SiJavascript size={32} color="#f7df1e" />} label="JavaScript" />
          <TechIcon icon={<SiReact size={32} color="#61dafb" />} label="React" />
          <TechIcon icon={<SiTailwindcss size={32} color="#38bdf8" />} label="Tailwind" />
          <TechIcon icon={<SiNodedotjs size={32} color="#68a063" />} label="Node.js" />
          <TechIcon icon={<SiMongodb size={32} color="#47A248" />} label="MongoDB" />
          <TechIcon icon={<SiPython size={32} color="#3776AB" />} label="Python" />
          <TechIcon icon={<SiGit size={32} color="#F05032" />} label="Git" />
          <TechIcon icon={<SiHtml5 size={32} color="#E34F26" />} label="HTML5" />
        </div>
      </div>
    </section>

  );
}

function TechIcon({ icon, label }) {
  return (
    <div className="flex flex-col items-center space-y-1 text-center">
      {icon}
      <span className="text-sm text-white">{label}</span>
    </div>
  );
}
