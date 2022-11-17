import React from 'react'
import c from './navbar.module.css'

class NavBar extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <ul className={c.ul}>
                    <a href='#'><li>Home</li></a> 
                    <a href='#'><li>Pricing</li></a>
                    <a href='#'><li>Portfolio</li></a>
                    <a href='#'><li>Futures</li></a>
                </ul>
            </div>
        );
    }
}
 
export default NavBar;