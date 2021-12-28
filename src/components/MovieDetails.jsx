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

        <h2>Movie details</h2>

        <div className="card-header">
          <img src={movieSpecific.posterURL} alt="movie_image " />
          <StarRating/>
        </div>
        <div className="card-body">
          <h5 className="card-title">-----{movieSpecific.title}-----</h5>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className='bottom-btn'>
          <button style={{width: "200px", height: "40px", borderRadius: "15px"}}>
            <BackToHomePage />
          </button>
        </div>
      </div>
    );
}
