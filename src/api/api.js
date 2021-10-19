import axios from "axios";

const URL_API = "localhost:4000";

function postEntry(body) {
    axios
        .post(`http://${URL_API}/deposits`, body)
        .then(() => console.log("Salvou a entrada"));
}

export { postEntry };
