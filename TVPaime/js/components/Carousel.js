import { Card } from "./Card.js";

export function Carousel(title, items) {

    return `

        <section class="carousel-section">

            <div class="container">

                <div class="section-header">

                    <h2>${title}</h2>

                    <button class="see-all">
                        Ver tudo
                    </button>

                </div>

                <div class="carousel">

                    ${items.map(item => Card(item)).join("")}

                </div>

            </div>

        </section>

    `;

}