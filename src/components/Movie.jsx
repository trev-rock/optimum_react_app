export default function Movie({ movie, onClick }) {
  return (
    <div className='movie' onClick={onClick}>
      {movie.title}
    </div>
  )
}