const navigator = require("../Utils/navigator");
const notFoundController = require("./../NotFound/Controllers/notFoundController");

export const createNotFoundController = () => notFoundController(navigator());
