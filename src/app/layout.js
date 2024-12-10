import localFont from "next/font/local";
import "./css/globals.css";
import "./css/stars.css";
import "./css/basico.css";
import "./css/sistemaSolas.css";
import "./css/secmain.css";
import "./css/navbar.css";
import "./css/projetos.css";
import "./css/about.css";
import "./css/habilidades.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/sun.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
