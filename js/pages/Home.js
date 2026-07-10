import { Header } from "../components/Header.js";
import { Hero } from "../components/Hero.js";
import { Carousel } from "../components/Carousel.js";
import { Navbar } from "../components/Navbar.js";

import { catalog } from "../data/catalog.js";

export function Home(){

    return `

       Header()

       SearchBar()

       Hero()

       Carousel("▶ Continue Assistindo", watching)

       Carousel("📌 Minha Lista", watchlist)

       Carousel("✅ Completos", completed)

       Carousel("🔥 Em Alta", catalog.trending)

       Navbar()

    `;

}
