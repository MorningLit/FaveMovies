import React from "react";

export default function PosterImage(props) {
  const { poster_path } = props.attributes;
  const baseurl = "https://image.tmdb.org/t/p/w500";
  return <img src={baseurl + poster_path}></img>;
}
