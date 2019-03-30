import LibraryController from './LibraryController';
import LibraryView from './LibraryView';
import LibraryRepository from './LibraryRepository';
import BoardRepository from './Repositories/BoardRepository';
import ListRepository from './Repositories/ListRepository';
import CardRepository from './Repositories/CardRepository';
import AjaxClientService from '../Services/AjaxClientService';
import RenderService from '../Services/RenderService';

export const createLibraryController = () => {
    return LibraryController({
        view: LibraryView({renderService: RenderService()}),
        libraryRepository: LibraryRepository({
            boardRepository: BoardRepository({ajaxClientRepository: AjaxClientService}),
            listRepository: ListRepository({ajaxClientRepository: AjaxClientService}),
            cardRepository: CardRepository({ajaxClientRepository: AjaxClientService})
        })
    });
};
