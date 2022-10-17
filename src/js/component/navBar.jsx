import React from "react";
import PropTypes from "prop-types"

const Navbar = (props) => {
    return (
        <nav className="row navbar navbar-expand-lg bg-secondary p-3">
            <div className="col-2"></div>
            <div className="col-4 container-fluid">
                <a className="navbar-brand text-light" href="#">{props.title1}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="col-2"></div>
            <div className="col-4" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">{props.title2}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">{props.title3}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">{props.title4}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled text-light">{props.title5}</a>
                        </li>
                    </ul>
                </div>
     </nav>
    )
}

Navbar.propTypes = {
    title1: PropTypes.string,
    title2: PropTypes.string,
    title3: PropTypes.string,
    title4: PropTypes.string,
    title5: PropTypes.string
};

export default Navbar