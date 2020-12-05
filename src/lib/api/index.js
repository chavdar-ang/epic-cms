import axios from "axios";

const api = async (url) => {
    try {
        return await axios.get(url);
    } catch (error) {
        console.log(error);
    }
}

export default api;