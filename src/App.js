import React, { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./logo.svg";
import MovieCard from "./MovieCard";

//64cfa9a9
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=64cfa9a9";


const App = () => {
    const [movies, setMovies]= useState([]);
    const [searchTerm,setSearchTerm]=useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Hulk");
  }, []);
  return (
    <div className="app">
      <h1>Movieland</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={searchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>
      {
        movies?.length> 0 ? (
            <div className="container">
        {
            movies.map(movie => (<MovieCard movie={movie} />))
        }
      </div>
        ):(
            <div className="empty"><h2>not found</h2></div>
        )
      }
    </div>
  );
};
export default App;
