import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    VERIFY_REQUEST,
    VERIFY_SUCCESS
} from "../actions/authAction";
const initialState = {
    isAuthenticated: false,
    user: {}
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.user
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                user: {}
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
            };
        case VERIFY_REQUEST:
            return {
                ...state,
            };
        case VERIFY_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.user
            };
        default:
            return state;
    }
}
export default authReducer;