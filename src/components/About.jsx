import React from "react";
import Image from "next/image";

function SistemaSolar() {
  return (
    <div className="sistema-solar mr-20 mt-20">
      <div className="container">
        <div className="sun">
          <Image src="/sun.png" width={110} height={120} alt="sun" className="img" />{" "}
        </div>
        <div className="mercury"></div>
        <div className="venus"></div>
        <div className="earth">
          <div className="moon"></div>
        </div>
        <div className="mars"></div>
        <div className="jupiter"></div>
        <div className="saturn"></div>
        <div className="uranus"></div>
        <div className="neptune"></div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div id="divsobremim">
      <section id="sobremim" className="sobremim mb-44 ">
        <div>
          <h1 className="h1s2 mb-10">Minha órbita</h1>
        </div>
        <div className="descriçãosec2">
          <div className="coluna-texto esquerda ml-12 ">
            <h1 className="titulo-coluna">Minha Jornada</h1>

            <p>
              Comecei minha jornada em programação e a faculdade de ADS no dia 03/03/2024.
            </p>
            <div className="">
              {" "}
              <strong>{"/*"}</strong>
            </div>
            <p>
              {" "}
              Desde então, estou sempre aprendendo e evoluindo para transformar ideias em
              soluções reais.{" "}
            </p>
          </div>

          <SistemaSolar />
          <div>
            {" "}
            <div className="coluna-texto direita mr-12">
              <h1 className="titulo-coluna">Meus Objetivos</h1>
              <p>A cada linha de código, busco criar interfaces que façam a diferença.</p>
              <strong>
                <strong>
                  <span>{"*/"}</span>
                </strong>
              </strong>
              <p>Estou sempre aberto a novas opotunidades e desafios. Vamos conversar?</p>
              <div className="flex justify-center mt-5">
                <div
                  title="Linkedin"
                  className="espelhado-transparente-nav h-12 w-12 bg-[#1f1f1f] rounded-lg flex items-center justify-center "
                >
                  <div>
                    <a
                      href="https://www.linkedin.com/in/alexandre-carvalho-4b178a26b/"
                      target="_blank"
                    >
                      <Image src="/linkedin.png" width={30} height={30} alt="linkedin" />{" "}
                    </a>
                  </div>
                </div>
                <div
                  title="Instagram"
                  className=" espelhado-transparente-nav h-12 w-12 bg-[#1f1f1f] rounded-lg flex items-center justify-center ml-3"
                >
                  <div className="linkedinn">
                    <div>
                      <a href="https://www.instagram.com/xande.mirandac/" target="_blank">
                        <Image src="/insta.png" width={30} height={30} alt="insta" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  title="GitHub"
                  className=" espelhado-transparente-nav h-12 w-12 bg-[#1f1f1f] rounded-lg flex items-center justify-center ml-3"
                >
                  <a
                    href="https://github.com/AlexandeCrv?tab=repositories"
                    target="_blank"
                  >
                    <Image src="/github.png" width={30} height={30} alt="github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
