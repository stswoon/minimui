import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (window.minimui) {
    const fragmentCreator = {
        create(element) {
            ReactDOM.render(
                <React.StrictMode> <App/> </React.StrictMode>,
                element
            );
        }
    }
    window.minimui.registerFragment("reactFragment", fragmentCreator);
} else {
    //means localdev
    ReactDOM.render(
        <React.StrictMode> <App/> </React.StrictMode>,
        document.getElementById('root')
    );
}



