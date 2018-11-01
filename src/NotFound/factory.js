const navigator = require("../utils/navigator");
const notFoundController = require("./../NotFound/Controllers/notFoundController");

export const createNotFoundController = () => notFoundController(navigator());
