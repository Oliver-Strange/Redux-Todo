import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MainContainer from './components/MainContainer';
import reducer from './store/reducers/reducer';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <MainContainer />
    </Provider>, 
    document.getElementById('root')
);


