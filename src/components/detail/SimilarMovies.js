/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import { AiFillStar } from "react-icons/ai"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";




const Similar = () => {

    const { movie_id } = useParams();

    const styled = css`

    img {
        height: 100%;
        border-radius: 1rem;
        position: relative;
        margin-left: -5rem;
    }
    p {
        position: absolute;
        z-index: 10;
        background-color: #ffffff55;
        padding: 0.2rem 1rem;
        border-radius: 0 1rem 0 1rem;        
        margin: 0 0 2rem 0.3rem;
    }
    span {
        color: yellow;
    }
    .card {
        display: flex;
        justify-content: space-evenly;
    }
       
    `

    const [movies, setMovies] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

let imgPath ="https://image.tmdb.org/t/p/original"
let APIKey = "8aae96e730d41065f7cfa804530c488a"

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${APIKey}&language=en-US&page=1`)
        .then((response) => setMovies(response.data.results))
        .catch(() => setError("Something went wrong..."))
        .finally(() => setLoading(false))
    }, []);



    return ( 
        <section css={styled}>
            <h2>Similar Movies</h2>
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
 
export default Similar;