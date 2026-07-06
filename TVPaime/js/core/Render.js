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

}