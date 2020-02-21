import api from '../../utils/api'

export default class weatherService {

    static HTTP = api;

    static async getSportData(token) {
        return weatherService.HTTP
            .getAuth('api/v1/sport', token);
    }

    static async getBeatedTeams(commandName, token) {
        return weatherService.HTTP
            .getAuth(`api/v1/sport/beat?commandName=${commandName}`, token);
    }
}
