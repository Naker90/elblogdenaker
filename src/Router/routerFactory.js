const router = require("./router");
const routesResolver = require("./routesResolver");

export const createRoutesResolver = () => routesResolver(router());