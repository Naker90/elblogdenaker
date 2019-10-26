import React from "react";

const TRELLO_LINK_MARKUP = `<a href="https://trello.com/b/IeYtjCoV" target="_blank">Trello</a></p>`;

class BookShelf extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <p className='article-paragraph'>Tambien puedes ver la lista de libros en ${TRELLO_LINK_MARKUP}</p>
                </div>`
                {
                    this.props.library.map((bookshelf) => {
                        return (
                            <div>
                                <h2 className='article-title'>${bookshelf.bookcase}</h2>
                                <ul className='article-paragraph'>
                                    ${bookshelf.books.map((book) => `<li>${book}</li>`).join('')}
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

class Library extends React.Component{
    render(){
        return (
            <div>
                <img src='/images/loading.svg' className='loading' alt='Spinner'/>
                <p>Cargando los libros desde ${TRELLO_LINK_MARKUP}...</p>
            </div>
        )
    }
}

function LibraryView({renderService}) {

    function render(){
        renderService.reactRender({component: <Library />});
    }

    return {
        render: render
    }
}

module.exports = LibraryView;
