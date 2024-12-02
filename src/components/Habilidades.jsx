import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiExpress,
  SiTypescript,
  SiFigma,
  SiAxios,
  SiPhotopea,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";

const techData = [
  {
    icon: <FaHtml5 title="HTML" className="text-2xl text-[#E34F26]" />,
    name: "HTML",
  }, // HTML
  {
    icon: <FaCss3Alt title="CSS" className="text-2xl text-[#1572B6]" />,
    name: "CSS",
  }, // CSS
  {
    icon: (
      <SiJavascript title="JavaScript" className="text-2xl text-[#F7DF1E]" />
    ),
    name: "JavaScript",
  }, // JavaScript
  {
    icon: <FaReact title="React" className="text-2xl text-[#61DBFB]" />,
    name: "React",
  }, // React
  {
    icon: (
      <SiTailwindcss title="Tailwind" className="text-2xl text-[#06B6D4]" />
    ),
    name: "Tailwind",
  }, // Tailwind
  {
    icon: <FaNodeJs title="Node.js" className="text-2xl text-[#68A063]" />,
    name: "Node.js",
  }, // Node.js
  {
    icon: <RiNextjsFill title="Next.js" className="text-2xl " />,
    name: "Next.js",
  }, // Next.js
  {
    icon: <SiExpress title="Express" className="text-2xl " />,
    name: "Express",
  }, // Express
  {
    icon: <SiMysql title="MySQL" className="text-3xl text-[#4784b3]" />,
    name: "MySQL",
  }, // MySQL
  {
    icon: <FaGitAlt title="Git" className="text-2xl text-[#F1502F]" />,
    name: "Git",
  }, // Git
  {
    icon: <FaGithub title="GitHub" className="text-2xl " />,
    name: "GitFlow",
  }, // GitHub
  {
    icon: <SiFigma title="Figma" className="text-2xl text-[#F24E1E]" />,
    name: "Figma",
  }, // Figma
  {
    icon: <SiAxios title="Axios" className="text-2xl text-[#5A29E4]" />,
    name: "Axios",
  }, // Axios
  {
    icon: <SiPhotopea title="Photopea" className="text-2xl " />,
    name: "Photopea",
  }, // Photopea
  {
    icon: <TbApi title="APIs" className="text-2xl text-[#29A8DF]" />,
    name: "APIs",
  }, // APIs
  {
    icon: (
      <SiTypescript title="TypeScript" className="text-2xl text-[#007ACC]" />
    ),
    name: "TypeScript",
  }, // TypeScript
  {
    icon: <FaDocker title="Docker" className="text-2xl text-[#2496ED]" />,
    name: "Docker",
  }, // Docker
];

const Habilidades = () => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (index) => {
    if (clicked === index) {
      setClicked(null); // Reseta ao clicar novamente
    } else {
      setClicked(index); // Atualiza o ícone clicado
    }
  };

  return (
    <section id="habilidades" className="habilidades">
      <h1>Habilidades</h1>
      <div className="grid">
        {techData.map((tech, index) => (
          <div
            key={index}
            className={`tech-icon ${clicked === index ? "clicked" : ""}`}
            onClick={() => handleClick(index)}
          >
            <div className={`icon ${tech.colorClass}`}>{tech.icon}</div>

            <div className="name">{tech.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
