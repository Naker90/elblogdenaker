const fs = require("fs");

function FileSystemWrapper(){

    let self = this;

    self.read = ({filePath}) => {
        fs.readFile(filePath, {encoding: "utf-8"}, (error, data) => {
            if(!error) {
                return data;
            } else {
                console.log("[+] Can not read " + filePath);
            }
        });
    };

    self.write = ({content, outputPath}) => {
        fs.writeFile(outputPath, content, (err) => {
            if(err) {
                return console.log("[X] Can not write file " + outputPath + " | error: " + err);
            }
        });
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