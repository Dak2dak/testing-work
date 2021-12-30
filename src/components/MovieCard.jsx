import React from "react";

function MovieCard({ movie }) {

    console.log(movie)

    return (
        <div className="card col-12 col-md-3">
            <div>
                <div>
                    <img className="card-img-top" src={movie.posterURL} alt="oups!" />
                </div>
            
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.rate}</p>
                    <div className="btn btn-primary">More Info</div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
