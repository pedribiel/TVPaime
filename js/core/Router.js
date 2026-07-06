import { render } from "./Render.js";

import { Home } from "../pages/Home.js";
import { Search } from "../pages/Search.js";
import { Favorites } from "../pages/Favorites.js";
import { Profile } from "../pages/Profile.js";

export const Router = {

    routes:{

        home:Home,

        search:Search,

        favorites:Favorites,

        profile:Profile

    },

    go(route){

        render(this.routes[route]);

    }

}
