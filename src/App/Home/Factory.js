import RenderService from "../Services/RenderService";
import HomeController from "./Controllers/HomeController";
import HomeView from "./Views/HomeView.jsx";
import articles from "../../Articles/articles";

export const createHomeController = () => {
    let view = HomeView({renderService: RenderService()});
    return HomeController({view: view, articles: articles})
};