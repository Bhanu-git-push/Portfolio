import React from "react";
import { pageLinks, socialLinks } from "../data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div style={{fontSize:"17px"}}><strong>portfolio</strong></div>
        </div>

        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <a href={link.href} className="nav-link" key={link.id}>
                {link.text}
              </a>
            );
          })}
        </ul>
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { href, icon, color } = link;
            return (
              <a href={href} className="nav-icon" key={link.id} target="_blank" rel="noopener noreferrer" style={{ color }}>
                <i>{icon}</i>
              </a>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
