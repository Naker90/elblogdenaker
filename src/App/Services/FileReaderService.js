function FileReaderService(){

    function read({file: filePath, successCallback, errorCallback}){
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", filePath, false);
        xmlHttp.onreadystatechange = onReadyStateChangeHandler;
        return xmlHttp.send();

        function onReadyStateChangeHandler(){
            if(xmlHttp.readyState === 4)
            {
                if(xmlHttp.status === 200 || xmlHttp.status === 0)
                {
                    return successCallback(xmlHttp.responseText);
                }
            }
            return errorCallback();
        }
    }

    return {
        read: read
    };
}

module.exports = FileReaderService;