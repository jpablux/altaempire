import React from "react";
import { Card } from "./Cards";

function Services() {
  return (
    <>
      <section className="services-section">
        <div className="header-2">Our Services</div>
        <div className="card-services-container">
          <Card />
        </div>
      </section>
    </>
  );
}

export { Services };
