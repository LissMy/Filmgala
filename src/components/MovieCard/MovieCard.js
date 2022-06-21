import React from "react";
import { Link } from "react-router-dom";

import styles from "./MovieCard.module.css";

const imagePrefixUrl = "http://image.tmdb.org/t/p/w500";

const MovieCard = (props) => {
  const movie = props?.movie;
  return (
    <Link
      to={`/movie/${movie.id}`}
      className={styles.container}
      title={movie?.title}
    >
        <img src={`${imagePrefixUrl}${movie?.backdrop_path}`} />
      <p>{movie?.title}</p>
    </Link>
  );
}

export default MovieCard;
