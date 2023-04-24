import React from "react";

export const NavBar = () => {
    return(
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#">MiMarca</a>
                </div>
                    <ul className="nav__list">
                        <li>
                            <a className="nav__link" href="#">categoria 1</a>
                        </li>
                        <li>
                            <a className="nav__link" href="#">categoria 2</a>
                        </li>
                        <li>
                            <a className="nav__link" href="#">categoria 3</a>
                        </li>
                    </ul>
            </nav>
        </div>
    );
}