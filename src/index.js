import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import "./util/language/i18n";
import { store } from "./redux/store";
import ThemeWrapper from "./util/theme/ThemeWrapper";

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
