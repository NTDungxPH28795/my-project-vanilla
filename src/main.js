import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const app = document.querySelector("#app");
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import NotFoundPage from "./pages/NotFound";
import {render, router } from "./utilities";
import ProductDetailPage from "./pages/ProductDetail";


router.on('/',() => render(HomePage, app));
router.on('/about',() => render(AboutPage, app));
router.on('/product', () => render(ProductsPage, app));
router.on("/product/:id", ({ data }) => render(() => ProductDetailPage(data), app));
// router.on('/product/:id', ({ data }) => console.log(params));
router.notFound(() => render(NotFoundPage, app));


router.resolve();