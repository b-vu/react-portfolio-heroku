import React from "react";

const Container = ({ children }) => {
    return(
        <div className="container">
            <div className="notification">
                {children}
            </div>
        </div>
    );
}

export default Container;