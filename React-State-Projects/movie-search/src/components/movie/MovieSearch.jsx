// src/App.js
import React, { useState } from 'react';
import styles from './MovieSearch.module.scss';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    // You can get an API key from https://www.themoviedb.org/settings/api
    const API_KEY = '36faad0cace4f9edd67be03d842e6885';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);  console.log(movies)
    } catch (err) {
 console.error(err);
    }
  };
  
 
  return (
    <>
      <form onSubmit={searchMovies} className={styles.form}>
        <label htmlFor="query">Movie Name:</label>
        <input
          type="text"
          name="query"
          placeholder="e.g. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>

      <div className={styles.movieList}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movieCard}>
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
            <img
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt={movie.title + ' poster'}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default function App() {
  return (
    <div>
      <h1>Movie Search App</h1>
      <MovieSearch />
    </div>
  );
}
