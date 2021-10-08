import React from "react";
import data from "../data";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Principios de Bruce Tognazzini</h1>

      <div className="home__container">
        {data.map((item, index) => (
          <Link to={`/detail/${item.id}`} key={index}>
            <div key={index} className="home__item">
              <img
                className="item__img"
                key={index}
                src={item.image}
                alt={item.title}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
