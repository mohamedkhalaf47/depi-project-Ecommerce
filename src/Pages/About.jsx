import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import mainImage from "../assets/about-image-01..jpg";
import smallImage from "../assets/about-image-02.jpg";

import iconAbout1 from "../assets/icon about-1.svg";
import iconAbout2 from "../assets/icon about-2.svg";
import iconAbout3 from "../assets/icon about-3.svg";
import iconAbout4 from "../assets/icon about-4.svg";

import "./about.css";

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animated-element");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    elements.forEach(element => {
      observer.observe(element);
    });
  }, []);

  const features = [
    {
      title: "Free Shipping",
      desc: "Enjoy the freedom of hassle-free deliveries with our Free Shipping service.",
      icon: iconAbout1,
    },
    {
      title: "Fast Delivery",
      desc: "With our Fast Delivery service, your order will be expedited to reach you in no time.",
      icon: iconAbout2,
    },
    {
      title: "100% Quality Guarantee",
      desc: "Rest easy knowing your satisfaction is our top priority!",
      icon: iconAbout3,
    },
    {
      title: "Ecowave Efficiency",
      desc: "Experience the pinnacle of sustainability with Ecowave Efficiency.",
      icon: iconAbout4,
    },
  ];

  const stats = [
    {
      number: "15K+",
      desc: "Each number in this milestone represents a satisfied customer.",
    },
    {
      number: "8+",
      desc: "Each experience is a chapter in the grand story of Trendzy.",
    },
    {
      number: "15",
      desc: "Fashionable, comfy, and quality shirts loved by many.",
    },
    {
      number: "92%",
      desc: "Mostly natural ingredients for a pure, cleaner choice.",
    },
  ];

  return (
    <div className="container my-5 about-page">

      <div className="row align-items-center mb-5">

        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
          <img
            src={mainImage}
            alt="About Us"
            className="img-fluid rounded shadow main-img animated-element"
          />
        </div>
        
        <div className="col-12 col-lg-6 text-start">
          <h1 className="fw-boldr animated-element">
            Our Journey of tee creation from concept to cotton
          </h1>
          <div className="my-4">
            <img
              src={smallImage}
              alt="Small"
              className="small-img rounded shadow-sm animated-element"
            />
          </div>
          <p className="about-description animated-element">
            Pleasure and so read the was hope entire first decided the smut have on
            was on way out of I will mind in a one lies touched to get a photo to traveling.
          </p>
        </div>
      </div>

      <div className="row text-center mb-5">
        {features.map((feature, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 mb-3">
            <div className="feature-box p-3 shadow-sm rounded bg-light h-100 animated-element">
              <img
                src={feature.icon}
                alt={feature.title}
                className="mb-2 feature-icon animated-element"
              />
              <h5>{feature.title}</h5>
              <p>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="row text-center">
        {stats.map((stat, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 mb-3 stats-box animated-element">
            <h3 className="fw-bold">{stat.number}</h3>
            <p>{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
