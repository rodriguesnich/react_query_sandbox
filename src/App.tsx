import React, { useState } from "react";
import "./App.css";

import top100Films from "./assets/top100Films";

export default function App() {
  const [filmNameSearch, setFilmNameSearch] = useState("");

  const filteredFilms = top100Films.filter((film) =>
    film.label.toLowerCase().includes(filmNameSearch.toLocaleLowerCase())
  );

  return (
    <>
      <input
        name="UserFilter"
        value={filmNameSearch}
        onChange={(evt) => setFilmNameSearch(evt.target.value)}
        placeholder="Film Name"
        type="text"
        style={AppStyles.filterSearch}
      />
      <div style={AppStyles.cardsContainer}>
        {filteredFilms.map((film) => (
          <Card key={film.label} film={film} />
        ))}
      </div>
    </>
  );
}

const AppStyles: {
  filterSearch: React.CSSProperties;
  cardsContainer: React.CSSProperties;
} = {
  filterSearch: {
    width: "100%",
    height: "2rem",
    marginBottom: "1rem",
  },
  cardsContainer: {},
};

function Card({ film }: { film: { label: string; year: number } }) {
  return (
    <div style={CardStyle}>
      <h5>{film.label}</h5>
      <span>{film.year}</span>
    </div>
  );
}

const CardStyle = {
  border: "0.5px solid white",
  padding: "1rem",
  borderRadius: "15px",
  marginBottom: "1rem",
};
