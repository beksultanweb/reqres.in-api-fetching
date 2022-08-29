import axios from 'axios'
import { setUser } from '../reducers/UserReducer'

export const registration = async (email, password) => {
    try {
        const response = await axios.post(`https://reqres.in/api/register`, JSON.stringify({
            email,
            password
        }),
        {
            // {},
            headers: { 'Content-Type': 'application/json' },
            withCredentials: false
        })
        localStorage.setItem("token", response.data.token)
        console.log(response.data)
    } catch (error) {
        console.log(error.response.data.error);
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`https://reqres.in/api/login`, JSON.stringify({
                email,
                password
            }),
            {
                // {},
                headers: { 'Content-Type': 'application/json' },
                withCredentials: false
            })
            console.log(response);
            dispatch(setUser(response.data))
            localStorage.setItem("token", response.data.token)
            // console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    }
}

// export const logout = async () => {
//     try {
//         const response = await axios.post(`https://reqres.in/api/logout`,
//         {
//             headers: { 'Content-Type': 'application/json' },
//             withCredentials: false
//         })
//         localStorage.removeItem("token", response.data.token)
//     } catch (error) {
//         console.log(error);
//     }
// }