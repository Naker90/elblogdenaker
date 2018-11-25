const fs = require("fs");

function FileSystemWrapper(){

    function read({filePath}){
        fs.readFile(filePath, {encoding: "utf-8"}, (error, data) => {
            if(!error) {
                return data;
            } else {
                console.log("[+] Can not read " + filePath);
            }
        });
    }

    function write({content, outputPath}){
        fs.writeFile(outputPath, content, (err) => {
            if(err) {
                return console.log("[X] Can not write file " + outputPath + " | error: " + err);
            }
        });
    }

    function createPath({path}){
        fs.mkdirSync(path)
    }

    function existPath({path}) {
        console.log(path);
        return fs.existsSync(path);
    }

    return {
        read: read,
        write: write,
        createPath: createPath,
        existPath: existPath
    };
}

module.exports = FileSystemWrapper;