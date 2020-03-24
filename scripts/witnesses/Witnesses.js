export const Witness = witness => {
    return `
        <section class="statement">
            <header>
                <h3>Witness Name: ${witness.name}</h3>
            </header>

            <p>Statement: ${witness.statements}</p>
        </section>
    `
}