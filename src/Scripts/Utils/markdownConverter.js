function markdownConverter(basePath, showdownWrapper, fsWrapper){

    function convertToHtml(markdownPath, outPath){
        let markdown = fsWrapper.read(markdownPath);
        let html = showdownWrapper.convertToHtml(markdown);
        fsWrapper.createFile(html, basePath + outPath)
    }

    return {
        convertToHtml: convertToHtml
    }
}

module.exports = markdownConverter;