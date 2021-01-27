import axios from 'axios';

const instance = axios.create({
    baseURL : "https://react-burger-bb2f3-default-rtdb.firebaseio.com/"
})

export default instance;