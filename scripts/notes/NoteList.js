import { getNotes, useNotes } from "./NoteDataProvider.js"
import { useCriminals } from "../criminals/CriminalsProvider.js"
import { Note } from "./Note.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

/*
    State variables
*/
let visibility = false

/*
    Event handlers
*/
eventHub.addEventListener("noteStateChanged", customEvent => {
    renderOne()
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

const renderOne = () => {
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
    renderOne()
}

const renderTwo = (noteCollection, criminalCollection) => {
    contentTarget.innerHTML = noteCollection.map(note => {
        const relatedCriminal = criminalCollection.find(criminal => criminial.id === note.criminalID)

        return `
            <section class="note>
                <h2>Note about ${relatedCriminal.name}</h2>
                ${note.noteText}
            </section>
        `
    })
}

const NoteList = () => {
    const notes = useNotes()
    const criminals = useCriminals()

    renderTwo(notes, criminals)
}