import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import CocktailList from "./components/CocktailList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("a");
  const [cocktails, setCocktail] = useState([]);

  const FetchApi = async () => {
    setLoading(true);
    try {
      const respose = await fetch(`${url}${search}`);
      const data = await respose.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            namedrink: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktail(newCocktails);
        setLoading(false);
      } else {
        setCocktail([]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchApi();
  }, [search]);
  return (
    <AppContext.Provider value={{ loading, search, setSearch, cocktails }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
