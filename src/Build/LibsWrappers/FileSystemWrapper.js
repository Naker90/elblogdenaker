import fs from "fs";

function FileSystemWrapper(){

    function read({filePath}){
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, {encoding: "utf-8"}, (error, data) => {
                if(!error) {
                    resolve(data);
                } else {
                    reject(error);
                }
            });
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