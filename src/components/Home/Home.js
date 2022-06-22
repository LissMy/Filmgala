import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa"
import "./Home.css";

import { getPopularMovies } from "../../api/movies";

import Paginate from "../Paginate/Paginate";
import MovieCard from "../MovieCard/MovieCard";

const imagePrefixUrl = "http://image.tmdb.org/t/p/w500";

const Home = (props) => {


  const [popularMovies, setPopularMovies] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMoreMoviesLoading, setIsMoreMoviesLoading] = useState(false);
  const [isNearEnd, setIsNearEnd] = useState(false);

  const fetchPopularMovies = (page) => {
    setIsMoreMoviesLoading(true);
    getPopularMovies(page).then((res) => {
      setIsMoreMoviesLoading(false);
      setIsDataLoaded(true);
      if (!res) return;
      if (page === 1) {
        setTotalPages(res.total_pages);
        setPopularMovies(res.results);
      } else {
        setPopularMovies((prev) => [...prev, ...res?.results]);
      }
      setCurrentPage(res?.page);
    });
  };

  const handlePaginate = () => {
    if (isMoreMoviesLoading || currentPage >= totalPages) return;
    fetchPopularMovies(currentPage + 1);
  };

  useEffect(() => {
    if (isNearEnd) handlePaginate();
  }, [isNearEnd]);

  useEffect(() => {
    fetchPopularMovies(1);
  }, []);

  const movie = props?.movie;

  return (
    <div className="container">
      {!isDataLoaded ? (
        "Loading...."
      ) : (
        <Paginate onIntersection={(isOnEnd) => setIsNearEnd(isOnEnd)}>
          <div className="landingPage" id="landingPage">
            <div className="landingInfo">
              <h1>Spider-man: No way home</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore fugit hic fuga dolores quisquam esse natus quam Dolore fugit hic fuga dolores quisquam esse natus quam.</p>
              <a href="#title">See More</a>
            </div>
          </div>
          <div className="title" id="title">
            <h1>Most Watched</h1>
            <div></div>
          </div>
          <div className="innerContainer">
            {popularMovies.map((item, index) => (
              <MovieCard addFavoriteHandler={props.addFavoriteHandler} removeFavoriteHandler={props.removeFavoriteHandler} movie={item} key={item.id + index + ""} />
            ))}
            {isMoreMoviesLoading && <b>Loading...</b>}
          </div>
          <a href="#" className="Top"><FaChevronUp /></a>
        </Paginate>
      )}
    </div>
  );
}

export default Home;
