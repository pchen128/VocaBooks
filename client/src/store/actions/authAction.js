import axios from 'axios';

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";


const apiUrl = 'http://localhost:3000';


const requestSignup = () => {
    return {
        type: SIGNUP_REQUEST
    };
};

const receiveSignup = user => {
    return {
        type: SIGNUP_SUCCESS,
        payload: user
    };
};

const signupError = () => {
    return {
        type: SIGNUP_FAILURE
    };
};

const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    };
};

const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    };
};

const loginError = () => {
    return {
        type: LOGIN_FAILURE
    };
};

const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST
    };
};

const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

const logoutError = () => {
    return {
        type: LOGOUT_FAILURE
    };
};

const verifyRequest = () => {
    return {
        type: VERIFY_REQUEST
    };
};

const verifySuccess = user => {
    return {
        type: VERIFY_SUCCESS,
        payload: user
    };
};

export const getProfileFetch = () => dispatch => {
    dispatch(verifyRequest());
    return axios.get(`${apiUrl}/users/me`, { withCredentials: true })
        .then(response => {
            dispatch(verifySuccess(response.user));
        })
        .catch(error => {
            dispatch(loginError());
        });
};

export const signupUser = (user) => dispatch => {
    dispatch(requestSignup());
    return axios.post(`${apiUrl}/users`, user, { withCredentials: true })
        .then(response => {
            dispatch(receiveSignup(response.user));
        })
        .catch(error => {
            console.log(error);
            dispatch(signupError());
        });
};

export const loginUser = (user) => dispatch => {
    dispatch(requestLogin());
    return axios.post(`${apiUrl}/users/login`, user, { withCredentials: true })
        .then(response => {
            dispatch(receiveLogin(response.user));
        })
        .catch(error => {
            dispatch(loginError());
        });
};

export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    return axios.post(`${apiUrl}/users/me/logout`, null, { withCredentials: true })
        .then(response => {
            dispatch(receiveLogout());
        })
        .catch(error => {
            dispatch(logoutError());
        });
};