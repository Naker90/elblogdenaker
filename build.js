const path = require("path");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const BuilderFactory = require("./src/Build/Factory");

webpack(webpackConfig, (error) => {
    console.log(error);
});

let builder = BuilderFactory.createBuilder({
    articlesDistPath: path.join(__dirname, "dist/articles")
});
builder.build();