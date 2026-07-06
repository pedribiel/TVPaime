import { Header } from "../components/Header.js";
import { SearchBar } from "../components/SearchBar.js";
import { Hero } from "../components/Hero.js";
import { Carousel } from "../components/Carousel.js";
import { Navbar } from "../components/Navbar.js";

import { catalog } from "../data/catalog.js";

export function Home(){

    return `

        ${Header()}

        ${SearchBar()}

        ${Hero()}

        ${Carousel("Continue Assistindo",catalog)}

        ${Carousel("Filmes Populares",catalog)}

        ${Carousel("Séries Populares",catalog)}

        ${Navbar("home")}

    `;

}
