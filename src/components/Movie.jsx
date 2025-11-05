export default function Movie({ movie, viewMovie }) {
  return (
    <div className='movie' onClick={viewMovie}>
      {movie.title}
    </div>
  )
}