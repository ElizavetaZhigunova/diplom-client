import axios from 'axios';

export const createAd = async({token, name, photo, category, price, priceDay, priceWeek, priceMonth, city, address}) => {
    try {
        
        const response = await axios.post(`http://localhost:5000/AddNew`, {
            token,
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
        alert("ошибка в блоке catch", error)
    }
}



