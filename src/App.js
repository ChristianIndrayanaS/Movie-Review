import './App.css';
import { useEffect,useState} from 'react';
import Card from './component/Card.js'
import {getMovieList,searchMovie} from './Api.js'

function App() {
  const [popularMovies,setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  },[])

  const PopularMovieList = () => {
    return popularMovies.map((movie,i) => {
      const nameTitle = (movie.title != null) ? movie.title : movie.original_name 
      const realeaseDate = (movie.release_date != null) ? movie.release_date : movie.first_air_date
      return(
        <div key={i}>
          <Card movieTitle={nameTitle} movieImage={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} movieDate={realeaseDate} movieRating={movie.vote_average}/>
        </div>
      )
    })
  }

  const searchMovies = async(q) =>{
    if(q.length > 3){
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }
    // console.log({query:query})
  }

  console.log(popularMovies)

  return (
    <div className="App">
      <header>
        <h1 className='title'>Movie Review</h1>
        <input className='movie-search' type="text" placeholder='Search...' onChange={({target}) => searchMovies(target.value)}/>
      </header>
      <section id="movie-container">
        <PopularMovieList/>
      </section>
    </div>
  );
}

export default App;
