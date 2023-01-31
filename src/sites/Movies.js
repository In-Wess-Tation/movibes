/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Categories from "../components/Categories/Categories";
import Banner from "../components/Home/Banner";
import Popular from "../components/Home/Popular";
import Search from "../components/Home/Search";
import Trending from "../components/Home/Trending";
import TvSeries from "../components/Home/TvSeries";
import Upcoming from "../components/Home/Upcoming";





const Home = () => {

    const styled = css`
        display: flex;
        justify-content: space-between;
        padding-right: 2rem;
    `

    
    return ( 
        <section css={styled}>
            <div>
                <Search />
                <Trending />
                <Upcoming />
                <TvSeries />
                <Popular />
            </div>
            <Categories />
        </section>
     );
}
 
export default Home;