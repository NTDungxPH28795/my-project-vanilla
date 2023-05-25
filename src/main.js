import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const app = document.querySelector("#app");
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import render from "./utilities";

render (AboutPage, app);