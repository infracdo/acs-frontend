import axios from "axios";

export default axios.create({
  baseURL: "http://10.160.0.52:7547",
  headers: {
    "Content-type": "application/json",
  }
});
