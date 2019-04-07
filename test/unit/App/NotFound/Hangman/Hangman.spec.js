jest.mock("../../../../../src/App/NotFound/Hangman/View", () => {
    return {
        showWord: jest.fn(),
        showLives: jest.fn(),
        endGameAsWinner: jest.fn(),
        endGameAsLoser: jest.fn(),
        reloadPage: jest.fn(),
        showHint: jest.fn(),
        subscribeToStartGameRequested: jest.fn(),
        subscribeToPlayAgainRequested: jest.fn(),
        subscribeToGuessLetterRequested: jest.fn(),
        subscribeToGetHintRequested: jest.fn()
    }
});

import Hangman from '../../../../../src/App/NotFound/Hangman/Hangman';
import MoviesAndHintsRepository from '../../../../../src/App/NotFound/Hangman/MoviesAndHintsRepository';
import View from '../../../../../src/App/NotFound/Hangman/View';
import Stickman from '../../../../../src/App/NotFound/Hangman/Stickman';
import JestUtils from "../../../../utils/JestUtils";

describe("hangman play", () => {

    let hangman, view, moviesAndHintsRepository, stickman;

    beforeEach(() => {
        moviesAndHintsRepository = JestUtils.mockAllMethods({obj: MoviesAndHintsRepository({})});
        view = View;
        stickman = JestUtils.mockAllMethods({obj: Stickman()});
    });

    it("subscribe to start game requested", () => {
        hangman = Hangman({
            view: view,
            moviesAndHintsRepository: moviesAndHintsRepository,
            stickman: stickman
        });

        expect(view.subscribeToStartGameRequested).toHaveBeenCalled();
        expect(view.subscribeToPlayAgainRequested).toHaveBeenCalled();
    });

    describe("when game has not yet begun", () => {

        let startGameRequestedHandler = () => {};
        let playAgainRequestedHandler = () => {};

        beforeEach(() => {
            view.subscribeToStartGameRequested
                .mockImplementation(({handler}) => {
                    startGameRequestedHandler = handler;
                });
            view.subscribeToPlayAgainRequested
                .mockImplementation(({handler}) => {
                    playAgainRequestedHandler = handler;
                });
            hangman = Hangman({
                view: view,
                moviesAndHintsRepository: moviesAndHintsRepository,
                stickman: stickman
            });
        });

        it("shows encoded word on game start", () => {
            let encodedMovieTitle = ["-","-","-","-","_","-"];
            moviesAndHintsRepository.getMovieAndHints
                .mockImplementation(() => {
                    return {movieTitle: "casa a", hints: ["Una pista"]};
                });

            startGameRequestedHandler();

            expect(view.showWord).toHaveBeenCalledWith({movieTitle: encodedMovieTitle});
            expect(view.showLives).toHaveBeenCalledWith({numberOfLives: 10});
            expect(view.subscribeToGuessLetterRequested).toHaveBeenCalled();
            expect(view.subscribeToGetHintRequested).toHaveBeenCalled();
        });

        it("reload page when on play again requested", () => {
            playAgainRequestedHandler();

            expect(view.reloadPage).toHaveBeenCalled();
        });

        describe("when game is started", () => {

            let guessLetterRequestedHandler = ({letter}) => {};
            let getHintRequestedHandler = () => {};

            let MovieAndHintsDto = {
                movieTitle: "casa",
                hints: [
                    "First hint"
                ]
            };

            beforeEach(() => {
                moviesAndHintsRepository.getMovieAndHints
                    .mockImplementation(() => {
                        return MovieAndHintsDto;
                    });
                view.subscribeToGuessLetterRequested
                    .mockImplementation(({handler}) => {
                        guessLetterRequestedHandler = handler;
                    });
                view.subscribeToGetHintRequested
                    .mockImplementation(({handler}) => {
                        getHintRequestedHandler = handler;
                    });
                startGameRequestedHandler()
            });

            it("shows wordDto with replaced letter if guess wordDto letter", () => {
                guessLetterRequestedHandler({letter: "a"});

                expect(view.showWord).toHaveBeenCalledWith({
                    movieTitle: ["-","a","-","a"]});
            });

            it("decrement lives if guessed letter is wrong and draw next stickman body part", () => {
                guessLetterRequestedHandler({letter: "b"});

                expect(view.showLives).toHaveBeenCalledWith({numberOfLives: 9});
                expect(stickman.drawNext).toHaveBeenCalledWith();
            });

            it("ends game as winner when all letter are guessed", () => {
                guessLetterRequestedHandler({letter: "a"});
                guessLetterRequestedHandler({letter: "c"});
                guessLetterRequestedHandler({letter: "s"});

                expect(view.endGameAsWinner).toHaveBeenCalled();
            });

            it("ends game as loser when player exhaust all lives", () => {
                for (let i = 0; i < 10; i++) {
                    guessLetterRequestedHandler({letter: "b"});
                }

                expect(view.endGameAsLoser).toHaveBeenCalled();
            });

            it("gets hint when requested", () => {
                getHintRequestedHandler();

                expect(view.showHint).toHaveBeenCalledWith({
                    hint: "First hint"
                });
            });

            it("does not return hints when there are not more", () => {
                getHintRequestedHandler();
                getHintRequestedHandler();

                expect(view.showHint).toHaveBeenCalledWith({
                    hint: "Have not got more hints!"
                });
            });
        });
    });
});