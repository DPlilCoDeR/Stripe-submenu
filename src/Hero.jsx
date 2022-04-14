import React from "react";
import phoneImg from "./images/phone.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Infraestructura de pagos para Internet</h1>
          <p>
            Millones de empresas de todos los tamaños, desde startups hasta
            grandes corporaciones, usan el software y las API de Stripe para
            aceptar pagos, hacer transferencias y gestionar sus negocios en
            Internet.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
