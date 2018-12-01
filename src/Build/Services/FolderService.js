function FolderService({articlesDistPath, fileSystemWrapper}){

    function createDirStructureByDate({articleDate}){
        let date = splitDate({date: articleDate});
        createDirIfNotExist({path: articlesDistPath});
        createDirIfNotExist({path: `${articlesDistPath}/${date.year}`});
        createDirIfNotExist({path: `${articlesDistPath}/${date.year}/${date.month}`});
        createDirIfNotExist({path: `${articlesDistPath}/${date.year}/${date.month}/${date.day}`});
        return `${articlesDistPath}/${date.year}/${date.month}/${date.day}`;

        function createDirIfNotExist({path}){
            if(!fileSystemWrapper.existPath({path: path})){
                fileSystemWrapper.createPath({path: path});
            }
        }

        function splitDate({date}) {
            let splitDate = date.split("/");
            return {
                year: splitDate[2],
                month: splitDate[1],
                day: splitDate[0]
            }
        }
    }
    
    return {
        createDirStructureByDate: createDirStructureByDate
    };
}

module.exports = FolderService;