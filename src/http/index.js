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
export const logout = (data, success, failure) => {
    api.post('/logout', data)
        .then((res) => { success(res) })
        .catch((err) => { failure(err) })
}


//interceptors  (type of middlewares between req and res)
api
    .interceptors
    .response
    .use(
        (config) => {
            return config;      //if response status is 2xx i.e. sucesss
        },
        async (err) => {        //if response status is failure
            const originalRequest = err.config;

            if (err.response.status === 401 && originalRequest && !originalRequest.isRetry) {
                originalRequest.isRetry = true;

                try {
                    await axios.get(`${process.env.REACT_APP_API_URL}/refresh`, {
                        withCredentials: true
                    })

                    return api.request(originalRequest)
                } catch (error) {
                    console.log(error.message);
                }
            }

            throw err;
        })


export default api;