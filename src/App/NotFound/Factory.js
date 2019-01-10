import RenderService from "../Services/RenderService";
import NotFoundController from "./NotFoundController";
import NotFoundView from "./NotFoundView";

export const createNotFoundController = () => {
    let view = NotFoundView({renderService: RenderService()});
    return NotFoundController({view: view});
};
