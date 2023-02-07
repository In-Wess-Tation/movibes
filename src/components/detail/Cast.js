
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

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
        {members?.crew.map((member, index) => (
            index < 1 ?
            <div>
                <p>Director: <span>{director?.name}</span></p>
                {writers?.length ? 
                <p>Writers: {writers.map((writer) => (<span>{writer.name}, </span>))}</p> 
                : null}
            </div>
            : null
        ))}
            <p>Stars: {members?.crew.map((member, index) => {if(index < 4) return (<span>{member.name}, </span>)})}</p>

            <button>Top rated movie #65</button>
            <p>Top Cast </p>
            <article className="cast">
            {error && <p>{error}</p>}
            {loading && <p>Loading... </p>}
            { members?.cast.map((member, index) => (
                    index < 4 ? 
                    <div>
                        <img src={imgPath + member.profile_path} alt="" />
                        <p>{member.name}</p>
                        <p className="grey">{member.character}</p> 
                    </div> 
                    : null                    
                ))}
            </article>
        </article>
     );// skriv /"et tal" oppe i url'en, for at komme ind på detailje siderne
}
 
export default Cast;