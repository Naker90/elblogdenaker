const fs = require("fs");

function fileSystemWrapper(){

    function read(){
        throw new Error("not implemented");
    }

    function createFile() {
        throw new Error("not implemented");
    }

    function createDir(){
        throw new Error("not implemented");
    }

    function existDir(){
        throw new Error("not implemented");
    }

    return {
        read: read,
        createFile: createFile,
        createDir: createDir,
        existDir: existDir
    }
}

module.exports = fileSystemWrapper;