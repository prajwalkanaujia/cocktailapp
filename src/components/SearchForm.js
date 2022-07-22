import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearch } = useGlobalContext();
  const searchValue = React.useRef("");
  console.log(searchValue.current.value);
  const searchCock = () => {
    setSearch(searchValue.current.value);
  };
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search Your Favourite Cocktail.</label>
          <input type="text" ref={searchValue} onChange={searchCock} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
