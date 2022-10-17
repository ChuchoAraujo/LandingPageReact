import React from "react";
import PropTypes from "prop-types";


const Jumbotron = (props) => {
    return (
        <div className="bg-light p-3">
            <h1 className="bg-light p-3 text-start">{props.title}</h1>
            <p className="bg-light p-3 text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br />
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button type="button" className="btn btn-primary">{props.buttom}</button>
        </div>
    )
}
export default Jumbotron
