import api from '../../utils/api';

export default class userService {
    static HTTP = api;

    static async login(data) {
        return userService.HTTP
            .post('api/v1/user/login', data);
    }

    static async signUp(data) {
        return userService.HTTP
            .post('api/v1/user/sign-up', data);
    }
}
