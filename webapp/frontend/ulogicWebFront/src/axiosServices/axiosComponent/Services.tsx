import axios from "axios";
export const Services = axios.create({ baseURL: "http://localhost:8081/" });