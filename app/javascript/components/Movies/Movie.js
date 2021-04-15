import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../Style/movie.scss";

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

export default function Movie(props) {
  const { poster_path, title, popularity, vote_average, id } = props.props;
  const baseurl = "https://image.tmdb.org/t/p/w154";
  const popularityEst = round(popularity, 1).toFixed(1);
  const ratingEst = vote_average.toFixed(1);
  return (
    <div className="card">
      <div className="movie-poster">
        <img src={baseurl + poster_path} alt={title} />
      </div>
      <div className="movie-title">{title}</div>
      <div className="movie-popularity-rating">
        <span className="popularity">Popularity: </span>
        {popularityEst} <span className="rating">Rating: </span>
        {ratingEst}
      </div>
      <div className="movie-link">
        <Link to={`/movies/${id}`}>View Movie</Link>
      </div>
    </div>
  );
}
