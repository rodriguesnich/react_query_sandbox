import {  useState } from "react";
import CardsContainer from "./components/MoviesList/MoviesListContainer";

function SearchMoviesPage() {
  const [filmNameSearch, setFilmNameSearch] = useState("");

  return (
    <>
      <input
        name="UserFilter"
        value={filmNameSearch}
        onChange={(evt) => setFilmNameSearch(evt.target.value)}
        placeholder="Film Name"
        type="text"
        style={AppStyles}
      />
     <CardsContainer filmNameSearch={filmNameSearch} /> 
    </>
  );
}

const AppStyles: React.CSSProperties = {
  width: "100%",
  height: "2rem",
  marginBottom: "1rem",
};

export default SearchMoviesPage;
