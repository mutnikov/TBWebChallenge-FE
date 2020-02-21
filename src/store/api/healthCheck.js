import api from '../../utils/api';

export default class healthService {
    static HTTP = api;

    static async healthCheck(data) {
        return healthService.HTTP
            .get('/health-check', data);
    }
}
