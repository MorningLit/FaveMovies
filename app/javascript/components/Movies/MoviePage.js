import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import axios from "axios";
import "../Style/moviepage.scss";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [filterBy, setFilterBy] = useState("dateAsc");
  const [pageNumber, setPageNumber] = useState(1);

  const movieLink =
    "http://api.themoviedb.org/3/discover/movie?api_key=328c283cd27bd1877d9080ccb1604c91&primary_release_date.lte=2016-12-31&sort_by=release_date.desc&page=";
  useEffect(() => {
    axios
      .get(movieLink + pageNumber)
      .then((resp) => {
        console.log(resp);
        setMovies(
          resp.data.results.sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
          )
        );
        setPageNumber(pageNumber + 1);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  const list = movies.map((item) => {
    return <Movie key={item.id} props={item}></Movie>;
  });

  const handleChange = (event) => {
    setFilterBy(event.target.value);
    movieSortBy(filterBy, movies);
  };

  const movieSortBy = (value, currentMovies) => {
    switch (value) {
      case "dateAsc":
        setMovies([
          currentMovies.sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
          ),
        ]);
        break;
      case "dateDsc":
        setMovies([
          currentMovies.sort(
            (a, b) => new Date(a.release_date) - new Date(b.release_date)
          ),
        ]);
        break;
      case "titleAsc":
        setMovies([
          currentMovies.sort((a, b) => a.title.localeCompare(b.title)),
        ]);
        break;
      case "titleDsc":
        setMovies([
          currentMovies.sort((a, b) => b.title.localeCompare(a.title)),
        ]);
        break;
      case "ratingAsc":
        setMovies([
          currentMovies.sort((a, b) => a.vote_average - b.vote_average),
        ]);
        break;
      case "ratingDsc":
        setMovies([
          currentMovies.sort((a, b) => b.vote_average - a.vote_average),
        ]);
        break;
      case "popularityAsc":
        setMovies([currentMovies.sort((a, b) => a.popularity - b.popularity)]);
        break;
      case "popularityDsc":
        setMovies([currentMovies.sort((a, b) => b.popularity - a.popularity)]);
        break;
      default:
        console.log(value);
        break;
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setIsFetching(true);
    }
  };

  const fetchMoreListItems = () => {
    setTimeout(() => {
      axios
        .get(movieLink + pageNumber)
        .then((resp) => {
          console.log(resp);
          let newMovies = [...movies, ...resp.data.results];
          console.log(newMovies);
          setMovies(newMovies);
          setIsFetching(false);
          setPageNumber(pageNumber + 1);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
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
