function dirCreator(basePath, fileSystemWrapper){

    function createDirStructureByDate({articleDate}){
        let date = getDate(articleDate);
        fileSystemWrapper.createDir(basePath + "/" + date.year);
        fileSystemWrapper.createDir(basePath + "/" + date.year + "/" + date.month);
        fileSystemWrapper.createDir(basePath + "/" + date.year + "/" + date.month + "/" + date.day);
        return basePath + "/" + date.year + "/" + date.month + "/" + date.day;

        function getDate(date) {
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
    }
}

module.exports = dirCreator;