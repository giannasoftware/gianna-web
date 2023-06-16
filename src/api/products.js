import axios from "axios";
import { apiSettings } from "@/api_config";

export default {
  async getProducts(limit) {
    // const url = limit
    //   ? apiSettings.baseURL + `products?limit=${limit}`
    //   : apiSettings.baseURL + "products";

    // const url = apiSettings.baseURL + "products";

    let items = [];

    try {
      const results = await axios.get(
        "https://mocki.io/v1/5f8cbde4-bb11-4435-8d68-f43ea2527f6f"
      );

      if (results.status !== 200) {
        throw Error("no data available");
      }

      results.data.filter((item) => {
        if (item.category === "men's clothing") {
          items.push(item);
        }
      });
    } catch (error) {}

    return items;
  },

  async getProduct(id) {
    // const result = await axios.get(`${apiSettings.baseURL}/products/${id}`);
    
    id = parseInt(id);
    let item = {};

    try {
      const result = await axios.get(
        "https://mocki.io/v1/5f8cbde4-bb11-4435-8d68-f43ea2527f6f"
      );

      if (result.status !== 200) {
        throw Error("an error occur");
      }

      result.data.filter((it) => {
        if(it.id == id)
            Object.assign(item, it)

      });
    } catch (error) {
        console.log(error);
    }

    return item;
  },
};
