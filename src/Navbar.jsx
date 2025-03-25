import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="containe">
          <h1 className="logo">Think-X</h1>

          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>

          <div className={`menu ${menuOpen ? "menu-mobile" : ""}`}>
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/about" onClick={toggleMenu}>About</Link>
            <Link to="/services" onClick={toggleMenu}>Services</Link>
            <Link to="/blog" onClick={toggleMenu}>Blog</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      </nav>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 1rem;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 50;
        }
        .containe {
          display: flex;
          justify-content: space-around;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .menu {
          display: flex;
          gap: 1rem;
        }
        .menu a {
          text-decoration: none;
          color: white;
          font-size: 18px;
          padding: 0.5rem 1rem;
        }
        .hamburger {
          display: none;
          cursor: pointer;
          font-size: 1.8rem;
        }
        @media (max-width: 768px) {
          .menu {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color:rgba(0, 0, 0, 0.6);
            padding: 1rem;
          }
          .menu-mobile {
            display: flex;
          }
          .hamburger {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
