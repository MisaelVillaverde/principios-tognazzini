import React from "react";
import { useParams } from "react-router";
import data from "../data";
import "./Detail.css";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  // get data from data.js and filter by id
  const info = data.filter((item) => item.id === id)[0];

  return (
    <div className="detail">
      <h1 className="detail__title">{info.title}</h1>
      <p className="detail__description">{info.description}</p>
      <div className="detail__footer">
        <div className="detail_img_container">
          <div>
            <h2>Web</h2>
            <div className="img__border">
              <img src={info.imageWeb} alt="web" />
            </div>
            <p>{info.descriptionWeb}</p>
          </div>
          <div>
            <h2>Movil</h2>
            <div className="img__border">
              <img src={info.imageMobile} alt="mobile" />
            </div>
            <p>{info.descriptionMobile}</p>
          </div>
        </div>
        <Link to="/" className="home__button">
          <i class="fas fa-home"></i>
          <p>Home</p>
        </Link>
      </div>
    </div>
  );
}

export default Detail;
