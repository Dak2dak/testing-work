import React from "react";

function MovieCard (props) {

    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={props.movie.picture} alt="oups!"/>
            <div className="card-body">
                <h5 className="card-title">{props.movie.title}</h5>
                <p className="card-text">{props.movie.description}</p>
                <p className="card-text">{props.movie.rate}</p>
                <div>
                    <button className="btn btn-primary">
                        More description
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;