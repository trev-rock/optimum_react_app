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
    <div className="movie">
        <div 
            className='movie-tile' 
            onClick={viewMovie} 
            style={{
                backgroundImage:`url(${movie.backdrop})`, 
                }}>
        </div>
        <h2>{movie.title} </h2>
        <div className="fav-btn" onClick={toggleFavorite}>{favorite ? "Unfavorite ★":"Favorite ☆"}</div>
    </div>
  )
}