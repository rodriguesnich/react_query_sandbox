import top100Films from "../../assets/top100Films";
import Card from "./Card";

function CardsContainer({ filmNameSearch }: { filmNameSearch: string }) {
  const filteredFilms = top100Films.filter((film) =>
    film.label.toLowerCase().includes(filmNameSearch.toLocaleLowerCase())
  );

  return (
    <div style={CardsContainerStyle}>
      {filteredFilms.map((film) => (
        <Card key={film.label} film={film} />
      ))}
    </div>
  );
}

const CardsContainerStyle: React.CSSProperties = {};

export default CardsContainer;