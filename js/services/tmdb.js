const TOKEN = "SEU_TOKEN_DE_LEITURA";

const BASE_URL = "https://api.themoviedb.org/3";

async function request(endpoint){

    const response = await fetch(BASE_URL + endpoint, {

        headers:{
            accept:"application/json",
            Authorization:`Bearer ${TOKEN}`
        }

    });

    if(!response.ok){

        throw new Error("Erro ao consultar o TMDb");

    }

    return response.json();

}

export const TMDB = {

    async trending(){

        return request("/trending/all/week?language=pt-BR");

    },

    async popularMovies(){

        return request("/movie/popular?language=pt-BR");

    },

    async popularSeries(){

        return request("/tv/popular?language=pt-BR");

    },

    async upcoming(){

        return request("/movie/upcoming?language=pt-BR");

    },

    async search(query){

        return request(`/search/multi?language=pt-BR&query=${encodeURIComponent(query)}`);

    }

};
