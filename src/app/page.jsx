"use client";

import Image from "next/image";
import "../components/Navbar";
import "../components/Stars";
import "../components/SectionMain";
import "../components/Footer";
import "../components/About";
import "../components/Projetos";
import "./fonts/fonts.css";
import "./globals.css";

import NavBar from "../components/Navbar";
import Stars from "../components/Stars";
import SectionMain from "../components/SectionMain";
import Footer from "../components/Footer";
import About from "../components/About";
import Projetos from "../components/Projetos";
import Habilidades from "@/components/Habilidades";

export default function Home() {
  return (
    <div>
      <main>
        <NavBar />
        <section className="wrapper">
          <Stars />
          <SectionMain />
          <About />
        </section>
        <Projetos />
        <Habilidades />
        <Footer />
      </main>
    </div>
  );
}
