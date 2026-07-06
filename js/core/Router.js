import { render } from "./Render.js";

import { Home } from "../pages/Home.js";
import { SearchPage } from "../pages/Search.js";
import { Favorites } from "../pages/Favorites.js";
import { Profile } from "../pages/Profile.js";

export const Router = {

    routes:{

        home:Home,

        searchpage:SearchPage,

        favorites:Favorites,

        profile:Profile

    },

    go(route){

        render(this.routes[route]);

    }

}
