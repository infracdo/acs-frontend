import axios from "axios";

export default axios.create({
  baseURL: "https://192.168.32.21",
  headers: {
    "Content-type": "application/json",
  }
});
