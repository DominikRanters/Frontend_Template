import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import rootReducer from './slices/rootReducer';

let loggerMiddleware;

if (__DEV__ || __QA__) {
    // eslint-disable-next-line global-require
    loggerMiddleware = [...getDefaultMiddleware(), logger]; // logger Middleware
}

const store = configureStore({
    reducer: rootReducer,
    middleware: loggerMiddleware,
});

export default store;
