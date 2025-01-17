import { useQuery } from "@tanstack/react-query";
import { Film } from "./models";
import { fetchTodoList } from "./api";
import OnEmpty from "../../../../components/MovieListStates/OnEmpty";
import { MovieCard } from "../../../../components/MovieCard";

function MoviesList({ filmNameSearch }: { filmNameSearch: string }) {
  const { data: films } = useQuery<Film[]>({
    queryKey: ["todos"],
    queryFn: fetchTodoList,
  });

  if (!films || films.length === 0) return <OnEmpty />

  const filteredFilms = films.filter((film) =>
    film.label.toLowerCase().includes(filmNameSearch.toLowerCase())
  );

  return (
    <div style={MoviesContainerStyle}>
      {filteredFilms.map((film) => (
        <MovieCard key={film.label} film={film} />
      ))}
    </div>
  );
}

const MoviesContainerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "1rem",
  padding: "1rem",
};

export { MoviesList, MoviesContainerStyle }; 
