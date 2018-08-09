import { 
    Action, 
    applyMiddleware, 
    compose, 
    createStore } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export interface IRootState {
    name: string,
}

export const rootReducer = (state: IRootState) => {
    return {
        name: "AEMP"
    }
}

declare global {
    // tslint:disable-next-line:interface-name
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore<IRootState, Action, {}, {}>(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));