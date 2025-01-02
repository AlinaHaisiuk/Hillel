import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const Team: React.FC = () => <h2>Наша команда</h2>;
const History: React.FC = () => <h2>Історія компанії</h2>;

const About: React.FC = () => {
  return (
    <div>
      <h1>Це сторінка про нас</h1>
      <nav>
        <Link to="team">Команда</Link> | <Link to="history">Історія</Link>
      </nav>
      <Routes>
        <Route path="team" element={<Team />} />
        <Route path="history" element={<History />} />
      </Routes>
    </div>
  );
};

export default About;
