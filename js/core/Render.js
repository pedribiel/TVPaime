import { Router } from "./Router.js";

export function render(page){

    const app = document.getElementById("app");

    app.innerHTML = page();

    document
        .querySelectorAll("[data-route]")
        .forEach(button=>{

            button.onclick=()=>{

                Router.go(

                    button.dataset.route

                );

            };

        });
    
    import { UI } from "./UI.js";

    export function render(page){

    document.getElementById("app").innerHTML = page();

    UI.init();

}
