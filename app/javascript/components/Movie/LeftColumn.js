import React from "react";

export default function LeftColumn(props) {
  console.log(props);
  const { title, poster_path, popularity } = props.attributes;
  const baseurl = "https://image.tmdb.org/t/p/w154";
  return (
    <div className="container">
      <h1>
        <img src={baseurl + poster_path} alt={title} />
        {title}
      </h1>
      <div>
        <div className="movie-popularity"></div>
      </div>
    </div>
  );
}
