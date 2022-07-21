import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState([]);
  const FetchData = async () => {
    setLoading(true);

    try {
      console.log(`${url}${id}`);
      const respose = await fetch(`${url}${id}`);
      const data = await respose.json();
      if (data.drinks) {
        const {
          strDrink,
          strCategory,
          strInstructions,
          strGlass,
          strAlcoholic,
          strDrinkThumb,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newcocktail = {
          strDrink,
          strCategory,
          strAlcoholic,
          strInstructions,
          strGlass,
          strDrinkThumb,
          ingredients,
        };
        setCocktail(newcocktail);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    <h2 className="section-title">Item Does not exist.</h2>;
  }

  const {
    strDrink,
    strAlcoholic,
    strCategory,
    strInstructions,
    strGlass,
    strDrinkThumb,
    ingredients,
  } = cocktail;
  return (
    <section className="section cocktail-section">
      <h2 className="section-title">{strDrink}</h2>
      <div className="drink">
        <img classname="new" src={strDrinkThumb} alt={strDrink} />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name : </span>
            {strDrink}
          </p>
          <p>
            <span className="drink-data">Category : </span>
            {strCategory}
          </p>
          <p>
            <span className="drink-data">Info : </span>
            {strAlcoholic}
          </p>
          <p>
            <span className="drink-data">Glass : </span>
            {strGlass}
          </p>
          <p>
            <span className="drink-data">Instruction : </span>
            {strInstructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item},</span> : null;
            })}
          </p>
        </div>
      </div>
      <Link to="/" className="btn btn-primary">
        Go Back!
      </Link>
    </section>
  );
};

export default SingleCocktail;
