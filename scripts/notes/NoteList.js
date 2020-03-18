
import { getNotes, useNotes } from "./NoteDataProvider.js"
import { Note } from "./Note.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

let visibility = false

eventHub.addEventListener("allNotesClicked", customEvent => {
    render()
})

const render = () => {
    visibility = !visibility
    if (visibility) {
        contentTarget.classList.remove("invisible")
    } else {
        contentTarget.classList.add("invisible")
    }


    getNotes().then(() => {
        const allTheNotes = useNotes()

        contentTarget.innerHTML = allTheNotes.map(
            currentNoteObject => {
                return Note(currentNoteObject)
            }
        ).join(" ")
    })
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 /* The below was copied from Steve's crap*/

// import { getNotes, useNotes } from "./NoteDataProvider.js"
// import { Note } from "./Note.js"

// const contentTarget = document.querySelector(".notesContainer")
// const eventHub = document.querySelector(".container")

// /*
//     State variables
// */
// let visibility = false

// /*
//     Event handlers
// */
// eventHub.addEventListener("noteStateChanged", customEvent => {
//     render()
// })

// eventHub.addEventListener("allNotesClicked", customEvent => {
//     visibility = !visibility

//     if (visibility) {
//         contentTarget.classList.remove("invisible")
//     }
//     else {
//         contentTarget.classList.add("invisible")
//     }
// })

// const render = () => {
//     if (visibility) {
//         contentTarget.classList.remove("invisible")
//     }
//     else {
//         contentTarget.classList.add("invisible")
//     }

//     getNotes().then(() => {
//         const allTheNotes = useNotes()

//         contentTarget.innerHTML = allTheNotes.map(
//             currentNoteObject => {
//                 return Note(currentNoteObject)
//             }
//         ).join("")
//     })
// }

// export const NotesList = () => {
//     render()
// }