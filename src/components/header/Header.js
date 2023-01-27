/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";
import Boks from "./Boks";
import Logo from "./Logo";

import { GrHomeRounded } from "react-icons/gr";
import { BiCameraMovie } from "react-icons/bi";
import { CgScreen } from "react-icons/cg";
import { BsCalendar3 } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";


const Header = () => {

    const styled = css`
    background-color: #212121;
    width: 15rem;
    height: 100vh;
    position: sticky;
    top: 0;
    
    .logo {
        text-shadow: 0px 0px 5px #3DD2CC;
    }

    `
    let normalStyle = {
        height: "3rem",
        display: "flex", 
        fontSize: "1.5rem",
        height: "4rem",
        textDecoration: "none", 
        color: "grey",
        paddingLeft: "2rem",
    }
    let activeStyle = {
        backgroundColor: "#3dd2cd73",
        textDecoration: "none",
        color: "#3DD2CC",
        height: "3rem",
        display: "flex", 
        paddingLeft: "2rem",
        fontSize: "1.5rem",
        height: "4rem",
        borderRight: "5px solid #3DD2CC"

        
    }

    return ( 
        <section css={styled}>
            <Logo className="logo">Movibes</Logo>
            <NavLink
                to="/"
                style={({ isActive }) =>
            isActive ? activeStyle : normalStyle
            }
            ><p><GrHomeRounded/> Home</p></NavLink>
            <NavLink
                to="movies"
                style={({ isActive }) =>
            isActive ? activeStyle : normalStyle
            }
            ><p><BiCameraMovie/> Movie</p></NavLink>
            <NavLink
                to="/tvSeries"
                style={({ isActive }) =>
            isActive ? activeStyle : normalStyle
            }
            ><p><CgScreen/> TV Series</p></NavLink>
            <NavLink
                to="/upcoming"
                style={({ isActive }) =>
            isActive ? activeStyle : normalStyle
            }
            ><p><BsCalendar3 /> Upcoming</p></NavLink>

            <Boks />

            <NavLink
                to="/logout"
                style={({ isActive }) =>
            isActive ? activeStyle : normalStyle
            }
            ><p><BiLogIn/> Log out</p></NavLink>
        </section>
     );
}
 
export default Header;
