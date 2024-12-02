import React from "react";
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiJavascript, SiTailwindcss, SiMysql, SiFigma } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPhotopea } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
const iconMapping = {
  HTML: <FaHtml5 title="HTML" className="text-xl text-[#E34F26]" />,
  CSS: <FaCss3Alt title="CSS" className="text-xl text-[#1572B6]" />,
  JavaScript: (
    <SiJavascript title="JavaScript" className="text-xl text-[#F7DF1E]" />
  ),
  React: <FaReact title="React" className="text-xl text-[#61DBFB]" />,
  Tailwind: (
    <SiTailwindcss title="Tailwind" className="text-xl text-[#06B6D4]" />
  ),
  Nodejs: <FaNodeJs title="Node.js" className="text-xl text-[#68A063]" />,
  Nextjs: <RiNextjsFill title="Next.js" className="text-xl" />, // Sem cor no techData
  Express: <SiExpress title="Express" className="text-xl" />, // Sem cor no techData
  MySql: <SiMysql title="MySql" className="text-xl text-[#4784b3]" />,
  Git: <FaGitAlt title="Git" className="text-xl text-[#F1502F]" />,
  GitHub: <FaGithub title="GitHub" className="text-xl" />, // Sem cor no techData
  Figma: <SiFigma title="Figma" className="text-xl text-[#F24E1E]" />,
  Axios: <SiAxios title="Axios" className="text-xl text-[#5A29E4]" />,
  Photopea: <SiPhotopea title="Photopea" className="text-xl" />, // Sem cor no techData
  APIs: <TbApi title="APIs" className="text-xl text-[#29A8DF]" />,
  TypeScript: (
    <SiTypescript title="TypeScript" className="text-xl text-[#007ACC]" />
  ),
  Docker: <FaDocker title="Docker" className="text-xl text-[#2496ED]" />,
};
const ProjectCard = ({
  id,
  title,
  description,
  siteLink,
  repoLink,
  linkedinLink,
  image,
  frontend,
  backend,
}) => {
  return (
    <div className="card">
      <div className="row">
        <img className="project-image rounded-md" src={image} alt={title} />
        <div className="des">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="buttons">
            {siteLink && (
              <a
                href={siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FaExternalLinkAlt /> Visite o site
              </a>
            )}
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <FaGithub /> Repositório
            </a>
            {linkedinLink && (
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FaLinkedin /> LinkedIn
              </a>
            )}
          </div>

          <div className="languages">
            <div className="frontend">
              <h5>Frontend</h5>
              {frontend.map((tech, index) => (
                <span key={index} className="language">
                  {iconMapping[tech] || tech}
                </span>
              ))}
            </div>
            <div className="backend">
              <h5>Backend</h5>
              {backend.map((tech, index) => (
                <span key={index} className="language">
                  {iconMapping[tech] || tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Projetos() {
  const projetos = [
    {
      id: 1,
      title: "Que que bilda?",
      description: "Consulte as infos da sua conta de Legue of Legends!",
      repoLink:
        "https://github.com/AlexandeCrv/nextlol/tree/main/front/src/app",
      linkedinLink:
        "https://www.linkedin.com/feed/update/urn:li:activity:7252081330652405760/",
      image: "/lol.png",
      frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind",
        "Nextjs",
        "Git",
        "Photopea",
      ],
      backend: ["Nodejs", "Express", "Axios", , "APIs"],
    },
    {
      id: 2,
      title: "Teste de Estagio Fatto",
      description: "Gerenciamento de estoque e valores.",
      repoLink: "https://github.com/AlexandeCrv/EstagioFatto",

      image: "/tarefas.png",
      frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nextjs",
        "Tailwind",
        "Git",
        "Photopea",
      ],
      backend: ["Nodejs", "Express", "MySql", , "Docker", "APIs"],
    },
    {
      id: 3,
      title: "Viagens Aéreas",
      description: "Viage pelo mundo conosco!",
      siteLink: "https://alexandecrv.github.io/ViagensAereas/",
      repoLink: "https://github.com/alexandecrv/ViagensAereas",
      linkedinLink:
        "https://www.linkedin.com/posts/alexandre-carvalho-4b178a26b_boa-noite-gente-o-projeto-mais-complicado-activity-7211143279495544833-u4Sh?utm_source=share&utm_medium=member_desktop",
      image: "/gi.png",
      frontend: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Figma",
        "Git",
        "Photopea",
      ],
      backend: [, "APIs"],
    },
    {
      id: 4,
      title: "The Dog House",
      description: "Para pais de pets!",
      siteLink: "https://alexandecrv.github.io/TheDogHouse/",
      repoLink: "https://github.com/alexandecrv/TheDogHouse",
      linkedinLink:
        "https://www.linkedin.com/posts/alexandre-carvalho-4b178a26b_finalizado-o-projeto-dessa-semana-se-trata-ugcPost-7201008080342466560-05CQ?utm_source=share&utm_medium=member_desktop",
      image: "/tdh.png",
      frontend: ["HTML", "CSS", "JavaScript", "React", , "Git", "Photopea"],
      backend: ["APIs"],
    },
    {
      id: 5,
      title: "GitHub Finder RPG",
      description: "Um app para amantes de RPGs!",
      siteLink: "https://alexandecrv.github.io/GitHubFinderRpg/",
      repoLink: "https://github.com/alexandecrv/GitHubFinderRpg",
      linkedinLink:
        "https://www.linkedin.com/in/alexandre-carvalho-4b178a26b/recent-activity/all/",
      image: "/guithubfinder.png",
      frontend: ["React", "Figma", "Git", "Photopea"],
      backend: ["TypeScript", "APIs"],
    },
    {
      id: 6,
      title: "React To-Do List RPG",
      description: "Organize tarefas em um universo de RPG!",
      siteLink: "https://alexandecrv.github.io/ReactTodoList/",
      repoLink: "https://github.com/alexandecrv/ReactTodoList",
      linkedinLink: "https://linkedin.com/in/alexandecrv/react-todo-list-rpg",
      image: "/a.png",
      frontend: ["React", "CSS", "JavaScript", "Git", "Photopea"],
      backend: [],
    },
    {
      id: 7,
      title: "Super Nintendo World",
      description:
        "Reviva a nostalgia com jogos icônicos e clássicos da Nintendo!",
      siteLink: "https://alexandecrv.github.io/NintendoWorld/skidrow.html",
      repoLink: "https://github.com/alexandecrv/NintendoWorld",
      linkedinLink: "https://linkedin.com/in/alexandecrv/super-nintendo-world",
      image: "/backgrond.png",
      frontend: ["HTML", "CSS", "JavaScript", "Git"],
      backend: [],
    },
  ];

  return (
    <section id="projetos" className="projetos">
      <div>
        {" "}
        <h1 className="h1s3">Projetos Relevantes</h1>
      </div>

      <div className="cont">
        {projetos.map((projeto) => (
          <ProjectCard key={projeto.id} {...projeto} />
        ))}
      </div>
    </section>
  );
}

export default Projetos;
