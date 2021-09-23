import sendRequest from './send-request';

const BASE_URL = '/todos/';

export function index() {
    return sendRequest(BASE_URL);
}

export function create(todo) {
    return sendRequest(BASE_URL, 'POST', todo);
}

export function update(id, todo) {
    return sendRequest(BASE_URL + id, 'PUT', todo);
}

export function deleteTodo(id) {
    return sendRequest(BASE_URL + id, 'DELETE');
}