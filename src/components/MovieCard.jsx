import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MovieCard = ({ movie })  => {

    let navigate = useNavigate();

    return (
        <div className="card col-12 col-md-3">
            <div>
                <div className="img-box">
                    <img className="card-img-top img-top" src={movie.posterURL} alt="oups!" />
                </div>
            
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text text-centered">{movie.rate}</p>
                    
                    <button 
                        className="btn btn-primary"
                        onClick={() =>navigate("/MovieDetails/id")}
                    >
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
