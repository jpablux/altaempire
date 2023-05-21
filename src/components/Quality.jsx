import React from "react";

function Quality() {
  return (
    <section className="quality-section">
      <div className="paragraph-container">
        <p className="header-2">Quality, Always.</p>
        <p className="pagaraph">
          We never settle for mediocrity. With a blend of technical expertise
          and a deep understanding of our clients' goals, we bring their visions
          to life with precision and flair.
        </p>
      </div>

      <div className="timeline">
        <div className="blue-bar bar-responsive"></div>

        <div className="icons">
          <div className="icon-container">
            <div className="round-icon">🔎</div>
            <p className="round-icon-description">Analysis</p>
          </div>
          <div className="icon-container">
            <div className="round-icon">🗓️</div>
            <p className="round-icon-description">Planning</p>
          </div>
          <div className="icon-container">
            <div className="round-icon">🚀</div>
            <p className="round-icon-description">Implementation</p>
          </div>
          <div className="icon-container">
            <div className="round-icon">✅</div>
            <p className="round-icon-description">Goals</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Quality };
