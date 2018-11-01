const router = require("./../router/router");
const routesResolver = require("./../router/routesResolver");

export const createRoutesResolver = () => routesResolver(router());