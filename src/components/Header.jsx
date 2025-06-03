import React from "react";

function Header() {
  return (
    <header>
      <div className="logo">deliveroo</div>
      <input type="text" placeholder="Search for a restaurant" />
      <div className="header-actions">
        <button>Sign in or sign up</button>
        <button>Your account</button>
      </div>
    </header>
  );
}

export default Header;