import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
    return (
        <footer>
            <div className="row">
                <div>
                    <p>
                        {props.copyright}
                    </p>
                </div>
            </div>
        </footer>

    )
}

Footer.PropTypes = {
    copyright: PropTypes.string
}

export default Footer