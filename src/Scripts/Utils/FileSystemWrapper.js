const fs = require("fs");

function FileSystemWrapper(){

    let self = this;

    self.read = () => {
        throw new Error("not implemented");
    };

    self.createFile = () => {
        throw new Error("not implemented");
    };

    self.createPath = ({path}) => {
        fs.mkdirSync(path)
    };

    self.existPath = ({path}) => {
        return fs.existsSync(path);
    };
}

module.exports = FileSystemWrapper;