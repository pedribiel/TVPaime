const IMAGE_BASE = "https://image.tmdb.org/t/p/w342";
import { getStatus } from "../data/library.js";

export function Card(item) {

    const titulo = item.title || item.name || "Sem título";

    const poster = item.poster_path
        ? IMAGE_BASE + item.poster_path
        : "https://placehold.co/342x513?text=Sem+Imagem";

    const nota = item.vote_average
        ? item.vote_average.toFixed(1)
        : "-";

    const ano = (item.release_date || item.first_air_date || "")
        .slice(0, 4);

    const status = getStatus(item.id);

        let statusText = "➕ Adicionar";

            switch (status) {

                case "watchlist":
                    statusText = "📌 Quero assistir";
                break;

                case "watching":
                    statusText = "▶ Assistindo";
                break;

                case "completed":
                    statusText = "✅ Completo";
                break;

            } //switch
    
    return `

        <article class="card">

            <img
                src="${poster}"
                alt="${titulo}"
                loading="lazy"
            >

            <div class="card-info">

                <h3>${titulo}</h3>

                <span>⭐ ${nota}</span>

                <span>${ano}</span>

                <div class="status-menu">

                <button
                    class="status-btn"
                    data-id="${item.id}"
                >
                    ${statusText}
                </button>

            </div>

        </div>

            </div>

        </article>

    `;

}
