
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io"

const Cast = () => {

    const { movie_id } = useParams();

    let APIKey = "8aae96e730d41065f7cfa804530c488a"
    let imgPath ="https://image.tmdb.org/t/p/original"

   

    const styled = css`
    
    img {
        height: 6rem;
        width: 6rem;
        border-radius: 3rem;
        object-fit: cover;
        margin-left: 3rem;
    }
    button {
        height: 3rem;
        color: white;
        background-color: #3dd2cdd5;
        border-radius: 0.5rem;
        padding: 1rem;
        font-size: 1rem;
        display: flex;
        align-items: center;
    }
    .cast {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    span {
        color: #3dd2cdd5;
    }
    .grey {
        color: grey;
    }
    .line {
        border-bottom: 2px solid #3f3e3e;
        padding-bottom: 1rem;
    }
    .center {
        text-align: center;
    }
    .allCast {
        border-top: 2px solid #3f3e3e;
        border-bottom: 2px solid #3f3e3e;
        display: flex;
        justify-content: space-between;
        padding-top: 0.5rem;
        grid-column: 1/-1;
    }
    .icon {
        font-size: 1.5rem;
    }
    
    `

    const [members, setMembers] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [director, setDirector] = useState();
    const [writers, setWriters] = useState();

        useEffect(() => {
            axios(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${APIKey}&language=en-US`)
            .then((response) => setMembers(response.data))
            .catch(() => setError("Something went wrong..."))
            .finally(() => setLoading(false))
        }, []);


        useEffect(() => {
            if (members) {
                setDirector(
                    members.crew.find(
                        (member) => member.job.toLowerCase() === "director"
                    )
                )
                setWriters(
                    members.crew.filter(
                        (member) => member.job.toLowerCase().includes("writer")
                        )
                )
            };
            
        }, [members]);
        writers && console.log(writers)

       



    return ( 
        <article css={styled}> 
        {error && <p>{error}</p>}  
        {loading && <p>Loading...</p>}
        {members?.crew.map((crew, index) => (
            index < 1 ?
            <div key={index}>
                <p className="line">Director: <span>{director?.name}</span></p>
                {writers?.length ? 
                <p className="line">Writers: {writers.map((writer) => (<span key={writer.id}>{writer.name}, </span>))}</p> 
                : null}
            </div>
            : null
        ))}
            <p className="line">Stars: {members?.crew.map((member, index) => {if(index < 4) return (<span key={index}>{member.name}, </span>)})}</p>

            <button>Top rated movie #65</button>
            <h2>Top Cast </h2>
            <article className="cast">
            {error && <p>{error}</p>}
            {loading && <p>Loading... </p>}
            { members?.cast.map((cast, index) => (
                    index < 4 ? 
                    <div key={index}>
                        <img src={imgPath + cast.profile_path} alt="" />
                        <p className="center">{cast.name}</p>
                        <p className="grey center">{cast.character}</p> 
                    </div> 
                    : null                    
                ))}
                <div className="allCast">
                    <p>All cast & crew</p>
                    <p><IoIosArrowDown className="icon"/></p>
                </div>
            </article>
        </article>
     );// skriv /"et tal" oppe i url'en, for at komme ind på detailje siderne
}
 
export default Cast;