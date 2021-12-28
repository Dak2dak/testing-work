import React from 'react'
import { useState } from 'react';
import StarRating from './StarRating';
import BackToHomePage from './BackToHomePage';

export default function MovieDetails(props) {

  const [movies, setMovies] = useState([
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
  ]);

    return (
      <div class="card text-white bg-primary mb-3" style={{ maWidth: "18rem" }}>
        <div class="card-header">
          <iframe
            src={movies.posterURL}
            title="movie-details"
            frameborder="2"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">{movies.title}</h5>
          <p class="card-text">
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

        <button>
          <BackToHomePage />
        </button>
      </div>
    );
}
