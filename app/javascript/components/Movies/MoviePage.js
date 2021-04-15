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
        console.log(data.data.results);
        setMovies(
          data.data.results.sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
          )
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const list = movies.map((item) => {
    return <Movie key={item.id} props={item}></Movie>;
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    switch (event.target.value) {
      case "dateAsc":
        setMovies([
          ...movies.sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
          ),
        ]);
        break;
      case "dateDsc":
        setMovies([
          ...movies.sort(
            (a, b) => new Date(a.release_date) - new Date(b.release_date)
          ),
        ]);
        break;
      case "titleAsc":
        setMovies([...movies.sort((a, b) => a.title.localeCompare(b.title))]);
        break;
      case "titleDsc":
        setMovies([...movies.sort((a, b) => b.title.localeCompare(a.title))]);
        break;
      case "ratingAsc":
        setMovies([...movies.sort((a, b) => a.vote_average - b.vote_average)]);
        break;
      case "ratingDsc":
        setMovies([...movies.sort((a, b) => b.vote_average - a.vote_average)]);
        break;
      case "popularityAsc":
        setMovies([...movies.sort((a, b) => a.popularity - b.popularity)]);
        break;
      case "popularityDsc":
        setMovies([...movies.sort((a, b) => b.popularity - a.popularity)]);
        break;
      default:
        console.log(event.target.value);
        break;
    }
  };

  return (
    <div className="home">
      <div className="dropdown">
        <label htmlFor="filter">Filter by:</label>
        <select id="filter" onChange={handleChange}>
          <option value="dateAsc">Date Ascending</option>
          <option value="dateDsc">Date Descending</option>
          <option value="titleAsc">Title Ascending</option>
          <option value="titleDsc">Title Descending</option>
          <option value="ratingAsc">Rating Ascending</option>
          <option value="ratingDsc">Rating Descending</option>
          <option value="popularityAsc">Popularity Ascending</option>
          <option value="popularityDsc">Popularity Descending</option>
        </select>
      </div>
      <div className="grid">{list}</div>
    </div>
  );
}
