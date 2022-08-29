import axios from "axios";
import { setUsers } from "../reducers/GetUsersReducer";

export function getUsers() {
    return async dispatch => {
        try {
            const response = await axios.get(`https://reqres.in/api/users`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            console.log("Get users list: ", response.data)
            dispatch(setUsers(response.data))
        } catch (error) {
            console.log(error.response.data.error);
        }
    }
}

export function getSingleUser(id) {
    return async dispatch => {
        try {
            const response = await axios.get(`https://reqres.in/api/users/${id}`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(setUsers(response.data))
        } catch (error) {
            console.log(error.response.data.error);
        }
    }
}