import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.32.18:7547",
  headers: {
    "Content-type": "application/json",
  }
});
