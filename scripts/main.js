// import { getOfficers } from "./OfficersProvider.js"
import { getCriminals } from "./criminals/CriminalsProvider.js"
import { criminalList } from "./criminals/criminalsList.js"

import { getConvictions } from "./convictions/ConvictionProvider.js"
import  ConvictionSelect  from "./convictions/ConvictionSelect.js"
import  OfficerSelect from "./officers/officersSelect.js"
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js"
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js"
import { NoteForm } from "./notes/NoteForm.js"
import { NotesList } from "./notes/NoteList.js"
import "./criminals/KnownAssociatesDialog.js"
import { getOfficers } from "./officers/OfficersProvider.js"
import "./witnesses/WitnessList.js"
import { WitnessStatementButton} from "./witnesses/WitnessStatementButton.js"

getCriminals().then(criminalList)

getConvictions().then(ConvictionSelect)

getOfficers().then(OfficerSelect)


DisplayNotesButton()
DisplayNoteFormButton()

NotesList()
NoteForm()

WitnessStatementButton()

