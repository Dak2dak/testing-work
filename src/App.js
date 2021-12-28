import React from 'react';
import './Style.css';
import StarRating from './components/StarRating';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';


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

function App() {

  return (
    <div >
      <NavBar />

      <Routes>

        <Route path="/" element={<MovieList />} />
        <Route path="/MovieDetails" element={<MovieDetails />} />
        <Route path="/AddMovie" element={<AddMovie />} />
    
      </Routes>

    </div>
  );
}

export default App;
