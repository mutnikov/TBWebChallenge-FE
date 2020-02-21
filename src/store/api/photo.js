import api from '../../utils/api';

export default class photoService {
    static HTTP = api;

    static async loadPhoto(data, token, customHeaders) {
        return photoService.HTTP
            .postAuth('api/v1/photo', data, token, customHeaders);
    }

    static async getAllPhotos(token) {
        return photoService.HTTP
            .getAuth('api/v1/photo', token);
    }
}
