import { useState } from "react";
import "./qualification.css";

export default function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle"></span>

      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div
            className={
              toggleState === 1
                ? "qualification-button qualification-active button-flex"
                : "qualification-button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification-icon"></i>{" "}
            Education
          </div>

          <div
            
            className={
              toggleState === 1
                ? "qualification-button qualification-active button-flex"
                : "qualification-button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase qualification-icon"></i> Experience
          </div>
        </div>

        <div className="qualification-sections">
          {/* Education Content */}
          <div
            className={
              toggleState === 1
                ? "qualification-content qualification-content-active"
                : "qualification-content"
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Computer Engineering with English Preparatory</h3>
                <span className="qualification-subtitle">
                 Tekirdag Namik Kemal University
                </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2020 - Jun 2025
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">
                  Ecole 42
                </h3>
                <span className="qualification-subtitle">
                 Istanbul
                </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> Jul 2022 - Mar 2023
                </div>
              </div>
            </div>

            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">High School</h3>
                <span className="qualification-subtitle">
                 Pendik Anatolian High School
                </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> Sep 2016 - Jun 2020
                </div>
              </div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
          </div>
          {/* Experience Content */}
          <div
            className={
              toggleState === 2
                ? "qualification-content qualification-content-active"
                : "qualification-content"
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Intern Backend Developer</h3>
                <span className="qualification-subtitle">Privia Security A.Ş.</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i> Jun 2024 - Aug 2025
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
