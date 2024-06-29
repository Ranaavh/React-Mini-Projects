import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import MovieCard from './components/MovieCard';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const searchMovies = async (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  const fetchMovies = async (query) => {
    const url = `http://www.omdbapi.com/?s=${query}&apikey=165c93a2`;

    const res = await fetch(url);
    const data = await res.json();
    if (data.Search) {
      setMovies(data.Search);
      setNoResults(false);
    } else {
      setMovies([]);
      setNoResults(true);
    }
  };

  useEffect(() => {
    fetchMovies('Jurassic Park');
  }, []);

  return (
    <div className="app">
      <h1 className="title">React Movie Search</h1>
      <SearchForm query={query} setQuery={setQuery} searchMovies={searchMovies} />
      <div className="card-list">
        {noResults ? (
          <p>No movies found. Please try a different search term.</p>
        ) : (
          movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
