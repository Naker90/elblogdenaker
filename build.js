const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const BuilderFactory = require("./src/App/Build/Factory");

console.log("[+] Run Webpack");
webpack(webpackConfig, (error) => {
    if(error){
        console.log(error);
    }else{
        console.log("[+] Webpack finished successfully")
    }
    transformArticles();
});

function transformArticles(){
    console.log("[+] Transforms articles");

    let articlesDistPath = path.join(__dirname, "dist/articles");
    createPathIfNotExist({path: articlesDistPath});

    transformArticles({articlesDistPath: articlesDistPath});
    console.log("[+] Build finished successfully");

    function createPathIfNotExist({path}){
        if(!fs.existsSync(articlesDistPath)){
            fs.mkdirSync(articlesDistPath);
        }
    }

    function transformArticles({articlesDistPath}){
        let builder = BuilderFactory.createBuilder({
            articlesDistPath: articlesDistPath
        });
        builder.build();
    }
}



