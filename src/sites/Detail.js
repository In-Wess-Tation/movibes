/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import User from "../components/Categories/User";


import Banner from "../components/detail/Banner";
import Cast from "../components/detail/Cast";
import Info from "../components/detail/Info";
import Search from "../components/Home/Search";

import Notification from "../components/detail/Notification";
import { FaUser } from "react-icons/fa"
import { HiOutlineBell } from "react-icons/hi"
import Ratings from "../components/detail/Ratings";

const styled = css`
padding-left: 2rem;


    .grid {
        display: grid;
        grid-template-columns: 1fr 20rem;
        gap: 2rem;
    }
    .flex {
        display: flex;   
    } 
    .icons {
            text-align: center;
            font-size: 2rem;
            margin-top: 1rem;
        
        }
    .flex2 {
        display: flex;
        padding-top: 2rem;
        gap: 2rem;
    }
`

const Detail = () => {
    return ( 
        <section css={styled}>
            <div className="flex">
                <Search />
                <div className="flex2">
                    <Notification><p className="icons"><HiOutlineBell/></p></Notification>
                    <User><p className="icons"><FaUser/></p></User>
                </div>
            </div>

                <Banner />
            <div className="grid">
            <div>
                <Info />
                <Cast />
            </div>
            <div>
                <Ratings />
            </div>
            </div>
        </section>
    );
}
 
export default Detail;