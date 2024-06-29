import PropTypes from 'prop-types';

function SearchForm({ query, setQuery, searchMovies }) {
  return (
    <form className="form" onSubmit={searchMovies}>
      <input
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
        className="input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
}

// Define prop types for the component
SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  searchMovies: PropTypes.func.isRequired
};

export default SearchForm;
