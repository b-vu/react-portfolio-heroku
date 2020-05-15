import React from "react";
import "./Banner.css";

const Banner = props => {
    const { title, subtitle } = props;
    return(
        <section className="hero is-info is-bold">
                <div className="hero-body">
                    <div className="container">
                    <h1 className="title">
                        {title}
                    </h1>
                    <h2 className="subtitle">
                        {subtitle}
                    </h2>
                    </div>
                </div>
        </section>
    );
}

export default Banner;