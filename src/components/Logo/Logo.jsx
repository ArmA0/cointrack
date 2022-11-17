import React from 'react'
import logo from '../../images/logo.png'
import c from './logo.module.css'

class Logo extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className={c.logoWrap}>
                <img src={logo} alt="logo" className={c.logo} />
                <p className={c.p}>cointrack<span className={c.span}>ai</span></p>
            </div>
        );
    }
}
 
export default Logo;