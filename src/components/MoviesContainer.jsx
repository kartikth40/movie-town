import React, { useEffect } from "react"
import MovieCard from "./MovieCard"
import { trendingMovies } from "./App"

function MoviesContainer({ movies, setMovies }) {
  useEffect(() => {
    fetch(trendingMovies)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results)
      })
  }, [])

  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  )
}

export default MoviesContainer
