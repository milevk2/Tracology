import { render, html } from "../node_modules/lit-html/lit-html.js"
import { getMonuments } from "./user_actions.js";


async function showAllView() {

    if(document.getElementById('projectInfo') !== null ) document.getElementById('projectInfo').remove();
    const monumentsArray = await getMonuments();
    render(showAll(monumentsArray), document.querySelector('#main'));
}

const showAll = (monuments) => html`
<div class="wrapper">
${monuments.map(monument => html`<a href="monuments/${monument.firebase_id}" class="links">
<div class="card mb-3 links" >
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${monument.img ? monument.img : "./alt.jpg"}" class="img-fluid rounded-start border border-secondary rounded-top" height="200" width="200">
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