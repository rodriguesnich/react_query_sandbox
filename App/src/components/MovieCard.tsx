import { Film } from "../pages/ServerSearchMoviesPage/components/MoviesList/models";

function MovieCard({ film }: { film: Film }) {
  return (
    <div style={CardStyle}>
      <h5>{film.label}</h5>
      <p>{film.year}</p>
    </div>
  );
}

const CardStyle = {
  border: "0.1px solid white",
  padding: "1rem",
  borderRadius: "15px",
  marginBottom: "1rem",
};

export { MovieCard, CardStyle };
