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
axiosInstance.defaults.headers['Authorization'] = ''



// origin
// JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwMzgxNjU1LCJpYXQiOjE2OTg4NDU2NTUsImp0aSI6IjMyMGMyMTRjMTdkYjRlMmFiZTExNjcwNmJhMGMxMjJlIiwidXNlcl9pZCI6IjhjMzRmM2NjLThkMjYtNDM5MS04ODUxLTI0MjllNGIyMzQwOSJ9.Pl486V3GOMjlsjJIHnYQRr_RRP_G2WjvprSkgTXb9VA