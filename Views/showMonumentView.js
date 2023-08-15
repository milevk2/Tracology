import { render, html } from "../node_modules/lit-html/lit-html.js"
import { getMonument } from "../user_actions.js";


async function showMonumentView(context) {

    const monument = await getMonument(context.path);
    
    render(monumentsTemplate(monument), document.querySelector('#main'));
}


const monumentsTemplate = (monument) => html`<div class="container">
<div class="row mt-3  border-primaryb border-bottom">

<div class="col-lg-8 ">
  <h2 class="font-weight-normal text-6 mb-2 sfont">${monument.monumentName}</h2>
</div>

<div class="row mt-3">      
<div class="col-lg-12 mt-3">
  
      <div class="row">
          <div class="col-lg-12 ">
              

              <div class="row  bbl m-1 p-1">
                  <div class="col-lg-4  d-flex align-items-center"><strong>Вид паметник</strong></div>
                  <div class="col-lg-8">${monument.type}</div>                   
              </div>

              <div class="row  bbl m-1 p-1">
                 <div class="col-lg-4  d-flex align-items-center"><strong>Място на намиране</strong></div>
                 <div class="col-lg-8">${monument.place}</div>
               </div>

              <div class="row  bbl m-1 p-1">
                  <div class="col-lg-4  d-flex align-items-center"><strong>Описание</strong></div>
                  <div class="col-lg-8">${monument.shortInfo}</div>      
              </div>

              <div class="row  bbl m-1 p-1">
                  <div class="col-lg-4  d-flex align-items-center"><strong>Текст на надпис</strong></div>
                  <div class="col-lg-8">
                     ${monument.text}</div>
              </div>             
                
                <div class="row  bbl m-1 p-1">
                    <div class="col-lg-4  d-flex align-items-center"><strong>Войска</strong></div>
                    <div class="col-lg-8">${monument.military}</div>
                 </div>

                <div class="row  bbl m-1 p-1">
                  <div class="col-lg-4  d-flex align-items-center"><strong>Военно звание</strong></div>
                  <div class="col-lg-8">
                  ${monument.military_rank}</div>
              </div>

              <div class="row  bbl m-1 p-1">
                  <div class="col-lg-4  d-flex align-items-center"><strong>Военна част</strong></div>
                  <div class="col-lg-8"> 
                  ${monument.military_division}  </div>
              </div> 

              <div class="row  bbl m-1 p-1">
                 <div class="col-lg-4  d-flex align-items-center"><strong>Произход</strong></div>
                  <div class="col-lg-8">    
                     ${monument.origin}</div>
              </div>

              <div class="row  bbl m-1 p-1">
                  <div class="col-lg-4  d-flex align-items-center">
                      <strong>Датировка</strong>
                  </div>
                  <div class="col-lg-8">                                
                      ${monument.dating}</div>
              </div> 

              <div class="row  bbl m-1 p-1">
                  <div class="col-lg-4  d-flex align-items-center">
                      <strong>Коментар</strong>
                  </div>
                  <div class="col-lg-8">                                
                      ${monument.historical_comment}</div>
              </div> 

              

              <div class="row  bbl m-1 p-1">
                  <div class="col-lg-4  d-flex align-items-center"><strong>Библиография</strong></div>
                  <div class="col-lg-8">
                     ${monument.bibliography}</div>
              </div>   
              
              <div class="row  bbl m-1 p-1">
                  <div class="col-lg-4  d-flex align-items-center"><strong>Изображения</strong></div>
                  <div class="col-lg-8"><img src="${monument.img ? monument.img : "../Images/alt.jpg"}" class="img-thumbnail" height="150" width="150"></div>
              </div> 

              <div class="row  bbl m-1 p-1 align-items-center" >
                <div class="col centered">
                <a href="/edit/${monument.military}/${monument.firebase_id}" class="btn btn-primary m-1 mt-4 w-25">Edit</a>
                <a href="/delete/${monument.military}/${monument.firebase_id}" class="btn btn-secondary m-1 mt-4 w-25">Delete</a>
              </div>
              </div>
          </div>
  </div>
</div>
</div>
`

export { showMonumentView }