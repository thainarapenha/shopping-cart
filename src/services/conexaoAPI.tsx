import axios from "axios";

export const conexaoAPI = axios.create({
    baseURL: "https://fakestoreapi.com"
});