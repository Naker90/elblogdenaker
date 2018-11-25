const ShowdownWrapper = require("./LibsWrappers/ShowdownWrapper");
const FileSystemWrapper = require("./LibsWrappers/FileSystemWrapper");
const MarkdownService = require("./Services/MarkdownService");
const FolderService = require("./Services/FolderService");
const Builder = require("./Builder");
const articles = require("../Articles/articles");

function BuilderFactory(){

    function createBuilder(){
        return Builder({
            articles: articles,
            folderService: createFolderService(),
            markdownService: createMarkdownService(),
            fileSystemWrapper: FileSystemWrapper()
        });

        function createFolderService(){
            return FolderService({
                basePath: "/home/naker90/Desktop/Projects/elblogdenaker/dist/articles",
                fileSystemWrapper: FileSystemWrapper()
            })
        }

        function createMarkdownService(){
            return MarkdownService({
                fileSystemWrapper: FileSystemWrapper(),
                showdownWrapper: ShowdownWrapper()})
        }
    }

    return {
        createBuilder: createBuilder
    }
}

module.exports = BuilderFactory();