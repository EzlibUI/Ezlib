import React from 'react'
import { useState, useEffect } from "react";


export const Card = ({children, image, shortText, text, title, description, button}) => {

    return (
        <div className="card">
        <div className="card-image">
        <img src={image} alt="cardimage"></img>
        <p>{description}</p>
        </div>
        <span>{shortText}</span>
        <h2>{title}</h2>
        <p>{text}</p>
        {button}
        </div>
    )
}