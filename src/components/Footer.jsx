import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-[#00ad6f]">Contatos</h1>
          <div className="flex flex-col items-center gap-2 mb-8">
            <MdEmail className="text-3xl text-[#00ad6f]" />
            <p className="text-lg">alexandecarvalho318@gmail.com</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4 text-[#00ad6f]">
            Me ache nas redes!
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/alexandre-carvalho-4b178a26b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-white hover:text-[#0077B5] transition-colors"
            >
              <FaLinkedin className="text-4xl" />
              <span className="text-sm mt-1">/Alexandre-Carvalho</span>
            </a>

            <a
              href="https://www.instagram.com/xande.mirandac/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-white hover:text-[#E4405F] transition-colors"
            >
              <FaInstagram className="text-4xl" />
              <span className="text-sm mt-1">/xande.mirandac</span>
            </a>

            <a
              href="https://github.com/AlexandeCrv?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-white hover:text-[#534d4d] transition-colors"
            >
              <FaGithub className="text-4xl" />
              <span className="text-sm mt-1">/AlexandeCrv</span>
            </a>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">
            <strong>
              <span>{"/*"}</span>
            </strong>{" "}
            © 2024 / Alexandre Carvalho{" "}
            <strong>
              <span>{"*/"}</span>
            </strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
