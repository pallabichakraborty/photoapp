import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux';
import App from './Components/App';
import thunk from 'redux-thunk';
import {database} from './Database/config'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><BrowserRouter><App></App></BrowserRouter></Provider>,
                document.getElementById('root'));
