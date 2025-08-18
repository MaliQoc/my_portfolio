import Backend from "./Backend";
import Database from "./Database";
import Other from "./Other";
import "./skills.css";

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">My Skills</h2>
      <span className="section-subtitle"></span>

      <div className="skills-container container grid">
        <Backend />
        <Database />
        <Other />
      </div>
    </section>
  );
}
