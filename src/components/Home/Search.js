/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { CiSearch } from "react-icons/ci"

const Search = () => {

    const styled = css`
        width: 57rem;
        height: 4rem;
        border: 2px solid grey;
        border-radius: 2rem;
        margin: 2rem;
        p {
            color: grey;
            font-weight: bold;
            font-size: 1.5rem;
            padding-left: 2rem;
            margin-top: 0.5rem;
        }
        .icon {
            font-size: 2rem;
        }
    `

    return ( 
        <div css={styled}>
            <p><CiSearch className="icon"/> Search for movies, TV shows... </p>
        </div>
     );
}
 
export default Search;
