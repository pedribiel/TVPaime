import { Header } from "../components/Header.js";
import { Navbar } from "../components/Navbar.js";

export function Favorites(){

    return `

        ${Header()}

        <main class="container page">

            <h1>Favoritos</h1>

            <p>

                Você ainda não adicionou nenhum favorito.

            </p>

        </main>

        ${Navbar("favorites")}

    `;

}