import axios from "axios";


export default axios.create({
  baseURL: "https://acs-be.dataconnect.com.ph",
  headers: {
    "Content-type": "application/json",
  }
});
