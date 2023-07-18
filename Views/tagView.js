import { render, html } from "../node_modules/lit-html/lit-html.js"
import { submitHandler } from "../submitLogic.js";
import { removeProjectInfo } from "../utility.js";

function tagsView(){

removeProjectInfo();
render(tagsViewTemplate, document.querySelector('#main'));
}

export{tagsView}

const tagsViewTemplate =  html`

<div class="container mt-3">

<form @submit="${submitHandler}">
        <div class="row">
            <div class="col">
                <label>Име</label>
                <input class="form-control me-2"></input>
            </div>
            <div class="col">
                <label>Име (бг)</label>
                <input class="form-control me-2"></input>
            </div>
            <div class="col">
                <label>Период (от):</label>
                <input class="form-control me-2"></input>
            </div>
            <div class="col">
                <label>Период (до):</label>
                <input class="form-control me-2"></input>
            </div>
        </div>
        <div class="row">
            <div class="col m-2">
                <button type="submit" class="btn btn-primary">Търсене</button>
            </div>
        </div>
    </form>

 <h3 class="underlined">
    Списък с императори
 </h3>

 <table class="table">
  <thead class>
    <tr>
      <th scope="col">Име</th>
      <th scope="col">Име (Бг)</th>
      <th scope="col">Период</th>
      <th scope="col">Свързани документи</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="/Emperors/Germanicus Iulius Caesar">Germanicus Iulius Caesar</a></th>
      <td>Германик Юлий Цезар</td>
      <td>AD 14 - 19</td>
      <td>	
      Germanici Caesaris</td>
    </tr>
    <tr>
      <th scope="row"><a href="/Emperors/Imperator Caesar Augustus">Imperator Caesar Augustus</a></th>
      <td>Император Цезар Август</td>
      <td>BC 27 - 14</td>
      <td>divi Augusti</td>
    </tr>
    <tr>
     <th scope="row"><a href="/Emperors/Lucius Septimius Severus Pertinax">Lucius Septimius Severus Pertinax</a></th>
     <td>Луций Септимий Север</td>
     <td>AD 193-211</td>
     <td>Augggustorum nnnostrorum</td>
    </tr>
  </tbody>
 </table>
 </div>
`