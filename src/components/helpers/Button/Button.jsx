import React from 'react';
import c from './button.module.css'

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        
    const {text} = this.props

    return ( 
        <button className={c.button}>{text}</button>
    );
    }
}
 
export default Button;