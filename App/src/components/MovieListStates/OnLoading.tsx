import { MoviesContainerStyle } from "../../pages/SearchMoviesPage/components/MoviesList";
import { CardStyle } from "../MovieCard";

const loadingCardStyle = {
  ...CardStyle,
  background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
  backgroundSize: '200% 100%',
  animation: 'loading 1.5s infinite',
};

const loadingTextStyle = {
  height: '1rem',
  background: '#e0e0e0',
  borderRadius: '4px',
  margin: '8px 0',
};

const loadingTitleStyle = {
  ...loadingTextStyle,
  height: '2rem',
  width: '80%',
};

function OnLoading() {
  return (
    <>
      <style>
        {`
          @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}
      </style>
      <div style={MoviesContainerStyle}>
        {[1, 2, 3, 4].map((key) => (
          <div key={key} style={loadingCardStyle}>
            <div style={loadingTitleStyle} />
            <div style={loadingTextStyle} />
          </div>
        ))}
      </div>
    </>
  );
}

export default OnLoading;
