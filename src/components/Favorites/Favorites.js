import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("favorites"));
    if (items) {
      setMovies(items);
    }
  }, []);

  console.log(movies);
  return (
    <>
    <div className="title" id="title">
            <h1>Favorites</h1>
            <div></div>
          </div>
    <div className="innerContainer">
      {movies.map((item, index) => (
        <MovieCard
          movie={item}
          key={item.id + index + ""}
        />
      ))}
    </div>
    </>
  );
};

export default Favorites;
