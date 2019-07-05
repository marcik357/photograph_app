import { Http } from './../core/http';
import { ENV } from './../config/env';

export class WinnersService {
    getWinners() {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/public/winners?part=1&limit=25`)
            .then(response => resolve(response))
            .catch(err => reject(err));
        });
    };
};