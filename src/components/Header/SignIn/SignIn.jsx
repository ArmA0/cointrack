import React from 'react';
import Button from '../../helpers/Button/Button';
import c from './signin.module.css'


class SignIn extends React.Component {
    render() { 
        return (
            <div className={c.signinWrap}>
                <p className={c.p}><a href='#'>Sign in</a></p>
                <div className={c.signupBTN}>
                    <Button text='Start a Free Trail' />
                </div>
            </div>
        );
    }
}
 
export default SignIn;