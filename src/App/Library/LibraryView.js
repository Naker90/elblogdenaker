function LibraryView({renderService}){

    const TRELLO_LINK_MARKUP = `<a href="https://trello.com/b/IeYtjCoV" target="_blank">Trello</a></p>`;

    function renderLibrary({library}){
        let markup = `
        <div>
            <p class='article-paragraph'>Tambien puedes ver la lista de libros en ${TRELLO_LINK_MARKUP}</p>
        </div>`;
        library.forEach((lib) => {
            markup += `
                <div>
                    <h2 class='article-title'>${lib.bookcase}</h2>
                    <ul class='article-paragraph'>
                        ${lib.books.map((book) => `<li>${book}</li>`).join('')}
                    </ul>    
                </div>`
        });
        renderService.render({content: markup});
    }

    function renderEmptyLibrary(){
        let markup = `
            <div>
                <h2 class='error'>Hubo un problema, 
                si quieres, puedes ver directamente la lista de libros en ${TRELLO_LINK_MARKUP}</h2>
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
