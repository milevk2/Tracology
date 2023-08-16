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

async function getMonuments(paths) {

    const resultArr = [];

    if (typeof paths == 'object') {

        for (let path in paths) {

            const response = await methods.GET(paths[path]);
            const result = await response.json();
            if (result !== null) {
                resultArr.push(...Object.values(result))
            }
        }
    }
    else if (typeof paths == 'string') {
        const response = await methods.GET(paths);
        const result = await response.json();

        return Object.values(result);

    }
    return resultArr;

}

export { deleteEntry, getMonument, getMonuments }