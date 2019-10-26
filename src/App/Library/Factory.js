import LibraryController from './LibraryController';
import LibraryView from './LibraryView.js';
import LibraryReactView from './LibraryView.jsx';
import LibraryRepository from './LibraryRepository';
import BoardRepository from './Repositories/BoardRepository';
import ListRepository from './Repositories/ListRepository';
import CardRepository from './Repositories/CardRepository';
import AjaxClientService from '../Services/AjaxClientService';
import TrelloAuthenticationRepository from '../Repositories/TrelloAuthenticationRepository';
import * as ServiceFactory from '../Services/Factory';
import RenderService from '../Services/RenderService';

export const createLibraryController = () => {
    return LibraryController({
        view: LibraryReactView({renderService: RenderService()}),
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
            }),
            memoryCacheService: ServiceFactory.GetMemoryCacheService()
        })
    });
};
