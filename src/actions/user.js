import axios from 'axios';
import { setUser } from '../reducers/userReducer';

export const registration = async(name, lastname, phone, email, password, ) => {
    try {
        console.log(name, '\\' , lastname, '\\' , email, '\\' , password, '\\' , phone)
        const response = await axios.post(`http://localhost:5000/registration`, {
        name,
        lastname,
        phone,
        email,
        password
        })
        alert(response.data.message)
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const login = (email, password, callback) => {
    return async dispatch => {
       try {
        const response = await axios.post(`http://localhost:5000/login`, {
        email,
        password
        })
        dispatch(setUser(response.data.user))
        localStorage.setItem('token', response.data.token)
        callback()
    } catch (error) {
        alert(error.response.data.message)
    } 
    }
    
}

export const auth = () => {
    return async dispatch => {
       try {
        const response = await axios.get(`http://localhost:5000/auth`, 
            {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
        )
        dispatch(setUser(response.data.user))
        localStorage.setItem('token', response.data.token)
    } catch (error) {
        alert(error.response.data.message)
        localStorage.removeItem('token')
    } 
    }
    
}