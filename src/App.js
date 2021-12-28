import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';


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
