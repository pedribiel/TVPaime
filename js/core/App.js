import { Router } from "./Router.js";
import { TMDB } from "../services/tmdb.js";
import { setCatalog } from "../data/catalog.js";

export const App = {

    async start(){

        try{

            const response = await TMDB.trending();

            setCatalog(response.results);

            console.log("Catálogo carregado!");

            console.log(response.results);

            Router.go("home");

        }

        catch(error){

            console.error(error);

        }

    }

};
