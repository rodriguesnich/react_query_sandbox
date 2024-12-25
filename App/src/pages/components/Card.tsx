
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


export default Card;