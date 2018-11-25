const RenderService = require("../Services/RenderService");
const notFoundController = require("./Controllers/notFoundController");
const notFoundView = require("./Views/notFoundView");

export const createNotFoundController = () => {
    let view = notFoundView(RenderService());
    return notFoundController(view);
};
