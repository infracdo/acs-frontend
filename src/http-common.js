import axios from 'axios';

export default axios.create({
  baseURL: 'https://acsbe-test.dataconnect.com.ph',
  headers: {
    'Content-type': 'application/json',
  },
});
