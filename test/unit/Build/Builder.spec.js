import Builder from "../../../src/Build/Builder";
import FolderService from "../../../src/Build/Services/FolderService";
import MarkdownService from "../../../src/Build/Services/MarkdownService";
import FileSystemWrapper from "../../../src/Build/LibsWrappers/FileSystemWrapper";
import JestUtils from "../../utils/JestUtils";

describe('builder', () => {

    let articles, builder, folderService, markdownService, fileSystemWrapper;

    beforeEach(() => {
        articles = [
            {
                date: "05/10/2018",
                htmlFileName: "html-file-name.html",
                markdownFilePath: "~/anyRoute/markdown.md"
            }
        ];
        folderService = JestUtils.mockAllMethods({obj: FolderService({})});
        markdownService = JestUtils.mockAllMethods({obj: MarkdownService({})});
        fileSystemWrapper = JestUtils.mockAllMethods({obj: FileSystemWrapper()});
        builder = Builder({
            articles: articles,
            folderService: folderService,
            markdownService: markdownService,
            fileSystemWrapper: fileSystemWrapper
        });
    });
    
    it("creates html file from markdown file in dir structure created by date", async () => {
        folderService.createDirStructureByDate
            .mockImplementation((articleDate) => {
                expect(articleDate).toEqual({articleDate: articles[0].date});
                return "/dir/structure/by/date"
            });
        markdownService.convertToHtmlFromMarkdownFile
            .mockImplementation((markdownFilePath) => {
                expect(markdownFilePath).toEqual({markdownFilePath: articles[0].markdownFilePath});
                return "some html";
            });

        await builder.build();

        expect(fileSystemWrapper.write).toHaveBeenCalledWith({
            content: "some html",
            outputPath: "/dir/structure/by/date/" + articles[0].htmlFileName
        })
    })
});