import axios from "axios";

export const bookBaseUrl = axios.create({
    baseURL : "http://localhost:1000/book", 
});