import React from "react";

const Project = props => {
    const { title, description, projectLink, githubLink, image } = props;

    return(
        <div className="column is-half">
            <div className="card">
                <a className="card-image" href={projectLink}>
                    <img src={image} alt={title}></img>
                </a>

                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                        </div>
                    </div>

                    <div className="content">
                        {description}
                        <br />
                        <br />
                        <a href={projectLink}>Deployed Project</a> | <a href={githubLink}>GitHub Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;