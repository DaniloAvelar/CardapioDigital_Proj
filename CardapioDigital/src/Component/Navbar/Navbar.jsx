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
                    <li>Cadastrar</li>
                    <li>Entrar</li>
                    <li>Notificações</li>
                    <li>Usuário</li>
                    <li>Sair</li>
                </ul>
            </section>
        </>
    )
}

export default Navbar