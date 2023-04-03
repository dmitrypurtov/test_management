import axios from "axios";

export default abstract class BaseApiClient {
  client = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });
}