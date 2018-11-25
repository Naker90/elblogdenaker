function FolderService({basePath, fileSystemWrapper}){

    let self = this;

    self.createDirStructureByDate = ({articleDate}) => {
        let date = splitDate({date: articleDate});
        createDirIfNotExist({path: basePath + "/" + date.year});
        createDirIfNotExist({path: basePath + "/" + date.year + "/" + date.month});
        createDirIfNotExist({path: basePath + "/" + date.year + "/" + date.month + "/" + date.day});
        return basePath + "/" + date.year + "/" + date.month + "/" + date.day;

        function createDirIfNotExist({path}){
            if(!fileSystemWrapper.existPath(path)){
                fileSystemWrapper.createPath(path);
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
    };
    
    return self;
}

module.exports = FolderService;