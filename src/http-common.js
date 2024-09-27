import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:7547",
  headers: {
    "Content-type": "application/json",
  }
});
