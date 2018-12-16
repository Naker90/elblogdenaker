import Router from "./Router";
import RoutesResolver from "./RoutesResolver";

export const createRoutesResolver = () => RoutesResolver({router: Router()});