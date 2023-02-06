import preloader from "./_preloader";
import * as bootstrap from "bootstrap";
import { checkComment, checkItems } from "./_input";
import { searchHighlight } from "./_search";
import { toastController } from "./_customBs";
import { getCookie, setCookie } from "./_cookie";
import { themeController } from "./_theme";
import carouselController from "./_carousel";

/* Bootstrap */
window.bootstrap = bootstrap;
carouselController();
toastController();

/* Cookie */
getCookie();
setCookie();

/* Theme */
themeController();

/* searchHighlight */
searchHighlight();

/* Preloader */
preloader();

/* InputItems */
checkItems();
checkComment();

const windowFuncs = {
    toastController,
    searchHighlight,
    checkItems,
    checkComment,
};

Object.assign(window, windowFuncs);
