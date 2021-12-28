import React from "react";
import { useState } from "react";
import MovieCard from 'react';
import StarRating from "./StarRating";


const datalist = [
    {
        id: 1,
        title: "RED NOTICE",
        picture: <img src="/movie1.jpg" alt="movie1"/>,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Read more description...",
        posterURL: "https://www.youtube.com/embed/ZCX56hD8XTo",
        rate: <StarRating/>
    },
    {
        id: 2,
        title: "SWEET GIRL",
        picture: <img src="/movie2.jpg" alt="movie2"/>,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Read more description...",
        posterURL: "https://www.youtube.com/embed/xK0Wp6hQVo4",
        rate: <StarRating/>
    },
    {
        id: 3,
        title: "RED",
        picture: <img src="/movie3.jpg" alt="movie3"/>,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Read more description...",
        posterURL: "https://www.youtube.com/embed/U58UJmaHLJA",
        rate: <StarRating/>
    },
    {
        id: 4,
        title: "ARMY OF THIEVES",
        picture: <img src="/movie4.jpg" alt="movie4"/>,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Read more description...",
        posterURL: "https://www.youtube.com/watch?v=1ISy4fZewrg",
        rate: <StarRating/>
    },
    {
        id: 5,
        title: "LAST MERCENARY",
        picture: <img src="/movie5.jpg" alt="movie5"/>,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Read more description...",
        posterURL: "https://www.youtube.com/embed/LGMX3Tb3F4k",
        rate: <StarRating/>
    }
];

function MovieList () {

    const [movies, setMovies] = useState(datalist);

    return(
        <div>
            <MovieCard movies={movies} />
        </div>
    )
}

export default MovieList;