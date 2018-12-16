const Router = require("./Router");
const RoutesResolver = require("./RoutesResolver");

export const createRoutesResolver = () => RoutesResolver({router: Router()});