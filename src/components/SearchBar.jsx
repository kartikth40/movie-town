import React, { useState } from "react"
import { searchApi } from "./App"

function SearchBar({ movies, setMovies }) {
  const [searchTerm, setSearchTerm] = useState("")

  function handleOnChange(e) {
    setSearchTerm(e.target.value)
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    fetch(searchApi + searchTerm)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results)
      })
    setSearchTerm("")
  }

  return (
    <div className="search-box">
      <form onSubmit={handleOnSubmit}>
        <input placeholder="Search..." value={searchTerm} onChange={handleOnChange} />
      </form>
    </div>
  )
}

export default SearchBar
