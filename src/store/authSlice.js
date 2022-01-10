import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
    user: null,
    otp: {
        phone: '',
        hash: ''
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            const { user } = action.payload;   //jab is reducer ko import kr k call krenge aur usme data pass krenge, toh voh data payload main store hojaega
            state.user = user;
            state.isAuth = true
        },
        setOtp: (state, action) => {
            const { phone, hash } = action.payload;
            state.otp.phone = phone;
            state.otp.hash = hash
        }
    }
})

export const { setAuth, setOtp } = authSlice.actions;

export default authSlice.reducer