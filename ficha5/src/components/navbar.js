import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Menu</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Início</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/filme_table">Lista de filmes (tabela)</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/filme_card">Lista de filmes (card)</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacts">Contactos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Log in</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;