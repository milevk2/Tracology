import page from "./node_modules/page/page.mjs"
import { deleteEntry } from "./user_actions.js"
import { showAllView } from "./Views/showAll.js"
import { showMonumentView } from "./Views/showMonumentView.js"
import { loadFormView } from "./Views/formView.js"
import { tagsView } from "./Views/tagView.js"
import { onHomeLoad } from "./Views/home.js"
import { relatedMonumentsView } from "./Views/relatedMonumentsView.js"


page('/', onHomeLoad)
page('/Monuments', showAllView)
page('/Legiones', showAllView)
page('/Auxilia', showAllView)
page('/Cohortes Praetoria', showAllView)
page('/Classis', showAllView)
page('/Not Specified', showAllView)
page('/Надгробни паметници', showAllView)
page('/Посветителни надписи', showAllView)
page('/Военни дипломи', showAllView)
page('/Tags/:id', tagsView)
page('/Emperors/:emperor', showAllView)

page('/Monuments/:id', showMonumentView)
page('/Legiones/:id', showMonumentView)
page('/Auxilia/:id', showMonumentView)
page('/Cohortes Praetoria/:id', showMonumentView)
page('/Classis/:id', showMonumentView)
page('/Not Specified/:id', showMonumentView)

page('/edit/Monuments/:id', loadFormView)
page('/edit/Legiones/:id', loadFormView)
page('/edit/Auxilia/:id', loadFormView)
page('/edit/Cohortes Praetoria/:id', loadFormView)
page('/edit/Classis/:id', loadFormView)
page('/edit/Not Specified/:id', loadFormView)

page('/delete/Monuments/:id', deleteEntry)
page('/delete/Legiones/:id', deleteEntry)
page('/delete/Auxilia/:id', deleteEntry)
page('/delete/Cohortes Praetoria/:id', deleteEntry)
page('/delete/Classis/:id', deleteEntry)
page('/delete/Not Specified/:id', deleteEntry)

page('/AddEntry', loadFormView) //addEntriesView


page.start()