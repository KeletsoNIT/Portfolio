import Reveal from "./Reveal";

const CAPABILITIES = [
  "Parsing CVs",
  "Ranking Candidates",
  "Semantic Search",
  "Automated Emails",
  "PDF Reports",
  "AI Candidate Matching",
];

export default function FeaturedProject() {
  return (
    <section id="featured-project" className="section featured-project">
      <Reveal>
        <h2 className="section-title">Featured Project</h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="featured-card">
          <div className="featured-media">
            <img
              src="/recruitment-agent-screenshot.png"
              alt="AI Recruitment Agent screening console dashboard"
            />
          </div>

          <div className="featured-body">
            <span className="eyebrow">01 — Flagship Build</span>

            <h3>AI Recruitment Agent</h3>

            <p className="text">
              An intelligent recruitment platform that parses CVs, ranks
              candidates against job requirements, and automates the entire
              recruitment workflow using a multi-agent LangGraph pipeline.
            </p>

            <ul className="check-list">
              {CAPABILITIES.map((capability) => (
                <li key={capability}>
                  <span className="check-mark">✓</span> {capability}
                </li>
              ))}
            </ul>

            <div className="featured-cta">
              <a
                className="btn btn-primary"
                href="https://github.com/KeletsoNIT/ai-recruitment-platform"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>

              <a
                className="btn btn-secondary"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}