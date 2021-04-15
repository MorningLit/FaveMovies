import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../Style/movie.scss";

export default function Movie(props) {
  const data = props.props;
  const baseurl = "https://image.tmdb.org/t/p/w154";
  return (
    <div className="card">
      <div className="movie-poster">
        <img src={baseurl + data.poster_path} alt={data.title} />
      </div>
      <div className="movie-title">{data.title}</div>
      <div className="movie-popularity">{data.popularity}</div>
      <div className="movie-link">
        <Link to={`/movies/${data.id}`}>View Movie</Link>
      </div>
    </div>
  );
}
