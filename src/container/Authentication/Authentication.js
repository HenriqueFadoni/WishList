import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

import axios from 'axios';

import * as actions from '../../store/actions/index';
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
        this.props.onSignInAuth(this.state.signIn.email, this.state.signIn.password, true)
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
            onSignInError={this.props.error}
            onSignIn={this.onSubmitSignInHandler}
            onSignUp={this.signToggleHandler}
            changed={this.onChangeHandler} />

        if (this.state.register) {
            form = <SignUp
                onSignUp={this.onSubmitSignUpHandler}
                onCancel={this.signToggleHandler}
                changed={this.onChangeHandler} />
        }
        else if (!this.state.register && this.props.token) {
            form = <Redirect to="/WishListRegister" />
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

const mapStateToProps = state => {
    return {
        token: state.authSignIn.idToken,
        error: state.authSignIn.error
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onSignInAuth: (email, password, secureToken = true) => dispatch(actions.authSignIn(email, password, secureToken))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);