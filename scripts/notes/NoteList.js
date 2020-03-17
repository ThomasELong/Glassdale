import { getNotes, useNotes } from "./NoteDataProvider.js"
import { Note } from "./Note.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", CustomEvent => {
    render()
})

eventHub.addEventListener("allNotesClicked", CustomEvent => {
    render()
})

const render = () => {
    getNotes().then(() => {
        const allTheNotes = useNotes()

        contentTarget.innerHTML = allTheNotes.map(
            currentNoteObject => {
                return Note(currentNoteObject)
            }
        ).join(" ")
    })
}