/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/next.jpg";

const imageAltText = "Next.js logo";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Bankist",
    description:
      "The Bankist App is a simple banking application implemented in JavaScript. It allows users to perform various banking operations, such as logging in, transferring money, requesting loans, and more.",
    url: "https://github.com/GunaPalanivel/Bankist.git",
  },
  {
    title: "Dice Duel",
    description:
      "Dice Duel is a simple browser-based dice game where two players take turns rolling a six-sided die. The goal is to be the first player to reach a predefined score, usually 100.",
    url: "https://github.com/GunaPalanivel/Dice-Duel.git",
  },
  {
    title: "Fin Flow - Financial Flow",
    description:
      "Fin Flow is a financial SaaS platform built with Next.js, providing users with seamless connectivity to multiple bank accounts, real-time transaction monitoring, fund transfers, and comprehensive financial management capabilities.",
    url: "https://github.com/GunaPalanivel/FinFlow-FinancialFlow.git",
  },
  {
    title: "Modern JavaScript Fundamentals",
    description:
      "JavaScript is one of the most popular programming languages, and it has become increasingly powerful since the introduction of ES6 in 2014.",
    url: "https://github.com/GunaPalanivel/Modern-JavaScript-Fundamentals.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
