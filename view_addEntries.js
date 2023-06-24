import { render, html } from "../node_modules/lit-html/lit-html.js"
import { onSubmit } from "./crud.js"

function addEntriesView(){

    render(addEntriesTemplate(onSubmit), document.querySelector('#main'));
}

export {addEntriesView}

const addEntriesTemplate = (onFormSubmit) => html`
            <div class="container mt-5 border border-secondary rounded">
                <form @submit=${onFormSubmit}>
                    <div class="row mb-3 mt-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="monumentName">Име на паметник:</label>
                                <input type="text" id="monumentName" name="monumentName" placeholder="Име на паметник" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="type">Вид паметник:</label>
                                <select type="text" id="type" name="type" class="form-select">
                                <option>Funerary stele</option>
                                <option>Military diploma</option>
                                </select>
                                </td>
                            </div>
                        </div>
                    </div>
                  
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="shortInfo">Кратко описание:</label>
                                <input type="text" id="shortInfo" name="shortInfo" placeholder="Кратко описание" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="dating">Датировка:</label>
                                <input type="text" id="dating" name="dating" placeholder="Датировка" class="form-control">
                            </div>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="military_rank">Военно звание:</label>
                                <input type="text" id="military_rank" name="military_rank" placeholder="Редник" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="military_division">Военна част:</label>
                                <input type="text" id="military_division" name="military_division" placeholder="Военна част" class="form-control">
                            </div>
                        </div>
                    </div>
                    
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="origin">Произход:</label>
                                <input type="text" id="origin" name="origin" placeholder="Произход" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="bibliography">Библиография:</label>
                                <input type="text" id="bibliography" name="bibliography" placeholder="Библиография" class="form-control">
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
                                <input type="text" id="historical_comment" name="historical_comment" placeholder="Исторически коментар - изяснява се" class="form-control" disabled>
                            </div>
                        </div>

                    </div>

                    <div class="row mb-3">
                                
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="text">Текст:</label>
                                <input type="text" id="text" name="text" placeholder="Текст" class="form-control">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="map">Google Map:</label>
                                <input type="text" id="map" name="map" placeholder="Google Iframe link" class="form-control">
                            </div>
                        </div>

                    </div>

                    <button type="submit" class="btn btn-primary mt-4 position-relative top-100 start-50 translate-middle">Submit</button>
                </form>
            </div>
       

    </body>`