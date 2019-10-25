import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';
import App from './components/App';

// Get root element
const rootEl = document.getElementById('app');

const storeMiddleware = [thunk];
if (__DEV__ || __STAGING__) {
    storeMiddleware.push(require('redux-logger').default);
}

const store = createStore(
    rootReducer,
    applyMiddleware(...storeMiddleware)
);

// Render given component into root element
const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component/>
        </Provider>,
        rootEl
    );
};

/**
 * The init function is used to be sure, that chayns® will be ready until render() is called
 * @return {Promise.<void>}
 */
async function init() {
    try {
        // Wait until chayns® is ready
        await chayns.ready;

        // Render App
        render(App);
    } catch (err) {
        console.warn('no chayns environment found', err);
    }
}

init();
