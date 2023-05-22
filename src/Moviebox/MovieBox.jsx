import "./MovieBox.css";
export function MovieBox({  setSelectedMovie, movie, assignFav, isFav }) {
  return (
    <div className="movie-box" >
      <img src={movie.posterurl}  onClick={e => {
        setSelectedMovie(movie);
    }} />
      <div className="div-in-box">
        <p>{movie.title}</p>
        <button onClick={(e) => assignFav(movie)}>
          {isFav ? "Remove from Favorites 🚫" : "Add to Favorites ❤️"}
        </button>
      </div>
    </div>
  );
}
