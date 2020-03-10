
import { useConvictions } from "./ConvictionProvider.js"

const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    const convictions = useConvictions()

    const render = convictionsCollection => {

        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${convictionsCollection.map(singleConviction => {
                        return `<option>${singleConviction.name}</option>`})
                        
                    }
            </select>
        `
    }

    render(convictions)
}

export default ConvictionSelect









// const nameListContainer = document.querySelector(".names")

// nameListContainer.innerHTML = `
//     <select>
//         ${
//             names.map(name => {
//                 const [first, last] = name.split(" ")
//                 return `<option>${last}</option>`
//             })
//         }
//     </select>
// `