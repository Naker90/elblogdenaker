const Navigator = require("../utils/navigator");

const posts = [
    {
        title: "Primer post de prueba",
        description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
        date: "16/08/2018"
    }
];

function buildPostComponent(title, description, date){
    return "<div class='post'><h2>" + title + "</h2><h3>" + description +"</h3><h4>" + date + "</h4></div>";
}

function test(){
    let navigator = Navigator.navigator();
    let firstPost = posts[0];
    let component = buildPostComponent(firstPost.title, firstPost.description, firstPost.date);
    navigator.render(component);
}

module.exports = test;