import { Http } from './../core/http';
import { ENV } from './../config/env';

export class NewsService {
    getNews() {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/public/news`)
            .then(response => resolve(response))
            .catch(err => reject(err));
        });
    };
};