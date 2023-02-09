/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


import { Link, useParams } from "react-router-dom";
import useAxios from "../costumHooks/useAxios";

const Banner = () => {

    const { movie_id } = useParams();

    let imgPath ="https://image.tmdb.org/t/p/original"
    let APIKey = "8aae96e730d41065f7cfa804530c488a"

    const { data: movie, loading, error } = useAxios(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKey}&ppend_to_response=videos`);

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
                    <Link to={`/video/${movie_id}`}>
                    <img src={imgPath + movie.poster_path} alt="" />
                    </Link>
                </div>
                )}
        </article>
     );// skriv /"et tal" oppe i url'en, for at komme ind på detailje siderne
}
 
export default Banner;