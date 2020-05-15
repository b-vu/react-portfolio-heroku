import React from "react";

const Textarea = () => {
    return(
        <div className="container field column is-three-fifths">
            <label className="label">Message</label>
            <div className="control">
                <textarea className="textarea is-info" placeholder="Message"></textarea>
            </div>
        </div>
    );
}

export default Textarea;