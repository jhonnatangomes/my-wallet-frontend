import axios from 'axios';

const URL_API = process.env.REACT_APP_BASE_URL;

console.log(URL_API);

function signUp(body) {
    return axios.post(`${URL_API}/sign-up`, body);
}

function signIn(body) {
    return axios.post(`${URL_API}/sign-in`, body);
}

function logout(config) {
    return axios.post(`${URL_API}/logout`, {}, config);
}

function checkUser(config) {
    return axios.post(`${URL_API}/user`, {}, config);
}

function getEntries(config) {
    return axios.get(`${URL_API}/entries`, config);
}

function getFunds(config) {
    return axios.get(`${URL_API}/entries/funds`, config);
}

function postEntry(body, config) {
    return axios.post(`${URL_API}/entries`, body, config);
}

export { signUp, signIn, logout, checkUser, getEntries, getFunds, postEntry };
