const contentTarget = document.querySelector(".witness__button")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showStatements") {

        const customEvent = new CustomEvent("witnessButtonClicked")

        eventHub.dispatchEvent(customEvent)
    }
})

export const WitnessStatementButton = () => {
    contentTarget.innerHTML = "<button id='showNoteForm'>Witness Statements</button>"
}