import React from 'react';
import './Style.css';
import myImage1 from './Img/movie1.jpg';
import myImage2 from './Img/movie2.jpg';
import myImage3 from './Img/movie3.jpg';
import myImage4 from './Img/movie4.jpg';
import myImage5 from './Img/movie5.jpg';
import { useState } from 'react';
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
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Read more description...",
      posterURL: myImage1,
      rate: <StarRating/>
  },
  {
      id: 2,
      title: "ARMY OF THIEVES",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Read more description...",
      posterURL: myImage2,
      rate: <StarRating/>
  },
  {
      id: 3,
      title: "SWEET GIRL",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Read more description...",
      posterURL: myImage3,
      rate: <StarRating/>
  },
  {
      id: 4,
      title: "RED",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Read more description...",
      posterURL: myImage4,
      rate: <StarRating/>
  },
  {
      id: 5,
      title: "LAST MERCENARY",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Read more description...",
      posterURL: myImage5,
      rate: <StarRating/>
  }
];

function App() {

  const [movies, setMovies] = useState(datalist);

  return (
    <div className='App'>
      <NavBar />

      <Routes>

        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails movies={movies}/>} />
        <Route path="/AddMovie" element={<AddMovie />} />
    
      </Routes>
    </div>
  );
}

export default App;
