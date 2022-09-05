import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "f6ec848e5d898c9dbe6d4816da8862d8",
        language: "ko-KR",
    },
});

export default instance;