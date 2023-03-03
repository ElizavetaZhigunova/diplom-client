import axios from 'axios';

export const addNewAd = async(idUser, name, photo, category, price, priceDay, priceWeek, priceMonth, city, address) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
        idUser,
        name,
        photo,
        category,
        price,
        priceDay,
        priceWeek,
        priceMonth,
        city,
        address
        })
        alert(response.data.message)
    } catch (error) {
        alert(error.response.data.message)
    }
}