export const UI = {

    init(){

        this.bindNavbar();

    },

    bindNavbar(){

        document.querySelectorAll("[data-route]").forEach(button=>{

            button.addEventListener("click",()=>{

                const route = button.dataset.route;

                import("./Router.js").then(({ Router })=>{

                    Router.go(route);

                });

            });

        });

    }

};
