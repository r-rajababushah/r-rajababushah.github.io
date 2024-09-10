import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import "./Header.scss";

function Header() {

    let activeNav = "rgb(0, 236, 232)";
    let siteUrl = "https://rajababushah.vercel.app";
    

    return (
        <div className="nav-header">
            <nav className="nav" name="#home">

                <label htmlFor="title" className='title'><a href={siteUrl}>Portfolio</a></label>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? activeNav : "yellow",
                                }
                            }}
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/skills"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? activeNav : "yellow",
                                }
                            }}
                        >
                            SKILLS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/education"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? activeNav : "yellow",
                                }
                            }}
                        >
                            EDUCATION
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/portfolio"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? activeNav : "yellow",
                                }
                            }}
                        >
                            PORTFOLIO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? activeNav : "yellow",
                                }
                            }}
                        >
                            CONTACT
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink
                            to="/downloads"
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? activeNav : "yellow",
                                }
                            }}
                        >
                            DOWNLOADS
                        </NavLink>
                    </li> */}
                </ul>
            </nav>
            <Outlet />
        </div >
    )
}

export default Header