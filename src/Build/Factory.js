import ShowdownWrapper from "./LibsWrappers/ShowdownWrapper";
import FileSystemWrapper from "./LibsWrappers/FileSystemWrapper";
import MarkdownService from "./Services/MarkdownService";
import FolderService from "./Services/FolderService";
import Builder from "./Builder";
import PrintService from "./Services/PrinterService";
import articles from "../Articles/articles";

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