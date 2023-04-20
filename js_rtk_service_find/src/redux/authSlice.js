import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    userData: null
}

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        // TODO Burayı doldur
        login: (state, action) => {
            console.log('>> Login olundu', action)

            state.token = action.payload.token
            state.userData = action.payload.userData
        },
        logout: (state) => {
            state.token = null
            state.userData = null
        }
    }
})


export const { login, logout } = authSlice.actions
export default authSlice.reducer

