import { catalog } from "../data/catalog.js";
import { setStatus } from "../data/library.js";

export const UI = {

    init(){

        this.bindNavbar();
        this.bindStatusButtons();
        this.bindStatusOptions();

    }, //init

    bindNavbar(){

        document.querySelectorAll("[data-route]").forEach(button=>{

            button.addEventListener("click",()=>{

                const route = button.dataset.route;

                import("./Router.js").then(({ Router })=>{

                    Router.go(route);

                }); //import

            }); //button

        }); //document

    }, //bindNavbar

    bindStatusButtons(){

        document.querySelectorAll(".status-btn").forEach(button=>{

            button.addEventListener("click",(event)=>{

                event.stopPropagation();

                button.parentElement.classList.toggle("open");

            }); // button

        }); // document

    }, //bindStatusButtons

    bindStatusOptions(){

        document.querySelectorAll(".status-options button").forEach(button=>{

            button.addEventListener("click",()=>{

                const status = button.dataset.status;

                const menu = button.closest(".status-menu");

                const statusButton = menu.querySelector(".status-btn");

                const id = Number(statusButton.dataset.id);

                const item = [

                    ...catalog.trending,
                    ...catalog.movies,
                    ...catalog.series

                ].find(item => item.id === id);

                if(!item) return;

                if(status !== "remove"){

                    setStatus(item, status);

                } //if

                switch(status){

                    case "watchlist":
                        statusButton.textContent = "📌 Quero assistir";
                        break;
    
                    case "watching":
                        statusButton.textContent = "▶ Assistindo";
                        break;

                    case "completed":
                        statusButton.textContent = "✅ Completo";
                        break;

                    case "remove":
                        statusButton.textContent = "➕ Adicionar";
                        break;

                } //switch

                menu.classList.remove("open");

            }); //button

        }); // document

    } //bindStatusOptions

}; //export
