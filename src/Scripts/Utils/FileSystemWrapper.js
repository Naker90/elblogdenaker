const fs = require("fs");

function FileSystemWrapper(){

    let self = this;

    self.read = ({filePath}) => {
        throw new Error("not implemented");
    };

    self.write = ({content, outputPath}) => {
        throw new Error("not implemented");
    };

    self.createPath = ({path}) => {
        fs.mkdirSync(path)
    };

    self.existPath = ({path}) => {
        return fs.existsSync(path);
    };

    return self;
}

module.exports = FileSystemWrapper;