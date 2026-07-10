import { Router } from "./Router.js";
import { TMDB } from "../services/tmdb.js";

export const App = {

    async start(){

        try{

            const response = await TMDB.trending();

            catalog.trending = response.results;

            console.log("Catálogo carregado!");

            console.log(response.results);

            Router.go("home");

        }

        catch(error){

            console.error(error);

        }

    }

};
