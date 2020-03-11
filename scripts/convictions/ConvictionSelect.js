
import { useConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

contentTarget.addEventListener("criminalsCrime", event => {

    if (changeEvent.target.classList.contains("crime")) {
        const selectedCrime = changeEvent.target.value
    }
})


const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ... you wrote awesome code here ...
        </select>
    `
}


const ConvictionSelect = () => {
    const convictions = useConvictions()
    render(convictions)
}

export default ConvictionSelect



