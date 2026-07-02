import {
  SiReact,
  SiPython,
  SiDocker,
  SiPostgresql,
  SiGithub,
  SiFlask,
  SiNodedotjs,
  SiMysql,
  SiJavascript,
} from "react-icons/si";
import Reveal from "./Reveal";

const STACK = [
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiPython, label: "Python", color: "#3776AB" },
  { icon: SiNodedotjs, label: "Node.js", color: "#3C873A" },
  { icon: SiFlask, label: "Flask", color: "#E8E8E8" },
  { icon: SiDocker, label: "Docker", color: "#2496ED" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  { icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { icon: SiGithub, label: "GitHub", color: "#FFFFFF" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="section">
      <Reveal>
        <h2 className="section-title">Tech Stack</h2>
      </Reveal>

      <div className="tech-grid">
        {STACK.map(({ icon: Icon, label, color }, i) => (
          <Reveal key={label} delay={i * 0.05}>
            <div className="tech-chip">
              <Icon size={28} style={{ color }} />
              <span>{label}</span>
            </div>
          </Reveal>
        ))}

        {/* Azure logo was pulled from Simple Icons by Microsoft — text badge instead */}
        <Reveal delay={STACK.length * 0.05}>
          <div className="tech-chip">
            <span style={{ fontWeight: 700, color: "#0078D4" }}>Azure</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}