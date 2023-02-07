/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


import { useParams } from "react-router-dom";
import useAxios from "../costumHooks/useAxios";

const Banner = () => {

    const { movie_id } = useParams();

    let imgPath ="https://image.tmdb.org/t/p/original"
    let URLPath = "https://api.themoviedb.org/3/"
    let APIKey = "8aae96e730d41065f7cfa804530c488a"

    const { data: movie, loading, error } = useAxios(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKey}&language=en-US`);

    const styled = css`

          img {
            height: 19rem;
            width: 97%; 
            border-radius: 2rem;
            object-fit: cover;
       }
    `

    return ( 
        <article css={styled}>   
            {error && <p>{error}</p>}
            {loading && <p>Loading... </p>}
            {movie && (
                <div>
                    <img src={imgPath + movie.poster_path} alt="" />
                </div>
                )}
        </article>
     );// skriv /"et tal" oppe i url'en, for at komme ind på detailje siderne
}
 
export default Banner;