import React from "react";
import {createLibraryPresenter} from './Factory.js';

class Loading extends React.Component{
    componentDidMount(){
        let presenter = createLibraryPresenter();
        presenter.loadLibrary();
    }
    render(){
        return (
            <div>
                <img src='/images/loading.svg' className='loading-img' alt='Spinner'/>
                <p>Cargando los libros desde <a href="https://trello.com/b/IeYtjCoV" target="_blank">Trello</a></p>
            </div>
        )
    }
}

function LibraryView({renderService}) {

    function render(){
        renderService.reactRender({component: <Loading />});
    }

    return {
        render: render
    }
}

module.exports = LibraryView;
