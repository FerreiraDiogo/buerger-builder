import axios from "axios"

const axiosInstance = axios.create({
    baseURL:"https://buerger-builder.firebaseio.com/",
});


export default axiosInstance;