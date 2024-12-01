import React from 'react';
import projects from './projects';
import email from "./img/email.png"
import github from "./img/github.png"
import instagram from "./img/instagram.png"
import linkedin from "./img/linkedin.png"

function ProjectPage() {
  return (
    <div className="mt-12 px-6 lg:px-16">
      <h2 className="text-4xl uppercase font-bold text-darkBlue mb-1 text-center tracking-wide">
        My Projects
      </h2>
      <div className="flex items-start gap-2 justify-center mb-10">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => window.open(project.link, '_blank')}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 transition-opacity flex items-center justify-center">
              <p className="text-white text-lg font-medium text-center px-4 opacity-0 hover:opacity-100 transition-opacity">
                {project.description}
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-darkBlue">{project.name}</h3>
              <p className="text-sm mt-2 text-gray-600">{project.tools}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-darkBlue text-lg">
          Interested in collaborating or learning more about my projects? Feel
          free to{' '}
          <a
            href="mailto:petersgodspower95@gmail.com"
            className="text-themePurple underline hover:text-darkPurple"
          >
            reach out!
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProjectPage;
