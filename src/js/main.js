import { getCookie, setCookie } from "./cookie";
import preloader from "./preloader";
import * as bootstrap from "bootstrap";
import { checkItems } from "./input";

/* Bootstrap */
window.bootstrap = bootstrap;

/* Preloader */
preloader();

/* Cookie */
getCookie();
setCookie();

/* InputItems */
checkItems();
