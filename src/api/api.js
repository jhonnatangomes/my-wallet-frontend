import axios from "axios";

const URL_API = "http://localhost:4000";

function signUp(body) {
    return axios.get(`${URL_API}/sign-up`, body);
}

function getEntries(config) {
    return axios.get(`${URL_API}/entries`, config);
}

function getFunds(config) {
    return axios.get(`${URL_API}/entries/funds`, config);
}

function postEntry(body) {
    return axios.post(`${URL_API}/entries`, body);
}

export { signUp, getEntries, getFunds, postEntry };
