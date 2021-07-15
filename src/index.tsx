import React from "react";
import ReactDOM from "react-dom";
import { Application } from "./Application";
import { Provider } from "react-redux";
import { persistor, store } from "./reduxToolKit/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <Application />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById("root")
);
