import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://192.168.0.6:5000'
});

export default instance;
