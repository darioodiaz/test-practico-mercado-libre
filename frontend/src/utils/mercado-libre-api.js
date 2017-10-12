import axios from 'axios';

const API_IP = process.env.BACKEND_HOST || 'localhost';
const API_PORT = process.env.BACKEND_PORT || '4000';
const API_URI = process.env.BACKEND_API_URI || 'api';
const API_ENDPOINT = `http://${API_IP}${API_PORT ? ':' + API_PORT : ''}/${API_URI}/`;

const RESOURCES = {
    SEARCH: 'items?q=',
    ITEM: 'items/'
};

const API = {
    getItemsByQuery,
    getItemById
};

function getItemsByQuery(query = '') {
    const promise = axios.get(API_ENDPOINT.concat(RESOURCES.SEARCH, query));
    return promise.then((response) => response.data);
}
function getItemById(id = '') {
    const promise = axios.get(API_ENDPOINT.concat(RESOURCES.ITEM, id));
    return promise.then((response) => response.data);
}

export default API;