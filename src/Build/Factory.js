const ShowdownWrapper = require("./LibsWrappers/ShowdownWrapper");
const FileSystemWrapper = require("./LibsWrappers/FileSystemWrapper");
const MarkdownService = require("./Services/MarkdownService");
const FolderService = require("./Services/FolderService");
const Builder = require("./Builder");
const PrintService = require("./Services/PrinterService");
const articles = require("../App/Articles/articles");

function BuilderFactory(){

    function createBuilder({articlesDistPath}){
        return Builder({
            articles: articles,
            folderService: createFolderService({articlesDistPath: articlesDistPath}),
            markdownService: createMarkdownService(),
            fileSystemWrapper: FileSystemWrapper()
        });

        function createFolderService({articlesDistPath}){
            return FolderService({
                articlesDistPath: articlesDistPath,
                fileSystemWrapper: FileSystemWrapper()
            })
        }

        function createMarkdownService(){
            return MarkdownService({
                fileSystemWrapper: FileSystemWrapper(),
                showdownWrapper: ShowdownWrapper(),
                printerService: PrintService()})
        }
    }

    return {
        createBuilder: createBuilder
    }
}

module.exports = BuilderFactory();