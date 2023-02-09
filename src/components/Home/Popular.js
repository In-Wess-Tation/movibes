/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import { AiFillStar } from "react-icons/ai"
import { Link } from "react-router-dom";




const Popular = () => {

    const styled = css`

    h2 {
        padding-left: 2rem;
    }
    img {
        height: 100%;
        border-radius: 1rem;
        position: relative;
    }
    p {
        position: absolute;
        z-index: 10;
        background-color: #ffffff55;
        padding: 0.2rem 1rem;
        border-radius: 0 1rem 0 1rem;
        margin: 0 0 2rem 5.3rem;
    }
    span {
        color: yellow;
    }
    .card {
        display: flex;
        justify-content: space-evenly;
        padding: 1rem;
    }
    `

    const [movies, setMovies] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

let imgPath ="https://image.tmdb.org/t/p/original"
let APIKey = "8aae96e730d41065f7cfa804530c488a"

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
        .then((response) => setMovies(response.data.results))
        .catch((error) => setError("Something went wrong..."))
        .finally(() => setLoading(false))
    }, []);



    return ( 
        <section css={styled}>
            <h2>Popular movies in september</h2>
            <article className="card">
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}

            { movies?.map((movie, index) => (
                    index < 4 ?
                    <Link key={movie.id} to={`/detail/${movie.id}`}><Card key={index} className="card"><p><span><AiFillStar/></span> {movie.vote_average}</p><img src={imgPath + movie.poster_path} alt="" /></Card></Link> 
                    : null                    
                ))}
            
            </article>
        </section>
     );
}
 
export default Popular;