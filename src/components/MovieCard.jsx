import React from "react";

function MovieCard({ movies }) {
    return (
        <div className="card col-12 col-md-3">
            <div>
                <div>
                    <img className="card-img-top" src={movies.posterURL} alt="oups!" />
                </div>
            
                <div className="card-body">
                    <h5 className="card-title">{movies.title}</h5>
                    <p className="card-text">{movies.rate}</p>
                    <div className="btn btn-primary">More Info</div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
