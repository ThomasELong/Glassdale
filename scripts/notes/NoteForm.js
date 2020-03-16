const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <fieldset class="inputForm">
            <form>
                <div class="formDetail">
                    <label for="name">Name: </label>
                    <input type="text" id="name" name="name">
                </div>
                <div class="formDetail">
                    <label for="crime">Note: </label>
                    <input type="text" id="crime" name="crime">
                </div>
                <div class="formDetail">
                    <label for="date">Date: </label>
                    <input type="date" id="date" name="date">
                </div>

            </form>
        </fieldset>

        

        <button id="saveNote">Save Note</button>
    `
}

const NoteForm = () => {
    render()
}

export default NoteForm