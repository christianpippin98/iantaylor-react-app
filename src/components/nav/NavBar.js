import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

    render() {

        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link class="navbar-brand" to="/iantaylor">Ian Taylor</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item active">
                <Link className="nav-link" to="/poems">Poems</Link>
            </li>
            <li class="nav-item active">
                <Link className="nav-link" to="/shortstories">Short Stories</Link>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
        </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Facebook</a>
                    <a class="dropdown-item" href="#">Instagram</a>
                    <a class="dropdown-item" href="#">Twitter</a>
                </div>
            </li>
        </ul>
    </div>
</nav>
        )
    }
}

export default NavBar;