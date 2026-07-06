import { Header } from "../components/Header.js";
import { Navbar } from "../components/Navbar.js";

export function Profile(){

    return `

        ${Header()}

        <main class="container page">

            <h1>Perfil</h1>

            <p>

                Em breve teremos seu perfil aqui.

            </p>

        </main>

        ${Navbar("profile")}

    `;

}