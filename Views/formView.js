import { render, html } from "../node_modules/lit-html/lit-html.js"
import { submitHandler } from "../crud.js";
import { getMonument } from "../user_actions.js";
import { removeProjectInfo } from "../utility.js";

export async function loadFormView(context){

    removeProjectInfo();

    let method = null;
    let monument = null; 

    if (context.params.id == undefined){

        method = 'POST';
        render(formTemplate(submitHandler, monument, method), document.querySelector('#main'));
    }
    else {

        const firebase_id = context.params.id;
        monument = await getMonument(firebase_id);
        method = 'PATCH';
        render(formTemplate(submitHandler, monument, method, firebase_id), document.querySelector('#main'));
    }
}

const formTemplate = (submitHandler, monument=null, method, firebase_id) => html`
            <div class="container mt-5 border border-secondary rounded ">
                <form @submit="${(e)=> submitHandler(e, method, firebase_id)}">
                    <div class="row mb-3 mt-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="monumentName">Име на паметник:</label>
                                <input type="text" id="monumentName" name="monumentName" placeholder="Име на паметник" value="${monument == null? "" : monument.monumentName}" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="type">Вид паметник:</label>
                                <select type="text" id="type" name="type" class="form-select" value="${monument == null? "" : monument.type}">
                                ${monument == null? '' : html`<option selected>${monument.type}</option>`}
                                <option>Funerary stele</option>
                                <option>Military diploma</option>
                                </select>
                                
                            </div>
                        </div>
                    </div>
                  
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="shortInfo">Кратко описание:</label>
                                <input type="text" id="shortInfo" name="shortInfo" placeholder="Кратко описание" class="form-control" value="${monument == null? "" : monument.shortInfo}">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="dating">Датировка:</label>
                                <input type="text" id="dating" name="dating" placeholder="Датировка" class="form-control" value="${monument == null? "" : monument.dating}">
                            </div>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="military_rank">Военно звание:</label>
                                <input type="text" id="military_rank" name="military_rank" placeholder="Редник" class="form-control" value="${monument == null? "" : monument.military_rank}">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="military_division">Военна част:</label>
                                <input type="text" id="military_division" name="military_division" placeholder="Военна част" class="form-control" value="${monument == null? "" : monument.military_division}">
                            </div>
                        </div>
                    </div>
                    
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="origin">Произход:</label>
                                <input type="text" id="origin" name="origin" placeholder="Произход" class="form-control" value="${monument == null? "" : monument.origin}">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="bibliography">Библиография:</label>
                                <input type="text" id="bibliography" name="bibliography" placeholder="Библиография" class="form-control" value="${monument == null? "" : monument.bibliography}">
                            </div>
                        </div>
                    </div>

                    <div class="row mb-3">
                        
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="img">Снимка (path):</label>
                                <input type="text" id="img" name="img" placeholder="e.g. ./Images/ImageName.jpg" class="form-control" value="${monument == null? "" : monument.img}">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="historical_comment">Исторически коментар:</label>
                                <input type="text" id="historical_comment" name="historical_comment" placeholder="Исторически коментар - изяснява се" class="form-control" disabled>
                            </div>
                        </div>

                    </div>

                    <div class="row mb-3">
                                
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="text">Текст:</label>
                                <input type="text" id="text" name="text" placeholder="Текст" class="form-control" value="${monument == null? "" : monument.text}">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="map">Google Map:</label>
                                <input type="text" id="map" name="map" placeholder="Google Iframe link" class="form-control" value="${monument == null? "" : monument.map}">
                            </div>
                        </div>

                    </div>
                     
                    <div class="row mb-3 mt-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="military">Войска:</label>
                                <select type="text" id="military" name="military" class="form-select" value="${monument == null? "" : monument.military}">
                                    
                                    ${monument == null? '' : html`<option selected>${monument.military}</option>`}
                                    <option>Not specified</option>
                                    <option>Legiones</option>
                                    <option>Auxilia</option>
                                    <option>Cohortes Praetoria</option>
                                    <option>Classis</option>
                                    
                                </select>
                            </div>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary mt-4 position-relative top-100 start-50 translate-middle">Submit</button>
                </form>
            </div>
       

    </body>`



const aa = (submitHandler, monument=null, method, firebase_id) => html`<div class="container mt-5 border border-secondary rounded">
<form @submit="${(e)=> submitHandler(e, method, firebase_id)}">
    <div class="row mb-3 mt-3">
        <div class="col-md-6">
            <div class="form-group">
                <label for="monumentName">Име на паметник:</label>
                <input type="text" id="monumentName" name="monumentName" value="${monument == null? "" : monument.monumentName}" class="form-control">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="type">Вид паметник:</label>
                <input type="text" id="type" name="type" value="${monument == null? "" : monument.type}" class="form-control">
            </div>
        </div>
    </div>
  
    <div class="row mb-3">
        <div class="col-md-6">
            <div class="form-group">
                <label for="shortInfo">Кратко описание:</label>
                <input type="text" id="shortInfo" name="shortInfo" value="${monument == null? "" : monument.shortInfo}" class="form-control">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="dating">Датировка:</label>
                <input type="text" id="dating" name="dating" value="${monument == null? "" : monument.dating}" class="form-control">
            </div>
        </div>
    </div>

    <div class="row mb-3">
        <div class="col-md-6">
            <div class="form-group">
                <label for="military_rank">Военно звание:</label>
                <input type="text" id="military_rank" name="military_rank" value="${monument == null? "" : monument.military_rank}" class="form-control">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="military_division">Военна част:</label>
                <input type="text" id="military_division" name="military_division" value="${monument == null? "" : monument.military_division}" class="form-control">
            </div>
        </div>
    </div>
    
    <div class="row mb-3">
        <div class="col-md-6">
            <div class="form-group">
                <label for="origin">Произход:</label>
                <input type="text" id="origin" name="origin" value="${monument == null? "" : monument.origin}" class="form-control">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="bibliography">Библиография:</label>
                <input type="text" id="bibliography" name="bibliography" value="${monument == null? "" : monument.bibliography}" class="form-control">
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
