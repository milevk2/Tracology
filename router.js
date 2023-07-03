import page from "./node_modules/page/page.mjs"
import { deleteEntry } from "./user_actions.js"
import { showAllView } from "./Views/showAll.js"
import { showMonumentView } from "./Views/showMonumentView.js"
import { loadFormView } from "./Views/formView.js"

page('/Monuments', showAllView)
page('/Legiones', showAllView)
page('/Auxilia', showAllView)
page('/Cohortes Praetoria', showAllView)
page('/Classis', showAllView)

page('/Monuments/:id', showMonumentView)
page('/edit/Monuments/:id', loadFormView) //editView
page('/AddEntry', loadFormView) //addEntriesView
page('/delete/Monuments/:id', deleteEntry)

page.start()