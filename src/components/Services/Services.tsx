import './Services.css'
import { data } from "./ServicesData";

export const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section_title">Services</h2>

      <div className="services-container grid">
        {data.map((service) => {
          return (
            <div className="service-card" key={service.id}>
              <img src={service.image} alt="" className="service-img"/>
              <h3 className="service-title">{service.title}</h3>

              <p className="service-description">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
