// import { getOfficers } from "./OfficersProvider.js"
import { getCriminals } from "./criminals/CriminalsProvider.js"
import { criminalList } from "./criminals/criminalsList.js"

import { getConvictions } from "./convictions/ConvictionProvider.js"
import  ConvictionSelect  from "./convictions/ConvictionSelect.js"

getCriminals().then(()=>

criminalList()
)

getConvictions().then(() => {
    ConvictionSelect()
})


