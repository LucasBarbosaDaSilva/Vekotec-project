import React from "react";
import { servicesArray } from "../css/img/svg/service-carousel";
import "../css/service-carousel.css";

function ServiceCarousel() {
  return (
    <div id="service-container">
      <h1 id="service-title-h1">CONHEÇA OS NOSSOS SERVIÇOS</h1>
      <div id="services">
        {servicesArray.map((service) => (
          <div className="service-card" key={service.name}>
            <div className="service-icon-div">
              <img
                src={service.icon}
                alt={service.name}
                className="service-icon"
              />
            </div>
            <div className="service-content-map-div">
              {service.content.map((content) => (
                <div key={content.title} className="service-content-div">
                  <h2>&#10004; {content.title}</h2>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCarousel;
