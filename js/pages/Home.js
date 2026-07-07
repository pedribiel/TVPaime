import { getHomeCatalog } from "../services/catalog.js";
import Card from "../components/Card.js";


export async function Home(){


    const catalog = await getHomeCatalog();



    return `

    <section class="home">


        <h2>
            Séries populares
        </h2>


        <div class="grid">

            ${
                catalog.series
                .map(
                    serie => Card(serie)
                )
                .join("")
            }

        </div>



        <h2>
            Filmes populares
        </h2>


        <div class="grid">

            ${
                catalog.movies
                .map(
                    movie => Card(movie)
                )
                .join("")
            }

        </div>


    </section>


    `;

}
