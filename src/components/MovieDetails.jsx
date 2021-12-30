import React from 'react'
import { useParams, Link } from 'react-router-dom';
import StarRating from './StarRating';

export default function MovieDetails({movies}) {

  let movieId = useParams().id;
  let movieSpecific;

  movieSpecific = movies.find(elt => {return elt.id == movieId});

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
          <p className="card-text"><b>Click the link below to watch the movie: </b> <br /> {movieSpecific.link} </p>
        </div>

        <Link to="/"><button className='bottom-btn'>Go back to home page</button></Link>

      </div>
    );
}
