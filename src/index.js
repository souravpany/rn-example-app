import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store";
import WebApp from "./WebApp";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WebApp />
    </Provider>
  </React.StrictMode>
);
