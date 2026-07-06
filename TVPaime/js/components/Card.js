export function Card(item) {

    return `
        <article class="movie-card">

            <img
                src="${item.poster}"
                alt="${item.title}"
            >

            <div class="movie-info">

                <h3>${item.title}</h3>

                <p>${item.genre}</p>

                <span>⭐ ${item.rating}</span>

            </div>

        </article>
    `;

}