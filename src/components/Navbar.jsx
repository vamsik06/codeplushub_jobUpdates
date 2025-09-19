import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import company from "../assets/company.png";


const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);
const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-container">

      <div className="logo">
        <img src={company} alt="Company Logo" width={50} height={40} />
        <h1>Codeplushub_JobUpdates</h1>
      </div>

       <nav className="navbar">
        <NavLink to="/" style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}>Home</NavLink>
        <NavLink to="/contact" style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}>Contact</NavLink>
        <NavLink to="/about" style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}>About</NavLink>
      </nav>

{/* Hamburger button */}
<button
  className="hamburger"
  aria-label="Open menu"
  onClick={() => setIsOpen(!isOpen)}
>
  ☰
</button>
    
     <aside className={isOpen ? "sidebar open" : "sidebar"}>
    <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
    <NavLink to="/" onClick={closeMenu}>Home</NavLink>
    <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
    <NavLink to="/about" onClick={closeMenu}>About</NavLink>
  </aside>
    </header>
  );
};

export default Navbar;
