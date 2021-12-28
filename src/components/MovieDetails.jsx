import React from 'react'
import BackToHomePage from './BackToHomePage';

export default function MovieDetails(props) {
  


    return (
      <div class="card text-white bg-primary mb-3" style={{ maWidth: "18rem" }}>
        <div class="card-header">
          <iframe
            src={props.movie.posterURL}
            title="movie-details"
            frameborder="2"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">{props.movie.title}</h5>
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
