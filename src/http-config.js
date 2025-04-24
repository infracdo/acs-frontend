import axios from "axios";


export default axios.create({
  baseURL: "https://acs-zeep-be-sbx.apolloglobal.net",
  headers: {
    "Content-type": "application/json",
  }
});
