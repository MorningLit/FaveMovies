import React, { useState, useEffect } from "react";
import axios from "axios";
import LeftColumn from "./LeftColumn";

export default function Movie(props) {
  const [movie, setMovie] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const slug = props.match.params.slug;
    const url = `http://api.themoviedb.org/3/movie/${slug}?api_key=328c283cd27bd1877d9080ccb1604c91`;
    axios
      .get(url)
      .then((resp) => {
        setMovie(resp.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="page">
      <div className="column">
        {loaded && <LeftColumn attributes={movie} />}
      </div>
      <div className="column">
        <div className="movie-synopsis"></div>
        <div className="movie-genre"></div>
        <div className="movie-language"></div>
        <div className="movie-duration"></div>
        <div className="movie-book"></div>
      </div>
    </div>
  );
}
