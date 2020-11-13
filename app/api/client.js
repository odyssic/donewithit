import { create } from "apisauce";

const apiClient = create({
    baseURL: "http://192.168.0.213:9000/api",
    port: 9000
});

export default apiClient;