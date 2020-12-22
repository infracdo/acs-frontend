import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.90.11:8084/devices",
  headers: {
    "Content-type": "application/json",
  }
});
