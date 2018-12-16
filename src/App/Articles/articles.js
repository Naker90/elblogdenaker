const path = require("path");
const articles = [
    {
        name: "Patrón Modelo-Vista-Presentador con vista pasiva.",
        description: "Una derivación del patrón arquitectónico MVC, y es utilizado mayoritariamente para construir interfaces de usuario.",
        date: "05/10/2018",
        htmlFileName: "patron-mvp.html",
        author: "Antonio Sánchez",
        route: "2018/10/05/patron-mvp",
        markdownFilePath: path.join(__dirname, "patron-mvp.md")
    },
    {
        name: "Patrón Command.",
        description: "Un patrón de comportamiento en el que un objeto se utiliza para encapsular toda la información necesaria para realizar una acción.",
        date: "05/08/2018",
        author: "Antonio Sánchez",
        route: "2018/08/05/patron-command",
        htmlFileName: "patron-command.html",
        markdownFilePath: path.join(__dirname, "patron-command.md")
    },
    {
        name: "Implementando nuestro propio motor de reglas — Java.",
        description: "Introducción a un simple motor de reglas y como podemos implementar uno en java.",
        date: "25/10/2017",
        author: "Antonio Sánchez",
        route: "2017/10/25/implementando-motor-de-reglas",
        htmlFileName: "implementando-motor-de-reglas.html",
        markdownFilePath: path.join(__dirname, "implementando-motor-de-reglas.md")
    }
];

module.exports = articles;
