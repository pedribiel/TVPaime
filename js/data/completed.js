import { Storage } from "../services/storage.js";

export let completed = Storage.get("completed");

export function addCompleted(item){

    if(completed.some(x=>x.id===item.id)) return;

    completed.push(item);

    Storage.set("completed",completed);

}
