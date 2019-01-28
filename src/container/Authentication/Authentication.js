import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import SignUp from '../../component/SignUp/SignUp';
import SignIn from '../../component/SignIn/SignIn';
import '../../sass/main.scss';

class Authentication extends Component {
    state = {
        signIn: {
            email: '',
            password: ''
        },
        signUp: {
            email: '',
            password: '',
            passwordRepeat: ''
        },
        register: false
    }

    signToggleHandler = () => {
        let state = this.state.register;
        state = !state;
        this.setState({ register: state });
    }

    onChangeHandler = (event, stateTarget) => {
        const isSignUp = this.state.register;
        const sign = isSignUp ? this.state.signUp : this.state.signIn;

        let newSign = {
            ...sign
        };
        let newSignElement = {
            ...sign[stateTarget]
        };
        const newElement = event.target.value;
        newSignElement = newElement;
        newSign[stateTarget] = newSignElement;

        if (!isSignUp) {
            this.setState({ signIn: newSign });
        }
        else {
            this.setState({ signUp: newSign });
        }
    }

    render() {
        let form = <SignIn
            onSignUp={this.signToggleHandler}
            changed={this.onChangeHandler} />

        if (this.state.register) {
            form = <SignUp
                onCancel={this.signToggleHandler}
                changed={this.onChangeHandler} />
        }
        return (
            <div className="main-div-authentication">
                <div className="formContainer">
                    {form}
                    <NavLink to="/">
                        <button>Home</button>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Authentication;