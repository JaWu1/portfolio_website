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
    <section className="h-screen bg-[213547] flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: About Text */}
        <div className="text-white space-y-4">
          <h2 className="text-4xl font-semibold">About</h2>
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
