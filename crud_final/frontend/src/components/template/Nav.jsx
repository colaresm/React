import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'
import iconuser from './people.svg'
import house from './house-door.svg'
import sair from './box-arrow-in-right.svg'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa! */}
            <Link to="/">
            <img src={house} alt="Início" width="61" height="40" />Início
            </Link>
            <Link to="/users">
            <img src={iconuser} alt="Usuários" width="61" height="40" />
                Usuários
            </Link>
            <Link to="/">
            <img src={sair} alt="Sair" width="61" height="40" />
                Sair
            </Link>
        </nav>
    </aside>