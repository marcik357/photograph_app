import { AuthService } from './../../services/auth.service';
import { ActiveRoute } from './../../core/activeRoute';
import { NewsService} from './../../services/news.service';

const container = document.querySelector('app-container')

export class NewsComponent {
    constructor() {
        this._activeRoute = new ActiveRoute();
        this._authService = new AuthService();
        this._newsService = new NewsService();

        this._authUserId = this._authService.userId;
        this._news = null;
    };
    
    async beforeRender() {
        this._activeUserId = this._activeRoute.parseRequestUrl().id;
        this._news = await this._newsService.getNews(this._activeUserId);
    };
    
    async render() {
        container.innerHTML = await `<div class="container justify-content-center mt-5"><div class="row"></div></div>`
        for (let i = 0; i < this._news.news.length; i++) {
            await document.querySelector('.row').insertAdjacentHTML('afterbegin',
            `
            <div class="col-4 mb-5">
                <div class="d-flex flex-column justify-content-between card text-center shadow px-3 py-3 h-100">
                    <img src="${this._news.news[i].owner.avatar}" class="mx-auto user-avatar w-25">
                    <div class="mb-3">${this._news.news[i].owner.full_name}</div>
                    <img src="${this._news.news[i].pictures[0].url}" class="w-100">
                </div>
            </div>
            `);
        };
    };
};