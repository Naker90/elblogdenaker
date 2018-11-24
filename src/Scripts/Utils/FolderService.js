function FolderService(basePath, fileSystemWrapper){

    let self = this;

    self.createDirStructureByDate = ({articleDate}) => {
        let date = splitDate({date: articleDate});
        createDirIfNotExist(basePath + "/" + date.year);
        createDirIfNotExist(basePath + "/" + date.year + "/" + date.month);
        createDirIfNotExist(basePath + "/" + date.year + "/" + date.month + "/" + date.day);
        return basePath + "/" + date.year + "/" + date.month + "/" + date.day;

        function createDirIfNotExist(path){
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
}

module.exports = FolderService;