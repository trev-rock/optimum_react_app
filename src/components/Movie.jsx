import { useState, useEffect } from "react"

export default function Movie({ movie, viewMovie }) {
    const [favorite, setFavorite] = useState(false)
    
    function toggleFavorite(){
        setFavorite(prev => !prev)
    }
    return (
    <>
    <div className='movie' onClick={viewMovie}>
      {movie.title} 
    </div>
    <div className="fav-btn" onClick={toggleFavorite}>{favorite ? "unfav":"fav"}</div>
    {/* /* add in star to fill in */} 
    </>
  )
}