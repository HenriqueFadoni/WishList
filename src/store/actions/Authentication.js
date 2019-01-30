import axios from 'axios';
import * as actionTypes from './actionTypes';

const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

const authSuccess = (token, id) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: id
    };
};

const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const authSignIn = (email, password, secureToken) => {
    return dispatch => {
        dispatch(authStart());
        const apiKey = 'AIzaSyCNyw3wkGxKe_aJ80X9FHBpGD7bo5ju36M';
        const userData = {
            email,
            password,
            returnSecureToken: secureToken
        }
    
        axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiKey}`, userData)
            .then( response => {
                console.log('success');
                localStorage.setItem('Token', response.data.idToken);
                localStorage.setItem('userId', response.data.localId);
                localStorage.setItem('expirationTime', response.data.expiresIn)
                dispatch(authSuccess(response.data.idToken, response.data.localId));
            })
            .catch( error => {
                let errorMessage = 'Password or E-mail Invalid';
                dispatch(authFail(errorMessage));
            });
    };
};