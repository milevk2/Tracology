import { pathsEnum } from "../api.js";
import { render, html } from "../node_modules/lit-html/lit-html.js"
import { getMonuments } from "../user_actions.js";
import { removeProjectInfo } from "../utility.js";
import page from "../node_modules/page/page.mjs"

async function showAllView(context) {

  removeProjectInfo();

  //the below lines of code must be refactored;

  if (context.path == '/Monuments') {

    const response = [...Object.values(await getMonuments())];
    const monumentsArray = [];
    response.forEach(x => monumentsArray.push(...Object.values(x)));
    render(showAll(monumentsArray), document.querySelector('#main'));
  }
  else {

    try {
      const monumentsArray = await getMonuments(context.path);
      render(showAll(monumentsArray), document.querySelector('#main'));
    }
    catch (err) {

      alert('Няма налични записи!')
      window.location.href='/index.html'
    }

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

export { showAllView }