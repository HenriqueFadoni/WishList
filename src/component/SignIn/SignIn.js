import React from 'react';

import Aux from '../../hoc/aux';

const SignIn = props => (
    <Aux>
        <h1>SIGN IN</h1>
        <form>
            <input
                type="email"
                name="email"
                placeholder="E-Mail" />
            <input
                type="password"
                name="password"
                placeholder="Password" />
            <button
                type="submit"
                name="submit-auth">Sign In</button>
        </form>
        <p>If you don't have an account, register on our platform for free!</p>
        <button onClick={props.onSignUp}>Sign Up</button>
    </Aux>
);

export default SignIn;