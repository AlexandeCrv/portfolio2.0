"use client"

import { useState, useEffect, useMemo } from "react"
import { RiNextjsFill } from "react-icons/ri"
import { FaReact, FaGitAlt } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiTypescript, SiElixir, SiPostgresql, SiDocker } from "react-icons/si"
import { TbApi } from "react-icons/tb"
import Image from "next/image"


const ExperienceCard = ({
  company,
  role,
  period,
  description,
  logo,
  achievements,
  technologies,
  isActive,
  onClick,
  index,
}) => {
  return (
    <div
      onClick={onClick} 
      id="xp"
      className={`experience-card cursor-pointer transition-all duration-500 ${isActive ? "active" : ""}`}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {index > 0 && <div className="connection-line" />}

      <div className="timeline-indicator">
        <div className="orbital-ring"></div>
        <div className="station-dot"></div>
      </div>

      <div className="card-content">
        <div className="card-header">
          <div className="header-info">
            <div className="flex items-center gap-3">
              <div className="company-logo-wrapper">
                <Image className="company-logo" width={40} height={40} src={logo || "/placeholder.svg"} alt={company} />
              </div>
              <div>
                <h3 className="company-name">{company}</h3>
                <p className="role">{role}</p>
              </div>
            </div>
          </div>
          <div className="period-wrapper">
            <span className="period-badge">{period}</span>
            {isActive && <div className="active-indicator"></div>}
          </div>
        </div>

        <p className="description">{description}</p>

        {isActive && (
          <div className="expandable-content">
            <div className="achievements">
              <h4>Responsabilidades</h4>
              <ul>
                {achievements.map((achievement, idx) => (
                  <li key={idx} style={{ animationDelay: `${idx * 0.05}s` }}>
                    <span className="bullet">▸</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="tech-stack">
              <h4>Stack Tecnológico</h4>
              <div className="tech-icons">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="tech-badge" title={tech.name} style={{ animationDelay: `${idx * 0.08}s` }}>
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const ParticleBackground = () => {
  const particles = useMemo(() => {
    return [...Array(20)].map(() => ({
      left: Math.random() * 100 + "%",
      animationDelay: Math.random() * 5 + "s",
      animationDuration: Math.random() * 3 + 3 + "s",
    }))
  }, [])

  return (
    <div className="particle-container">
      {particles.map((style, i) => (
        <div key={i} className="particle" style={style} />
      ))}
    </div>
  )
}

export default function Experiencia() {
  const [activeCard, setActiveCard] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("experiencia")
      if (!element) return

      const rect = element.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const experiencias = [
    {
      company: "Z3 Smart Digital",
      role: "Desenvolvedor Front-End",
      period: "Out 2024 - Jan 2025",
      logo: "/z3.avif",
      description:
        "Criação de novas funcionalidades performáticas focando em otimização de performance da aplicação e melhorias na tela do card game.",
      achievements: [
        "Desenvolvimento de funcionalidades performáticas para o card game",
        "Otimização de performance do site e aplicação",
        "Implementação de melhorias na experiência do usuário",
        "Colaboração com equipe de design para UI/UX",
      ],
      technologies: [
        { name: "Next.js", icon: <RiNextjsFill className="text-xl text-white" /> },
        { name: "React", icon: <FaReact className="text-xl text-[#61DBFB]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-xl text-[#007ACC]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-xl text-[#06B6D4]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-xl text-[#F7DF1E]" /> },
        { name: "Git", icon: <FaGitAlt className="text-xl text-[#F1502F]" /> },
      ],
    },
    {
      company: "Ingresse",
      role: "Desenvolvedor Front-End Elixir (Jr)",
      period: "Jun 2025 - Atual",
      logo: "/ingresse.png",
      description:
        "Aprender e apoiar no desenvolvimento de interfaces com foco em qualidade e consistência com Elixir e Elixir Live View.",
      achievements: [
        "Implementar componentes seguindo boas práticas de desenvolvimento.",
        "Corrigir bugs em teste ou produção.",
        "Seguir o design system para padronização visual e funcional.",
        "Escrever testes básicos para validação de código.",
        "Participar de code reviews e colaborar na melhoria contínua.",
      ],
      technologies: [
        { name: "Elixir", icon: <SiElixir className="text-xl text-[#6e4a7e]" /> },
        { name: "Phoenix", icon: <SiElixir className="text-xl text-[#F05440]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-xl text-[#336791]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-xl text-[#007ACC]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-xl text-[#06B6D4]" /> },
        { name: "Docker", icon: <SiDocker className="text-xl text-[#2496ED]" /> },
        { name: "Git", icon: <FaGitAlt className="text-xl text-[#F1502F]" /> },
        { name: "APIs", icon: <TbApi className="text-xl text-[#29A8DF]" /> },
      ],
    },
  ]

  return (
    <section id="experiencia" className="experiencia-section">
      <ParticleBackground />

      <div className="orbital-background" style={{ opacity: scrollProgress * 0.3 }} />

      <div className="section-header">
        <h1 className="section-title">Minha Experiência</h1>
        <p className="section-subtitle">Jornada profissional em desenvolvimento web</p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line" style={{ scaleY: scrollProgress }} />

        <div className="cards-wrapper">
          {experiencias.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              {...exp}
              index={idx}
              isActive={activeCard === idx}
              onClick={() => setActiveCard(activeCard === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
