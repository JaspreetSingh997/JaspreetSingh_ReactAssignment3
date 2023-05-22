import "./Navbar.css";

export function Navbar({
  selectedMovie,
  setSelectedMovie,
  selectedNav,
  changeSelectedNav,
  setSearchInput,
}) {
  const items = [
    {
      name: "Movie in theatres",
      selected: true,
      id: 0,
    },
    {
      name: "Coming Soon",
      selected: false,
      id: 1,
    },
    {
      name: "Top rated Indian",
      selected: false,
      id: 2,
    },
    {
      name: "Top rated movies",
      selected: false,
      id: 3,
    },
    {
      name: "Favorites",
      selected: false,
      id: 4,
    },
    {
      name: "search",
    },
  ];

  return (
    <div className="nav-box">
      {selectedMovie ? (
        <button
          className="nav-btn"
          aria-checked={true}
          onClick={(ele) => {
            setSelectedMovie(undefined);
          }}
        >
          {"Go back to home"}
        </button>
      ) : (
        items.map((e) =>
          e.name == "search" ? (
            <input
              onChange={(e) => {
                changeSelectedNav(e.target.value);
              }}
            />
          ) : (
            <button
              className="nav-btn"
              aria-checked={selectedNav === e.id}
              onClick={(ele) => {
                changeSelectedNav(e.id);
              }}
            >
              {e.name}
            </button>
          )
        )
      )}
    </div>
  );
}
