/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Box from "./Box";
import Notification from "./Notification";
import User from "./User";

import { FaUser } from "react-icons/fa"
import { HiOutlineBell } from "react-icons/hi"
import Filter from "./Filter";


const Categories = () => {

    const styled = css`
    position: sticky;
    top: 0;

    .flex {
        display: flex; 
    }
    .border {
        border-bottom: 2px solid grey;
        display: flex;
        justify-content: space-between;
       
    }
    .center {
        text-align: center;
        color: grey;
    }
    .flex {
        display: flex;
        justify-content: right;
        gap: 1rem;
        padding: 2rem 1rem 1rem 1rem;
        color: grey;
    }
    .icon {
        text-align: center;
        font-size: 2rem;
        margin-top: 1rem;
    }
    `

    return ( 
        <section css={styled}>
            <div className="flex">
                <Notification><p className="icon"><HiOutlineBell/></p></Notification>
                <User><p className="icon"><FaUser/></p></User>
            </div>
            <h2>Categories</h2>
            <Box className="">
                <p className="border">Action <input type="checkbox" name="action" id="action" /></p>
                <p className="border">Adventure <input type="checkbox" name="adventure" id="adventure" /></p>
                <p className="border">Animated <input type="checkbox" name="animated" id="animated" /></p>
                <p className="border">Comedy <input type="checkbox" name="comedy" id="comedy" /></p>
                <p className="border">Crime <input type="checkbox" name="crime" id="crime" /></p>
                <p className="border">Fantasy <input type="checkbox" name="fantasy" id="fantasy" /></p>
                <p className="center">See more</p>
            </Box>
            <h2>Services</h2>
            <Box className="">
                <p className="border">Neflix <input type="checkbox" name="netflix" id="netflix" /></p>
                <p className="border">Prime video <input type="checkbox" name="prime" id="prime" /></p>
                <p className="border">Disney + <input type="checkbox" name="disney" id="disney" /></p>
                <p className="border">HBO max <input type="checkbox" name="hbo" id="hbo" /></p>
                <p className="border">Hulu <input type="checkbox" name="hulu" id="hulu" /></p>
                <p className="border">Starz <input type="checkbox" name="starz" id="starz" /></p>
                <p className="canter">See more</p>
            </Box>
            <article>
                <Filter>
                <p>Filter</p>
                <select name="filter" id="filter">
                    <option value=""></option>
                    <option value="netflix">Netflix</option>
                    <option value="prime">Prime Video</option>
                    <option value="dinsey">Disney +</option>
                    <option value="hbo">HBO max</option>
                    <option value="hulu">Hulu</option>
                    <option value="starz">Starz</option>
                </select>
                </Filter>
                <Filter>
                <p>Mood</p>
                <select name="mood" id="mood">
                    <option value=""></option>
                    <option value="happy">Happy day</option>
                    <option value="sad">Sad hours</option>
                    <option value="fright">Fright</option>
                    <option value="funny">Funny</option>
                    <option value="love">Love</option>
                    <option value="crime">Crime</option>
                </select>
                </Filter>
                <Filter>
                <p>Year</p>
                <select name="year" id="year">
                    <option value=""></option>
                    <option value="2023">2023+</option>
                    <option value="2020">2020</option>
                    <option value="2010-2020">2021-2020</option>
                    <option value="2000-2021">2000-2021</option>
                    <option value="1990-2000">1990-2000</option>
                    <option value="1980">1980</option>
                </select>
                </Filter>
                <Filter>
                <p>Language</p>
                <select name="language" id="language">
                    <option value=""></option>
                    <option value="english">English</option>
                    <option value="spanish">Spaning</option>
                    <option value="danish">Danish</option>
                    <option value="maxican">Maxican</option>
                    <option value="japanese">Japanese</option>
                    <option value="chinese">Chinese</option>
                </select>
                </Filter>
                <Filter>
                <p>Age rating</p>
                <select name="age-rating" id="age-rating">
                    <option value=""></option>
                    <option value="3">3+</option>
                    <option value="6">6+</option>
                    <option value="10">10+</option>
                    <option value="13">13+</option>
                    <option value="16">16+</option>
                    <option value="18">18+</option>
                </select>
                </Filter>
            </article>
        </section>
     );
}
 
export default Categories;
