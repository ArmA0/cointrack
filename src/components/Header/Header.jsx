import React from 'react'
import Logo from '../Logo/Logo';
import c from './header.module.css'
import NavBar from './NavBar/NavBar';
import SignIn from './SignIn/SignIn';

class Header extends React.Component {
    
    render() { 
        return (
            <header className={c.header}>
                <div className={c.subWrapper}>
                    <div className={c.logo} >
                        <Logo />
                    </div>
                    <div className={c.navbar}>
                        <NavBar />
                    </div>
                    <div className={c.signIn}>
                        <SignIn />
                    </div>
                </div>
            </header>
        );
    }
}
 
export default Header;