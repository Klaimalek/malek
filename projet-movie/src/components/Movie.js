import React from 'react'

function Movie({movie}) {
  return (
    <div>
<div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={movie.image} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{movie.name}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {movie.Genre}
              </li>
             
              <li className="list-group-item">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            
          </div>
        </div>
      </div>



    </div>
  )
}

export default Movie