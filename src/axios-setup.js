import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://wishlist-5ba75.firebaseio.com/'
});

export default instance;