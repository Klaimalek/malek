import React from 'react'
import MovieList from './MovieList'
import'./MovieCart.css';
import{BsFillStarFill} from 'react-icons/bs';
import{FcNext} from 'react-icons/fc';
import { Link } from 'react-router-dom';
function MovieCard({movie}) {
  return (
    <div className='container'> 
      
      <div className='poster__img"'> 
        <img src={movie.image}  alt=''></img>
     </div>
     <div className='poster_info'>
     <div class="poster__title">
        <h2 className='poster_titlle'>{movie.name}</h2> 
        <h1 className='poster_year' > {movie.date}    </h1>        
     </div>
         <div>
           <p> {movie.description}</p>
         </div>

         <div className='coup_coeur'>
         <BsFillStarFill/> {movie.rating}
         </div>
     </div>
     <div>
          <Link to="/movie">Details <FcNext/> </Link>
            
            
         </div>
     </div>
  )
}

export default MovieCard