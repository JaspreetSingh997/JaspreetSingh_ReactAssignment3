import { MovieBox } from "./Moviebox/MovieBox";
import json from "./json/data.json";
import { useEffect, useState } from "react";

export function MovieArea({
  searchInput,
  selectedMovie,
  setSelectedMovie,
  selectedNav,
}) {
  const [favourites, setFav] = useState([]);
  function assignFav(movie) {
    if (favourites.includes(movie)) {
      setFav(favourites.filter((e) => e.id !== movie.id));
    } else {
      setFav([...favourites, movie]);
    }
  }
  let key = "movies-in-theaters";

  switch (selectedNav) {
    case 0:
      key = "movies-in-theaters";
      break;
    case 1:
      key = ["movies-coming"];
      break;
    case 2:
      key = "top-rated-india";
      break;
    case 3:
      key = "top-rated-movies";
      break;
    case 4:
      json.favourit = Array.from(favourites);
      key = "favourit";
      break;
    default:
      json.custom = new Set();
      for (const [_, v] of Object.entries(json)) {
        for (const val of v) {
          if (val.title.toLowerCase().includes(selectedNav.toString().toLowerCase())) {
            json.custom.add(val);
          }
        }
      }
      json.custom = Array.from(json.custom);
      key = "custom";

      break;
  }

  return (
    <div className="movieContainer"
      style={{
        padding: "20px",
      }}
    >
      {json[key].map((e) => {
        return (
          <MovieBox
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            isFav={favourites.includes(e)}
            assignFav={assignFav}
            movie={e}
          />
        );
      })}
    </div>
  );
}
