const path = require("path");
const articles = [
    {
        name: "Tests parametrizables — Ejemplo en TypeScript.",
        description: "Intentamos escribir código limpio y simple para que sea etendible y fácil de mantener pero es común no tratar el código de nuestros tests de la misma forma, cuando en realidad, son igual de importantes que el código de la funcionalidad que prueban. Parametrizar un tests nos ayudará a simplificar un conjunto de tests grande donde hemos encontrado un patrón que se repite.",
        date: "30/07/2020",
        htmlFileName: "tests-parametrizables-typescript.html",
        author: "Antonio Sánchez",
        route: "2020/07/30/tests-parametrizables-typescript",
        markdownFilePath: path.join(__dirname, "tests-parametrizables-typescript.md")
    },
    {
        name: "Inyección de dependencias + Principio de inversión de dependencias.",
        description: "cómo en combinación con la inyección de dependencias podemos pasar de un código altamente acoplado y con poca facilidad de testear a un código desacoplado y altamente testable.",
        date: "02/05/2019",
        htmlFileName: "dependecy-injection-and-inversion-principle.html",
        author: "Antonio Sánchez",
        route: "2019/05/02/dependecy-injection-and-inversion-principle",
        markdownFilePath: path.join(__dirname, "dependecy-injection-and-inversion-principle.md")
    },
    {
        name: "El esquema de datos MySQL aplicado a las inyecciones SQL.",
        description: "El esquema de datos de MySQL y como podemos sacar partido de el para conocer posibles bases de datos, tablas y campos que existan dentro del gestor de base de datos.",
        date: "09/03/2019",
        htmlFileName: "esquema-bd-sql-injection.html",
        author: "Antonio Sánchez",
        route: "2019/03/09/esquema-bd-sql-injection",
        markdownFilePath: path.join(__dirname, "esquema-bd-sql-injection.md")
    },
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
