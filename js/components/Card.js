const IMAGE_BASE = "https://image.tmdb.org/t/p/w342";

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

            </div>

        </article>

    `;

}
