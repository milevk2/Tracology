import { methodsEnum as methods } from "./api.js"
import page from "./node_modules/page/page.mjs"

async function deleteEntry(context) {

    let resource = context.path.slice(7);  // removes /delete from path
        
    if (!window.confirm('Моля потвърдете, че искате да изтриете записа')) {

        return page.redirect(resource);
    }

    await methods.DELETE(resource);

    alert('Записът беше изтрит успешно от базата данни!');

    page.redirect("/Monuments")
}

async function getMonument(resource) {

    const response = await methods.GET(resource);
    const result = await response.json();

    return result;
}

async function getMonuments(url = '') {

    const response = await methods.GET(url);
    const result = await response.json();

    return Object.values(result);

}

export { deleteEntry, getMonument, getMonuments }