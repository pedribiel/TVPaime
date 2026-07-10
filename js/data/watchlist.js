import { Storage } from "../services/storage.js";

export let watchlist = Storage.get("watchlist");

export function addWatchlist(item){

    if(watchlist.some(x=>x.id===item.id)) return;

    watchlist.push(item);

    Storage.set("watchlist",watchlist);

}
