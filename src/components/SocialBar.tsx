import { FaLinkedin, FaGithub, FaSpotify } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

export default function SocialBar() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Fundo levemente transparente
        backdropFilter: "blur(8px)", // Efeito de desfoque
        WebkitBackdropFilter: "blur(8px)", // Suporte para navegadores baseados em Webkit
        borderRadius: "2rem",
        padding: "0.5rem 1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "1.5rem",
        zIndex: 9999,
        color: "#fff",
        borderTop: "1px solid rgba(255, 255, 255, 0.3)", // Bordas mais suaves
        borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <a href="https://www.linkedin.com/in/leticiaeltermann" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size="1.5rem" />
      </a>
      <a href="https://github.com/leticiael" target="_blank" rel="noopener noreferrer">
        <FaGithub size="1.5rem" />
      </a>
      <a href="https://medium.com/@leeltermann" target="_blank" rel="noopener noreferrer">
        <SiMedium size="1.5rem" />
      </a>
      <a href="https://open.spotify.com/playlist/5s5HbRyiIoleHG68BfLyEH?si=V44lm-gSRwaHwWKt2OKO_w&pi=aLki6NamRPOMg " target="_blank" rel="noopener noreferrer">
        <FaSpotify size="1.5rem" />
      </a>
    </div>
  );
}