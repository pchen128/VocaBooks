import { combineReducers } from 'redux';
import authReducer from './authReducer';

export const initailState = {};

export const rootReducer = combineReducers({
    auth: authReducer,
});