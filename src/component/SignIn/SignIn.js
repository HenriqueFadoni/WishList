import React from 'react';

import Aux from '../../hoc/aux';

const SignIn = props => (
    <Aux>
        <h1>SIGN IN</h1>
        <p>{props.onSignInError}</p>
        <form onSubmit={props.onSignIn}>
            <input
                type="email"
                name="email"
                className="input-email"
                onChange={event => props.changed(event, 'email')}
                placeholder="E-Mail" />
            <input
                type="password"
                name="password"
                className="input-password"
                onChange={event => props.changed(event, 'password')}
                placeholder="Password" />
            <button
                type="submit"
                className="input-btn-auth"
                name="submit-auth">Sign In</button>
        </form>
        <p>Don't have an account?
            <button
                className="btn-register-for-free"
                onClick={props.onSignUp}>register for free!</button>
        </p>
    </Aux>
);

export default SignIn;