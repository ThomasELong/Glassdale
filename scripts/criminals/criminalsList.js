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


    const theCrimeThatWasChosen = event.detail.chosenCrime

    let criminalsToDisplay = useCriminals()

    if (theCrimeThatWasChosen !== "0") {
        criminalsToDisplay = criminalsToDisplay.filter(criminal => {
            if (criminal.conviction === theCrimeThatWasChosen) {
            return true
        } 
            return false
        })
    }
    render(criminalsToDisplay)
})

const render = criminalsToRender => {
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            return Criminal(criminalObject)
        }
    ).join(" ")
}


export const criminalList = () => {
    const criminals = useCriminals()

    for (const singleCriminal of criminals) {
        contentTarget.innerHTML += Criminal(singleCriminal)
    }
}