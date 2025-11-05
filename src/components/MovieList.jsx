import Movie from './Movie'

export default function MovieList({ movies, viewMovie }) {
  return (
    <div className='movie_list'>
      {movies.map((movie, index) => (
        <Movie 
        key={index} 
        movie={movie} 
        onClick={() => viewMovie(movie)}
        />
      ))}
    </div>
  )
}