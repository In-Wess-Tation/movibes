/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { BsFillPlayFill } from "react-icons/bs"
import { MdInfo } from "react-icons/md"


const Banner = () => {

    const styled = css`
            
        div {
            position: relative;
            padding-bottom: 5rem;
        }
        img {
            height: 19rem;
            width: 57rem; 
            margin: 2rem;
            border-radius: 2rem;
            object-fit: cover;
       }
        .buttons {
            position: absolute;
            right: 4rem;
            bottom: 3rem;
            display: flex;
            gap: 1rem;
        }
        button {
            padding: 0.5rem 1.5rem;
            border-radius: 0.7rem;
            border: none;
            background-color: #ffffff62;
            color: white;
            font-weight: bold;
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        .icon {
            font-size: 1.5rem;
        }
    `
        const [movies, setMovies] = useState();
        const [error, setError] = useState();
        const [loading, setLoading] = useState(true);
        const [featured, setFeatured] = useState();
    
    let imgPath ="https://image.tmdb.org/t/p/original"
    let URLPath = "https://api.themoviedb.org/3/"
    let APIKey = "8aae96e730d41065f7cfa804530c488a"

    
        useEffect(() => {
            axios(`${URLPath}movie/now_playing?api_key=${APIKey}&language=en-US&page=1`)
            .then((response) => setMovies(response.data.results))
            .catch(() => setError("Something went wrong..."))
            .finally(() => setLoading(false))
        }, []);

        // useEffect(() => {
        //     axios(`https://api.themoviedb.org/3/movie/${featured.id}/images?api_key=${APIKey}&language=en-US`)
        // }, [featured]);

    return ( 
        <article css={styled}>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            { movies?.map((movie, index) => (
                    index < 1 ? 
                    <div>
                        <div className="buttons">
                            <button className="play"><BsFillPlayFill className="icon"/>Play</button>
                            <button className="moreInfo"><MdInfo className="icon"/>More info</button>
                        </div>
                        <img src={imgPath + movie.poster_path} alt="" />
                    </div> 
                    : null                    
                ))}
            
        </article>
     );
}
 
export default Banner;
