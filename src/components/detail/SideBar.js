/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


import movieCollage from "./svg'er/movieCollage.svg"
import joker from "./svg'er/joker.svg"
import topGun from "./svg'er/topGun.svg"
import Adventure from "./svg'er/adventure.svg"
import Drama from "./svg'er/drama.svg"
import Popular from "./svg'er/popular.svg"
import Fav from "./svg'er/fav.svg"


const SideBar = () => {

    const styled = css`
    
    img {
        max-width: 90%;
        margin-bottom: 1rem;
    }
    `

    return ( 
        <div css={styled}>
            <img src={movieCollage} alt="" />
            <img src={joker} alt="" />
            <img src={topGun} alt="" />
            <img src={Adventure} alt="" />
            <img src={Drama} alt="" />
            <img src={Popular} alt="" />
            <img src={Fav} alt="" />
        </div>
     );
}
 
export default SideBar;