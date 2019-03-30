function AjaxClientService(){

    return {
        get: get
    };

    function get({url}){
        return new Promise((resolve, reject) => {
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", url, false);
            xmlHttp.onreadystatechange = onReadyStateChangeHandler;
            xmlHttp.send();

            function onReadyStateChangeHandler(){
                if(xmlHttp.readyState === 4)
                {
                    if(xmlHttp.status === 200 || xmlHttp.status === 0)
                    {
                        return resolve(xmlHttp.responseText);
                    }
                }
                return reject();
            }
        });
    }
}

module.exports = AjaxClientService;
