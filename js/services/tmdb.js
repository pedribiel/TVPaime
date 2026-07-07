const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmEyYTRlNjBlZTQxZmI5NjZkODIyNTFkOWUyYmZjMCIsIm5iZiI6MTc4MzM4NDk3My40ODUsInN1YiI6IjZhNGM0YjhkMDVlNTZjMDUzNTNjMTE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AZIbDVOA0TwtE84ewCbTXRfWT1oRtBWC0XYphz-i_KY";

const BASE_URL = "https://api.themoviedb.org/3";

const headers = {

    accept: "application/json",

    Authorization: `Bearer ${TOKEN}`

};

async function request(endpoint){

    const response = await fetch(

        BASE_URL + endpoint,

        { headers }

    );

    return await response.json();

}

export const TMDB = {

    trending(){

        return request("/trending/all/week?language=pt-BR");

    },

    popularMovies(){

        return request("/movie/popular?language=pt-BR");

    },

    popularSeries(){

        return request("/tv/popular?language=pt-BR");

    },

    upcoming(){

        return request("/movie/upcoming?language=pt-BR");

    },

    search(query){

        return request(

            `/search/multi?query=${encodeURIComponent(query)}&language=pt-BR`

        );

    }

};
