/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/coded.jpg";

const imageAltText = "A beautiful white background image of a CODE letter.";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a polymath with a unique blend of creativity, analytical thinking, and adaptability. My diverse skill set allows me to approach challenges from various angles, fostering innovation and delivering valuable solutions to any team or project.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Front-end development",
  "User experience design",
  "User interface design",
  "Web development",
  "software development",
  "React",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I've always been drawn to the dynamic world of technology, eager to explore its vast potential and contribute to innovative projects. From a young age, I cultivated a passion for software development, driven by a desire to create meaningful solutions to real-world challenges. As I embarked on my journey in the field, I found myself immersed in a diverse range of experiences, each shaping my skills and fueling my determination to excel in the ever-evolving landscape of technology.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
