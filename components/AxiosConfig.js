import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fitness-app-bf0a6.firebaseio.com/'
});

export default instance;