import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './scss/base.scss';
import './scss/style.scss';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import rootReducer from './modules';

 const store = createStore(rootReducer);
// const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
            <App />
        {/* </PersistGate> */}
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
