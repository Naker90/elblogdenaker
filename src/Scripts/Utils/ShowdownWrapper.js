const showdown = require("showdown");

function ShowdownWrapper(){

    let self = this;
    let converter = new showdown.Converter();

    self.convertToHtml = ({markdown}) => {
        return converter.makeHtml(markdown);
    };

    return self;
}

module.exports = ShowdownWrapper;