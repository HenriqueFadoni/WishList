import * as actionTypes from '../actions/actionTypes';

const initialState = {
    idToken: null,
    userId: null
}

const authStart = state => {
    return {
        ...state,
        idToken: null,
        userId: null
    }
}

const authSuccess = (state, action) => {
    return {
        ...state,
        idToken: action.idToken,
        userId: action.userId
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_START: return authStart(state);
        default: return state;
    }
};

export default reducer;