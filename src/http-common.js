import axios from "axios";

export default axios.create({
  baseURL: "http://202.60.10.89:8084/devices",
  headers: {
    "Content-type": "application/json",
  }
});
