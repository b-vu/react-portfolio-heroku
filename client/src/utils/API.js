import axios from "axios";

export default {
    sendMessage: message => {
        return axios.post("/api/message", message);
    }
}