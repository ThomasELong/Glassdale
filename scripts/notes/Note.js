export const Note = noteObject => {
    return `
    <section class="note">
        <header>
            <h2>Name:${noteObject.criminal}</h2>
        </header>
        <p>Details:${noteObject.noteText}</p>
        <p>Date:${new Date(noteObject.timestamp).toLocaleDateString()}</p>
    </section>
    `
}