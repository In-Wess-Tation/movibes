/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BoksCirkel from "./BoksCirkel";

import { FaTicketAlt } from "react-icons/fa"


const Boks = () => {

    const styled = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem 0;
        

    .black {
        background-color: black;
        border-radius: 2rem;
        margin: -2rem 1rem 1rem 1rem;
        padding: 1rem;
        height: 13rem;
        padding-bottom: 2.7rem;
    }
    h3 {
        color: white;
    }
    .grey {
        color: grey;
    }
    button {
        font-size: 1.5rem;
        border-radius: 2rem;
        background-color: #3dd2cd80;
        color: #3DD2CC;
        padding: 0.5rem;
        text-align: center;
        margin-top: 1.5rem;
    }
    .icon {
        font-size: 2rem;
        text-align: center;
        margin-top: 1rem;
        color: #3DD2CC;
        opacity: 100%;
    }
    
    `

    return ( 
        <div css={styled}>
           <BoksCirkel><p className="icon"><FaTicketAlt/></p></BoksCirkel> 
           <div className="black">
            <h3>Play movie quizes and earn free tickets</h3>
            <p className="grey">50k people are playing now</p>
            <button>Start playing</button>
           </div>
        </div>
     );
}
 
export default Boks;