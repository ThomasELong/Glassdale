/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useOfficers } from "./OfficersProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        const theOfficerThatWasChosen = changeEvent.target.value

        const officerChosenEvent = new CustomEvent("officerChosen", {
            detail: {
                chosenOfficer: theOfficerThatWasChosen
            }
        })

        eventHub.dispatchEvent(officerChosenEvent)
    }
})

const OfficerSelect = () => {
    const officers = useOfficers()

    const render = (officerCollection) => {
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */
        contentTarget.innerHTML = `
            <select class="dropdown" id="officerSelect">
                <option value="0">Please select an officer...</option>
                ${
                    officerCollection.map(singleOfficer => {return `<option>${singleOfficer.name}</option>`})}
            </select>
        `
    }

    render(officers)
}

export default OfficerSelect


