import axios from "axios";

const URL_API = "http://localhost:4000";

function getEntries(config) {
    return axios.get(`${URL_API}/entries`, config);
}

function postEntry(body) {
    return axios
        .post(`${URL_API}/entries`, body)
        .catch((err) => console.log(err.response));
}

export { getEntries, postEntry };
