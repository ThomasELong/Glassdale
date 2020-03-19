const contentTarget = document.querySelector(".noteForm__button")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNoteForm") {

        const customEvent = new CustomEvent("noteFormButtonClicked")

        eventHub.dispatchEvent(customEvent)
    }
})

export const DisplayNoteFormButton = () => {
    contentTarget.innerHTML = "<button id='showNoteForm'>Show Note Form</button>"
}