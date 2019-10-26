import LibraryController from './LibraryController';
import LibraryPresenter from './Presenter/LibraryPresenter';
import LibraryPresenterView from './Presenter/LibraryView';
import LibraryControllerView from './LibraryView.jsx';
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
        view: LibraryControllerView({renderService: RenderService()})
    });
};

export const createLibraryPresenter = () => {
    return LibraryPresenter({
        view: LibraryPresenterView({renderService: RenderService()}),
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
