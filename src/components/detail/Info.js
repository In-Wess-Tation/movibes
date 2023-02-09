/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


import { useParams } from "react-router-dom";
import useAxios from "../costumHooks/useAxios";
import { BsDot } from "react-icons/bs"

const Info = () => {

    const { movie_id } = useParams();

    let APIKey = "8aae96e730d41065f7cfa804530c488a"

    const { data: movie, loading, error } = useAxios(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKey}&language=en-US`);

    const styled = css`
     .info {
         display: flex;
         gap: 1rem;
     }
     p {
        font-size: 1.5rem;
     }
     .genre {
        border: 1px solid grey;
        border-radius: 1.5rem;
        height: 1.5rem;
        width: 3rem;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1.5rem;
     }
    .descreption {
        font-size: 1rem;
    }
   .dot {
    font-size: 1rem;
   }
    `
    return ( 
        <article css={styled}>   
            {error && <p>{error}</p>}
            {loading && <p>Loading... </p>}
            {movie && (
                <div>
                    <div className="info">
                        <p>{movie.title} <BsDot className="dot"/></p>
                        <p>{movie.release_date} <BsDot className="dot"/></p>
                        {movie.adult === false ? <p>PG-13 <BsDot className="dot"/></p> : movie.adult === true ? <p>PG-13 <BsDot className="dot"/></p> : null}
                        <p>{movie.runtime}m</p>
                        <p className="genre">Genre</p>
                        <p className="genre">Genre</p>
                    </div>
                    <div>
                        <p className="descreption">{movie.overview}</p>
                    </div>
                </div>
                )}
        </article>
     );// skriv /"et tal" oppe i url'en, for at komme ind på detailje siderne
}
 
export default Info;