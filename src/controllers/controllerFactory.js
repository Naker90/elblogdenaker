const navigator = require("../utils/navigator");
const homeController = require("./homeController");

export const createHomeController = () => homeController(navigator());
