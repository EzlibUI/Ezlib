import React from 'react'
import { useState, useEffect } from "react";


export const TextContainer = ({children}) => {

    return (
        <div >
        <div className="text-container">
        {children}
        </div>
        </div>
    )
}