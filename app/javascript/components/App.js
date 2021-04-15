import React from "react";
import { Route, Switch } from "react-router-dom";
import MoviePage from "./Movies/MoviePage";
import MovieDetailPage from "./MovieDetails/MovieDetailPage";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={MoviePage} />
      <Route exact path="/movies/:slug" component={MovieDetailPage} />
    </Switch>
  );
}
