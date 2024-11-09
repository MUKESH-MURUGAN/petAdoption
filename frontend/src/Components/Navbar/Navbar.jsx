import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("Home");

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "All", path: "/all" },
    { name: "Dog", path: "/dog" },
    { name: "Cat", path: "/cat" },
    { name: "Fish", path: "/fish" },
    { name: "Birds", path: "/bird" },
    { name: "Add Pet", path: "/save_me" }
  ];

  return (
    <div className="navbar">
      <h1 className="navbar-heading">Pet Adoption</h1>
      <ul className="menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`menu-item ${activeMenu === item.name ? "active" : ""}`}
            onClick={() => setActiveMenu(item.name)}
          >
            <Link to={item.path} className="menu-link">
              {item.name}
            </Link>
            {activeMenu === item.name && <hr className="menu-indicator" />}
          </li>
        ))}
        <li className="menu-item logout-button">
          <Link to="/logout" className="menu-link logout">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
