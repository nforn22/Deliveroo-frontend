import React from "react";
import logo from "../assets/img/logo-teal.svg";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo Deliveroo" style={{ height: 32 }} />
      </div>
      <input type="text" placeholder="Chercher Subway - Rambuteau" />
      <div className="header-actions">
        <button>Inscription ou connexion</button>
        <button>Votre compte</button>
      </div>
    </header>
  );
}

export default Header;