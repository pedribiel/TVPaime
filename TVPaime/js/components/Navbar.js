export function Navbar(active){

    return `

<nav class="navbar">

<button
class="${active==="home"?"active":""}"
data-route="home">

<i class="fa-solid fa-house"></i>

<span>Início</span>

</button>

<button
class="${active==="search"?"active":""}"
data-route="search">

<i class="fa-solid fa-magnifying-glass"></i>

<span>Pesquisar</span>

</button>

<button
class="${active==="favorites"?"active":""}"
data-route="favorites">

<i class="fa-solid fa-heart"></i>

<span>Favoritos</span>

</button>

<button
class="${active==="profile"?"active":""}"
data-route="profile">

<i class="fa-solid fa-user"></i>

<span>Perfil</span>

</button>

</nav>

`;

}