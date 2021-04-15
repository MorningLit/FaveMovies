import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Style/moviedetailpage.scss";
import PosterImage from "./PosterImage";
import MovieDetails from "./MovieDetails";

export default function MovieDetailPage(props) {
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
  }, [loaded]);
  const [movie, setMovie] = useState({});
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="page">
      <div className="left-column">
        {loaded && <PosterImage attributes={movie} />}
      </div>
      <div className="right-column">
        {loaded && <MovieDetails attributes={movie} />}
      </div>
    </div>
  );
}
