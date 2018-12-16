const RenderService = require("../Services/RenderService");
const NotFoundController = require("./Controllers/NotFoundController");
const NotFoundView = require("./Views/NotFoundView");

export const createNotFoundController = () => {
    let view = NotFoundView({renderService: RenderService()});
    return NotFoundController({view: view});
};
