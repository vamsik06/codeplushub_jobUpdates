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
        <NavLink 
        to="/"
        style={({ isActive }) =>(isActive ? {color:"blue"} : null)}
        >Home</NavLink>

        <NavLink 
        to="/contact"
         style={({ isActive }) =>(isActive ? {color:"blue"} : null)}
        >Contact</NavLink>
        <NavLink 
        to="/about"
         style={({ isActive }) =>(isActive ? {color:"blue"} : null)}
        >About</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
