import { Card } from "./Card.js";

export function Carousel(title, items = []) {

    return `

        <section class="carousel">

            <h2>${title}</h2>

            <div class="carousel-track">

                ${items.map(Card).join("")}

            </div>

        </section>

    `;

}
