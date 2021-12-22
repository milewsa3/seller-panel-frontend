import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux";
import "./i18n";
import {store} from "./app/store";
import ThemeWrapper from "./wrapper/ThemeWrapper";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
