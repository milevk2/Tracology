import page from "./node_modules/page/page.mjs"
import { deleteEntry } from "./user_actions.js"
import { showAllView } from "./showAll.js"
import { addEntriesView } from "./view_addEntries.js"
import { showMonumentView } from "./showMonumentView.js"
import { editView } from "./editView.js"


page('/monuments', showAllView)
page('/monuments/:id', showMonumentView)
page('/edit/Monuments/:id', editView)
page('/delete/Monuments/:id', deleteEntry)
page('/AddEntry', addEntriesView)

page.start()