import api from '../../utils/api'

export default class taskService {
    static HTTP = api;

    static async getAllTask(token) {
        return taskService.HTTP
            .getAuth('api/v1/task', token);
    }

    static async createTask(data, token) {
        return taskService.HTTP
            .postAuth('api/v1/task', data, token);
    }

    static async changeTask(id, data, token) {
        return taskService.HTTP
            .postAuth(`api/v1/task/${id}`, data, token);
    }
}
