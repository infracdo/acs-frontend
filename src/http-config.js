import axios from "axios";


export default axios.create({
  baseURL: "http://10.244.2.236:7547",
  headers: {
    "Content-type": "application/json",
  }
});
