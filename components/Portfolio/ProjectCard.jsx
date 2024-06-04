import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover"
      />
      <div
        className={`absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center transition-opacity duration-700 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-white text-center">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="text-sm p-4"> {project.description}</p>
          <a href={project.link} target="_blank" className="underline">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
