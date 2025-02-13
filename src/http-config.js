import axios from "axios";


export default axios.create({
  baseURL: "http://10.244.2.41:7547",
  headers: {
    "Content-type": "application/json",
  }
});
