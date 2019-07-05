import { Http } from './../core/http';
import { ENV } from './../config/env';

export class UserService {
    getUser(id) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/public/users/get-info/${id}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
        });
    };
};

// import { Http } from './../core/http';
// import { ENV } from './../config/env';
// import { AuthService } from './../services/auth.service';

// export class UserService {
//     constructor() {
//         this._authService = new AuthService();
//         this._authUserId = this._authService.userId;
//     };

//     getUser() {
//         const http = new Http();

//         return new Promise((resolve, reject) => {
//             http.get(`${ENV.apiUrl}/public/users/get-info/${this._authUserId}`)
//             .then(response => resolve(response))
//             .catch(err => reject(err));
//         });
//     };
// };