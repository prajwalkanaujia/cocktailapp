import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, namedrink, glass, info, image }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={namedrink} />
      </div>
      <div className="cocktail-footer">
        <h3>{namedrink}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`cocktail/${id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
