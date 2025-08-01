// main.jsx or index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import {store} from "./redux/store"; // Make sure this is correctly exported
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <Provider store={store}>
     
        <App />
    
    </Provider>
  
);
