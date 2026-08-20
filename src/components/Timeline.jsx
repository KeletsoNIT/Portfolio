import Reveal from "./Reveal";

const MILESTONES = [
  {
    number: "01",
    year: "2022",
    title: "The Foundation",
    role: "BSc Information Technology",
    company: "Richfield Graduate Institute of Technology",
    detail:
      "Started building a strong foundation in software development, databases, systems analysis and information technology.",
    tags: ["IT", "Software Development", "Systems Analysis"],
  },

  {
    number: "02",
    year: "2023",
    title: "Learning Through Teaching",
    role: "Software Engineering Tutor",
    company: "Richfield Institute",
    detail:
      "Helped students understand programming and software engineering while strengthening my own communication, leadership and problem-solving abilities.",
    tags: ["Java", "Python", "C++", "C#", "Leadership"],
  },

  {
    number: "03",
    year: "2024",
    title: "Understanding Real Users",
    role: "IT Support Technician",
    company: "Richfield Institute",
    detail:
      "Moved closer to real-world technology problems by supporting users, troubleshooting systems and understanding how technology impacts day-to-day operations.",
    tags: ["IT Support", "Troubleshooting", "Users", "Systems"],
  },

  {
    number: "04",
    year: "2025",
    title: "Building Solutions",
    role: "Software Developer Intern",
    company: "Dev Shack",
    detail:
      "Entered a software development environment where I worked with React, Node.js, APIs, Git, Docker and Agile practices.",
    tags: ["React", "Node.js", "REST APIs", "Git", "Docker"],
  },

  {
    number: "05",
    year: "2025 → 2026",
    title: "Building Intelligent Systems",
    role: "Agentic AI / AI Solutions Intern",
    company: "New Island Technologies",
    detail:
      "Started exploring how AI can solve business problems through intelligent agents, automation and AI-powered workflows.",
    tags: ["Agentic AI", "LLMs", "Automation", "Business Problems"],
    current: true,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="journey-section">

      {/* HEADER */}
      <div className="journey-header">

        <Reveal>
          <p className="section-kicker">
            THE JOURNEY
          </p>

          <h2 className="journey-title">
            From technology
            <br />
            <span>to intelligent solutions.</span>
          </h2>

          <p className="journey-intro">
            My journey has evolved from learning how technology works,
            to building software, understanding users and ultimately
            exploring how intelligent systems can solve real business
            problems.
          </p>
        </Reveal>

      </div>


      {/* TIMELINE */}
      <div className="journey-timeline">

        <div className="journey-line">
          <div className="journey-line-glow" />
        </div>

        {MILESTONES.map((milestone, index) => (

          <Reveal
            key={milestone.number}
            delay={index * 0.1}
            className={`journey-item ${
              index % 2 === 0 ? "journey-left" : "journey-right"
            }`}
          >

            {/* YEAR */}
            <div className="journey-year">
              {milestone.year}
            </div>


            {/* DOT */}
            <div
              className={`journey-dot ${
                milestone.current ? "journey-dot-current" : ""
              }`}
            >
              <span />
            </div>


            {/* CARD */}
            <div
              className={`journey-card ${
                milestone.current ? "journey-card-current" : ""
              }`}
            >

              <div className="journey-card-top">

                <span className="journey-number">
                  {milestone.number}
                </span>

                {milestone.current && (
                  <span className="journey-current">
                    CURRENT
                  </span>
                )}

              </div>


              <h3 className="journey-card-title">
                {milestone.title}
              </h3>


              <p className="journey-role">
                {milestone.role}
              </p>


              <p className="journey-company">
                {milestone.company}
              </p>


              <p className="journey-description">
                {milestone.detail}
              </p>


              <div className="journey-tags">

                {milestone.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}

              </div>

            </div>

          </Reveal>

        ))}

      </div>


      {/* ENDING */}
      <Reveal delay={0.2}>

        <div className="journey-future">

          <div className="journey-future-glow" />

          <span className="journey-future-label">
            WHERE I'M GOING
          </span>

          <h3>
            Business Analysis
            <span> × </span>
            AI
            <span> × </span>
            Technology
          </h3>

          <p>
            I am building toward a career where I can understand
            complex business problems, work with stakeholders and
            translate those problems into practical technology and
            AI-driven solutions.
          </p>

          <div className="journey-future-arrow">
            ↓
          </div>

        </div>

      </Reveal>

    </section>
  );
}