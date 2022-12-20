import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieList(props) {

  const { movies } = props;

  if (!movies) return <div>Loading movie information...</div>;
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  if (!props.movie) return <div>Loading movie information...</div>;
  return (
    <div className="movie-card">
    <Link to={`/movies/${props.movie.id}`}>
      <h2>{title}</h2>
    </Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
