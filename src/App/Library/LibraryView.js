function LibraryView({renderService}){

    const TRELLO_LINK_MARKUP = `<a href="https://trello.com/b/IeYtjCoV">Trello</a></p>`;

    function renderLibrary({library}){
        let markup = `
        <div>
            <p>Tambien puedes ver la lista de libros en ${TRELLO_LINK_MARKUP}</p>
        </div>`;
        library.forEach((lib) => {
            markup += `
                <div>
                    <h2>${lib.bookcase}</h2>
                    <ul>
                        ${lib.books.map((book) => `<li>${book}</li>`)}
                    </ul>    
                </div>`
        });
        renderService.render({content: markup});
    }

    function renderEmptyLibrary(){
        let markup = `
            <div>
                <h2>Hubo un problema, 
                si quieres puedes ver directamente la lista de libros en ${TRELLO_LINK_MARKUP}</h2>
            </div>
        `;
        renderService.render({content: markup});
    }

    return {
        renderLibrary: renderLibrary,
        renderEmptyLibrary: renderEmptyLibrary
    }
}

module.exports = LibraryView;
