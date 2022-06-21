import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getSimilarMovies } from "../../api/movies";
import { FaStar } from "react-icons/fa"

import MovieCard from "../MovieCard/MovieCard";

import styles from "./MoviePage.module.css";

const imagePrefixUrl = "http://image.tmdb.org/t/p/w500";
const MoviePage = () => {
  const params = useParams();
  const movieId = params.movieId;
  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);

  console.log(movie)

  const fetchMovieDetails = () => {
    getMovieDetails(movieId).then((res) => {
      if (!res) return;
      setMovie(res);
    });
  };

  const fetchSimilarMovies = () => {
    getSimilarMovies(movieId).then((res) => {
      if (!res) return;
      setSimilarMovies(res.results);
    });
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchSimilarMovies();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.main} style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)),  url(" + `${imagePrefixUrl}${movie?.backdrop_path}` + ")" }}>
        <img src={`${imagePrefixUrl}${movie?.backdrop_path}`} />
        <div className={styles.details}>
          <label>Title</label>
          <div className={styles.title}>{movie?.title}</div>
          <div className={styles.sub}>{movie?.tagline}</div>
          <label>Story</label>
          <div className={styles.desc}>{movie?.overview}</div>
          <label>Run time</label>
          <div className={styles.desc}>{movie?.runtime} minutes</div>
          <label>Rating</label>
          <div className={styles.rating}>{movie?.vote_average}&nbsp;<FaStar style={{
            color: "#e1ad01",
          }} /></div>
        </div>
      </div>
      <div className={styles.similar}>
        <div className={styles.title}>Similar movies</div>
        <div className={styles.movies}>
          {similarMovies.map((item) => (
            <MovieCard movie={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
