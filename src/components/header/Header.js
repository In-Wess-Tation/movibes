/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";
import Boks from "./Boks";
import Logo from "./Logo";


const Header = () => {

    const styled = css`
    background-color: #212121;
    width: 15rem;
    height: 100vh;
    position: sticky;

    `
    let normalStyle = {
        height: "3rem",
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
        height: "4rem",
        textDecoration: "none", 
        color: "grey"
    }
    let activeStyle = {
        backgroundColor: "#3dd2cd73",
        textDecoration: "none",
        color: "#3DD2CC",
        height: "3rem",
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
        height: "4rem",
        borderRight: "5px solid #3DD2CC"
    }

    return ( 
        <section css={styled}>
            <Logo>Movibes</Logo>
            <NavLink
                to="/"
                style={({ isActive }) =>
            isActive ? activeStyle : normalStyle
            }
            >Home</NavLink>
            <NavLink
                to="movies"
                style={({ isActive }) =>
            isActive ? activeStyle : normalStyle
            }
            >Movies</NavLink>
            <NavLink
                to="/tvSeries"
                style={({ isActive }) =>
            isActive ? activeStyle : normalStyle
            }
            >TV Series</NavLink>
            <NavLink
                to="/upcoming"
                style={({ isActive }) =>
            isActive ? activeStyle : normalStyle
            }
            >Upcoming</NavLink>

            <Boks />

            <NavLink
                to="/logout"
                style={({ isActive }) =>
            isActive ? activeStyle : normalStyle
            }
            >Log out</NavLink>
        </section>
     );
}
 
export default Header;
