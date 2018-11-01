const navigator = require("../Utils/navigator");
const notFoundController = require("./Controllers/notFoundController");
const notFoundView = require("./Views/notFoundView");

export const createNotFoundController = () => {
    let view = notFoundView(navigator());
    return notFoundController(view);
};
