import { Criminal } from "./criminals.js"
import { useCriminals } from "./CriminalsProvider.js"


const contentElement = document.querySelector(".criminalsContainer")


export const criminalList = () => {
    const criminalObjectArray = useCriminals()

    let allCriminalsHTML = ""

    for (const criminals of criminalObjectArray) {
        allCriminalsHTML += Criminal(criminals)
        
    }
    contentElement.innerHTML += allCriminalsHTML
} 