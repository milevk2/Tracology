import { render, html } from "../node_modules/lit-html/lit-html.js"
import { removeProjectInfo } from "../utility.js";

function showTagView() {

    removeProjectInfo();
    render(tagTemplate(), document.querySelector('#main'));
}

const tagTemplate = () => html`<div class=" container mt-5">

    <div class="row mb-3 mt-3">
        <div class="col-md-6">
            
            <a href="/Auxilia"><span class="badge rounded-pill text-bg-secondary">Auxilia</span></a>
            <a href="/Legiones"><span class="badge rounded-pill text-bg-secondary">Legiones</span></a>
            <a href="/Cohortes Praetoria"><span class="badge rounded-pill text-bg-secondary">Cohortes Praetoria</span></a>
            <a href="/Classis"><span class="badge rounded-pill text-bg-secondary">Classis</span></a>
            <a href="/Надгробни паметници"> <span class="badge rounded-pill text-bg-secondary">Надгробен паметник</span></a>
            <a href="/Посветителни надписи"> <span class="badge rounded-pill text-bg-secondary">Посветителен надпис</span></a>
            
        </div>
    </div>

    <div class="row mb-3 mt-3">
        <div class="col-md-6">
        <a href="/Военни дипломи"><span class="badge rounded-pill text-bg-secondary">Военна диплома</span></a>
        </div>
    </div>

</div>
`

export { showTagView }
