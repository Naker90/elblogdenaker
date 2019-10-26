import React from "react";

class Library extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <p className='article-paragraph'>Tambien puedes ver la lista de libros en <a href="https://trello.com/b/IeYtjCoV" target="_blank">Trello</a></p>
                </div>
                {
                    this.props.library.map((bookshelf) => {
                        return (
                            <div>
                                <h2 className='article-title'>{bookshelf.bookcase}</h2>
                                <ul className='article-paragraph'>
                                    {bookshelf.books.map((book) => <li>{book}</li>)}
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

class EmptyLibrary extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <h2 className='error text-medium'>Ha ocurrido un error buscando los libros</h2>
                    <p className='article-paragraph'>Tambien puedes ver la lista de libros en <a href="https://trello.com/b/IeYtjCoV" target="_blank">Trello</a></p>
                </div>
            </div>
        )
    }
}

function LibraryView({renderService}) {

    return {
        renderLibrary: renderLibrary,
        renderEmptyLibrary: renderEmptyLibrary
    };

    function renderLibrary({library}){
        renderService.reactRender({component: <Library library={library} />});
    }

    function renderEmptyLibrary(){
        renderService.reactRender({component: <EmptyLibrary />});
    }
}

module.exports = LibraryView;
