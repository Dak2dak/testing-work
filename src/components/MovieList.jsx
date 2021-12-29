import React from "react";
import MovieCard from "./MovieCard";


const MovieList = ({movies}) => {
    return(
        <> 
            <div className="container">
                <div className="row gap-3"> 
                    {movies.map((movie) => (<MovieCard movies={movies} /> ))}
                </div>
            </div>
        </>
    )
}

export default MovieList;