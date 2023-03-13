import React, {Suspense} from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from "./CryptoContext";
import './i18n';

ReactDOM.render(
  <Suspense fallback = {"loading..."} >
  <React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
