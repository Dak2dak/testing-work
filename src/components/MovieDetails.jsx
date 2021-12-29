import React from 'react'
import { useParams } from 'react-router-dom';
import BackToHomePage from './BackToHomePage';
import StarRating from './StarRating';

export default function MovieDetails(props) {

  let movieId = useParams().id;
  let movieSpecific;

  movieSpecific = props.movies.find(elt => {return elt.id == movieId});

    return (
      <div className="card text-white bg-primary mb-3" style={{ maWidth: "18rem" }}>

        <h2>-- MOVIE DETAILS --</h2>

        <div className="card-header">
          <img src={movieSpecific.posterURL} alt="movie_image " />
          <StarRating/>
        </div>
        <div className="card-body">
          <h5 className="card-title">-----{movieSpecific.title}-----</h5>
          <p className="card-text"> {movieSpecific.description} </p>
        </div>

        <div className='bottom-btn'>
          <button style={{width: "200px", height: "40px", borderRadius: "15px"}}>
            <BackToHomePage />
          </button>
        </div>
      </div>
    );
}
