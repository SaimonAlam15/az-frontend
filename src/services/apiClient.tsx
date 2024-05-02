import axios from 'axios';

const BASE_URL: string = 'http://localhost:8000'; //process.env.API_BASE_URL || 'http://localhost:8000';

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Define common API methods
const _get = (url: string, config: object = {}) => {
    return apiClient.get(url, config);
};

const _delete = (url: string, config: object = {}) => {
    return apiClient.delete(url, config);
};

const _put = (url: string, data: object = {}, config: object = {}) => {
    return apiClient.put(url, data, config);
};

const _post = (url: string, data: object = {}, config: object = {}) => {
    return apiClient.post(url, data, config);
};

// Export API methods
export { _get, _delete, _put, _post };