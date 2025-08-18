import { useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.jpeg";
import TurkeyFlag from "../../assets/turkey-flag.jpg";

export default function Header() {
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        {/* Logo */}
        <a href="#" className="nav-logo">
          <img src={Logo} alt="Logo" className="logo-img" />
        </a>

        {/* Orta yazı */}
        <div className="header-center-text">
          <p>
            Victory belongs to those who can say, &quot;Victory is mine.&quot;
          </p>
          <span>Mustafa Kemal ATATÜRK</span>
        </div>

        {/* Menü */}
        <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <i className="uil uil-user nav-icon"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                <i className="uil uil-file-alt nav-icon"></i> Career
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <i className="uil uil-message nav-icon"></i> Contact
                <img src={TurkeyFlag} alt="Turkish Flag" className="nav-flag" />
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav-close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        {/* Mobil toggle */}
        <div className="nav-toggle">
          <i
            className="uil uil-apps"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
      </nav>
    </header>
  );
}
