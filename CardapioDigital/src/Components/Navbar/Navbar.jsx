import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <section class="top-nav">
                <div>
                    Logo Here
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                    <div class='menu-button'></div>
                </label>
                <ul class="menu">
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                    <li>Four</li>
                    <li>Five</li>
                </ul>
            </section>
        </>
    )
}

export default Navbar