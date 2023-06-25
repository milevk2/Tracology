import {  pathsEnum, methodsEnum as methods} from "./api.js"
import page from "./node_modules/page/page.mjs"

async function deleteEntry(context){

    const firebase_id = context.params.id;

    await methods.DELETE(`${pathsEnum.monuments}/${firebase_id}`);

    alert('Записът беше изтрит успешно от базата данни!');

    page.redirect("/Monuments")
}

async function getMonument(firebase_id) {

    const response = await methods.GET(`${pathsEnum.monuments}/${firebase_id}`);
    const result = await response.json();

    return result ;
}

async function getMonuments() {

    const response = await methods.GET(pathsEnum.monuments);
    const result = await response.json();

    return Object.values(result);
}

export {deleteEntry, getMonument, getMonuments}