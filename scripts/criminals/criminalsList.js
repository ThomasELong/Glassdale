import { useCriminals, getCriminals } from "./CriminalsProvider.js";
import { Criminal } from "./criminals.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")
let youCanSeeMe = true

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {
        const [nothingImportant, criminalID] = clickEvent.target.id.split("--")

        const showAssociatesEvent = new CustomEvent("knownAssociatesClicked", {
            detail: {
                chosenCriminal: criminalID
            }
        })
        eventHub.dispatchEvent(showAssociatesEvent)
    }
})

eventHub.addEventListener("witnessButtonClicked", customEvent => {
    youCanSeeMe = !youCanSeeMe

    youCanSeeMe
        ? contentTarget.classList.remove("invisible")
        : contentTarget.classList.add("invisible")
})



eventHub.addEventListener("crimeChosen", event => {

    const criminals = useCriminals()
    const theCrimeThatWasChosen = event.detail.chosenCrime

    const guiltyCriminals = criminals.filter(criminal => {
        if (criminal.conviction === theCrimeThatWasChosen) {
            return true
        }
        return false
    })
    contentTarget.innerHTML = ""
    for (const singleCriminal of guiltyCriminals) {
        contentTarget.innerHTML += Criminal(singleCriminal)
    }
})


export const criminalList = () => {
    const criminals = useCriminals()

    for (const singleCriminal of criminals) {
        contentTarget.innerHTML += Criminal(singleCriminal)
    }
}