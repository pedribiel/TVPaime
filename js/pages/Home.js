import { Header } from "../components/Header.js";
import { Search } from "../components/Search.js";
import { Hero } from "../components/Hero.js";
import { Carousel } from "../components/Carousel.js";
import { Navbar } from "../components/Navbar.js";

import { movies } from "../data/movies.js";

export function Home(){

    return `

        ${Header()}

        ${Search()}

        ${Hero()}

        ${Carousel("Continue Assistindo",movies)}

        ${Carousel("Filmes Populares",movies)}

        ${Carousel("Séries Populares",movies)}

        ${Navbar("home")}

    `;

}