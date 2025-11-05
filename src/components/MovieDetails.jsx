export default function MovieDetails({details}) {
    return(
        <div className="detail_holder">
            <div className="poster_holder"><img src={details.poster} alt={`Poster for ${details.title}`}/></div>
            <div className="details">
                <h1>{details.title}</h1>
                <p>{details.overview}</p>
                <div className="sub_details">
                    <p>{details.releaseDate}</p>
                    <p>{details.popularity}</p>
                </div>
            </div>
        </div>
    )
}