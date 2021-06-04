import React, { useState } from "react"
import Header from "./Header"
import MoviesContainer from "./MoviesContainer"

function App() {
  const [movies, setMovies] = useState([])

  return (
    <div className="app-container">
      <Header movies={movies} setMovies={setMovies} />
      <MoviesContainer movies={movies} setMovies={setMovies} />
    </div>
  )
}

export default App
const apiPath = "https://api.themoviedb.org/3"
const API_KEY = process.env.REACT_APP_API_KEY
export const trendingMovies = apiPath + "/trending/movie/week?api_key=" + API_KEY
export const searchApi = apiPath + "/search/movie?api_key=" + API_KEY + "&language=en-US&include_adult=false&query="
export const posterApi = "https://image.tmdb.org/t/p/w500"
