import axios from 'axios';
import * as actionTypes from './actionTypes';

authSignIn = (email, password, SecureToken) => {
    const apiKey = 'AIzaSyCNyw3wkGxKe_aJ80X9FHBpGD7bo5ju36M';
    const userData = {
        email,
        password,
        returnSecureToken: SecureToken
    }

    axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiKey}`, userData)
        .then( reponse => {
            console.log('success')
        })
        .catch( error => {
            console.log(error)
        });
}