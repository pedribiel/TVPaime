import { catalog } from "../data/catalog.js";
import { setStatus } from "../data/library.js";

export const UI = {

    init(){

        this.bindNavbar();
        this.bindStatusButtons();

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

            button.addEventListener("click",()=>{

                const id = Number(button.dataset.id);

                const item = [

                    ...catalog.trending,
                    ...catalog.movies,
                    ...catalog.series

                ].find(item=>item.id===id);

                if(!item) return;

                setStatus(item,"watchlist");

                button.textContent = "📌 Na Lista";

            }); //button

        }); //documents

    } //bindStatusButtons

}; //export
