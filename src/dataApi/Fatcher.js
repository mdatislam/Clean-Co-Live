import axios from "axios";

const fatcher = axios.create({
  baseURL: "https://enigmatic-shore-65172.herokuapp.com",
});
export default fatcher;
