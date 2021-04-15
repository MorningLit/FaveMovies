import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import axios from "axios";
import "../Style/moviepage.scss";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const movieLink =
    "http://api.themoviedb.org/3/discover/movie?api_key=328c283cd27bd1877d9080ccb1604c91&primary_release_date.lte=2016-12-31&sort_by=release_date.desc&page=1";
  useEffect(() => {
    axios
      .get(movieLink)
      .then((data) => {
        setMovies(data.data.results);
      })
      .catch((err) => console.log(err));
  }, [movies.length]);

  const list = movies.map((item) => {
    return <Movie key={item.id} props={item}></Movie>;
  });
  return (
    <div className="home">
      <div className="grid">{list}</div>
    </div>
  );
}
