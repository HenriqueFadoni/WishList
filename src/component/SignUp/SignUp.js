import React from 'react';

import Aux from '../../hoc/aux';
import '../../sass/main.scss';

const SignUp = props => (
    <Aux>
        <h1>SIGN UP</h1>
        <form onSubmit={props.onSignUp} >
            <input
                type="email"
                name="email-register"
                className="input-email"
                onChange={event => props.changed(event, 'email')}
                placeholder="E-Mail" />
            <input
                type="password"
                name="password-register"
                className="input-password"
                onChange={event => props.changed(event, 'password')}
                placeholder="Password" />
            <input
                type="password"
                name="password-register-repeat"
                className="input-password"
                onChange={event => props.changed(event, 'passwordRepeat')}
                placeholder="Repeat Your Password" />
            <button
                type="submit"
                name="submit-auth-register">Sign Up</button>
        </form>
        <button onClick={props.onCancel}>Cancel</button>
    </Aux>
);

export default SignUp;