function PinterService(){

    function printLog({message}){
        console.log(message);
    }

    return {
        printLog: printLog
    };
}

module.exports = PinterService;