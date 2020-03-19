const contentTarget = document.querySelector(".notes__button")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showAllNotes") {

        const allNotesEvent = new CustomEvent("allNotesClicked")

        eventHub.dispatchEvent(allNotesEvent)
    }
})

export const DisplayNotesButton = () => {
    contentTarget.innerHTML = "<button id='showAllNotes'>Show All Notes</button>"
}