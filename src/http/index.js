import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    withCredentials: true
})

export const sendOtp = (data, success, failure) => {
    api.post('/send-otp', data)
        .then((res) => { success(res) })
        .catch((err) => { failure(err) })
}

export const verifyOtp = (data, success, failure) => {
    api.post('/verify-otp', data)
        .then((res) => { success(res) })
        .catch((err) => { failure(err) })
}

export const activate = (data, success, failure) => {
    api.post('/activate', data)
        .then((res) => { success(res) })
        .catch((err) => { failure(err) })
}


export default api;