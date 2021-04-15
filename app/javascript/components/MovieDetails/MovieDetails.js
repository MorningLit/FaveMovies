import React from "react";
import "../Style/moviedetail.scss";

export default function MovieDetails(props) {
  console.log(props);
  const {
    title,
    popularity,
    overview: synopsis,
    genres: genresList,
    original_language: language,
    runtime: duration,
  } = props.attributes;
  const genres = genresList
    .map((item) => {
      return item.name;
    })
    .join(", ");
  return (
    <div className="wrapper">
      <div className="container">
        <h1>{title}</h1>
        <a
          target="_blank"
          href="https://www.cathaycineplexes.com.sg/"
          className="button"
        >
          BOOK NOW
        </a>
      </div>
      <div className="container">
        <h4>POPULARITY</h4>
        {popularity}
      </div>
      <div className="container">
        <h4>SYNOPSIS</h4>
        {synopsis}
      </div>
      <div className="container">
        <h4>GENRE</h4>
        {genres}
      </div>
      <div className="container">
        <h4>LANGUAGE</h4>
        {language}
      </div>
      <div className="container">
        <h4>DURATION</h4>
        {duration + " mins"}
      </div>
    </div>
  );
}
