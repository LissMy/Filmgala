import React, {useState, useEffect} from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Explore from "./components/Explore/Explore";
import MoviePage from "./components/MoviePage/MoviePage";
import Footer from "./components/Footer/Footer";

import "./App.css";
import Favorites from "./components/Favorites/Favorites";

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const addFavoriteHandler = (movie) => {
    setItems((prevItems) => ([...prevItems, movie]));
  };

  const removeFavoriteHandler = (id) => {
    const newFavorites = items.filter((item) => item.id !== id);
    console.log(newFavorites)
    setItems(newFavorites);
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(items));
  }, [items]);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home addFavoriteHandler={addFavoriteHandler} removeFavoriteHandler={removeFavoriteHandler} />} />
          <Route path="/explore" element={<Explore addFavoriteHandler={addFavoriteHandler} removeFavoriteHandler={removeFavoriteHandler} />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:movieId" element={<MoviePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;