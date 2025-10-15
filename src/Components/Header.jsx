import "./HeaderStyles.css";
import React, {useState} from "react";
import logoempresa from '../Pages/logoempresa.png';


export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <nav className="nav-container">
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </button>
      
       <div className="logotipo">
      <p>CONSTRUCAR S.L.</p>
      <img src= {logoempresa}></img>
      </div>
      <div className={`nav-links ${isOpen ? "show" : ""}`}>
        <a href="/Home" className="nav-link">Inicio</a>
        <a href="/Quienes-somos" className="nav-link">Quiénes somos</a>
        <a href="/Nuestras-obras" className="nav-link">Nuestras obras</a>
        <a href="/Servicios" className="nav-link">Servicios</a>
        <a href="/Contacto" className="nav-link">Contacto</a>
        </div>
    </nav>
    </div>
  );
}