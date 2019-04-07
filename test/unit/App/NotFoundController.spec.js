import NotFoundController from "../../../src/App/NotFound/NotFoundController";
import NotFoundView from "../../../src/App/NotFound/NotFoundView";
import Game from "../../../src/App/NotFound/Hangman/Game";
import JestUtils from "../../utils/JestUtils";

describe("not found controller tests", () => {

    let controller, view, hangmanGame;

    beforeEach(() => {
        view = JestUtils.mockAllMethods({obj: NotFoundView({})});
        hangmanGame = JestUtils.mockAllMethods({obj: Game()});
        controller = NotFoundController({view: view, hangmanGame: hangmanGame});
    });

    it("renders not found view", () => {
        controller.execute();

        expect(view.render).toHaveBeenCalled();
        expect(hangmanGame.start).toHaveBeenCalled();
    });
});