import axios from "axios";


export default axios.create({
  baseURL: "http://192.168.90.101:7547",
  headers: {
    "Content-type": "application/json",
  }
});
