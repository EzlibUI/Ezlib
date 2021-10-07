import React from "react";



export const Navbar = ({ links }) => {
    return (
        <nav>
            <ul>
                {links.map(item => {
                    return <li><a href={item.destination}>{item.name}</a></li>
                })}
            </ul>
        </nav>
    )
    //Navbar();
}