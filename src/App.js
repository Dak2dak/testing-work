import React from 'react';
import './Style.css';
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
      posterURL: "https://www.google.com/search?q=red+notice&rlz=1C1BNSD_frCI956CI956&sxsrf=AOaemvLTo7evvLPJP6fyvnOo6z3saEtqxQ:1640712130918&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiErvf9gIf1AhVF4YUKHeRUDiQQ_AUoAnoECAIQBA#imgrc=Y8pa6IeNHYKiLM",
      rate: <StarRating/>
  },
  {
      id: 2,
      title: "ARMY OF THIEVES",
      picture: <img src="/movie2.jpg" alt="movie2"/>,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Read more description...",
      posterURL: "https://www.google.com/search?q=army+of+thieves&tbm=isch&ved=2ahUKEwjXvImqhIf1AhUNohoKHcGuBGEQ2-cCegQIABAA&oq=army+of+thieves&gs_lcp=CgNpbWcQARgAMgcIIxDvAxAnMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgoIIxDvAxDqAhAnOgQIABBDUPwIWItCYI5UaAFwAHgGgAHgCogB22KSAQszLTEuMi43LjMuNJgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=REvLYdeKMI3EasHdkogG&rlz=1C1BNSD_frCI956CI956#imgrc=H9GooedTiZfYtM",
      rate: <StarRating/>
  },
  {
      id: 3,
      title: "SWEET GIRL",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Read more description...",
      posterURL: "https://www.google.com/search?q=rsweet+girl&tbm=isch&ved=2ahUKEwipnfSIgYf1AhUEGRoKHQvqAvAQ2-cCegQIABAA&oq=rsweet+girl&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoFCAAQgAQ6BAgAEEM6BAgAEBg6BggAEAoQGFCLB1jIOWCFQWgAcAB4AIABugeIAccgkgEKMC4xNi4zLjYtMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=2UfLYenMOISyaIvUi4AP&rlz=1C1BNSD_frCI956CI956#imgrc=rx0kHTxtmIgu5M",
      rate: <StarRating/>
  },
  {
      id: 4,
      title: "RED",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Read more description...",
      posterURL: "https://www.google.com/search?q=red+movie&tbm=isch&ved=2ahUKEwik48PWhYf1AhXG3YUKHRSAApIQ2-cCegQIABAA&oq=red+movie&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEO8DECc6BAgAEENQixxYxCdgvTBoAHAAeACAAe8CiAHoCpIBBzAuNS4xLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=rkzLYaTUG8a7lwSUgIqQCQ&rlz=1C1BNSD_frCI956CI956#imgrc=9iv3lEJhDlFMjM",
      rate: <StarRating/>
  },
  {
      id: 5,
      title: "LAST MERCENARY",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Read more description...",
      posterURL: "https://www.google.com/search?q=last+mercenary&tbm=isch&ved=2ahUKEwiC6a_bhYf1AhW8DWMBHUKqDFAQ2-cCegQIABAA&oq=last+merce&gs_lcp=CgNpbWcQARgAMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIGCAAQBRAeMgYIABAFEB4yBggAEAUQHjoHCCMQ7wMQJzoECAAQQzoKCCMQ7wMQ6gIQJ1D0BljqPmD0S2gBcAB4AoAB1AeIAbQtkgENMC42LjguMS4xLjIuMZgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=uEzLYYKtJbybjLsPwtSygAU&rlz=1C1BNSD_frCI956CI956#imgrc=aqyAyPxzZp9xiM",
      rate: <StarRating/>
  }
];

function App() {

  const [movies, setMovies] = useState(datalist);

  return (
    <div className='App'>
      <NavBar />

      <Routes>

        <Route path="/" element={<MovieList />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails movies={movies}/>} />
        <Route path="/AddMovie" element={<AddMovie />} />
    
      </Routes>
    </div>
  );
}

export default App;
