import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MainContainer from './components/MainContainer'

const store = createStore(MainContainer);

ReactDOM.render(
    <Provider store={store}>
        <MainContainer />
    </Provider>, 
    document.getElementById('root')
);


