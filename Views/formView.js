import { render, html } from "../node_modules/lit-html/lit-html.js"
import { submitHandler } from "../submitLogic.js";
import { getMonument } from "../user_actions.js";
import { removeProjectInfo } from "../utility.js";

async function loadFormView(context) {

    removeProjectInfo();

    let method = null;
    let monument = null;

    if (context.params.id == undefined) {

        method = 'POST';
        render(formTemplate(submitHandler, monument, method), document.querySelector('#main'));
    }
    else {
        const resource = context.path.slice(5);
        monument = await getMonument(resource);
        const firebase_id = context.params.id ;
        method = 'PATCH';
        render(formTemplate(submitHandler, monument, method, firebase_id), document.querySelector('#main'));
    }
}

export { loadFormView }

const formTemplate = (submitHandler, monument = null, method, firebase_id) => html`
            <div class="container mt-5 border border-secondary rounded ">
                <form @submit="${(e) => submitHandler(e, method, firebase_id)}">
                    <div class="row mb-3 mt-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="monumentName">Име на паметник:</label>
                                <input type="text" id="monumentName" name="monumentName" placeholder="Име на паметник" value="${monument == null ? "" : monument.monumentName}" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="type">Вид паметник:</label>
                                <select type="text" id="type" name="type" class="form-select" value="${monument == null ? "" : monument.type}">
                                ${monument == null ? '' : html`<option selected>${monument.type}</option>`}
                                <option>Надгробен паметник</option>
                                <option>Военна диплома</option>
                                <option>Посветителен надпис</option>
                                </select>
                                
                            </div>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="map">Място на намиране:</label>
                                <input type="text" id="place" name="place" placeholder="Място на намиране" class="form-control" value="${monument == null ? "" : monument.place}">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="military">Войска:</label>

                                ${monument == null ? html`<select type="text" id="military" name="military" class="form-select">
                                
                                <option>Not Specified</option>
                                <option>Legiones</option>
                                <option>Auxilia</option>
                                <option>Cohortes Praetoria</option>
                                <option>Classis</option>                                
                                </select>`
                                 :
                                 html`<select type="text" id="military" name="military" class="form-select" disabled>

                                 <option value="${monument.military}" selected >${monument.military}</option>
                                    
                                </select>`}
                            </div>
                        </div>

                    </div>
                  
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="shortInfo">Кратко описание:</label>
                                <input type="text" id="shortInfo" name="shortInfo" placeholder="Кратко описание" class="form-control" value="${monument == null ? "" : monument.shortInfo}">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="dating">Датировка:</label>
                                <input type="text" id="dating" name="dating" placeholder="Датировка" class="form-control" value="${monument == null ? "" : monument.dating}">
                            </div>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="military_rank">Военно звание:</label>
                                <input type="text" id="military_rank" name="military_rank" placeholder="Редник" class="form-control" value="${monument == null ? "" : monument.military_rank}">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="military_division">Военна част:</label>
                                <input type="text" id="military_division" name="military_division" placeholder="Военна част" class="form-control" value="${monument == null ? "" : monument.military_division}">
                            </div>
                        </div>
                    </div>
                    
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="origin">Произход:</label>
                                <input type="text" id="origin" name="origin" placeholder="Произход" class="form-control" value="${monument == null ? "" : monument.origin}">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="bibliography">Библиография:</label>
                                <input type="text" id="bibliography" name="bibliography" placeholder="Библиография" class="form-control" value="${monument == null ? "" : monument.bibliography}">
                            </div>
                        </div>
                    </div>

                    <div class="row mb-3">
                        
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="img">Снимка (path):</label>
                                <input type="text" id="img" name="img" placeholder="e.g. ./Images/ImageName.jpg" class="form-control" value="${monument == null ? "" : monument.img}">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                             <label for="historical_comment">Коментар:</label>
                             <input type="text" id="historical_comment" name="historical_comment" placeholder="Коментар" class="form-control">
                            </div>
                        </div>

                    </div>

                    <div class="row mb-3">
                                
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="text">Текст:</label>
                                <input type="text" id="text" name="text" placeholder="Текст" class="form-control" value="${monument == null ? "" : monument.text}">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="map">Google Map:</label>
                                <input type="text" id="map" name="map" placeholder="Google Iframe link" class="form-control" value="${monument == null ? "" : monument.map}">
                            </div>
                        </div>
                    </div>

                    <div class="row mb-3">
                                
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="emperor_mentioned">Име на споменат император:</label>
                                <input type="text" id="emperor_mentioned" name="emperor_mentioned" placeholder="Име на император" class="form-control" value="${monument == null ? "" : monument.emperor_mentioned}">
                            </div>
                        </div>
                    </div>
                  
                    <button type="submit" class="btn btn-primary mt-4 position-relative top-100 start-50 translate-middle">Submit</button>
                </form>
            </div>
       

    </body>`
