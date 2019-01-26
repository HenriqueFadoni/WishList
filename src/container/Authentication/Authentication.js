import React, { Component } from 'react';
import Aux from '../../hoc/aux';

class Authentication extends Component {
    state = {
        register: false
    }

    signToggleHandler = () => {
        let state = this.state.register;
        state = ! state;
        this.setState({ register: state });
    }

    render() {
        let form = (
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
                <button onClick={this.signToggleHandler}>Sign Up</button>
            </Aux>
        );

        if (this.state.register) {
            form = (
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
                    <button onClick={this.signToggleHandler}>Cancel</button>
                </Aux>
            );
        }
        return (
            <div>
                {form}
            </div>
        );
    }
}

export default Authentication;