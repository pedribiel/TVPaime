const API_KEY = 72a2a4e60ee41fb966d82251d9e2bfc0;

const BASE_URL = 
"https://api.themoviedb.org/3";


async function api(endpoint){

    const response = await fetch(
        `${BASE_URL}${endpoint}&api_key=${API_KEY}&language=pt-BR`
    );


    return response.json();

}



export function popularSeries(){

    return api(
        "/tv/popular?"
    );

}



export function popularMovies(){

    return api(
        "/movie/popular?"
    );

}



export function search(query){

    return api(
        `/search/multi?query=${query}&`
    );

}
