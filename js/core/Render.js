import { UI } from "./UI.js";

export function render(page) {

    const app = document.getElementById("app");

    app.innerHTML = page();

    UI.init();

}
