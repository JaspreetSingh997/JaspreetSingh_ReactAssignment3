import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navigation/Navbar';
import { useEffect, useRef, useState } from 'react';
import json from './json/data.json';
import { MovieArea } from './MovieArea';
import { SelectedMovieComponent } from './SelectedMovie';

function App() {
  const [selectedNav, changeSelectedNav] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(undefined);

  return (
    <>
      <nav><Navbar selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} selectedNav={selectedNav} changeSelectedNav={changeSelectedNav} /></nav>
      <div>
        {
          selectedMovie ? SelectedMovieComponent(selectedMovie) : <MovieArea selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} selectedNav={selectedNav}></MovieArea>
        }
      </div>
    </>
  );
}

export default App;
