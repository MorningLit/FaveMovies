import React from "react";
import "../Style/moviedetail.scss";

export default function MovieDetails(props) {
  const languageNames = new Intl.DisplayNames(["en"], { type: "language" });
  const {
    title,
    popularity,
    vote_average: rating,
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
        <div className="popularity-container">
          <h4>POPULARITY</h4>
          {popularity}
        </div>
        <div>
          <h4>RATING</h4>
          {rating}
        </div>
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
        {languageNames.of(language)}
      </div>
      <div className="container">
        <h4>DURATION</h4>
        {duration + " mins"}
      </div>
    </div>
  );
}
