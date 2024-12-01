import React from "react";
import hero from "../../assets/dev.svg";
import docmed from "../home/img/docMed.png";
import antimuse from "../home/img/antiMuse.png";
import countries from "../home/img/countries.png";
import certificate from "../home/img/certification.png"
import { NavLink } from "react-router-dom";
import email from "../home/img/email.png"
import github from "../home/img/github.png"
import instagram from "../home/img/instagram.png"
import linkedin from "../home/img/linkedin.png"

const homeProjects = [
  {
    name: "Hospital UI",
    description:
      "A modern, responsive hospital interface built to showcase services and streamline user interactions.",
    image: docmed,
    link: "https://docmed-frontend.vercel.app/",
    tools: "ReactJs, tailwind css, Javascript"
  },
  {
    name: "AntiMuse Clothing Brand Website",
    description:
      "A sleek and stylish e-commerce website for a clothing brand with dynamic content and user-friendly navigation.",
    image: antimuse,
    link: "https://anti-muse.vercel.app/",
     tools: "ReactJs, tailwind css, Javascript, Redux Took Kit"
  },
  {
    name: "Countries Explorer",
    description:
      "An interactive app to explore countries, their details, and statistics using an API.",
    image: countries,
    link: "https://seecountries.vercel.app/",
     tools: "ReactJs, tailwind css, Javascript, API"
  },
];

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="mt-11 p-12 flex flex-col-reverse md:flex-row items-center justify-around gap-8 bg-gradient-to-r from-white to-blue-50 shadow-md rounded-lg">
        <div className="w-full md:w-[550px] flex flex-col items-center md:items-start
       text-center md:text-start gap-4">
          <h3 className="text-darkBlue font-light text-lg tracking-wide">Hi!</h3>
          <h1 className="text-3xl md:text-5xl font-extrabold text-darkBlue leading-[40px]">
            I'm Peters Godspower, a Front-End Developer
          </h1>

          <div className="flex items-start gap-2">
           <a  href="mailto:petersgodspower95@gmail.com" className="no-underline icon">
            <img src={email} alt="" />
           </a>
           <a  href="https://github.com/Petersgodspower19" className="no-underline icon">
            <img src={github} alt="" />
           </a>
           <a  href="https://www.instagram.com/petersgodspower_/" className="no-underline icon">
            <img src={instagram} alt="" />
           </a>

           <a  href="https://www.linkedin.com/in/peters-godspower-51a523314/" className="no-underline icon">
            <img src={linkedin} alt="" />
           </a>

          </div>
          <p className="text-darkBlue text-lg leading-relaxed">
            Passionate front-end developer specializing in crafting visually appealing, responsive, and user-friendly interfaces. Proficient in React.js, CSS frameworks, and modern tools to bring designs to life with precision. Experienced in collaborating with designers and back-end teams to deliver seamless web experiences. Dedicated to continuous learning and pushing the boundaries of front-end technologies.
          </p>
          <button className="mt-4 px-6 py-2 bg-darkBlue text-white rounded-full shadow-lg hover:bg-blue-600 transition">
            <NavLink className="no-underline" to="/projects">My Projects</NavLink>
          </button>
        </div>
        <img src={hero} alt="Developer illustration" className="w-[300px] md:w-[550px]" />
      </div>

      {/* Portfolio Section */}
      <div className="mt-12 p-6">
        <h2 className="text-4xl uppercase font-bold text-darkBlue mb-8 text-center">
          My Projects
        </h2>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {homeProjects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg w-[350px] rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
              onClick={() => window.open(project.link, "_blank")}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg font-semibold text-center px-4 opacity-0 hover:opacity-100 transition-opacity">
                  {project.description}
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-darkBlue">{project.name}</h3>
                <p className="text-sm mt-2 font-bold text-darkBlue">{project.tools}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
        <NavLink to="/projects" className=" text-darkBlue hover:text-themePurple 
        tracking-[4px] uppercase font-light text-[18px] text-center m-auto">
          View More &#8594;
        </NavLink>
        </div>
      </div>
      <div className="m-auto mt-6 mb-6">
        <img src={certificate} alt="certificatons" className="w-[80%] md:w-[500px] m-auto" />
      </div>
    </div>
  );
}

export default Home;
