/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { BsFillPlayFill } from "react-icons/bs"
import { MdInfo } from "react-icons/md"


const Banner = () => {

    const { movie_id } = useParams();


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
        const [movie, setMovie] = useState();
        const [error, setError] = useState();
        const [loading, setLoading] = useState(true);
    
    let imgPath ="https://image.tmdb.org/t/p/original"
    let APIKey = "8aae96e730d41065f7cfa804530c488a"

    
        useEffect(() => {
            let Random = Math.floor(Math.random() * 19)
            axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US`)
            .then((response) => setMovie(response.data.results[Random]))
            .catch(() => setError("Something went wrong..."))
            .finally(() => setLoading(false))
        }, []);
movie && console.log(movie)
    

    return ( 
        <article css={styled}>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
                    <div>
                        <div className="buttons">
                            <Link to={`/video/${movie_id}`}><button className="play"><BsFillPlayFill className="icon"/>Play</button></Link>
                            <button className="moreInfo"><MdInfo className="icon"/>More info</button>
                        </div>
                        <img src={imgPath + movie?.backdrop_path} alt="" />
                    </div> 
        </article>
     );
}
 
export default Banner;
