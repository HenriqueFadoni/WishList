import React, { Component } from 'react';

import SignUp from '../../component/SignUp/SignUp';
import SignIn from '../../component/SignIn/SignIn';

class Authentication extends Component {
    state = {
        singIn: {
            email: '',
            password: ''
        },
        signOut: {
            email: '',
            password: '',
            passwordRepeat: ''
        },
        register: false
    }

    signToggleHandler = () => {
        let state = this.state.register;
        state = ! state;
        this.setState({ register: state });
    }

    render() {
        let form = <SignIn onSignUp={this.signToggleHandler} />

        if (this.state.register) {
            form = <SignUp onCancel={this.signToggleHandler}/>
        }
        return (
            <div>
                {form}
            </div>
        );
    }
}

export default Authentication;