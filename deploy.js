const ghPages = require("gh-pages");
const branch = 'dist';
const config = {
    branch: 'master',
    repo: 'https://github.com/Nakerdev/nakerdev.github.io.git'
};
const callback = () => console.log("Blog deployed in https://nakerdev.github.io");

ghPages.publish(branch, config, callback);
