import { TMDB } from "../services/tmdb.js";

export const App = {

    async start(){

        const data = await TMDB.trending();

        console.log(data);

    }

}
