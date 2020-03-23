export const Criminal = (criminalObject) => {
    return `
        <section class="criminalDetails">
            <div class="name">Name: ${criminalObject.name}</div>
            <div class="age">Age: ${criminalObject.age}</div>
            <div>Conviction: ${criminalObject.conviction}</div>
            <div>Incarceration Entry: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</div>
            <div>Incarceration Exit: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</div>
            <div>Arresting Officer: ${criminalObject.arrestingOfficer}</div><br><br>
            <div class="associatesButton">            
                <button id="associates--${criminalObject.id}">Show Associates</button>
            </div>
        </section>
    `
}