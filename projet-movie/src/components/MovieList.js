import React from 'react'
import MovieCard from './MovieCard'
import { MovieData } from './MovieData'
function MovieList({movies}) {
    console.log(movies,"testtttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt")
  return (
    <div>
     
      <>
			{ movies. map(( index) => (
				<div className='container '  >
               
					<MovieCard movie={index}/>
                 </div>        
			))}
		</>

        
        
    </div>
)
}
export default MovieList
