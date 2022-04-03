import React from "react";
import ReactDOM from "react-dom";
import "./App/index.css";
import { AppUI } from "./App/AppUI";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "./Context";

ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <AppUI />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
