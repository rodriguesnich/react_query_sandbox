import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { Film } from "./models";

const fetchTodoList = async (): Promise<Film[]> => {
  const response = await fetch("http://localhost:3001/films").then((res) => res.json());
  return response || [];
};

function CardsContainer({ filmNameSearch }: { filmNameSearch: string }) {
  const { data: films, isLoading, error } = useQuery<Film[]>({
    queryKey: ['todos'],
    queryFn: fetchTodoList
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred</div>;
  if (!films) return <div>No films found</div>;

  const filteredFilms = films.filter((film) =>
    film.label.toLowerCase().includes(filmNameSearch.toLowerCase())
  );

  return (
    <div style={CardsContainerStyle}>
      {filteredFilms.length === 0 ? (
        <div>No matching films found</div>
      ) : (
        filteredFilms.map((film) => (
          <Card key={film.label} film={film} />
        ))
      )}
    </div>
  );
}

const CardsContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '1rem',
  padding: '1rem'
};

export default CardsContainer;
