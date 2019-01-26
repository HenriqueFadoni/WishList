import React, { Component } from 'react';
import Aux from '../../hoc/aux';

class Authentication extends Component {
    state = {
        register: false
    }

    signUpHandler = () => {
        this.setState({register:true});
    }

    render() {
        let form = (
            <Aux>
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
                <button onClick={this.signUpHandler}>Sign Up</button>
            </Aux>
        );

        if (this.state.register) {
            form = <p>Register ON</p>
        }
        return (
            <div>
                {form}
            </div>
        );
    }
}

export default Authentication;