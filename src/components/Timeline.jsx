import Reveal from "./Reveal";

const MILESTONES = [
  { year: "2022", title: "Started BSc Information Technology", detail: "Richfield Graduate Institute" },
  { year: "2023", title: "Software Engineering Tutor", detail: "Java, Python, C++, C#" },
  { year: "2024", title: "IT Support Technician", detail: "Richfield Institute" },
  { year: "2025", title: "Software Developer Internship", detail: "Dev Shack" },
  { year: "2026", title: "Building AI Systems", detail: "Multi-agent recruitment pipelines" },
];

export default function Timeline() {
  return (
    <section id="timeline" className="section">
      <Reveal>
        <h2 className="section-title">Journey</h2>
      </Reveal>

      <div className="timeline">
        <div className="timeline-line" />
        {MILESTONES.map((m, i) => (
          <Reveal key={m.year} delay={i * 0.08} className="timeline-item">
            <div className="timeline-dot" />
            <span className="timeline-year">{m.year}</span>
            <h3 className="timeline-title">{m.title}</h3>
            <p className="timeline-detail">{m.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}