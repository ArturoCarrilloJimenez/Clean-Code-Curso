// Hay que agregar la dependencia de axios ```yarn add axios```
import axios from "axios";

export class HttpClient {
  async get(url: string) {
    const { data } = await axios.get(url);
    return data;
  }
}
