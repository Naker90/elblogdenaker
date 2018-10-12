const navigator = require("../utils/navigator");
const homeController = require("./homeController");
const notFoundController = require("./notFoundController");

export const createHomeController = () => homeController(navigator());
export const createNotFoundController = () => notFoundController(navigator());
