import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './components/App';

// Get root element
const rootEl = document.getElementById('app');

// Render given component into root element
const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component/>
        </Provider>,
        rootEl
    );
};

async function init() {
    try {
        // Render App
        render(App);
    } catch (err) {
        console.warn("can't render App" , err);
    }
}

init();
