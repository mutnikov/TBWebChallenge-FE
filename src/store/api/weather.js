import api from '../../utils/api';

const BASE_URL= 'http://api.openweathermap.org'

export default class weatherService {
    static HTTP = api;

    static async getWeather({lat,lon, appid}) {
        return weatherService.HTTP
            .get(`/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`, BASE_URL);
    }
}
