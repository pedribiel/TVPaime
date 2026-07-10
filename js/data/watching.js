import { Storage } from "../services/storage.js";

export let watching = Storage.get("watching");

export function addWatching(item){

    if(watching.some(x=>x.id===item.id)) return;

    watching.push(item);

    Storage.set("watching",watching);

}
