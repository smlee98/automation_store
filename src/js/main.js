import { getCookie, setCookie } from "./_cookie";
import preloader from "./_preloader";
import * as bootstrap from "bootstrap";
import { checkItems } from "./_input";

/* Bootstrap */
window.bootstrap = bootstrap;

/* Preloader */
preloader();

/* InputItems */
checkItems();
