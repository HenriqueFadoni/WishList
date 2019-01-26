import React from 'react';

import Aux from '../../hoc/aux';

const SignUp = props => (
    <Aux>
        <h1>SIGN UP</h1>
        <form>
            <input
                type="email"
                name="email-register"
                placeholder="E-Mail" />
            <input
                type="password"
                name="password-register"
                placeholder="Password" />
            <input
                type="password"
                name="password-register-repeat"
                placeholder="Repeat Your Password" />
            <button
                type="submit"
                name="submit-auth-register">Sign Up</button>
        </form>
        <button onClick={props.onCancel}>Cancel</button>
    </Aux>
);

export default SignUp;