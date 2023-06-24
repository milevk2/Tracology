const main = 'https://thracology-2218f-default-rtdb.europe-west1.firebasedatabase.app/'

export async function request(method, url, headerData = {}, body = null) {

    headerData['Content-Type'] = 'application/json';

    const options = {

        method: method,
        headers: headerData,
    }

    if (body !== null) {
        options['body'] = JSON.stringify(body);
    }

    const response = await fetch(`${main}${url}.json`, options);

    if (response.status == 204) return response;
    if (!response.ok) {

        const err = await response.json();
        throw err;
    }
    //maybe it would be better function to return the response and not the final result;
    //const result = await response.json();
    return response;
}

const pathsEnum = {

    monuments: 'Monuments'
}

const methodsEnum = {

    GET: get,
    POST: post,
    PUT: put,
    DELETE: del,
    PATCH: patch
}

function get(url) {

    const headerData = {};
    if (localStorage.getItem('userData')) {
        headerData['X-Authorization'] = JSON.parse(localStorage.getItem('userData')).token;
    }
    return request('GET', url, headerData);
}

function post(url, body) {

    const headerData = {};
    if (localStorage.getItem('userData')) {
        headerData['X-Authorization'] = JSON.parse(localStorage.getItem('userData')).token;
    }

    return request('POST', url, headerData, body);
}

function put(url, body) {
    const headerData = {};

    if (localStorage.getItem('userData')) {
        headerData['X-Authorization'] = JSON.parse(localStorage.getItem('userData')).token;
    }
    return request(methodsEnum.PUT, url, headerData, body);
}
function del(url) {
    const headerData = {};

    if (localStorage.getItem('userData')) {
        headerData['X-Authorization'] = JSON.parse(localStorage.getItem('userData')).token;
    }
    return request('DELETE', url, headerData);
}
function patch(url, body) {
    const headerData = {};
    if (localStorage.getItem('userData')) {
        headerData['X-Authorization'] = JSON.parse(localStorage.getItem('userData')).token; 
    }
    return request('PATCH', url, headerData, body);
}

function hello(){


}


export {

    get, post, put, del, patch, pathsEnum, methodsEnum
}