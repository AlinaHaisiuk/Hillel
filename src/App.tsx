import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Contact from "../src/components/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <nav style={{ margin: "20px" }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            margin: "0 10px",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            margin: "0 10px",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            margin: "0 10px",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Contact
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
