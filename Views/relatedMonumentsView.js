import { methodsEnum as methods } from "../api.js";
import { render, html } from "../node_modules/lit-html/lit-html.js"
import { showAll as relatedMonuments } from "./showAll.js"
import page from "../node_modules/page/page.mjs"

async function relatedMonumentsView(context) {

    const relatedMonumentsArray = await getRelatedMonuments(context.pathname);
    render(relatedMonuments(relatedMonumentsArray), document.querySelector('#main'));

}

async function getRelatedMonuments(links) {

    try {
        let relatedMonumentsArray = [];
        const response = await methods.GET(links);
        const linksObjects = Object.values(await response.json());

        for (const linkObject of linksObjects) {

            const fetched = await methods.GET(`/${linkObject.link}`);
            relatedMonumentsArray.push(await fetched.json());
        }
        return relatedMonumentsArray;
    }
    catch (err) {

        alert('Няма свързани паметници със съответния император!');
        page.redirect('/Tags/Emperors');
        throw err;
    }
}




export { relatedMonumentsView }