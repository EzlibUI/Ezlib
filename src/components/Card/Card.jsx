import React from 'react'
import { useState, useEffect } from "react";


export const Card = ({ image, text, title,  button}) => {

    return (
        <div className="card">
        <div className="card-image">
        <img src={image} alt="cardimage"></img>
        </div>
        <div className="card-text-container">
        <h3>{title}</h3>
        <p>{text}</p>
        {button}
        </div>
        </div>
    )
}