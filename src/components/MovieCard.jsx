import React from "react"
import { posterApi } from "./App"

const defaultImg =
  "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80"

function MovieCard({ title, overview, poster_path, vote_average }) {
  function setVoteClass(vote_average) {
    if (vote_average >= 8) return "green"
    else if (vote_average >= 6) return "orange"
    else return "red"
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={poster_path ? posterApi + poster_path : defaultImg} alt={title}></img>
      </div>
      <div className="movie-info">
        <h1>{title}</h1>
        <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
      </div>
      <div className="overview">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default MovieCard
