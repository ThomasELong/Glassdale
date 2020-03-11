export const Criminal = (criminalObject) => {
    return `
        <section class="criminalDetails">
            <div class="name">Name: ${criminalObject.name}</div>
            <div class="age">Age: ${criminalObject.age}</div>
            <div>Conviction: ${criminalObject.conviction}</div>
            <div>Incarceration Entry: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</div>
            <div>Incarceration Exit: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</div>
        </section>
    `
}