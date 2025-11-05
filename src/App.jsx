import React, { useState, useEffect } from 'react'
import './App.css'
import sample_data from "./sample_data"
import sample_details from "./sample_details"
import MovieList from "./components/MovieList"

export default function App() {
  const [data, setData] = useState({})
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [movieDetails, setMovieDetails] = useState([])

  // this section of code is to be used with the api
  // useEffect(()=> {
  //   fetch("/getmovies")
  //   .then( res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     setData(data)
  //   })
  //   .catch(error => console.error("Error:",error))
  // }, [])

  //  pulling from the sample data for now 
  useEffect(()=>{
    setData(sample_data)
  }, [])

  const movies = data.results ? data.results.map(movie => ({
    title: movie.original_title, 
    id: movie.id,
    backdrop: movie.backdrop_path
  })) 
    : [];

  function viewMovie(movie){
    const details = sample_details.find(item => item.id === movie.id)
    if (details) {
      const movieDetails = {
        releaseDate: details.release_date,
        title: details.original_title,
        overview: details.overview,
        poster: details.poster_path,
        popularity: details.popularity
      }
      setSelectedMovie(movieDetails)
      console.log(movieDetails)
    } else {
      console.log("No details found for this movie")
    }
  }

  return (
    <>
      <MovieList movies={movies} viewMovie={viewMovie}/>
    </>
  )
}
