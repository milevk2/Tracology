import { render, html } from "../node_modules/lit-html/lit-html.js"
import { onSubmit } from "./crud.js";
import { getMonument } from "./user_actions.js";


async function editView(context) {

    const monument = await getMonument(context.params.id);
    render(editViewTemplate(monument), document.querySelector('#main'));
}


const editViewTemplate = (monument) => html`<div class="container mt-5 border border-secondary rounded">
<form @submit="${onSubmit}">
    <div class="row mb-3 mt-3">
        <div class="col-md-6">
            <div class="form-group">
                <label for="monumentName">Име на паметник:</label>
                <input type="text" id="monumentName" name="monumentName" value="${monument.monumentName}" class="form-control">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="type">Вид паметник:</label>
                <input type="text" id="type" name="type" value="${monument.type}" class="form-control">
            </div>
        </div>
    </div>
  
    <div class="row mb-3">
        <div class="col-md-6">
            <div class="form-group">
                <label for="shortInfo">Кратко описание:</label>
                <input type="text" id="shortInfo" name="shortInfo" value="${monument.shortInfo}" class="form-control">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="dating">Датировка:</label>
                <input type="text" id="dating" name="dating" value="${monument.dating}" class="form-control">
            </div>
        </div>
    </div>

    <div class="row mb-3">
        <div class="col-md-6">
            <div class="form-group">
                <label for="military_rank">Военно звание:</label>
                <input type="text" id="military_rank" name="military_rank" value="${monument.military_rank}" class="form-control">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="military_division">Военна част:</label>
                <input type="text" id="military_division" name="military_division" value="${monument.military_division}" class="form-control">
            </div>
        </div>
    </div>
    
    <div class="row mb-3">
        <div class="col-md-6">
            <div class="form-group">
                <label for="origin">Произход:</label>
                <input type="text" id="origin" name="origin" value="${monument.origin}" class="form-control">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="bibliography">Библиография:</label>
                <input type="text" id="bibliography" name="bibliography" value="${monument.bibliography}" class="form-control">
            </div>
        </div>
    </div>

    <div class="row mb-3">
        
        <div class="col-md-6">
            <div class="form-group">
                <label for="img">Снимка (path):</label>
                <input type="text" id="img" name="img" placeholder="e.g. ./image.img" class="form-control">
            </div>
        </div>

        <div class="col-md-6">
            <div class="form-group">
                <label for="historical_comment">Исторически коментар:</label>
                <input type="text" id="historical_comment" name="historical_comment" placeholder="Исторически коментар - изяснява се" class="form-control" disabled="">
            </div>
        </div>

    </div>

    <button type="submit" class="btn btn-primary mt-4 position-relative top-100 start-50 translate-middle">Submit</button>
</form>
</div>`

export {editView}