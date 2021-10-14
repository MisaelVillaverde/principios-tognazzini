import React from "react";
import "./Integrantes.css";
import { Link } from "react-router-dom";

function Integrantes() {
  return (
    <div className="integrantes">
      <h1 className="integrantes__title">Grupo 2</h1>
      <hr />
      <h2 className="name">Ricky Pan</h2>
      <h2 className="name">Diego Burgos</h2>
      <h2 className="name">Luis Carreyó</h2>
      <h2 className="name">Paola Solís</h2>
      <h2 className="name">Misael Villaverde</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/" className="home__button">
        <i class="fas fa-home"></i>
        <p>Home</p>
      </Link>
    </div>
  );
}

export default Integrantes;
