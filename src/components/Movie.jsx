import { useState, useEffect } from "react"

export default function Movie({ movie, viewMovie }) {
    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []
    if (storedFavorites.includes(movie.id)) {
        setFavorite(true)
    }
    }, [movie.id])

    function toggleFavorite(){
        setFavorite(prev => {
        const favoriteItem = !prev 
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []
        if (favoriteItem) {
            localStorage.setItem("favorites", JSON.stringify([...storedFavorites, movie.id]))
        } else {
            const update = storedFavorites.filter(id => id != movie.id)
            localStorage.setItem("favorites", JSON.stringify(update))
        }
        return favoriteItem
        })
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