import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./features/Employees/slices";
// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";
// import rootReducer from "./reducers/index";
// import rootSaga from "./sagas/index";

const store = configureStore({ reducer: rootReducer });
// const sagaMiddleware = createSagaMiddleware();
// sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

reportWebVitals();
