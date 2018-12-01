const path = require("path");
const BuilderFactory = require("./src/Build/Factory");
let builder = BuilderFactory.createBuilder({
    articlesDistPath: path.join(__dirname, "dist/articles")
});
builder.build();