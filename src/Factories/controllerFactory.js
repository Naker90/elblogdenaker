const navigator = require("../utils/navigator");
const homeController = require("./../Home/Controllers/homeController");
const notFoundController = require("./../NotFound/Controllers/notFoundController");

export const createHomeController = () => homeController();
export const createNotFoundController = () => notFoundController(navigator());
