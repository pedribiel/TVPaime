import { App } from "./core/App.js";

App.start();

import { setStatus, library } from "./data/library.js";
import { catalog } from "./data/catalog.js";

setTimeout(() => {

    if (catalog.trending.length > 0) {

        setStatus(catalog.trending[0], "watching");

        console.log(library);

    }

}, 2000);
