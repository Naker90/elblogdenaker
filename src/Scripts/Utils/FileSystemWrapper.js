const fs = require("fs");

function FileSystemWrapper(){

    let self = this;

    self.read = () => {
        throw new Error("not implemented");
    };

    self.createFile = () => {
        throw new Error("not implemented");
    };

    self.createDir = () => {
        throw new Error("not implemented");
    };

    self.existDir = () => {
        throw new Error("not implemented");
    };
}

module.exports = FileSystemWrapper;