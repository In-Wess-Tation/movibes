/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useParams } from "react-router-dom";
import useAxios from "../costumHooks/useAxios";

import { FiHeart } from "react-icons/fi"
import { AiOutlineShareAlt } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { GiTicket } from "react-icons/gi"
import { AiOutlineUnorderedList } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"


const styled = css`

    .flex {
        display: flex;
        font-size: 1.5rem;
        gap: 1rem;
        color: grey;
    }
    button {
        background-color: #3dd2cdd5;
        color: white;
        height: 3rem;
        width: 90%;
        border-radius: 0.7rem;
    }
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }
    .icon {
        font-size: 1.5rem;
        
    }
    .white {
        color: white;
    }
    .star {
        color: yellow;
    }
`


const Ratings = () => {
    
const { movie_id } = useParams();

let APIKey = "8aae96e730d41065f7cfa804530c488a"
    

    
    
    const { data: rating, loading, error } = useAxios(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKey}&language=en-US`);




    return ( 
        <article css={styled}>
            <div className="flex">
                <p><FiHeart/></p>
                <p><AiOutlineShareAlt/></p>
                <p><BsBookmark/></p>
            {error && <p>{error}</p>}
            {loading && <p>Loading... </p>}
            {rating && (
                <div>
                    <p><AiFillStar className="star"/><span className="white">{rating.vote_average}</span> | 350k</p>
                </div>
                )}
            </div>
            <button className="center"><GiTicket className="icon"/> See Showtimes</button>
            <p className="center"><AiOutlineUnorderedList className="icon"/> More watch options</p>
        </article>
     );
}
 
export default Ratings;
