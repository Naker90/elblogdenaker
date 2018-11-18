function dirCreator(){

    function mkdir(path){
        throw new Error("not implemented");
    }

    return {
        mkdir: mkdir
    }
}

module.exports = dirCreator();