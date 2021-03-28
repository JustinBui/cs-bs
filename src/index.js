import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyD5SMPVClgK1gpSA7_w6m_n5FYRlDYU8FA",
  authDomain: "cs-bs-2702e.firebaseapp.com",
  projectId: "cs-bs-2702e",
  storageBucket: "cs-bs-2702e.appspot.com",
  messagingSenderId: "718993286953",
  appId: "1:718993286953:web:be2a062f44651d71557938",
  measurementId: "G-27T19ENZKK",
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
