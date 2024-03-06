import axios from "axios";
axios.defaults.baseURL = 'https://codinto-original-api.codintofuture.ir/';

export const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    }
});
axiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
    return response;
},async (error) => {
    return Promise.reject(error);
})
// axiosInstance.defaults.headers['Authorization'] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwMzg0MDU1LCJpYXQiOjE2OTg4NDgwNTUsImp0aSI6IjFhNzE3MjUzZDQzNzQ5YjJhYWM5ODgwOTE5ZTExZjQxIiwidXNlcl9pZCI6IjdjMDNhYzNlLTkwM2MtNDdjYy04ZTczLTQxNTYxNDVlOWQ3ZiJ9.SlfPZ_2cXF0Q4Lh-8hdYSaAFTernZwTC6i2rQhlXMgU'



// origin
// JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwMzgxNjU1LCJpYXQiOjE2OTg4NDU2NTUsImp0aSI6IjMyMGMyMTRjMTdkYjRlMmFiZTExNjcwNmJhMGMxMjJlIiwidXNlcl9pZCI6IjhjMzRmM2NjLThkMjYtNDM5MS04ODUxLTI0MjllNGIyMzQwOSJ9.Pl486V3GOMjlsjJIHnYQRr_RRP_G2WjvprSkgTXb9VA