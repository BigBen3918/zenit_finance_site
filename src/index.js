import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/out/owl.carousel.min.css";
import "./assets/css/out/slick.css";
import "./assets/css/out/slicknav.min.css";
import "./assets/css/out/style.css";
import "./assets/css/index.scss";

import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
