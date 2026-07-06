import { Header } from "../components/Header.js";
import { SearchBar } from "../components/SearchBar.js";
import { Navbar } from "../components/Navbar.js";

export function SearchPage(){

    return `

        ${Header()}

        ${SearchBar()}

        <main class="container">

            <h2>Pesquisar</h2>

            <p>

                Em breve aparecerão aqui os resultados da pesquisa.

            </p>

        </main>

        ${Navbar("search")}

    `;

}
