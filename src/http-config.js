import axios from "axios";


export default axios.create({
  baseURL: "https://acsbe-sbx.dataconnect.com.ph",
  headers: {
    "Content-type": "application/json",
  }
});
