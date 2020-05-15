import React from "react";
import "./Nav.css";

const Nav = () => {
    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

          // Add a click event on each of them
          $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
      
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);
      
              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
      
            });
          });
        }
      });

    return(
        <div>
            <nav className="navbar is-info" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <p id="name"><strong>Brian Vu</strong></p>
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
                    
                        <a className="navbar-item" href="/portfolio">
                            Portfolio
                        </a>

                        <a className="navbar-item" href="/contact">
                            Contact
                        </a>

                        <a className="navbar-item" href="https://github.com/b-vu">
                            <i className="fab fa-github"></i>
                            &nbsp;GitHub
                        </a>

                        <a className="navbar-item" href="/">
                            <i className="fab fa-linkedin"></i>
                            &nbsp;LinkedIn
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;