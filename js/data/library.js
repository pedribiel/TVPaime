import { Storage } from "../services/storage.js";

export let library = Storage.get("library");

export function saveLibrary() {
    Storage.set("library", library);
} //export

export function getItem(id) {
    return library.find(item => item.id === id);
} //export

export function setStatus(item, status) {

    const existente = getItem(item.id);

    if (existente) {

        existente.status = status;

    } else {

        library.push({
            id: item.id,
            title: item.title || item.name,
            poster_path: item.poster_path,
            media_type: item.media_type || "movie",
            status
        }); //library

    }//else

    saveLibrary();

}// export

export function getStatus(id) {

    return library.find(item => item.id === id)?.status ?? null;

} // export
