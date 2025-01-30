import MovieCard  from "../components/MovieCard"
import { useState } from "react";

function Home() {

    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        {
            id: 1,
            title: "Inception",
            release_date: "2010-07-16",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 2,
            title: "The Dark Knight",
            release_date: "2008-07-18",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 3,
            title: "Interstellar",
            release_date: "2014-11-07",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 4,
            title: "The Matrix",
            release_date: "1999-03-31",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 5,
            title: "Pulp Fiction",
            release_date: "1994-10-14",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 6,
            title: "Fight Club",
            release_date: "1999-10-15",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 7,
            title: "Forrest Gump",
            release_date: "1994-07-06",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 8,
            title: "The Lord of the Rings: The Fellowship of the Ring",
            release_date: "2001-12-19",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 9,
            title: "The Godfather",
            release_date: "1972-03-24",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 10,
            title: "The Shawshank Redemption",
            release_date: "1994-09-23",
            image: "https://via.placeholder.com/150"
        }
    ];
    const findMovie = (e) => {
        e.preventDefault()
        alert(searchQuery);
        setSearchQuery("")
    }
    return (
        <div className="Home">
            <form onSubmit={findMovie} className="search-form">
                <input
                 type="text"
                 placeholder ="Search for Movies ... "
                 className ="search-input"
                 value = {searchQuery}
                 onChange = {(e) => setSearchQuery(e.target.value)}
                 />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movie-grid-holder">
                {movies.map((movies) => (
                  movies.title.toLowerCase().startsWith(searchQuery)  && 
                  <MovieCard movie={movies} key={movies.id}></MovieCard>
                ))}
            </div>
        </div>
    )
}
export default Home