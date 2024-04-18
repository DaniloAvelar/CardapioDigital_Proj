import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <section className="top-nav">
                <div>
                    Logo Here
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <ul className="menu">
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