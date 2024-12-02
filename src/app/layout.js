import localFont from "next/font/local";
import "./globals.css";

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
