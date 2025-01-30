function MovieCard({movie}) {

    function onFav() {
        alert("clicked")
    }

    return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.image} alt={movie.title}></img>
            <div className="movie-overplay">
                <button className="favorite-btn" onClick={onFav}>
                ❤️
                </button>
            </div>
                
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>   
    )
}

export default MovieCard