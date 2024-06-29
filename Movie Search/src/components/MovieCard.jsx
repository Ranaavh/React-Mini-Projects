import PropTypes from 'prop-types';

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img
        className="card--image"
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={`${movie.Title} poster`}
      />
      <div className="card--content">
        <h3 className="card--title">{movie.Title}</h3>
        <p><small>RELEASE DATE: {movie.Year}</small></p>
        <p><small>TYPE: {movie.Type}</small></p>
      </div>
    </div>
  );
}

// Define PropTypes for the component
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired
  }).isRequired
};

export default MovieCard;
