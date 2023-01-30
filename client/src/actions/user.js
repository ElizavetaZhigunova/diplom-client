import axios from 'axios';
import { setUser } from '../reducers/userReducer';

export const registration = async(name, lastname, email, password) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
        name,
        lastname,
        email,
        password
        })
        alert(response.data.message)
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const login = (email, password) => {
    return async dispatch => {
       try {
        const response = await axios.post(`http://localhost:5000/api/auth/login`, {
        email,
        password
        })
        dispatch(setUser(response.data.user))
        localStorage.setItem('token', response.data.token)
    } catch (error) {
        alert(error.response.data.message)
    } 
    }
    
}