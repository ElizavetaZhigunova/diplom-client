import axios from 'axios';

export const addNewAd = async(name, photo, category, price, priceDay, priceWeek, priceMonth, city, address) => {
    try {
        const response = await axios.post(`http://localhost:5000/addNew`, {
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
        alert("Error catch")
    }
}