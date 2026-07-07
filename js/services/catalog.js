import {
    popularMovies,
    popularSeries,
    search
} from "./tmdb.js";



function normalize(item, type){


    return {

        id:item.id,

        title:
            item.title || item.name,

        poster:
            item.poster_path
            ?
            `https://image.tmdb.org/t/p/w500${item.poster_path}`
            :
            null,


        rating:
            item.vote_average || 0,


        type:type

    };


}



export async function getHomeCatalog(){


    const movies =
        await popularMovies();


    const series =
        await popularSeries();



    return {


        movies:
        movies.results.map(
            movie =>
            normalize(movie,"movie")
        ),


        series:
        series.results.map(
            serie =>
            normalize(serie,"series")
        )


    };


}



export async function searchCatalog(query){


    const result =
        await search(query);



    return result.results.map(
        item =>
        normalize(
            item,
            item.media_type
        )
    );


}
