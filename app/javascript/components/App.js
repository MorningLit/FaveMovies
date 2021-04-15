import React from "react";
import { Route, Switch } from "react-router-dom";
import MoviePage from "./Movies/MoviePage";
import MovieDetailPage from "./MovieDetails/MovieDetailPage";
import NavBar from "./NavBar/NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={MoviePage} />
        <Route exact path="/movies/:slug" component={MovieDetailPage} />
      </Switch>
    </div>
  );
}
