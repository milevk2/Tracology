import { render, html } from "../node_modules/lit-html/lit-html.js"
import { submitHandler } from "../submitLogic.js";
import { removeProjectInfo } from "../utility.js";

function tagsView() {

    removeProjectInfo();
    render(emperorsView, document.querySelector('#main'));
    document.getElementById('search').addEventListener('change', search);
}

function search(e) {

    const searchQuery = e.target.value.toLowerCase();
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const searchResults = document.getElementById('searchResults');

    if (e.target.id == 'emperor_name') {

        searchByName(0, searchQuery, rows);
    }

    else if (e.target.id == 'name_bg') {
        searchByName(1, searchQuery, rows);
    }

    else if (e.target.id == 'period_from' || e.target.id == 'period_to') {

        searchByPeriod(2, searchQuery, e.target.id, rows);
    }
    searchResults.textContent = `Резултати: ${rows.filter(row => !row.classList.contains('hidden')).length}`;
}

function searchByName(columnIndex, searchQuery, rows) {

    for (let row of rows) {

        const cellValue = row.children[columnIndex].textContent.toLocaleLowerCase();

        if (!cellValue.includes(searchQuery)) {

            row.classList.add('hidden');
        }
    }
}

function searchByPeriod(columnIndex, searchQuery, id = null, rows) {

    if (Number.isInteger(parseInt(searchQuery))) {

        if (id == 'period_from') {
            for (let row of rows) {

                const cellValue = Number(row.children[columnIndex].getAttribute('from'))
                if (cellValue < Number(searchQuery)) {

                    row.classList.add('hidden');
                }
            }
        }
        else if (id == 'period_to') {

            for (let row of rows) {

                const cellValue = Number(row.children[columnIndex].getAttribute('to'))
                if (cellValue > Number(searchQuery)) {

                    row.classList.add('hidden');
                }
            }
        }
    }
}

function clearSearch(e) {
    const searchResults = document.getElementById('searchResults');
    const rows = document.querySelectorAll('tbody tr');
    const searchBars = document.querySelectorAll('#search input');
    searchBars.forEach(field => field.value = '');
    rows.forEach(row => row.classList.remove('hidden'));
    searchResults.textContent = '';
}

export { tagsView }

const emperorsView = html`

<div class="container mt-3">

      <div id="search">
        <div class="row">
            <div class="col">
                <label for="emperor_name">Име</label>
                <input id="emperor_name" name="emperor_name" class="form-control me-2"></input>
            </div>
            <div class="col">
                <label for="name_bg">Име (бг)</label>
                <input id="name_bg" name="name_bg" class="form-control me-2"></input>
            </div>
            <div class="col">
                <label for="period_from">Период (от):</label>
                <input id="period_from" name="period_from" class="form-control me-2"></input>
            </div>
            <div class="col">
                <label for="period_to">Период (до):</label>
                <input id="period_to" name="period_to" class="form-control me-2"></input>
            </div>
        </div>
        <div class="row">
            <div class="col m-3">
                <button type="submit" class="btn btn-primary">Търсене</button>
                <button type="submit" class="btn btn-secondary" @click='${clearSearch}'>Изчисти търсене</button>
                <span id="searchResults" class="ml-2"></span>
            </div>
        </div>
      </div>
    

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
                        <td>Imperator Caesar Augustus</td>
                        <td>Император Цезар Август / Октавиан Август&nbsp;</td>
                        <td from="-27" to="14">27 г. пр. Хр. - 14 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Tiberius Caesar Augustus&nbsp;</td>
                        <td>Тиберий Цезар Август / Тиберий</td>
                        <td from="14" to="37">14 г. сл. Хр. - 37 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Gaius Ceasar Augustus Germanicus&nbsp;</td>
                        <td>Гай Цезар Август Германик / Калигула&nbsp;</td>
                        <td from="37" to="41">37 г. сл. Хр. - 41 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Tiberius Claudius Ceasar Agustus Germanicus</td>
                        <td>Тиберий Клавдий Цезар Август Германик / Клавдий&nbsp;</td>
                        <td from="41" to="54">41 г. сл. Хр. - 54 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Nero Claudius Caesar Augustus Germanicus&nbsp;</td>
                        <td>Нерон Клавдий Цезар Август Германик / Нерон&nbsp;</td>
                        <td from="54" to="68">54 г. сл. Хр. - 68 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Servius Galba Caesar Augustus&nbsp;</td>
                        <td>Сервий Галба Цезар Август / Галба&nbsp;</td>
                        <td from="68" to="69">8 юни 68 г. сл. Хр. - 15 януари 69 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Marcus Otho Caesar Augustus&nbsp;</td>
                        <td>Марк Отон Цезар Август / Отон&nbsp;</td>
                        <td from="69" to="69">15 януари 69 г. сл. Хр. - 16 април 69 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Aulus Vitellius Germanicus&nbsp;</td>
                        <td>Авъл Вителий Германик / Вителий</td>
                        <td from="69" to="69">19 април 69 г. сл. Хр. - 20 декември 69 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Caesar Vespasianus Augustus&nbsp;</td>
                        <td>Цезар Веспасиан Август / Веспасиан&nbsp;</td>
                        <td from="69" to="79">1 юли 69 г. сл. Хр. - 23 юни 79 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Titus Caesar Vespasianus Augustus&nbsp;</td>
                        <td>Тит Цезар Веспасиан Август / Тит&nbsp;</td>
                        <td from="79" to="81">79 г. сл. Хр. - 81 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Caesar Domitianus Augustus</td>
                        <td>Цезар Домициан Август / Домициан&nbsp;</td>
                        <td from="81" to="96">81 г. сл. Хр.- 96 г. сл.
                            Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Nerva Caesar Augustus&nbsp;</td>
                        <td>Нерва Цезар Август / Нерва</td>
                        <td from="96" to="98">96 г. сл. Хр. - 98 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Caesar Divi Nervae Filius Nerva Traianus Optimus Augustus</td>
                        <td>Цезар, син на божествения Нерва, Нерва Траян, най-добър Август / Траян&nbsp;</td>
                        <td from="98" to="117">98 г. сл. Хр. - 117 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Caesar Traianus Hadrianus Augustus<span style="mso-spacerun:yes;">&nbsp;&nbsp;</span></td>
                        <td>Цезар Траян Хадриан Август / Хадриан&nbsp;</td>
                        <td from="117" to="138">117 г. сл. Хр. - 138 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Caesar Titus Aelius Hadrianus Antoninus Augustus Pius&nbsp;</td>
                        <td>Цезар Тит Елий Хадриан Антонин Август Пий / Антонин Пий&nbsp;</td>
                        <td from="138" to="161">138 г. сл. Хр. - 161 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Aurelius Antoninus Augustus&nbsp;</td>
                        <td>Цезар Марк Аврелий Антонин Август / Марк Аврелий&nbsp;</td>
                        <td from="161" to="180">161 г. сл. Хр. - 180 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Aurelius Commodus Antoninus Augustus</td>
                        <td>Цезар Марк Аврелий Комод Антонин Август / Комод&nbsp;</td>
                        <td from="180" to="192">180 г. сл. Хр. - 192 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Caesar Publius Helvius Pertinax Augustus</td>
                        <td>Цезар Публий Хелвий Перинакс Август / Пертинакс</td>
                        <td from="193" to="193">януари 193 г. сл. Хр. - март<span style="mso-spacerun:yes;">&nbsp;
                            </span>193 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Didius Severus Julianus Augustus</td>
                        <td>Цезар Марк Дидий Юлиан Август / Дидий Юлиан</td>
                        <td from="193" to="193">март193 г. сл. Хр. - юни
                            193 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Gaius Pescennius Niger Iustus Augustus</td>
                        <td>Цезар Гай Песцений Нигер Юст Август / Песцений Нигер&nbsp;</td>
                        <td from="193" to="193">април 193 г. сл. Хр. - май 193 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Decimus Clodius Septimius Albinus Augustus</td>
                        <td>Цезар Децим Клодий Септимий Албин Август / Клодий Албин</td>
                        <td from="193" to="196">193 г. сл. Хр. / 196 г. сл. Хр. - 197 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Lucius Septimius Severus Pertinax Augustus</td>
                        <td>Цезар Луций Септимий Север Пертинакс Август / Септимий Север&nbsp;</td>
                        <td from="193" to="211">193 г. сл. Хр. - 211 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Aurelius Antoninus Augustus&nbsp;</td>
                        <td>Цезар Марк Аврелий Антонин Август / Каракала&nbsp;</td>
                        <td from="198" to="217">198 г. сл. Хр. - 217 г. сл. Хр</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Opellius Severus Macrinus Augustus</td>
                        <td>Цезар Марк Опелий Север Макрин Август / Макрин&nbsp;</td>
                        <td from="217" to="218">217 г. сл. Хр. - 218 г. сл. Хр</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Aurelius Antoninus Augustus</td>
                        <td>Цезар Марк Аврелий Антонин Август / Елагабал&nbsp;</td>
                        <td from="218" to="222">218 г. сл. Хр.- 222 г. сл.
                            Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Aurelius Severus Alexander Augustus</td>
                        <td>Цезар Марк Аврелий Север Александър Август / Север Александър&nbsp;</td>
                        <td from="222" to="235">222 г. сл. Хр.- 235 г. сл.
                            Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Gaius Julius Verus Maximinus Augustus</td>
                        <td>Цезар Гай Юлий Вер Максимин Август / Максимин Тракиец&nbsp;</td>
                        <td from="235" to="238">март 235 г. сл. Хр.- юни
                            238 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Antonius Gordianus Sempronianus Augustus</td>
                        <td>Цезар Марк Антоний Гордиан Семпрониан Август / Гордиан I</td>
                        <td from="238" to="238">март 238 г. сл. Хр.- април
                            238 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Antonius Gordianus Sempronianus Augustus</td>
                        <td>Цезар Марк Антоний Гордиан Семпрониан Август / Гордиан II</td>
                        <td from="238" to="238">март 238 г. сл. Хр.- април
                            238 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Clodius Pupienus Maximus Augustus</td>
                        <td>Цезар Марк Клодий Пупиен Максим Август / Пупиен</td>
                        <td from="238" to="238">април/май 238 г. сл. Хр.-
                            юли/август 238 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Decimus Caelius Calvinus Balbinus Pius Augustus</td>
                        <td>Цезар Децим Целий Калвин Балбин Пий Август / Балбин</td>
                        <td from="238" to="238">април/май 238 г. сл. Хр.-
                            юли/август 238 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Antonius Gordianus Augustus</td>
                        <td>Цезар Марк Антоний Гордиан Август / Гордиан III</td>
                        <td from="238" to="244">август 238 г. сл. Хр.-
                            февруари 244 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Julius Philippus Augustus</td>
                        <td>Цезар Марк Юлий Филип Август / Филип Араб</td>
                        <td from="244" to="249">август 244 г. сл. Хр.<span style="mso-spacerun:yes;">&nbsp;
                            </span>-249 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Gaius Messius Quintus Traianus Decius Augustus</td>
                        <td>Цезар Гай Месий Квинт Траян Деций Август / Деций Траян&nbsp;</td>
                        <td from="249" to="251">септември 249 г. сл. Хр.<span style="mso-spacerun:yes;">&nbsp;
                            </span>-юни 251 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Gaius Vibius Trebonianus Gallus Augustus</td>
                        <td>Цезар Гай Вибий Требониан Гал Август / Требониан Гал&nbsp;</td>
                        <td from="251" to="253">юни 251 г. сл. Хр. - август 253 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Aemilius Aemilianus Augustus</td>
                        <td>Цезар Марк Емилий Емилиан Август / Емилиан&nbsp;</td>
                        <td from="253" to="253">253 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Publius Licinius Valerianus Augustus</td>
                        <td>Цезар Публий Лициний Валериан Август / Валериан&nbsp;</td>
                        <td from="253" to="260">253 г. сл. Хр.- 260 г. сл.
                            Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Caesar Publius Licinius Egnatius Gallienus Augustus</td>
                        <td>Цезар Публий Лициний Егнаций Галиен Август / Галиен&nbsp;</td>
                        <td from="260" to="268">260 г. сл. Хр.- 268 г. сл.
                            Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Aurelius Claudius Augustus</td>
                        <td>Цезар Марк Аврелий Клавдий Август / Клавдий II&nbsp;</td>
                        <td from="268" to="270">268 г. сл. Хр.- 270 г. сл.
                            Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Aurelius Claudius Quintillus Augustus&nbsp;</td>
                        <td>Цезар Марк Аврелий Клавдий Квинтил Август / Квинтил&nbsp;</td>
                        <td from="270" to="270">270 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Caesar Lucius Domitius Aurelianus Augustus</td>
                        <td>Цезар Луций Домиций Аврелиан Август /Аврелиан</td>
                        <td from="270" to="275">270 г. сл. Хр. - 275 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Claudius Tacitus Augustus</td>
                        <td>Цезар Марк Клавдий Тацит Август / Тацит</td>
                        <td from="275" to="276">декември 275 г. сл. Хр. - юни 276 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Annius Florianus Augustus&nbsp;</td>
                        <td>Цезар Марк Аний Флориан Август / Флориан&nbsp;</td>
                        <td from="276" to="276">юли-септември 276 г. сл. Хр.&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Aurelius Probus Augustus</td>
                        <td>Цезар Марк Аврелий Проб Август / Проб&nbsp;</td>
                        <td from="276" to="282">юни 276 г. сл. Хр. -септември 282 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Aurelius Carus Augustus</td>
                        <td>Цезар Марк Аврелий Кар Август / Кар</td>
                        <td from="282" to="283">282 г. сл. Хр. - 283 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Aurelius Carinus Augustus</td>
                        <td>Цезар Марк Аврелий Карин Август / Карин&nbsp;</td>
                        <td from="283" to="285">283 г. сл. Хр. - 285 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Gaius Aurelius Valerius Diocletianus Augustus</td>
                        <td>Цезар Гай Аврелий Валерий Валерий Диоклециан Август / Диоклециан</td>
                        <td from="284" to="305">284 г. сл. Хр. - 305 г. сл. Хр.</td>
                    </tr>
                    <tr>
                        <td>Caesar Marcus Aurelius Valerius Maximianus Augustus&nbsp;</td>
                        <td>Цезар Гай Аврелий Валерий Валерий Максимиан Август / Максимиан</td>
                        <td from="284" to="305">284 г. сл. Хр. - 305 г. сл. Хр.</td>
                    </tr>
                    
                    <tr>
                        <td width="493"></td>
                        <td width="475"></td>
                        <td width="322"></td>
                    </tr>
                   
                </tbody>
</table>
</div>
`