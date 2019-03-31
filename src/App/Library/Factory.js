import LibraryController from './LibraryController';
import LibraryView from './LibraryView';
import LibraryRepository from './LibraryRepository';
import BoardRepository from './Repositories/BoardRepository';
import ListRepository from './Repositories/ListRepository';
import CardRepository from './Repositories/CardRepository';
import AjaxClientService from '../Services/AjaxClientService';
import TrelloAuthenticationRepository from '../Repositories/TrelloAuthenticationService';
import RenderService from '../Services/RenderService';

export const createLibraryController = () => {
    return LibraryController({
        view: LibraryView({renderService: RenderService()}),
        libraryRepository: LibraryRepository({
            boardRepository: BoardRepository({
                ajaxClientRepository: AjaxClientService(),
                trelloAuthenticationRepository: TrelloAuthenticationRepository()
            }),
            listRepository: ListRepository({
                ajaxClientRepository: AjaxClientService(),
                trelloAuthenticationRepository: TrelloAuthenticationRepository()
            }),
            cardRepository: CardRepository({
                ajaxClientRepository: AjaxClientService(),
                trelloAuthenticationRepository: TrelloAuthenticationRepository()
            })
        })
    });
};
