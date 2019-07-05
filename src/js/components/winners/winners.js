import { AuthService } from '../../services/auth.service';
import { ActiveRoute } from '../../core/activeRoute';
import { WinnersService} from '../../services/winners.service';

const container = document.querySelector('app-container')

export class WinnersComponent {
    constructor() {
        this._activeRoute = new ActiveRoute();
        this._authService = new AuthService();
        this._winnersService = new WinnersService();

        this._authUserId = this._authService.userId;
        this._winners = null;
    };
    
    async beforeRender() {
        this._activeUserId = this._activeRoute.parseRequestUrl().id;
        this._winners = await this._winnersService.getWinners();
    };

    async render() {
        container.innerHTML = await `<div class="container justify-content-center mt-5"><div class="row"></div></div>`
        for (let i = 0; i < this._winners.winners.length; i++) {
            await document.querySelector('.row').insertAdjacentHTML('afterbegin',
                `
            <div class="col-md-3 col-sm-4 mb-5">
                <div class="d-flex flex-column justify-content-between card text-center shadow px-3 py-3 h-100">
                    <img src="${this._winners.winners[i].member_id.user_id.avatar}" class="mx-auto user-avatar w-100">
                    <div>${this._winners.winners[i].member_id.user_id.full_name}</div>
                </div>
            </div>
            `);
        };
    };
};