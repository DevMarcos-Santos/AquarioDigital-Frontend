import axios from "axios";

export const peixelandia_api = axios.create({
    baseURL: "http://localhost:8080"
});