import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import styles from "./MovieCard.module.css";

const imagePrefixUrl = "http://image.tmdb.org/t/p/w500";

const MovieCard = (props) => {
  
  const [liked, setLiked] = useState(false);
  const movie = props?.movie;

  const heartButtonHandler = (movie) => {
    props.addFavoriteHandler(movie);
    setLiked(true)
  }

  const heartRemoveHandler = (id) => {
    props.removeFavoriteHandler(id);
    setLiked(false)
  }
  

  return (
    <div className={styles.container}>
      {liked ? (
        <button className={styles.heartIcon} onClick={() => heartRemoveHandler(movie.id)}>
          <AiFillHeart />
        </button>
      ) : (
        <button
          className={styles.heartIcon}
          onClick={() => heartButtonHandler(movie)}
        >
          <AiOutlineHeart />
        </button>
      )}
      <Link to={`/movie/${movie.id}`} title={movie?.title}>
        <img src={`${imagePrefixUrl}${movie?.backdrop_path}`} />
        <p>{movie?.title}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
