import React from "react";

export default function MovieDetails(props) {
  console.log(props);
  const {
    title,
    popularity,
    overview: synopsis,
    genres,
    original_language: language,
    runtime: duration,
  } = props.attributes;

  return (
    <div>
      <div className="movie-title">
        <h1>{title}</h1>
      </div>
      <div className="movie-popularity">POPULARITY{popularity}</div>
      <div className="movie-synopsis">SYNOPSIS{synopsis}</div>
      <div className="movie-genre">{}</div>
      <div className="movie-language">LANGUAGE{language}</div>
      <div className="movie-duration">DURATION{duration}</div>
      <div className="movie-book">
        <a target="_blank" href="https://www.cathaycineplexes.com.sg/">
          BOOK NOW
        </a>
      </div>
    </div>
  );
}
