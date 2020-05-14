import React from "react";

const Nav = () => {
    return(
        <div>
            <nav className="navbar is-info" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <p><strong>Brian Vu</strong></p>
                    </a>
                
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/about">
                            About
                        </a>
                    
                        <a className="navbar-item" href="portfolio">
                            Portfolio
                        </a>

                        <a className="navbar-item" href="contact">
                            Contact
                        </a>
                    </div>
                
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;