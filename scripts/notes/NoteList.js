import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js"
import { useCriminals } from "../criminals/CriminalsProvider.js"
import { Note } from "./Note.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

let visibility = false

eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})

eventHub.addEventListener("allNotesClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

const render = () => {
    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }

    getNotes().then(() => {
        const allTheNotes = useNotes()

        contentTarget.innerHTML = allTheNotes.map(
            currentNoteObject => {
                return Note(currentNoteObject)
            }
        ).join("")
    }) 
    
}

export const NotesList = () => {
    render()
}



eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [nothingImportant, id] = clickEvent.target.id.split("--")

        deleteNote(id).then(
            () => {
            render (useNotes())
        })
    }
})