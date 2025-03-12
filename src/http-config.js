import axios from "axios";


export default axios.create({
  baseURL: "https://acs-backend.k8s.apolloglobal.net",
  headers: {
    "Content-type": "application/json",
  }
});
