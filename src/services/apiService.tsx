import axios from "axios";

export const peixelandia_api = axios.create({
    baseURL: "https://aquariodigital.online:18820"
});