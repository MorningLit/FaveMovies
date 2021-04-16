export function movieSortBy(value) {
  switch (value) {
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
}
