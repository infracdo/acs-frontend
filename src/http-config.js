import axios from "axios";


export default axios.create({
  baseURL: "https://acs-cdo1.k8s.apolloglobal.net",
  headers: {
    "Content-type": "application/json",
  }
});
