/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useEffect, useState } from "react";


const Banner = () => {

    const styled = css`
            height: 19rem;
            width: 57rem; 
            padding-bottom: 2rem;

        img {
            height: 100%;
            width: 100%;
            margin: 2rem;
            border-radius: 2rem;
            object-fit: cover;
       }
    `
        const [movies, setMovies] = useState();
        const [error, setError] = useState();
        const [loading, setLoading] = useState(true);
    
    let imgPath ="https://image.tmdb.org/t/p/original"
    let URLPath = "https://api.themoviedb.org/3/"
    let APIKey = "8aae96e730d41065f7cfa804530c488a"
    
        useEffect(() => {
            axios(`${URLPath}movie/now_playing?api_key=${APIKey}&language=en-US&page=1`)
            .then((response) => setMovies(response.data.results))
            .catch((error) => setError("Something went wrong..."))
            .finally(() => setLoading(false))
        }, []);

    return ( 
        <article css={styled}>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            { movies?.map((movie, index) => (
                    index < 1 ? <img src={imgPath + movie.poster_path} alt="" /> : null                    
                ))}
            
        </article>
     );
}
 
export default Banner;
