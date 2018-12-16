import ghPages from "gh-pages";
const branch = 'dist';
const config = {
    branch: 'master',
    repo: 'https://github.com/Naker90/naker90.github.io.git'
};
const callback = () => console.log("Blog deployed in https://naker90.github.io");

ghPages.publish(branch, config, callback);