import { render, html } from "../node_modules/lit-html/lit-html.js"
import { getMonuments } from "../user_actions.js";
import { checkForCacheAndGetData, removeProjectInfo } from "../utility.js";
import page from "../node_modules/page/page.mjs"
import { methodsEnum as methods} from "../api.js";


async function showAllView(context) {


  removeProjectInfo();

  if (context.path == '/Monuments') { //implement with pathEnum in order to avoid fetching unrelevant data

    //await checkForCacheAndGetData();
    let monumentsArray = await checkForCacheAndGetData();//JSON.parse(sessionStorage.getItem('cache'));
    console.log(monumentsArray);
    render(showAll(monumentsArray), document.querySelector('#main'));
  }
  else if (context.path.includes('/Emperors/')) {
    
    const monumentsArray = await getRelatedMonuments(context.pathname);
    history.pushState({},'', '/');
    render(showAll(monumentsArray), document.querySelector('#main'));
  }
  else {

    try {
      const monumentsArray = await getMonuments(context.path);
      render(showAll(monumentsArray), document.querySelector('#main'));
    }
    catch (err) {

      alert('Няма налични записи!')
      window.location.href = '/index.html'
    }
  }
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


const showAll = (monuments) => html`
<div class="wrapper">
${monuments.map(monument => html`<a href="${monument.military}/${monument.firebase_id}" class="links">
<div class="card m-4 links" >
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${monument.img ? monument.img : "./Images/alt.jpg"}" class="img-fluid rounded-start border border-secondary rounded-top" height="200" width="200">
        </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${monument.monumentName}</h5>
      <p class="card-text">${monument.shortInfo}</p>
    </div>
  </div>
</div>
</div>
</a>`)}
</div>`

export { showAllView, showAll }