import RenderService from "../Services/RenderService";
import NotFoundController from "./Controllers/NotFoundController";
import NotFoundView from "./Views/NotFoundView";

export const createNotFoundController = () => {
    let view = NotFoundView({renderService: RenderService()});
    return NotFoundController({view: view});
};
