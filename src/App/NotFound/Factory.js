import RenderService from "../Services/RenderService";
import NotFoundController from "./NotFoundController";
import NotFoundView from "./NotFoundView";
import Game from "./Hangman/Game";

export const createNotFoundController = () => {
    let view = NotFoundView({renderService: RenderService()});
    return NotFoundController({view: view, hangmanGame: Game()});
};
