import React, { useState } from "react";
import { PiReadCvLogoDuotone } from "react-icons/pi";
import { FaLanguage } from "react-icons/fa";

function SectionMain() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <section id="secmain" className="secmain mb-44 ">
        <div className="secmainh1h2">
          <h1 className="h1s">Alexandre Carvalho</h1>
          <div className="txt-animado">Desenvolvedor Front End Web</div>

          <div className="flex w-80 mt-3">
            <div
              title="Linkedin"
              className="espelhado-transparente-nav h-12 w-12 bg-[#1f1f1f] rounded-lg flex items-center justify-center"
            >
              <a
                href="https://www.linkedin.com/in/alexandre-carvalho-4b178a26b/"
                target="_blank"
              >
                <img src="linkedin.png" alt="Linkedin" />
              </a>
            </div>
            <div
              title="Instagram"
              className="espelhado-transparente-nav h-12 w-12 bg-[#1f1f1f] rounded-lg flex items-center justify-center ml-3"
            >
              <a
                href="https://www.instagram.com/xande.mirandac/"
                target="_blank"
              >
                <img src="insta.png" alt="Instagram" />
              </a>
            </div>
            <div
              title="GitHub"
              className="espelhado-transparente-nav h-12 w-12 bg-[#1f1f1f] rounded-lg flex items-center justify-center ml-3"
            >
              <a
                href="https://github.com/AlexandeCrv?tab=repositories"
                target="_blank"
              >
                <img src="github.png" alt="GitHub" />
              </a>
            </div>

            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              title="Currículo"
              className="relative espelhado-transparente-nav h-12 w-12 bg-[#1f1f1f] rounded-lg flex items-center justify-center ml-3 cursor-pointer"
            >
              <PiReadCvLogoDuotone className="text-3xl text-white" />
              {isHovered && (
                <div
                  style={{ top: "51px" }}
                  className="absolute bg-[#1f1f1f] border-2 border-[#fff] rounded-md p-3"
                >
                  <a
                    href="/CurriculoalexandreBR.pdf"
                    target="_blank"
                    className="text-[#fff] hover:bg-white hover:text-black hover:border-0 rounded-md px-4 py-2 duration-300 flex items-center"
                    download
                  >
                    <img
                      src="/brasil.png"
                      alt="Bandeira do Brasil"
                      className="mr-1"
                    />
                    <p className="mr-4">Português</p>
                  </a>
                  <a
                    href="/CurrículoalexandreIng.pdf"
                    target="_blank"
                    className="text-[#fff] hover:bg-white hover:text-black hover:border-0 mt-2 rounded-md px-4 py-2 duration-300 flex items-center"
                    download
                  >
                    <img
                      src="/usa.png"
                      alt="Bandeira dos EUA"
                      className="mr-1"
                    />
                    Inglês
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="animation2 mt-36"></div>
      </section>
    </div>
  );
}

export default SectionMain;
