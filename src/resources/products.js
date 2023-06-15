import { apiSettings } from "@/api/config";
import axios from "axios";

export default {
  async getProduct() {
    let result = await axios.get('https://fakestoreapi.com/products?limit=6')

    return result.data;
  },
};
