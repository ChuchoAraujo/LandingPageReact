import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="card mt-5" style={{width: 400}}>
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body p-4">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
              <a href="#" className="btn btn-primary">{props.buttom}</a>
            </div>
        </div>
    )
}

Card.PropTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttom: PropTypes.string,
}

export default Card;