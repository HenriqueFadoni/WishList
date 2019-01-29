import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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

    onSubmitSignUpHandler = event => {
        event.preventDefault();
        const isValid = this.signUpValidation();
        console.log(event)

        if (isValid) {
            const apiKey = 'AIzaSyCNyw3wkGxKe_aJ80X9FHBpGD7bo5ju36M';
            const dataSign = {
                email: this.state.signUp.email,
                password: this.state.signUp.password,
                returnSecureToken: true
            };
            axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${apiKey}`, dataSign)
                .then(response => {
                    console.log(response);
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        else {
            console.log("Invalid Sign Up");
        }
    }

    onSubmitSignInHandler = event => {
        event.preventDefault();

        const apiKey = 'AIzaSyCNyw3wkGxKe_aJ80X9FHBpGD7bo5ju36M';
        const dataSign = {
            email: this.state.signIn.email,
            password: this.state.signIn.password,
            returnSecureToken: true
        };
        axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiKey}`, dataSign)
            .then(response => {
                console.log(response);
                console.log(response.data);
                console.log('Sign In')
            })
            .catch(error => {
                console.log(error);
            })
    }

    signUpValidation = () => {
        const passwordOne = this.state.signUp.password;
        const passwordTwo = this.state.signUp.passwordRepeat;

        if (passwordOne === passwordTwo) {
            return true;
        }
        else {
            return false;
        }
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
            onSignIn={this.onSubmitSignInHandler}
            onSignUp={this.signToggleHandler}
            changed={this.onChangeHandler} />

        if (this.state.register) {
            form = <SignUp
                onSignUp={this.onSubmitSignUpHandler}
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