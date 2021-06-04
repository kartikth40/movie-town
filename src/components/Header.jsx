import React from "react"
import SearchBar from "./SearchBar"
import { trendingMovies } from "./App"

function Header({ movies, setMovies }) {
  function handleClick() {
    fetch(trendingMovies)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results)
      })
  }

  return (
    <div className="header">
      <div className="title" onClick={handleClick}>
        Movie Town
      </div>
      <SearchBar movies={movies} setMovies={setMovies} />
    </div>
  )
}

export default Header
