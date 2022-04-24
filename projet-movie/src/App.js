import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import { useState } from 'react';
import {MovieData} from'./components/MovieData';
import SearchMovie from'./components/SearchMovie';
import { Route,Routes } from 'react-router-dom';
import Movie from './components/Movie';
function App() {
  const [movies,setMovies]=useState(MovieData)
  const [nameSearch, setNameSearch] = useState("");
  return (
    <div className="App">
     <SearchMovie nameSearch={nameSearch} setNameSearch={setNameSearch}/> 
       <MovieList movies={movies} nameSearch={nameSearch}/> 
      
       
         <Routes>
            <Route  path="/movie" element={<Movie/>} />
         </Routes> 
        


    </div>
  );
}

export default App;
