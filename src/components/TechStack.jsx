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
  {
    icon: SiReact,
    label: "React",
    category: "FRONTEND",
    description: "Interactive interfaces & modern web applications",
    color: "#61DAFB",
  },
  {
    icon: SiPython,
    label: "Python",
    category: "AI • DATA",
    description: "AI applications, automation & data processing",
    color: "#3776AB",
  },
  {
    icon: SiNodedotjs,
    label: "Node.js",
    category: "BACKEND",
    description: "APIs, server-side applications & integrations",
    color: "#3C873A",
  },
  {
    icon: SiFlask,
    label: "Flask",
    category: "BACKEND",
    description: "Lightweight Python APIs & backend services",
    color: "#E8E8E8",
  },
  {
    icon: SiDocker,
    label: "Docker",
    category: "DEVOPS",
    description: "Containerisation & application environments",
    color: "#2496ED",
  },
  {
    icon: SiPostgresql,
    label: "PostgreSQL",
    category: "DATABASE",
    description: "Relational data & structured information",
    color: "#4169E1",
  },
  {
    icon: SiMysql,
    label: "MySQL",
    category: "DATABASE",
    description: "Database design & SQL-driven applications",
    color: "#4479A1",
  },
  {
    icon: SiGithub,
    label: "GitHub",
    category: "COLLABORATION",
    description: "Version control & software collaboration",
    color: "#FFFFFF",
  },
  {
    icon: SiJavascript,
    label: "JavaScript",
    category: "DEVELOPMENT",
    description: "Web applications & interactive experiences",
    color: "#F7DF1E",
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="tech-section">

      {/* HEADER */}
      <div className="tech-header">

        <Reveal>
          <p className="tech-kicker">
            TECHNOLOGY ECOSYSTEM
          </p>

          <h2 className="tech-title">
            The tools behind
            <span> the solutions.</span>
          </h2>

          <p className="tech-intro">
            A practical technology foundation that allows me to move
            from understanding a problem to designing, building and
            delivering a solution.
          </p>
        </Reveal>

      </div>


      {/* TECH GRID */}
      <div className="tech-grid-premium">

        {STACK.map(
          (
            {
              icon: Icon,
              label,
              category,
              description,
              color,
            },
            i
          ) => (

            <Reveal
              key={label}
              delay={0.04 + i * 0.05}
            >

              <div
                className="tech-card"
                style={{
                  "--tech-color": color,
                }}
              >

                {/* NUMBER */}
                <span className="tech-number">
                  {String(i + 1).padStart(2, "0")}
                </span>


                {/* ICON */}
                <div className="tech-icon">
                  <Icon size={34} />
                </div>


                {/* CONTENT */}
                <div className="tech-content">

                  <span className="tech-category">
                    {category}
                  </span>

                  <h3>
                    {label}
                  </h3>

                  <p>
                    {description}
                  </p>

                </div>


                {/* ARROW */}
                <span className="tech-arrow">
                  ↗
                </span>


                {/* GLOW */}
                <div className="tech-card-glow" />

              </div>

            </Reveal>

          )
        )}


        {/* AZURE */}
        <Reveal delay={STACK.length * 0.05}>

          <div
            className="tech-card azure-card"
            style={{
              "--tech-color": "#0078D4",
            }}
          >

            <span className="tech-number">
              10
            </span>

            <div className="tech-icon azure-icon">
              AZ
            </div>

            <div className="tech-content">

              <span className="tech-category">
                CLOUD
              </span>

              <h3>
                Microsoft Azure
              </h3>

              <p>
                Cloud services, deployment and enterprise technology.
              </p>

            </div>

            <span className="tech-arrow">
              ↗
            </span>

            <div className="tech-card-glow" />

          </div>

        </Reveal>

      </div>


      {/* BOTTOM STATEMENT */}
      <Reveal delay={0.25}>

        <div className="tech-bottom">

          <span className="tech-line" />

          <p>
            <strong>Business problem</strong>
            <span> → </span>
            <strong>Analysis</strong>
            <span> → </span>
            <strong>Technology</strong>
            <span> → </span>
            <strong>Solution</strong>
          </p>

          <span className="tech-line" />

        </div>

      </Reveal>

    </section>
  );
}