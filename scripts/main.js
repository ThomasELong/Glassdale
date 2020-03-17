// import { getOfficers } from "./OfficersProvider.js"
import { getCriminals } from "./criminals/CriminalsProvider.js"
import { criminalList } from "./criminals/criminalsList.js"

import { getConvictions } from "./convictions/ConvictionProvider.js"
import  ConvictionSelect  from "./convictions/ConvictionSelect.js"

import { DisplayNotesButton } from "./notes/DisplayNotesButton.js"
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js"
import { NoteForm } from "./notes/NoteForm.js"

getCriminals().then(criminalList)

getConvictions().then(ConvictionSelect)

DisplayNotesButton()
DisplayNoteFormButton()

NoteForm()

